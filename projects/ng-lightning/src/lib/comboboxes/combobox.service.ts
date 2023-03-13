import {EventEmitter, Injectable, Input} from '@angular/core';
import {addOptionToSelection, isOptionSelected, uniqueId} from "../util/util";
import {NglComboboxOption} from "./combobox-option";
import {ActiveDescendantKeyManager} from "@angular/cdk/a11y";
import {Subject} from "rxjs";

export interface NglComboboxOptionItem {
  value: number | string;
  label?: string;
  disabled?: boolean;
}

@Injectable()
export class NglComboboxService {

  openChange;

  selectionChange;

  variant: 'base' | 'lookup' = 'base';

  open = false;
  multiple = false;

  closeOnSelection = true;

  /** Manages active item in option list based on key events. */
  keyManager?: ActiveDescendantKeyManager<NglComboboxOption> | null;
  activeDescendant = new Subject<string>();
  selection: any;

  private _data?: NglComboboxOptionItem[] | null;


  get hasLookupSingleSelection() {
    return this.isLookup && !this.multiple && this.selectedOptions.length > 0;
  }

  get isLookup(): boolean {
    return this.variant === 'lookup';
  }

  readonly uid = uniqueId('combobox');

  onOptionSelection(option: NglComboboxOption | null = this.activeOption) {
    if (option) {
      const selection = addOptionToSelection(option.value, this.selection, this.multiple);
      this.selectionChange.emit(selection);
      if (this.closeOnSelection) {
        this.close();
      }
    }
  }

  close() {
    this.openChange.emit(false);
  }

  get activeOption(): NglComboboxOption | null {
    return this.keyManager ? this.keyManager.activeItem : null;
  }

  get selectedOptions(): NglComboboxOptionItem[] {
    return this.data ? this.data.filter(d => this.isSelected(d.value)) : [];
  }

  /**
   * Check whether value is currently selected.
   *
   * @param value The value in test, whether is (part of) selection or not
   */
  isSelected(value: any): boolean {
    return isOptionSelected(value, this.selection, this.multiple);
  }

  set data(data: any[]) {
    this._data = (data || []).map((d) => {
      if (typeof d === 'string') {
        // Support array of strings as options, by mapping to NglComboboxOptionItem
        return { value: d, label: d };
      } else if (!d.label) {
        // Use `value` if missing `label`
        return { ...d, label: d.value };
      }
      return d;
    });
  }
  get data() {
    return this._data as any[];
  }
}
