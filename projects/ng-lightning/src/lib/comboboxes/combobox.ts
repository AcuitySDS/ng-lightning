import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, TemplateRef, OnDestroy,
         ViewChildren, QueryList, SimpleChanges, ContentChild, ViewChild, NgZone, ElementRef, ChangeDetectorRef,
         Optional, Inject, HostBinding, AfterContentInit } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  ConnectionPositionPair,
  CdkOverlayOrigin,
  CdkConnectedOverlay,
  CloseScrollStrategy,
  ScrollStrategyOptions, ScrollStrategy
} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { DEFAULT_DROPDOWN_POSITIONS } from '../util/overlay-position';
import { uniqueId, isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean, InputNumber, toBoolean } from '../util/convert';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { NglComboboxService } from './combobox.service';
import { NglComboboxConfig, NGL_COMBOBOX_CONFIG } from './config';



@Component({
  selector: 'ngl-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './combobox.html',
  host: {
    'class.slds-form-element': 'true',
  },
  providers: [ NglComboboxService ],
})
export class NglCombobox implements OnChanges, OnDestroy, AfterContentInit {

  private activeDescendantSubscription: any;
  scrollStrategy: ScrollStrategy;

  @Input() set variant(value) {this.service.variant = value};

  @Input() label?: string | TemplateRef<any>;


  @Input() @InputBoolean() set open(value) {this.service.open = value;}

  @Output() openChange = new EventEmitter<boolean>();

  @Input() set selection(value) {this.service.selection = value};

  @Output() selectionChange = new EventEmitter();

  @Input() @InputBoolean() set multiple(value) { this.service.multiple = value; }

  @Input() @InputNumber() visibleLength: 5 | 7 | 10 = 5;

  @ContentChild(NglComboboxInput, { static: true }) inputEl?: NglComboboxInput;

  @Input() @InputBoolean() loading?: boolean;

  @Input() @InputBoolean() loadingMore?: boolean;

  @Input() @InputBoolean() set closeOnSelection(value) {this.service.closeOnSelection = value;}

  /**
   * Text added to loading spinner.
   */
  @Input() loadingLabel: string;

  /**
   * Text message that renders when no matches found.
   */
  @Input() noOptionsFound: string;

  /**
   * Text for removing single selected option.
   */
  @Input() removeSelectedLabel: string;

  @ViewChildren(NglComboboxOption) readonly options?: QueryList<NglComboboxOption>;

  @HostBinding('class.slds-has-error') hasErrors = false;

  @Input('options') set data(data: any[]) {
    this.service.data = data;
  }
  get data() {
    return this.service.data;
  }

  @ViewChild('overlayOrigin', { static: true }) overlayOrigin?: CdkOverlayOrigin;

  @ViewChild('cdkOverlay') cdkOverlay?: CdkConnectedOverlay;

  @ViewChild('dropdown') dropdownElementRef?: ElementRef;

  overlayWidth = 0;

  overlayPositions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS['left']];



  private optionChangesSubscription?: Subscription | null;

  private ɵRequiredSubscription?: Subscription;

  private keyboardSubscription?: Subscription | null;

  required: boolean;

  @Input() selectionValueFn = (selection: string[]): string => {
    if (selection.length > 0) {
      if (this.service.multiple && this.service.isLookup) {
        return '';
      }
      return selection.length === 1 ? selection[0] : `${selection.length} options selected`;
    }
    return '';
  }









  constructor(@Optional() @Inject(NGL_COMBOBOX_CONFIG) defaultConfig: NglComboboxConfig,
              private ngZone: NgZone,
              private cd: ChangeDetectorRef,
              private service: NglComboboxService,
              private sso: ScrollStrategyOptions
  ) {
    const config = { ...new NglComboboxConfig(), ...defaultConfig };
    this.loadingLabel = config.loadingLabel;
    this.noOptionsFound = config.noOptionsFound;
    this.removeSelectedLabel = config.removeSelectedLabel;

    //service.combobox = this;
    this.service.openChange = this.openChange;
    this.service.selectionChange = this.selectionChange;
    this.scrollStrategy = sso.close({threshold: 300});
  }

  ngAfterContentInit() {
    if (!this.inputEl) {
      throw Error(`[ng-lightning] Couldn't find an <input> with [nglCombobox] attribute inside NglCombobox`);
    }
    this.ɵRequiredSubscription = this.inputEl.ɵRequiredSubject.subscribe((required) => {
      this.required = required;
      this.cd.detectChanges();
    });
    this.activeDescendantSubscription = this.service.activeDescendant.subscribe(
      (uid: string) => this.inputEl.setAriaActiveDescendant(uid)
    );
    this.calculateErrors();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selection || (this.service.selection && changes.data)) {
      this.calculateDisplayValue();
    }
    setTimeout(() => this.calculateErrors(), 0);
  }

  onAttach() {
    // Same width as the trigger element
    this.overlayWidth = this.overlayOrigin?.elementRef.nativeElement.offsetWidth;
    this.cd.detectChanges();

    this.service.keyManager = this.options && new ActiveDescendantKeyManager(this.options).withWrap();

    // Activate selected item or first option
    const selectedOption = this.options?.find(o => o.selected);
    if (selectedOption) {
      this.service.keyManager?.setActiveItem(selectedOption);
    } else {
        this.service.keyManager?.setFirstItemActive();
    }

    // Listen to button presses if picklist to activate matching option
    this.keyboardSubscribe(this.service.variant === 'base');

    // When it is open we listen for option changes in order to fix active option and handle scroll
    this.optionChangesSubscription = this.options?.changes.subscribe(() => {

      const options = this.options?.toArray() || [];

      if (!this.service.activeOption || options.indexOf(this.service.activeOption) === -1) {
        if (this.service.isLookup && options.length === 0) {
          this.service.keyManager?.setActiveItem(null);
        } else {
          this.service.keyManager?.setFirstItemActive();
        }
      } else {
        this.service.activeOption.scrollIntoView();
      }

      this.updateMenuHeight();
    });

    this.updateMenuHeight();
  }

  get activeOption() {
    return this.service.activeOption;
  }
  onDetach() {
    if (this.service.open) {
      this.close();
      return;
    }

    // Clear aria-activedescendant when menu is closed
    this.inputEl?.setAriaActiveDescendant(null);

    this.detach();
  }

  trackByOption(_index: number, option: NglComboboxOption) {
    return option.value;
  }

  dropdownClass() {
    return {
      [`slds-dropdown_length-${this.visibleLength}`]: this.visibleLength > 0,
    };
  }

  inputIconRight() {
    return this.service.isLookup ? 'utility:search' : 'utility:down';
  }

  hasNoMatches() {
    return this.service.isLookup && this.data.length === 0 && !this.loadingMore;
  }



  // Trigger by clear button on Lookup
  onClearSelection() {
    this.selectionChange.emit(null);
    setTimeout(() => this.inputEl?.focus(), 0);
  }



  ngOnDestroy() {
    this.detach();
    this.ɵRequiredSubscription?.unsubscribe();
    this.activeDescendantSubscription?.unsubscribe();
  }

  close() {
    this.openChange.emit(false);
  }

  get hasLookupSingleSelection() {
    return this.service.hasLookupSingleSelection;
  }

  get open() {
    return this.service.open;
  }

  isSelected(value: any): boolean {
    return this.service.isSelected(value);
  }

  get uid() {
    return this.service.uid;
  }

  private detach() {
    this.keyboardSubscribe(false);
    this.service.keyManager = null;
    if (this.optionChangesSubscription) {
      this.optionChangesSubscription.unsubscribe();
      this.optionChangesSubscription = null;
    }
  }

  private calculateDisplayValue() {
    const value = this.selectionValueFn(this.service.selectedOptions.map(option => option.label || ''));
    this.inputEl?.setValue(value);
  }

  private keyboardSubscribe(listen: boolean) {
    if (this.keyboardSubscription) {
      this.keyboardSubscription.unsubscribe();
      this.keyboardSubscription = null;
    }

    if (listen && this.inputEl) {
      this.keyboardSubscription = this.inputEl.keyboardBuffer$.subscribe((pattern) => {
        if (this.options && this.service.keyManager) {

          pattern = pattern.toLocaleLowerCase();

          const options = this.options.toArray();

          const activeIndex = this.service.activeOption ? (this.service.keyManager.activeItemIndex || 0) + 1 : 0;
          for (let i = 0, n = options.length; i < n; i++) {
            const index = (activeIndex + i) % n;
            const option = options[index];
            if (!option.disabled && option.label.toLocaleLowerCase().substr(0, pattern.length) === pattern) {
              this.service.keyManager.setActiveItem(option);
              break;
            }
          }
        }
      });
    }
  }

  private updateMenuHeight() {
    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      if (this.cdkOverlay && this.dropdownElementRef) {
        const { overlayRef } = this.cdkOverlay;
        const height = this.dropdownElementRef.nativeElement.offsetHeight;
        overlayRef.updateSize({
          minHeight: height + 4,
        });
        overlayRef.updatePosition();
      }
    });
  }

  private calculateErrors() {
    if (this.required) {
      this.hasErrors = !toBoolean(this.service.selection);
    }
    this.cd.detectChanges();
  }
}
