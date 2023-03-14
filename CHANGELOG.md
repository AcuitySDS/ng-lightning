# 15.1.0 (2023-03-14)


### Bug Fixes

* **accordion:** correct button type tp prevent form submission ([9306d61](https://github.com/ng-lightning/ng-lightning/commit/9306d613c6b2c802f4d522a687438cd3294ac0e9)), closes [#505](https://github.com/ng-lightning/ng-lightning/issues/505)
* **alert/toast:** don't add `default` variant color on icon ([37815fc](https://github.com/ng-lightning/ng-lightning/commit/37815fc81459c80cc480640a1861fea9e7fcaf43))
* **app:** remove `@types/core-js` ([3c316a9](https://github.com/ng-lightning/ng-lightning/commit/3c316a913e591df927523284984d3d1d51685513)), closes [#265](https://github.com/ng-lightning/ng-lightning/issues/265) [#267](https://github.com/ng-lightning/ng-lightning/issues/267)
* **app:** remove `isRequired` decorator ([9053123](https://github.com/ng-lightning/ng-lightning/commit/9053123df68ecb11ce73ad64476922a2c2da3db8))
* **checkboxes:** support template as `error` ([3e63b41](https://github.com/ng-lightning/ng-lightning/commit/3e63b41db3e6a0b3e98a5f226e512ac356b96647))
* **checkboxes:** toggle should set `aria-describedby` on input element ([9ed081b](https://github.com/ng-lightning/ng-lightning/commit/9ed081b7ebdd194a70bf80cc3c65d8c1cf2cf84d)), closes [#465](https://github.com/ng-lightning/ng-lightning/issues/465)
* **checkoboxes:** support dynamic options ([6c11877](https://github.com/ng-lightning/ng-lightning/commit/6c11877f50e1c86881bdd42e9843aff1c96c4c74))
* **colorpicker:** display empty intial values as empty string in input ([7f183f7](https://github.com/ng-lightning/ng-lightning/commit/7f183f7d21324c0ac776c3dd7adacf57c52ccdcf))
* **combobox:** lookups stop selection of option when no matches closes [#575](https://github.com/ng-lightning/ng-lightning/issues/575) ([#576](https://github.com/ng-lightning/ng-lightning/issues/576)) ([85f6b31](https://github.com/ng-lightning/ng-lightning/commit/85f6b319c227a4d5fa2d1ba5ccce663bf8f4eade))
* **combobox:** single selections shouldn't be cleared upon re-selection ([b5655d3](https://github.com/ng-lightning/ng-lightning/commit/b5655d319fffb1b698a13f3057690eb9e9340c23)), closes [#507](https://github.com/ng-lightning/ng-lightning/issues/507) [#509](https://github.com/ng-lightning/ng-lightning/issues/509)
* **combobox:** stop updating input if there is no selection ([#558](https://github.com/ng-lightning/ng-lightning/issues/558)) ([43242c5](https://github.com/ng-lightning/ng-lightning/commit/43242c56fe5892ec188bbbc2ae5fc429597f94d3))
* **combobox:** update selection value when options change ([fe25ae4](https://github.com/ng-lightning/ng-lightning/commit/fe25ae4e11d5e2495b304d3e2a9b66f59584cefb))
* **comboboxes:** add accessibility attribute for disabled options ([eed7bcd](https://github.com/ng-lightning/ng-lightning/commit/eed7bcd9307e5fc08dd340812ed1c0b85c8f6859))
* **comboboxes:** hide menu if element is scrolled outside of view ([cbdbb72](https://github.com/ng-lightning/ng-lightning/commit/cbdbb721d0b5d161fd9abff243037f1fae0bf708))
* **comboboxes:** prevent close if clicking a non-option inside the dropdown menu ([7e1717c](https://github.com/ng-lightning/ng-lightning/commit/7e1717c0d8868d77d83f8931c93234524f873684)), closes [#472](https://github.com/ng-lightning/ng-lightning/issues/472)
* **config:** don’t try to unsubscribe if no subscription ([931496f](https://github.com/ng-lightning/ng-lightning/commit/931496f739d71021e5c93a3d6fbf6a831a6924aa)), closes [#270](https://github.com/ng-lightning/ng-lightning/issues/270) [#271](https://github.com/ng-lightning/ng-lightning/issues/271)
* **datatables:** correctly use `trackByKey` input ([ab754e7](https://github.com/ng-lightning/ng-lightning/commit/ab754e7a7837cd340cd78e99c28bc5eed6f86b2f)), closes [#268](https://github.com/ng-lightning/ng-lightning/issues/268) [#269](https://github.com/ng-lightning/ng-lightning/issues/269)
* **datatables:** safe unsubscription for column updates ([6e2a67b](https://github.com/ng-lightning/ng-lightning/commit/6e2a67bb567b6065207e8423c656f43fa72a7ff5))
* **datepicker:** add missing label on year to improve accessibility ([f703bff](https://github.com/ng-lightning/ng-lightning/commit/f703bffa3bed2d7df9ff4ddde7891d97135580cb)), closes [#388](https://github.com/ng-lightning/ng-lightning/issues/388)
* **datepicker:** correctly handle `firstDayOfWeek` as string attribute ([eab39df](https://github.com/ng-lightning/ng-lightning/commit/eab39df7acf593cdcb2e80da78b9f4e7c110a3a4))
* **datepicker:** handle when first day of week after first day of month ([3850150](https://github.com/ng-lightning/ng-lightning/commit/38501502c883fd62e0791ad4da7e04abb1be50fd))
* **datepickers:** correctly spell Thursday in `dayNamesLong` ([0171be4](https://github.com/ng-lightning/ng-lightning/commit/0171be47f843c6bb7afdcb1c525cc1f2365eaab3))
* **datepickers:** hide calendar if input is scrolled outside of view ([1c5e10f](https://github.com/ng-lightning/ng-lightning/commit/1c5e10ff07afd1d032afcee4a2ef603f96b23445))
* **datepickers:** move focus on keyboard navigation & mark only once as today ([c4dc7a6](https://github.com/ng-lightning/ng-lightning/commit/c4dc7a66b22fcc89b44d3a3a6a00ad5757c15646))
* **datepickers:** open the datepicker when a mouse user clicks on the input ([9a659d8](https://github.com/ng-lightning/ng-lightning/commit/9a659d88b45b2a91054173fa329afe4dbfc8cd0c))
* **datepickers:** prevent multiple input datepickers open at the same time ([38f363b](https://github.com/ng-lightning/ng-lightning/commit/38f363b8e5579bc73b611c3093c821d3adc8f0f7))
* **datepickers:** update input validity if `min`/`max` changes ([c4df4ff](https://github.com/ng-lightning/ng-lightning/commit/c4df4ff38398cbee7298a75981284d1947deae33))
* **dropdown:** sfae unsubscribe from open event ([330e66b](https://github.com/ng-lightning/ng-lightning/commit/330e66b92ad701e476eef274f31ecfd8f6e5b710))
* **file-upolad:** correcty validate file extensions on `accept` input ([170737e](https://github.com/ng-lightning/ng-lightning/commit/170737e3326568b6c459ef9b45248d67e9810799))
* **icons:** `slds-icon_container` shouldn't apply for `utility` icons and set `default` as default `variant` ([8cc0764](https://github.com/ng-lightning/ng-lightning/commit/8cc076473adb560e86668f9d2f94874275d5222f))
* **icons:** remove `xmlns:xlink` attribute from SVG ([5706cd5](https://github.com/ng-lightning/ng-lightning/commit/5706cd5ebfa2b59b5e4c62c34c48dff93c38e401))
* **input:** correctly handle error as "false" string ([7f03235](https://github.com/ng-lightning/ng-lightning/commit/7f0323509f920057aa17ebe6fba8fb9e9bd52c2f))
* **lookups:** prevent form submission on polymprhic selection ([78181d7](https://github.com/ng-lightning/ng-lightning/commit/78181d73626cffe701ce3433cac4f01d79b28062)), closes [#350](https://github.com/ng-lightning/ng-lightning/issues/350)
* **lookups:** turn autocomplete off for input ([7ce34b2](https://github.com/ng-lightning/ng-lightning/commit/7ce34b297c05ae64e7c61eb91373fbd691c01168)), closes [#348](https://github.com/ng-lightning/ng-lightning/issues/348)
* **modal:** remove stopPropagation on click events ([63b54cc](https://github.com/ng-lightning/ng-lightning/commit/63b54ccb50744aadc34af307b73bbc997b62733f))
* **modal:** use `cdkTrapFocus` to prevent user from tabbing away ([1c24ba8](https://github.com/ng-lightning/ng-lightning/commit/1c24ba8dc5f61cafe9502c50383ec63808ead32d))
* **modals:** add ARIA `describedby` for content ([392177d](https://github.com/ng-lightning/ng-lightning/commit/392177d6437f3a28ff4d787b91a3203771b2a2c1))
* **modals:** mark body as a scrollable container ([b780ec5](https://github.com/ng-lightning/ng-lightning/commit/b780ec5ae859ac994dd85abd18002a1ea81e2780)), closes [#478](https://github.com/ng-lightning/ng-lightning/issues/478)
* **modals:** render as CDK overlay to prevent stacking porblems ([f9f05da](https://github.com/ng-lightning/ng-lightning/commit/f9f05da5f100a4fdc096d8f38292a6c2fd8829ff))
* **package.json:** strict v9 Angular peer dependencies ([95025f7](https://github.com/ng-lightning/ng-lightning/commit/95025f7cb9e6a116cbc91d4cb3cb08da753ba461)), closes [#508](https://github.com/ng-lightning/ng-lightning/issues/508)
* **paginations:** remove neutral class on current page ([ab5bd47](https://github.com/ng-lightning/ng-lightning/commit/ab5bd47a58e4b0d4d76eae5a08de93a9b262772b)), closes [#325](https://github.com/ng-lightning/ng-lightning/issues/325)
* **paginations:** show correct `start` and `end` values when `current` is undefined ([655ba96](https://github.com/ng-lightning/ng-lightning/commit/655ba96a15312de1f5de1cd3f3344edd22f1951c))
* **picklist:** empty `filter` should filter based on value ([11832d2](https://github.com/ng-lightning/ng-lightning/commit/11832d2134fc09b222844a2bb2dcaada10e39fee)), closes [#309](https://github.com/ng-lightning/ng-lightning/issues/309)
* **picklist:** empty initial and handle falsy values of placeholder ([2ca807f](https://github.com/ng-lightning/ng-lightning/commit/2ca807f420b84053b8e35c2270aa66a2686ef36e))
* **pills:** remove unnecessary host classes ([649813f](https://github.com/ng-lightning/ng-lightning/commit/649813f1eb1fcc56d17c22f2211dc1633f9192b1))
* **popovers:** `nglInteractive` is handled as boolean ([01e4981](https://github.com/ng-lightning/ng-lightning/commit/01e49817b93e662bcbfe6febc0cb38ae262885fc))
* **popovers:** `nglPopoverBehavior` makes host focusable by default ([40e1d5b](https://github.com/ng-lightning/ng-lightning/commit/40e1d5b1046daf4cd67bf5f75dd86e760a32574e))
* **popovers:** position after popover view is initialized ([1259247](https://github.com/ng-lightning/ng-lightning/commit/125924799d790533ed8006404eebcbfcf8244b12)), closes [#251](https://github.com/ng-lightning/ng-lightning/issues/251)
* **popovers:** properly cleanup content passed as `TemplateRef` ([52687c9](https://github.com/ng-lightning/ng-lightning/commit/52687c9a63fc6347f7849890fcc0fb4f2d7a32be)), closes [#274](https://github.com/ng-lightning/ng-lightning/issues/274)
* **popovers:** remove comments from template output ([dee6ba2](https://github.com/ng-lightning/ng-lightning/commit/dee6ba214e61d30ed5c1e0420607a9ef43dfb3b4))
* **radio-group:** correctly render dynamic options ([2357b5a](https://github.com/ng-lightning/ng-lightning/commit/2357b5af7c0899424443a6c07612f4c93aee1a1d))
* **select:** support template as `error` ([967cdbf](https://github.com/ng-lightning/ng-lightning/commit/967cdbf2f263e27fc7763e27338bced81cf6cebf))
* **spinner:** do not add default size class when initialized with different one ([a81c75a](https://github.com/ng-lightning/ng-lightning/commit/a81c75a1e631fbf3b8f0aa94cc82581358148f1f))
* **tabs:** add `aria-controls` &`aria-labelledby` for accesibility ([d8d3d8a](https://github.com/ng-lightning/ng-lightning/commit/d8d3d8a0af12771f3f79a993455315d1e92a32f2))
* **tabs:** change class calculation for content element ([756c607](https://github.com/ng-lightning/ng-lightning/commit/756c6076992f9a4c9d861b3c8fe1e1b1e5cf1781))
* **tabs:** correct `tabindex` value for non selected header ([f87539b](https://github.com/ng-lightning/ng-lightning/commit/f87539b3d4e38c420a25a64d820820c030fa62fd))
* **tooltip:** fix interactive mode ([382a159](https://github.com/ng-lightning/ng-lightning/commit/382a1590315159cb99fd7b6ba59d972bf1d0956a)), closes [#528](https://github.com/ng-lightning/ng-lightning/issues/528)
* correctly export individual modules to avoid aot issues ([4986423](https://github.com/ng-lightning/ng-lightning/commit/498642370b60ddad2ca05287d0fceef44837e1c1))
* **app:** add `forRoot` to `NglModule` ([6426534](https://github.com/ng-lightning/ng-lightning/commit/64265345f421b64b905515f21096b130accf39fc)), closes [#228](https://github.com/ng-lightning/ng-lightning/issues/228)
* **app:** declare `@angular/*` as peer dependencies ([722cf23](https://github.com/ng-lightning/ng-lightning/commit/722cf232d9913c7a70bc59a720607071ab123f10))
* **app:** deprecate `ngl-icon-button` in favour of `ngl-icon` ([339f867](https://github.com/ng-lightning/ng-lightning/commit/339f86795e41b1318931c9cc8e3114611796c860)), closes [#70](https://github.com/ng-lightning/ng-lightning/issues/70)
* **app:** export INglDatatableSort ([d4e26dc](https://github.com/ng-lightning/ng-lightning/commit/d4e26dc970048a3d4dcf3eb7cb1727f60f10e79b)), closes [#147](https://github.com/ng-lightning/ng-lightning/issues/147)
* **app:** use `NGL_PRECOMPILE` for precompiled directives ([6a3ba50](https://github.com/ng-lightning/ng-lightning/commit/6a3ba505f1c865fcff3f5ecbfd1cda56c45486a1)), closes [#148](https://github.com/ng-lightning/ng-lightning/issues/148)
* **breadcrumbs:** support `routerLink` on each breadcrumb ([e978ed6](https://github.com/ng-lightning/ng-lightning/commit/e978ed6ba43fb55d581098b341acc8a9d0b633d5)), closes [#248](https://github.com/ng-lightning/ng-lightning/issues/248)
* **build:** define `ts-helpers` as dependency ([7a5bde3](https://github.com/ng-lightning/ng-lightning/commit/7a5bde3f6c211e7fd4b8244b5080ffa7410c30c1))
* **build:** import from `rxjs/Rx` to avoid SystemJS issues ([2cd7f96](https://github.com/ng-lightning/ng-lightning/commit/2cd7f96b3306f7b0a36660e52f4bd158329f534f)), closes [#80](https://github.com/ng-lightning/ng-lightning/issues/80)
* **build:** support and test IE11 ([b925469](https://github.com/ng-lightning/ng-lightning/commit/b925469c5a465354101cdcc21f6f8420ca9613be)), closes [#121](https://github.com/ng-lightning/ng-lightning/issues/121) [#163](https://github.com/ng-lightning/ng-lightning/issues/163)
* **buttons:** don't use default class when value is empty or not set ([66a8237](https://github.com/ng-lightning/ng-lightning/commit/66a82374ee97094324f67d071e4ed5bfc74d603b)), closes [#3](https://github.com/ng-lightning/ng-lightning/issues/3)
* **config:** remove `provideNglConfig` for injectable `NglConfig` ([47acd3d](https://github.com/ng-lightning/ng-lightning/commit/47acd3df1573996cd368e9c38d3b2352f48ef4a5)), closes [#218](https://github.com/ng-lightning/ng-lightning/issues/218)
* **datatables:** don't force `slds-truncate` on each cell ([3c3bcaa](https://github.com/ng-lightning/ng-lightning/commit/3c3bcaa6fea92cb358604dbf962425389635c939))
* **datatables:** only render cell templates when needed ([6041743](https://github.com/ng-lightning/ng-lightning/commit/60417431b0fbbb663ae600e3b4fa1ae56a3c3198)), closes [#149](https://github.com/ng-lightning/ng-lightning/issues/149)
* **demo:** properly highlight html language ([ebd8bdb](https://github.com/ng-lightning/ng-lightning/commit/ebd8bdbd4a9ec5d0b3414274f37915ef0722cdd2))
* **forms:** checkbox/radios have more accessible DOM structure ([22a2464](https://github.com/ng-lightning/ng-lightning/commit/22a2464b48d623d5a719b45ffaac115f6249b41a)), closes [#214](https://github.com/ng-lightning/ng-lightning/issues/214)
* **forms:** remove `nglForm` prefix from input attributes ([5e9f16a](https://github.com/ng-lightning/ng-lightning/commit/5e9f16a504ac5859c9852416219f6df66f80291f)), closes [#217](https://github.com/ng-lightning/ng-lightning/issues/217)
* **icons:** remove `default` as default color ([288e65b](https://github.com/ng-lightning/ng-lightning/commit/288e65b7d54a63257d3710741a6041676a85c5fd)), closes [#191](https://github.com/ng-lightning/ng-lightning/issues/191)
* **icons:** use `utility` as default category for `svg[nglIcon]` ([c4b7cfe](https://github.com/ng-lightning/ng-lightning/commit/c4b7cfe668847fc768574b6d1161238d3e319e30))
* **lookups:** correctly declare `debounce` as input instead of attribute ([170bcd1](https://github.com/ng-lightning/ng-lightning/commit/170bcd13c87edd1ef829a2953ce240e187ade2a4))
* **lookups:** don't render `<label>` element if empty ([c50572e](https://github.com/ng-lightning/ng-lightning/commit/c50572eccca2743ecbfe423305969e576bf75153)), closes [#233](https://github.com/ng-lightning/ng-lightning/issues/233)
* **menus:** don't close when inner element is clicked and removed from DOM ([5361f80](https://github.com/ng-lightning/ng-lightning/commit/5361f80a9b1106a9051c766b7b9373810b9c008f)), closes [#223](https://github.com/ng-lightning/ng-lightning/issues/223) [#224](https://github.com/ng-lightning/ng-lightning/issues/224)
* **modals:** simplify structure and correctly handle open state ([f87eeec](https://github.com/ng-lightning/ng-lightning/commit/f87eeece981c302958393c88316a44bb0bf08207)), closes [#168](https://github.com/ng-lightning/ng-lightning/issues/168)
* **modals:** use default change detection strategy ([3e6fd4b](https://github.com/ng-lightning/ng-lightning/commit/3e6fd4b35c63107a0133af44dfa01c6544ad0ecf)), closes [#197](https://github.com/ng-lightning/ng-lightning/issues/197)
* **NGL_CONFIG:** relative path for SVG to use application's `<base>` ([e465d69](https://github.com/ng-lightning/ng-lightning/commit/e465d6924fe3bf91d9b9047033060b118c14be6d))
* **NglBreadcrumbs:** make breadcrumbs markup compatible with v2.0 ([8377b5e](https://github.com/ng-lightning/ng-lightning/commit/8377b5e4f822d83340b1e13177013ce4a3092902))
* **NglBreadcrumbs:** support `aria-labelledby` for assistive text ([0167009](https://github.com/ng-lightning/ng-lightning/commit/01670096e7af4611b183b91c6d371df691951a2e))
* **nglButtonIcon:** default class is not removed ([77466b3](https://github.com/ng-lightning/ng-lightning/commit/77466b3d96b67cd132a63f9a5b3058ebde44e851)), closes [#22](https://github.com/ng-lightning/ng-lightning/issues/22) [#23](https://github.com/ng-lightning/ng-lightning/issues/23)
* **NglDatepicker:** input/output Date object instead of string ([aec4e07](https://github.com/ng-lightning/ng-lightning/commit/aec4e07f16d24b8a6f9178f56abd4238fa2cc7ad))
* **nglDropdown:** set class `slds-dropdown-trigger--click` ([421a8f4](https://github.com/ng-lightning/ng-lightning/commit/421a8f438bc36a6f8102315070a1e5552776ca6f)), closes [#37](https://github.com/ng-lightning/ng-lightning/issues/37)
* **NglDropdown:** apply picklist styles if used in conjunction with `nglPick` ([36302b2](https://github.com/ng-lightning/ng-lightning/commit/36302b2238ff6b541cf41ea5b7dfb6b91ebefee8)), closes [#64](https://github.com/ng-lightning/ng-lightning/issues/64)
* **NglFormElement:** don't let form directives leak on whole app ([4be0c3c](https://github.com/ng-lightning/ng-lightning/commit/4be0c3cba9144e6ca520e72852ee1b81f63a3ca7)), closes [#120](https://github.com/ng-lightning/ng-lightning/issues/120)
* **NglIcon:** make custom icons compatible with v2.0 ([d5bac96](https://github.com/ng-lightning/ng-lightning/commit/d5bac96e7386493a8503e05b543463aeb1765b53))
* **NglIcon:** provide a way to omit default text type ([9428d56](https://github.com/ng-lightning/ng-lightning/commit/9428d5617c3a7a8851fa81c5e169edfc19809cea)), closes [#58](https://github.com/ng-lightning/ng-lightning/issues/58) [#61](https://github.com/ng-lightning/ng-lightning/issues/61)
* **NglLookup:** make lookup markup compatible with v2.0 ([bc653dd](https://github.com/ng-lightning/ng-lightning/commit/bc653dda3de34e658855bcae1c62d30d95073d4f))
* **nglModal:** support `aria-labelledby` to the modal’s heading ([607a92e](https://github.com/ng-lightning/ng-lightning/commit/607a92ec63be66363ba172dfcdec751e79355e2e)), closes [#35](https://github.com/ng-lightning/ng-lightning/issues/35)
* **NglPagination:** add `trackBy` on page elements ([0491b1e](https://github.com/ng-lightning/ng-lightning/commit/0491b1eba5073d8edcb34fab888a9401df53e407)), closes [#98](https://github.com/ng-lightning/ng-lightning/issues/98)
* **NglPagination:** don't keep internal state of current page ([87eb763](https://github.com/ng-lightning/ng-lightning/commit/87eb7637a930a0c243cd80fdae3926e0fe9a14ed)), closes [#93](https://github.com/ng-lightning/ng-lightning/issues/93)
* **nglPick:** use `nglPick` instead of `selected` ([7549bb2](https://github.com/ng-lightning/ng-lightning/commit/7549bb2436b5d2e560e5b83f4e664ba206242e09))
* **NglPick:** change `activeClass` to `nglPickActiveClass` and support on `nglPick` ([9837f6f](https://github.com/ng-lightning/ng-lightning/commit/9837f6fb31e5fd5f53e633794e97e28c077dadea))
* **NglPill:** existence of `nglPillRemove` determines removability ([1095a26](https://github.com/ng-lightning/ng-lightning/commit/1095a2690ab809f11bdb08fc4fa5e6f70cd51caa)), closes [#63](https://github.com/ng-lightning/ng-lightning/issues/63)
* **NglPill:** make compatible with v2.0 ([d5f0434](https://github.com/ng-lightning/ng-lightning/commit/d5f043453e7e114d4369461b7bef92875c038bbc)), closes [#122](https://github.com/ng-lightning/ng-lightning/issues/122)
* **nglPillImage:** handle `ngl-icon` and `ngl-avatar` ([4be9e09](https://github.com/ng-lightning/ng-lightning/commit/4be9e093fa8a7a66bcb844ce1474605b81b279ed)), closes [#74](https://github.com/ng-lightning/ng-lightning/issues/74)
* **nglPopover:** position call happens after all layouts have finished ([8834564](https://github.com/ng-lightning/ng-lightning/commit/8834564605e3b89d6658b15601f32ac2b94df865)), closes [#33](https://github.com/ng-lightning/ng-lightning/issues/33)
* **NglPopover:** explicitly destroy popover when host is destroyed ([fb4f325](https://github.com/ng-lightning/ng-lightning/commit/fb4f3256991b65006bc19515cf0888b046667c4d)), closes [#111](https://github.com/ng-lightning/ng-lightning/issues/111)
* **NglPopover:** fix memory leak when hiding ([b869c03](https://github.com/ng-lightning/ng-lightning/commit/b869c03a034aaef15f21c93d14e4d084a0761976)), closes [#107](https://github.com/ng-lightning/ng-lightning/issues/107)
* **NglRating:** prevent icons from wrapping ([664e595](https://github.com/ng-lightning/ng-lightning/commit/664e5954ec09cc3bce3defe690ef19d64a301f50))
* **nglSpinner:** make container class configurable instead of required ([1175645](https://github.com/ng-lightning/ng-lightning/commit/1175645ad8edcf467ea9f98e514c886e11d94fa0)), closes [#32](https://github.com/ng-lightning/ng-lightning/issues/32)
* **NglTabs:** prevent default window scrolling on arrow keys press ([7cda810](https://github.com/ng-lightning/ng-lightning/commit/7cda810cd8986e4217c6eae3b9fa9d05c833c968)), closes [#43](https://github.com/ng-lightning/ng-lightning/issues/43)
* **notifications:** clear timeout when destroyed ([c91a20c](https://github.com/ng-lightning/ng-lightning/commit/c91a20c1f5b7198c8bbd38a735ca3088500b29e9)), closes [#237](https://github.com/ng-lightning/ng-lightning/issues/237)
* **pagination:** bound start page by total elements ([ee08318](https://github.com/ng-lightning/ng-lightning/commit/ee083189faef35c202ed6590e17b8f2dd929eee0)), closes [#178](https://github.com/ng-lightning/ng-lightning/issues/178)
* **pick:** emit on `nglOptionDestroyed` when a selected option is "destroyed" ([65546e9](https://github.com/ng-lightning/ng-lightning/commit/65546e9d1685923669d89d8a76705b44ff1dc520)), closes [#156](https://github.com/ng-lightning/ng-lightning/issues/156)
* **picklist:** convent filter to lowercase before compare ([17899ab](https://github.com/ng-lightning/ng-lightning/commit/17899ab2bccdc541d3a59769e902024f2eb71a82))
* **popover:** ensure that a position call happens after layouts have finished ([74e5ba7](https://github.com/ng-lightning/ng-lightning/commit/74e5ba758e31588d30fa67bac8eec9c25cec50ab))
* **popovers:** always run change detection on creation ([a5b54f9](https://github.com/ng-lightning/ng-lightning/commit/a5b54f9f2738765ff391c82fa2f9feb2c867b231)), closes [#134](https://github.com/ng-lightning/ng-lightning/issues/134)
* **popovers:** reposition generated popover after it's view initialized ([ae5a825](https://github.com/ng-lightning/ng-lightning/commit/ae5a825a5d2a596aeb15c37827e71d485e3c8b6c)), closes [#151](https://github.com/ng-lightning/ng-lightning/issues/151)
* **popovers:** specify absolute position with bigger specificity ([6c8c825](https://github.com/ng-lightning/ng-lightning/commit/6c8c82537d1fc1072c81de2a5e2d7dadf41dbe11))
* **util:** namespace automatically generated IDs ([3ca0956](https://github.com/ng-lightning/ng-lightning/commit/3ca0956abbb9380585961db3201b1f954f829619))


### chore

* **build:** distribute ESM with metadata and UMD bundle ([a52702f](https://github.com/ng-lightning/ng-lightning/commit/a52702fb4ac44f29cd06f44bf88f5d8d7fc4eae0)), closes [#239](https://github.com/ng-lightning/ng-lightning/issues/239)


### Code Refactoring

* **app:** use @InputBoolean for boolean inputs ([2440abf](https://github.com/ng-lightning/ng-lightning/commit/2440abf1f6b60d69117a511de449f7218c9ba982))
* **NglIcon:** move sprite definition into component from `NglConfig` ([62c3eec](https://github.com/ng-lightning/ng-lightning/commit/62c3eec5e3a30dc8fcc4e48b9c8e88769299814f))


### Features

* **accordion:** add accordion component ([214f9a4](https://github.com/ng-lightning/ng-lightning/commit/214f9a4d597a7cb60d9cda1298827442223da76d))
* **app:** add Combobox component ([9f424fd](https://github.com/ng-lightning/ng-lightning/commit/9f424fd7b77c0baea5f56b0b1e2499c008bdc845))
* **app:** add dynamic icons module ([1c4987c](https://github.com/ng-lightning/ng-lightning/commit/1c4987c3eb6e3181ac4693d8c145c38d35cb9ad1))
* **app:** add progress bar component ([5e40587](https://github.com/ng-lightning/ng-lightning/commit/5e40587d2cd36d8ee3e6161e93851a09bd787973))
* **app:** migrate button icons to LDS v2.8 ([1d191e1](https://github.com/ng-lightning/ng-lightning/commit/1d191e17644e63ac6cff5094a06cae2c51536099))
* **app:** migrate buttons to LDS v2.8 ([3da487b](https://github.com/ng-lightning/ng-lightning/commit/3da487b4bf482702536b5da25d6baad2fc81e4e6))
* **app:** migrate checkboxes to LDS v2.8 ([4a9a368](https://github.com/ng-lightning/ng-lightning/commit/4a9a368ef65305222c464218a41dd7d5fcd40aa5))
* **app:** migrate input to LDS v2.8 ([fc4613e](https://github.com/ng-lightning/ng-lightning/commit/fc4613e9652e98527a86912406e87f6ad1bf1442))
* **app:** migrate menus to LDS v2.8 ([2a4f3c0](https://github.com/ng-lightning/ng-lightning/commit/2a4f3c0e0ca2de83db215724a60cf5a030902664))
* **app:** migrate popovers to LDS v2.8 ([d5f12f9](https://github.com/ng-lightning/ng-lightning/commit/d5f12f9bce73e163f45dbadd5f8be8d5a30308a4))
* **app:** migrate radio groups to LDS v2.8 ([6439dc9](https://github.com/ng-lightning/ng-lightning/commit/6439dc9e9ea164f1132e7675aa25fbb035c774f9))
* **app:** migrate select to LDS v2.8 ([09c2aa0](https://github.com/ng-lightning/ng-lightning/commit/09c2aa0d3189dfee29eb0fc1b4a0cce411eb13b1))
* **app:** migrate stateful buttons to LDS v2.8 ([fec0947](https://github.com/ng-lightning/ng-lightning/commit/fec09478dde9a7e2c002c1ed891ea1c091cf7914))
* **app:** migrate textarea to LDS v2.8 ([d701792](https://github.com/ng-lightning/ng-lightning/commit/d70179214a158defbc3b4450fe91d56021ef239f))
* **app:** provide injection configuration tokens per component ([45fb789](https://github.com/ng-lightning/ng-lightning/commit/45fb78921d30b5c65d20999ebd1421b678108d21))
* **app:** support `isRequired` decorator ([8276160](https://github.com/ng-lightning/ng-lightning/commit/8276160fc573dc3d3d4e543852dfb94d55c44b40))
* **app:** support Angular v4 ([44b2c2a](https://github.com/ng-lightning/ng-lightning/commit/44b2c2a40b7149e6cd7e464a7b0e479aa1b28cc7)), closes [#328](https://github.com/ng-lightning/ng-lightning/issues/328) [#331](https://github.com/ng-lightning/ng-lightning/issues/331)
* **app:** support Angular v5 ([3008ded](https://github.com/ng-lightning/ng-lightning/commit/3008dedf53d5e305c1a5554b9cb482076671b1bc))
* **app:** support Angular v8 ([752eb14](https://github.com/ng-lightning/ng-lightning/commit/752eb144ed60d39b71f9faba41cc2c54f020a77e))
* **app:** support Angular v9 ([1ecd81f](https://github.com/ng-lightning/ng-lightning/commit/1ecd81f3617aa83d223965423a002d336d5832ad))
* **app:** support LDS v2.5 ([4399e1d](https://github.com/ng-lightning/ng-lightning/commit/4399e1d3ab13f281238774cc91b9820bbe2e6b93))
* **app:** support LDS v2.9 ([2bd5082](https://github.com/ng-lightning/ng-lightning/commit/2bd5082758d428f6cfd02789f5af9383a86dc8d9))
* **app:** update project to angular 12 ([510188f](https://github.com/ng-lightning/ng-lightning/commit/510188f38482352e2f5288c424bf8fc219fa74ff))
* **avatar:** migrate to LDS v2.5 ([bd400e2](https://github.com/ng-lightning/ng-lightning/commit/bd400e2b249a41ff3dd8d10a57281e21d4ee541d))
* **avatar:** support initials & fallback to initials if image fails to load ([c131c82](https://github.com/ng-lightning/ng-lightning/commit/c131c82d92a17592a5533c36d3d392dda8a8aefc))
* **badges:** migrate to LDS v2.5 ([5d74394](https://github.com/ng-lightning/ng-lightning/commit/5d7439414d826b89b836ec9cfc14ff4b595977f0)), closes [#366](https://github.com/ng-lightning/ng-lightning/issues/366)
* **breadcrumbs:** migrate to LDS v2.5 ([0a1aa20](https://github.com/ng-lightning/ng-lightning/commit/0a1aa200995f44abc96ad2278a9a209ad8b4466d))
* **build:** switch to Angular CLI library format ([d39d324](https://github.com/ng-lightning/ng-lightning/commit/d39d3246d29dab4160136bac9bc2bac2dca0641a))
* **buttonicons:** support extra classes for SVG element ([6fdaa1e](https://github.com/ng-lightning/ng-lightning/commit/6fdaa1eb5a7b3f8f1ab007b4efdbd3da40c5ed37))
* **carousel:** add carousel component ([4d49ee6](https://github.com/ng-lightning/ng-lightning/commit/4d49ee6d72c70ed8b073eda0ab093d9239a42dbc))
* **colorpicker:** add `<ngl-colorpicker>` component ([a5bdf27](https://github.com/ng-lightning/ng-lightning/commit/a5bdf27ac260cf043aa5f384905934b418190b92))
* **colorpicker:** support configuration ([aad87d8](https://github.com/ng-lightning/ng-lightning/commit/aad87d8dc2d2cf44623927ed419a13206ee6c12f))
* **colorpicker:** support input placeholder ([0a7b766](https://github.com/ng-lightning/ng-lightning/commit/0a7b766508d8019c7f7dc318ab0c1919dcb4e7ed))
* **combobox:** support custom labes & global configuration ([e11cc72](https://github.com/ng-lightning/ng-lightning/commit/e11cc72e1ab6c9ee71d14f2e471497bb6cea0b59)), closes [#511](https://github.com/ng-lightning/ng-lightning/issues/511)
* **datatables:** migrate to LDS v2.8 ([d3b1d48](https://github.com/ng-lightning/ng-lightning/commit/d3b1d4854a7a9c2fae6cf8267e7a103c40e6afa3))
* **datatables:** support custom header classes per column ([04c24f4](https://github.com/ng-lightning/ng-lightning/commit/04c24f4e8d1ba7e640aada7d12a11a13abf760bc)), closes [#299](https://github.com/ng-lightning/ng-lightning/issues/299) [#308](https://github.com/ng-lightning/ng-lightning/issues/308)
* **datepicker:** expose <input> to allow extra functionality ([2ca43e0](https://github.com/ng-lightning/ng-lightning/commit/2ca43e0bd1861edeab024a3b8713647e0ae444f7))
* **datepicker:** option to display the date pattern as placeholder of input ([9b71b8f](https://github.com/ng-lightning/ng-lightning/commit/9b71b8faa09187b7c74e1ace916c94eea3af12fd))
* support importing individual modules ([4c84883](https://github.com/ng-lightning/ng-lightning/commit/4c848836b7b790627a2f85c4ef8f8561ccfff45b))
* **comoboboxes:** render menu as overlay ([f4aa1b2](https://github.com/ng-lightning/ng-lightning/commit/f4aa1b20effeeacf3296b64799090be1c73067a6))
* **datecpickers:** support `min` and `max` dates ([a50719c](https://github.com/ng-lightning/ng-lightning/commit/a50719cd83d310bc51200b8356981167e887c7d6))
* **datepicker:** support custom first day of week ([990783b](https://github.com/ng-lightning/ng-lightning/commit/990783b7143a583b87ce866db7d6efcf703f5f58)), closes [#252](https://github.com/ng-lightning/ng-lightning/issues/252) [#255](https://github.com/ng-lightning/ng-lightning/issues/255)
* **datepickers:** add "Today", "Previous Month" and "Next Month" labels on configuration ([2bcedc1](https://github.com/ng-lightning/ng-lightning/commit/2bcedc18477215b12b73b8592dccfc6c406e5b85))
* **datepickers:** add datepicker input ([1137b99](https://github.com/ng-lightning/ng-lightning/commit/1137b99115bf990a3d4c5a26c9245f03212a14b1))
* **datepickers:** add inputs and configuration options for years range ([7251f2d](https://github.com/ng-lightning/ng-lightning/commit/7251f2d02dee8b32358c6beaf53d3efea7158f94))
* **datepickers:** add inputs for static text in templates ([d7d9bf8](https://github.com/ng-lightning/ng-lightning/commit/d7d9bf8573bf1b471b71eda51155b839366c44ab))
* **datepickers:** localized month/day names and first day of week & configurable `firstDayOfWeek ` ([a1487fc](https://github.com/ng-lightning/ng-lightning/commit/a1487fc5261ca2c4f05fd33f4f6dfdc7a886a079))
* **datepickers:** support custom disabled dates via input callback ([bf06068](https://github.com/ng-lightning/ng-lightning/commit/bf0606892203eb5ea7daf43250037ebe3c863ab7))
* **demo:** support AoT compilation ([b0f2f71](https://github.com/ng-lightning/ng-lightning/commit/b0f2f711a3a78665a63fd9382672e17d5957313b)), closes [#262](https://github.com/ng-lightning/ng-lightning/issues/262)
* **file-upload:** add `<ngl-file-upload>` component ([6832101](https://github.com/ng-lightning/ng-lightning/commit/6832101be8357d0aebcc333fef5a395689e8a79a))
* **files:** upgrade files ([220f870](https://github.com/ng-lightning/ng-lightning/commit/220f870f0df0d1d8681b88f7643cab860a5d4812))
* **forms:** add `fieldLevelHelpTooltip` input ([351ee63](https://github.com/ng-lightning/ng-lightning/commit/351ee63ad19b4ad891ef7535cc4757ad1d021f96)), closes [#374](https://github.com/ng-lightning/ng-lightning/issues/374)
* **forms:** add checkbox add button component ([f5527bb](https://github.com/ng-lightning/ng-lightning/commit/f5527bbebd17c37c2735302dc842f3fc60281870)), closes [#318](https://github.com/ng-lightning/ng-lightning/issues/318)
* **icons:** add waffle icon ([047f13d](https://github.com/ng-lightning/ng-lightning/commit/047f13d8c745a4312c3cc323f6bb95c6abbb6284)), closes [#281](https://github.com/ng-lightning/ng-lightning/issues/281)
* **icons:** migrate to slds v2.5.0 ([42ce810](https://github.com/ng-lightning/ng-lightning/commit/42ce81028adccc62bb06b9c356aef1947dbd4eec))
* **icons:** migrate waffle to NglDynamicIcon ([902d429](https://github.com/ng-lightning/ng-lightning/commit/902d429e0a09bf06dba62e165731e17a6155c5c8))
* **images:** add figure component ([b6f5ab5](https://github.com/ng-lightning/ng-lightning/commit/b6f5ab582bdc7459384f04a2208a296cacd6d9e3)), closes [#284](https://github.com/ng-lightning/ng-lightning/issues/284)
* **input:** support template as `error` ([264ff66](https://github.com/ng-lightning/ng-lightning/commit/264ff66ba9023ea2891b9a056704074eb3b8c9b3))
* **lookups:** support custom header ([edfb316](https://github.com/ng-lightning/ng-lightning/commit/edfb3161a1eb83f1f8c79edf28722f385aa6c12a)), closes [#136](https://github.com/ng-lightning/ng-lightning/issues/136) [#286](https://github.com/ng-lightning/ng-lightning/issues/286)
* **modal:** focus the previously focused element on close ([4777ee6](https://github.com/ng-lightning/ng-lightning/commit/4777ee632be2877cba7e6514ccada2237e072e89))
* **modal:** hide close button if `openChange` output is not binded ([ed76e79](https://github.com/ng-lightning/ng-lightning/commit/ed76e79a0190f1db9936db0a134a5e54e2776d88))
* **modals:** migrate to LDS v2.5 & add `closeButtonAssistiveText` ([d68f9a7](https://github.com/ng-lightning/ng-lightning/commit/d68f9a7854bd5350c16511919d9564078f1bb6da))
* **modals:** prevent body scrolling while open ([2a7e965](https://github.com/ng-lightning/ng-lightning/commit/2a7e96591a060c8c76aa1ba016efe66bab793cf0))
* **modals:** support `prompt` variation ([ad652e8](https://github.com/ng-lightning/ng-lightning/commit/ad652e84f9393a2dd42eff7bf2cf56df25bf4b9c))
* **modals:** support close when clicking outside ([49cbc06](https://github.com/ng-lightning/ng-lightning/commit/49cbc0691eca0bf465fa5a2fd67903005ee9bfde))
* **notifications:** migrate to LDS v2.5 & add `iconName` and `dismissible` ([7bc6bc6](https://github.com/ng-lightning/ng-lightning/commit/7bc6bc654eb7a51a94fc981eeb8b889a6da91f53))
* **paginations:** migrate to LDS v2.5 ([3aa9d55](https://github.com/ng-lightning/ng-lightning/commit/3aa9d559fc35093036ac52f466f2f13c6e52b628))
* **pills:** migrate to LDS v2.8 ([4603d22](https://github.com/ng-lightning/ng-lightning/commit/4603d22741b435a9c8dfd5022175467c522d99e3))
* **popovers:** add custom classes on host element with `nglPopoverClass` ([712e4a1](https://github.com/ng-lightning/ng-lightning/commit/712e4a1bb5b0c88db3b7ebf2dabe8860f578d168))
* **popovers:** control close button visibility from input ([7746137](https://github.com/ng-lightning/ng-lightning/commit/77461373b229514d4c0c6a2e0344f544a5302866))
* **popovers:** expose `position` method ([00b1a74](https://github.com/ng-lightning/ng-lightning/commit/00b1a74913b3502a6266cc908c18725a39758d26)), closes [#273](https://github.com/ng-lightning/ng-lightning/issues/273)
* **popovers:** support header and footer ([3b9c3bd](https://github.com/ng-lightning/ng-lightning/commit/3b9c3bd4218b50464295e44a1953adea0e94169e)), closes [#313](https://github.com/ng-lightning/ng-lightning/issues/313)
* **popovers:** support interaction with content ([cbef50d](https://github.com/ng-lightning/ng-lightning/commit/cbef50d13489193146a8dc12b5d438e45c540528)), closes [#254](https://github.com/ng-lightning/ng-lightning/issues/254)
* **popovers, tooltips:** support corner placements ([3b309fb](https://github.com/ng-lightning/ng-lightning/commit/3b309fb6cdde39089c5430cb63b7b41e6cebd3be))
* **popovers/tooltips:** support more complex placements ([678a955](https://github.com/ng-lightning/ng-lightning/commit/678a9556aeb41db631c14aa282476b79eeee70ea))
* **rating:** expose `fill` value in custom template icons ([931359c](https://github.com/ng-lightning/ng-lightning/commit/931359cc94bd1533e197c75381b050fb15065531)), closes [#247](https://github.com/ng-lightning/ng-lightning/issues/247)
* **rating:** support on/off color to be configurable ([f314e06](https://github.com/ng-lightning/ng-lightning/commit/f314e06f571c852c76ce77f67b506c7c66992c60)), closes [#253](https://github.com/ng-lightning/ng-lightning/issues/253)
* **ratings:** migrate to LDS v2.5 ([be681e0](https://github.com/ng-lightning/ng-lightning/commit/be681e0c94b4c16554f9f69bf501b41a64b62609))
* **ratings:** support fractional values ([6aba289](https://github.com/ng-lightning/ng-lightning/commit/6aba289a77a8e2f91397e6abb81f088275142305)), closes [#229](https://github.com/ng-lightning/ng-lightning/issues/229)
* **sections:** migrate to LDS v2.5 & add `collapsable` attribute ([9e66ab3](https://github.com/ng-lightning/ng-lightning/commit/9e66ab34e38101ec1f2b22c88c3a30b6b001f066)), closes [#368](https://github.com/ng-lightning/ng-lightning/issues/368)
* **slider:** add `<ngl-slider>` component ([6419506](https://github.com/ng-lightning/ng-lightning/commit/6419506e9a8245d06062296942b996b69bbb1696))
* **spinners:** migrate to LDS v2.5 & add `alternativeText` attribute ([d3de48f](https://github.com/ng-lightning/ng-lightning/commit/d3de48f534d5224704e94a959c37d80c167dfea1))
* **tabs:** configurable tab header capitalisation ([3513dbc](https://github.com/ng-lightning/ng-lightning/commit/3513dbc17aff47102d537b0a4e0445e2cc49d8ba)), closes [#285](https://github.com/ng-lightning/ng-lightning/issues/285)
* **tabs:** migrate to LDS v2.5 ([a96e707](https://github.com/ng-lightning/ng-lightning/commit/a96e7072e125090053cb92fe5f35a56a9aec8b4a))
* **tabs:** support non-lazy mode for every tab's contents ([93df6ca](https://github.com/ng-lightning/ng-lightning/commit/93df6caa5df7ca8d3d008563f9e96465d1a63968)), closes [#356](https://github.com/ng-lightning/ng-lightning/issues/356)
* **tooltips:** initial configuration support ([febe6df](https://github.com/ng-lightning/ng-lightning/commit/febe6df6532c619b2d6dbd233093950508a41252))
* **tooltips:** open/close without two-way binding to input ([01883ff](https://github.com/ng-lightning/ng-lightning/commit/01883ff7402ac0713a8e9d3145afedd8f72ebc51))
* **tooltips:** support delay option in global configuration ([a56a1a4](https://github.com/ng-lightning/ng-lightning/commit/a56a1a4f0164146f1a468668a896975d389fb882))
* export components to public API ([0dd6361](https://github.com/ng-lightning/ng-lightning/commit/0dd63613f2b07e905070453ddee8689cdeeb93fa))
* **app:** add avatar component ([6b24956](https://github.com/ng-lightning/ng-lightning/commit/6b249560a2a91a2c73598a647d8be82657044d69)), closes [#6](https://github.com/ng-lightning/ng-lightning/issues/6)
* **app:** add badge component ([e67741c](https://github.com/ng-lightning/ng-lightning/commit/e67741c81fa7560b2521163dac0aa87886437f2e))
* **app:** add breadcrumbs component ([ad11599](https://github.com/ng-lightning/ng-lightning/commit/ad11599e464962fad1989a027f30c481d2b6182e)), closes [#24](https://github.com/ng-lightning/ng-lightning/issues/24) [#34](https://github.com/ng-lightning/ng-lightning/issues/34)
* **app:** add button components ([4045bd3](https://github.com/ng-lightning/ng-lightning/commit/4045bd3dc3e4f8633de1462dff233b6dccd29f71))
* **app:** add button group component ([69ee128](https://github.com/ng-lightning/ng-lightning/commit/69ee128bbd80e9b0d81c245a10a9803428bcd29a))
* **app:** add checkbox form component ([b7a4673](https://github.com/ng-lightning/ng-lightning/commit/b7a467330a65caa7a1d2e1bd1b28165a25e1c636)), closes [#115](https://github.com/ng-lightning/ng-lightning/issues/115)
* **app:** add datatable component ([d5e56bc](https://github.com/ng-lightning/ng-lightning/commit/d5e56bc32e798fd510f55a18e8aff815a079cccd)), closes [#140](https://github.com/ng-lightning/ng-lightning/issues/140)
* **app:** add datepicker component ([c77afde](https://github.com/ng-lightning/ng-lightning/commit/c77afde5e9669772f8683e38168b7b119ec986a9)), closes [#86](https://github.com/ng-lightning/ng-lightning/issues/86)
* **app:** add dropdowns component ([7c6b155](https://github.com/ng-lightning/ng-lightning/commit/7c6b155dd07248a2b042907adf5e78965a8e1d3b)), closes [#12](https://github.com/ng-lightning/ng-lightning/issues/12)
* **app:** add icon component ([527b24f](https://github.com/ng-lightning/ng-lightning/commit/527b24ffda4423f235760868fe0bce9bb9d475b3))
* **app:** add input form component ([f159037](https://github.com/ng-lightning/ng-lightning/commit/f1590370c12d1a87cce25e5a5bbac205ea7b2909)), closes [#112](https://github.com/ng-lightning/ng-lightning/issues/112)
* **app:** add lookup component ([c4ea74e](https://github.com/ng-lightning/ng-lightning/commit/c4ea74e851619618794eec0a285fe11fba9697f4)), closes [#48](https://github.com/ng-lightning/ng-lightning/issues/48)
* **app:** add modal component ([c34019e](https://github.com/ng-lightning/ng-lightning/commit/c34019e6ea11eb85d0c341bf2ad18fa76eeb75d9))
* **app:** add notification component ([2b94946](https://github.com/ng-lightning/ng-lightning/commit/2b94946cc703cfe5539edfcd3c14590ecd24a4ac)), closes [#65](https://github.com/ng-lightning/ng-lightning/issues/65)
* **app:** add pagination component ([66d82cf](https://github.com/ng-lightning/ng-lightning/commit/66d82cf0adb14f6e86e8a96cce328eae92c46141))
* **app:** add pill component ([f922e09](https://github.com/ng-lightning/ng-lightning/commit/f922e098343c770554dd309165d97f3dbe3dcb93)), closes [#50](https://github.com/ng-lightning/ng-lightning/issues/50) [#59](https://github.com/ng-lightning/ng-lightning/issues/59)
* **app:** add popovers component ([9a9b8e5](https://github.com/ng-lightning/ng-lightning/commit/9a9b8e580618b4ca7e9324bd02197fe5859f59fd)), closes [#27](https://github.com/ng-lightning/ng-lightning/issues/27)
* **app:** add radio & checkbox group component ([5b306ec](https://github.com/ng-lightning/ng-lightning/commit/5b306ec67b6b876f7b41110f0051bda9e9247a7d)), closes [#117](https://github.com/ng-lightning/ng-lightning/issues/117)
* **app:** add rating component ([f2623cc](https://github.com/ng-lightning/ng-lightning/commit/f2623cc4e6348384bc2221d323e41b9a2a8947cf)), closes [#8](https://github.com/ng-lightning/ng-lightning/issues/8)
* **app:** add section component ([ffaf227](https://github.com/ng-lightning/ng-lightning/commit/ffaf227b33ec4d0ca5a2c511935be54b37b963d9))
* **app:** add select form component ([5489cb6](https://github.com/ng-lightning/ng-lightning/commit/5489cb6289d557e77ce2b3da15aa4638f78848a2)), closes [#114](https://github.com/ng-lightning/ng-lightning/issues/114)
* **app:** add tabs/tab components ([f2bbc41](https://github.com/ng-lightning/ng-lightning/commit/f2bbc416472a1c1b1ef437a1c1547ee0c9c7c85a))
* **app:** add textarea form component ([9d14331](https://github.com/ng-lightning/ng-lightning/commit/9d143313488492ef1feef0a23b2aa2854ac1bb15)), closes [#113](https://github.com/ng-lightning/ng-lightning/issues/113)
* **app:** spinner component ([8cfd811](https://github.com/ng-lightning/ng-lightning/commit/8cfd8117d194ffba6d3a21b99d1b044c3998aa40))
* **app:** support alternate radio & checkbox group component ([278f97e](https://github.com/ng-lightning/ng-lightning/commit/278f97e84dc523c79e20067836d2c97f12aa15ff)), closes [#123](https://github.com/ng-lightning/ng-lightning/issues/123)
* **app:** upgrade Angular 2 to rc.4 ([208a755](https://github.com/ng-lightning/ng-lightning/commit/208a755746f801f2d3c8bca8d8ba1bf263cfcfc0)), closes [#138](https://github.com/ng-lightning/ng-lightning/issues/138)
* **app:** upgrade Angular 2 to rc.5 and @NgModule ([7b3a902](https://github.com/ng-lightning/ng-lightning/commit/7b3a90295ff2fa94d9174089bd8cae2ca7ef10b5)), closes [#182](https://github.com/ng-lightning/ng-lightning/issues/182)
* **app:** upgrade Angular 2 to rc.6 ([ea144aa](https://github.com/ng-lightning/ng-lightning/commit/ea144aa60b4805aa8556a260a12e6a3ee6844465)), closes [#187](https://github.com/ng-lightning/ng-lightning/issues/187)
* **app:** upgrade Angular 2 to rc.7 ([9fc3915](https://github.com/ng-lightning/ng-lightning/commit/9fc3915fdb84d534f289f7db67a37ad8bdfe8fd9)), closes [#207](https://github.com/ng-lightning/ng-lightning/issues/207)
* **app:** upgrade Angular to 2.0.0 ([cab4c08](https://github.com/ng-lightning/ng-lightning/commit/cab4c08d37eb6af6b9b6067567731c9010ee42e0)), closes [#213](https://github.com/ng-lightning/ng-lightning/issues/213)
* **app:** upgrade SLDS to to 2.1.2 ([8125ec7](https://github.com/ng-lightning/ng-lightning/commit/8125ec78d2c23b53efb15b99fea13ccdf809bb14))
* **app:** upgrade SLDS to v2.0 ([91502ea](https://github.com/ng-lightning/ng-lightning/commit/91502ea84278ad02f32861a3032115f65a864104))
* **build:** add systemjs bundle to distribution ([a2d2b99](https://github.com/ng-lightning/ng-lightning/commit/a2d2b9958a3395f5dc8f1565b5f53cdf158b9112))
* **build:** improve SystemJS bundle size ([91f9d54](https://github.com/ng-lightning/ng-lightning/commit/91f9d54c75e3935245904520473e934ba6d2b8d7)), closes [#89](https://github.com/ng-lightning/ng-lightning/issues/89)
* **build:** integrate with Saucelabs for testing ([f2272d4](https://github.com/ng-lightning/ng-lightning/commit/f2272d42b68bda15b074760a97df86e3dccbdbbe))
* **build:** make logging level while testing configurable ([b23fb91](https://github.com/ng-lightning/ng-lightning/commit/b23fb91ed784cb59e6e4ac3b6faec96319002e89)), closes [#5](https://github.com/ng-lightning/ng-lightning/issues/5) [#7](https://github.com/ng-lightning/ng-lightning/issues/7)
* **config:** support runtime change of configuration ([3a14b44](https://github.com/ng-lightning/ng-lightning/commit/3a14b443b9489036b728df50a815adffc3f6326e)), closes [#219](https://github.com/ng-lightning/ng-lightning/issues/219)
* **config:** use `provideNglConfig` to hide bootstrapping complexity ([5b1b1ec](https://github.com/ng-lightning/ng-lightning/commit/5b1b1ec3b39b1625463d4590306cc0b6fd97dc9a))
* **datables:** add sorting ([8bab4af](https://github.com/ng-lightning/ng-lightning/commit/8bab4af594df95961dbf86f11f557aa979990210)), closes [#142](https://github.com/ng-lightning/ng-lightning/issues/142)
* **datatables:** add loading overlay ([15fd577](https://github.com/ng-lightning/ng-lightning/commit/15fd577d9d6a145132d998a14f696645cc1fb712)), closes [#201](https://github.com/ng-lightning/ng-lightning/issues/201)
* **datatables:** add row event handler ([446fe68](https://github.com/ng-lightning/ng-lightning/commit/446fe68595ef63904581ee6fa766716292de6446)), closes [#204](https://github.com/ng-lightning/ng-lightning/issues/204) [#208](https://github.com/ng-lightning/ng-lightning/issues/208)
* **datatables:** custom message when no data available ([052a0a6](https://github.com/ng-lightning/ng-lightning/commit/052a0a653ed2695e5c0d354b8b17d8a823c7f6eb)), closes [#205](https://github.com/ng-lightning/ng-lightning/issues/205)
* **datatables:** support custom header template ([c0ecd8c](https://github.com/ng-lightning/ng-lightning/commit/c0ecd8c90b0618b503f53b2091d72d06b1114892)), closes [#206](https://github.com/ng-lightning/ng-lightning/issues/206) [#211](https://github.com/ng-lightning/ng-lightning/issues/211)
* **datatables:** support user defined cell classes per column ([071f614](https://github.com/ng-lightning/ng-lightning/commit/071f61413b08c92f7545de445af4b6c89a5809c8)), closes [#144](https://github.com/ng-lightning/ng-lightning/issues/144)
* **datepickers:** support custom month and day names ([1f7bbb3](https://github.com/ng-lightning/ng-lightning/commit/1f7bbb38ef0a0b7c1e1d2c227ac9927c90bdd6af)), closes [#184](https://github.com/ng-lightning/ng-lightning/issues/184)
* **demo:** add a picklist example inside menus ([14ebd03](https://github.com/ng-lightning/ng-lightning/commit/14ebd0349ab0ed41b96096e071e95abd1ae6ee0a)), closes [#51](https://github.com/ng-lightning/ng-lightning/issues/51) [#57](https://github.com/ng-lightning/ng-lightning/issues/57)
* **demo:** add live edit button ([f7f8855](https://github.com/ng-lightning/ng-lightning/commit/f7f8855b8ae1aabf29001ea724435531d2d85c6f)), closes [#10](https://github.com/ng-lightning/ng-lightning/issues/10)
* **forms:** add checkbox toggle component ([99d0ddd](https://github.com/ng-lightning/ng-lightning/commit/99d0ddd70383897ac5c54df0785ac472d4d6650c)), closes [#246](https://github.com/ng-lightning/ng-lightning/issues/246)
* **forms:** support `<template>` element as label ([f9d85b5](https://github.com/ng-lightning/ng-lightning/commit/f9d85b56b181dba4481549b8c4210b1c9c63eeaa)), closes [#127](https://github.com/ng-lightning/ng-lightning/issues/127)
* **icons:** expose `svg[nglIcon]` component for increased flexibility ([e942ff1](https://github.com/ng-lightning/ng-lightning/commit/e942ff174bd35bcf02aa517e9a7ba6249d2468c2)), closes [#161](https://github.com/ng-lightning/ng-lightning/issues/161)
* **lookup:** support custom item template for results ([3732a5a](https://github.com/ng-lightning/ng-lightning/commit/3732a5ac5b14fcf910c7c829ebc262561314aef6)), closes [#66](https://github.com/ng-lightning/ng-lightning/issues/66) [#130](https://github.com/ng-lightning/ng-lightning/issues/130)
* **lookups:** add search icon option ([63867ba](https://github.com/ng-lightning/ng-lightning/commit/63867ba0786fe56900f47b976f6532dafa9c0242)), closes [#162](https://github.com/ng-lightning/ng-lightning/issues/162)
* **lookups:** support custom message when no results found ([cd1b758](https://github.com/ng-lightning/ng-lightning/commit/cd1b7581f01c0ae25801a8d045ad2b27953cd7b4)), closes [#198](https://github.com/ng-lightning/ng-lightning/issues/198) [#199](https://github.com/ng-lightning/ng-lightning/issues/199)
* **lookups:** support polymorphic variation ([8249715](https://github.com/ng-lightning/ng-lightning/commit/8249715a082e3deef5bd4909e3567335d870940b)), closes [#139](https://github.com/ng-lightning/ng-lightning/issues/139) [#165](https://github.com/ng-lightning/ng-lightning/issues/165)
* **menus:** add picklist component ([2482ebe](https://github.com/ng-lightning/ng-lightning/commit/2482ebe2035a3eb6c051ccfbc2bb822ac7a84b93)), closes [#158](https://github.com/ng-lightning/ng-lightning/issues/158)
* **menus:** support picklist filter ([9cf07a7](https://github.com/ng-lightning/ng-lightning/commit/9cf07a7fa41f2b2a38038b4c1f3cbc46ed4ce907)), closes [#175](https://github.com/ng-lightning/ng-lightning/issues/175)
* **modals:** support custom header template ([345bce7](https://github.com/ng-lightning/ng-lightning/commit/345bce7080055ceb3075bdcc3c77f1393ede4e91)), closes [#234](https://github.com/ng-lightning/ng-lightning/issues/234)
* **modals:** support directional footer ([6bf0d2d](https://github.com/ng-lightning/ng-lightning/commit/6bf0d2d4105dd7379ab51e6398eb551831ddfe17)), closes [#172](https://github.com/ng-lightning/ng-lightning/issues/172)
* **modals:** support empty header ([723b563](https://github.com/ng-lightning/ng-lightning/commit/723b563db2a59377605158aa06458a02d405ea43)), closes [#169](https://github.com/ng-lightning/ng-lightning/issues/169)
* **modals:** support removed footer ([f88cbbd](https://github.com/ng-lightning/ng-lightning/commit/f88cbbdea6b1870c1c8cb2dc9993678f60bb08c2)), closes [#173](https://github.com/ng-lightning/ng-lightning/issues/173) [#174](https://github.com/ng-lightning/ng-lightning/issues/174)
* **NglDatepicker:** add option to show "Today" button ([c26bdf4](https://github.com/ng-lightning/ng-lightning/commit/c26bdf442b7ff0b9ca8631a847e952b778f3b464)), closes [#108](https://github.com/ng-lightning/ng-lightning/issues/108)
* **nglIcon:** ability to specify extra classes for SVG ([f8baa0b](https://github.com/ng-lightning/ng-lightning/commit/f8baa0be701815249ca44a91b7f6242ced14c9b5)), closes [#28](https://github.com/ng-lightning/ng-lightning/issues/28) [#31](https://github.com/ng-lightning/ng-lightning/issues/31)
* **NglIcon:** support all available sprites ([04e6f64](https://github.com/ng-lightning/ng-lightning/commit/04e6f6487dc4b9d8ab53ab8e1b3f2433cb0bcc87)), closes [#73](https://github.com/ng-lightning/ng-lightning/issues/73)
* **NglLookup:** support aria attributes and keyboard selection ([28a0ad6](https://github.com/ng-lightning/ng-lightning/commit/28a0ad66d470979391736b08dc4e43aad0280022)), closes [#53](https://github.com/ng-lightning/ng-lightning/issues/53)
* **NglLookup:** support single selection ([b5f1013](https://github.com/ng-lightning/ng-lightning/commit/b5f1013d24af22b27132053c040a401c8f409f16)), closes [#79](https://github.com/ng-lightning/ng-lightning/issues/79)
* **NglNotification:** add timeout support ([78e0e6b](https://github.com/ng-lightning/ng-lightning/commit/78e0e6b7c069b676bf92012f75129c6a4d752973)), closes [#75](https://github.com/ng-lightning/ng-lightning/issues/75)
* **NglPagination:** support always visible boundary numbers ([ede3bf1](https://github.com/ng-lightning/ng-lightning/commit/ede3bf12eb35919faabc1383ffff47d377abf527)), closes [#92](https://github.com/ng-lightning/ng-lightning/issues/92)
* **NglPagination:** support First/Last buttons ([6d04c1b](https://github.com/ng-lightning/ng-lightning/commit/6d04c1bac78850e70d6ec1648dd50090225ab526)), closes [#95](https://github.com/ng-lightning/ng-lightning/issues/95)
* **NglPick:** support multiple selection ([fecb4ee](https://github.com/ng-lightning/ng-lightning/commit/fecb4eea30553c44a932ee7d8cd3227ba87d5ebb)), closes [#42](https://github.com/ng-lightning/ng-lightning/issues/42) [#45](https://github.com/ng-lightning/ng-lightning/issues/45)
* **NglPickOption:** add `exportAs` ([8314999](https://github.com/ng-lightning/ng-lightning/commit/831499902349a6486e976a75b98c635d312107cb)), closes [#56](https://github.com/ng-lightning/ng-lightning/issues/56)
* **NglPickOption:** add aria role and keyboard interaction ([add94a1](https://github.com/ng-lightning/ng-lightning/commit/add94a189179e583fab989c0eaade9539d9f79c4)), closes [#55](https://github.com/ng-lightning/ng-lightning/issues/55)
* **nglPopover:** add `theme` as input ([aafb713](https://github.com/ng-lightning/ng-lightning/commit/aafb713dcb09e1a0071d0cd5a6d77038632fff02)), closes [#39](https://github.com/ng-lightning/ng-lightning/issues/39)
* **NglPopover:** support reusable `<template>` elements ([6b49cc0](https://github.com/ng-lightning/ng-lightning/commit/6b49cc0c9439315aa77287f1010f83760e8270fe)), closes [#106](https://github.com/ng-lightning/ng-lightning/issues/106)
* **NglRating:** support custom size ([c4b7abd](https://github.com/ng-lightning/ng-lightning/commit/c4b7abd6ca04cadfad285600719233d47d31f1fa)), closes [#47](https://github.com/ng-lightning/ng-lightning/issues/47)
* **NglTab:** add `exportAs` ([f63646b](https://github.com/ng-lightning/ng-lightning/commit/f63646b17873ba23753f07238b3a007798e8ed9f)), closes [#84](https://github.com/ng-lightning/ng-lightning/issues/84)
* **NglTab:** support template as heading ([93fa880](https://github.com/ng-lightning/ng-lightning/commit/93fa8809edea773e401e5fd2921c4aae645acf1e)), closes [#85](https://github.com/ng-lightning/ng-lightning/issues/85)
* **NglTabs:** support more verbose syntax for "richer" heading ([c195d52](https://github.com/ng-lightning/ng-lightning/commit/c195d52619a640fd556cbc86691a5a5ac4bb1a8d)), closes [#103](https://github.com/ng-lightning/ng-lightning/issues/103)
* **paginations:** `exportAs` starting and ending row index ([8ba2107](https://github.com/ng-lightning/ng-lightning/commit/8ba21071c990cfd6b4a2cf827f6c01414644344a)), closes [#141](https://github.com/ng-lightning/ng-lightning/issues/141)
* **paginations:** support custom text for non-number buttons ([3c38201](https://github.com/ng-lightning/ng-lightning/commit/3c38201a138321345738985aa96c4706e399ec1b)), closes [#193](https://github.com/ng-lightning/ng-lightning/issues/193) [#195](https://github.com/ng-lightning/ng-lightning/issues/195)
* **popover:** add `nglPopoverBehavior` to handle common open/hide events ([ff3883b](https://github.com/ng-lightning/ng-lightning/commit/ff3883bee07a4f81cf4aa3e8f12d829afddcffd8)), closes [#133](https://github.com/ng-lightning/ng-lightning/issues/133)
* **popovers:** add output event when shows or hides ([4d08456](https://github.com/ng-lightning/ng-lightning/commit/4d0845682f5730420952a09d2aa27140d560b631)), closes [#244](https://github.com/ng-lightning/ng-lightning/issues/244)
* **popovers:** support "manual" open and close with custom delay ([adc0fcc](https://github.com/ng-lightning/ng-lightning/commit/adc0fcc176fe3bf9017fe442f9fc1946973c9554)), closes [#235](https://github.com/ng-lightning/ng-lightning/issues/235)
* **popovers:** support delayed closing ([cb0b2c6](https://github.com/ng-lightning/ng-lightning/commit/cb0b2c618898efbc68a7080f773df25598a442af)), closes [#231](https://github.com/ng-lightning/ng-lightning/issues/231)
* **popovers:** support delayed opening ([8878beb](https://github.com/ng-lightning/ng-lightning/commit/8878beb9c288d8aa47fda1cd6a72dffa5f867966)), closes [#222](https://github.com/ng-lightning/ng-lightning/issues/222)
* **popovers:** support string as content ([76c956f](https://github.com/ng-lightning/ng-lightning/commit/76c956f20f1e5e43fee201576ac5c2ecfe4327a3)), closes [#143](https://github.com/ng-lightning/ng-lightning/issues/143)
* **rating:** support `max` as input ([456ce76](https://github.com/ng-lightning/ng-lightning/commit/456ce7697d83ead83895955ca87171c89613b5d4)), closes [#203](https://github.com/ng-lightning/ng-lightning/issues/203)
* **rating:** support custom color for on/off state ([0e771e1](https://github.com/ng-lightning/ng-lightning/commit/0e771e138c92cf1df23de05e5304167cf7556310)), closes [#226](https://github.com/ng-lightning/ng-lightning/issues/226)
* **rating:** support custom icon ([95a013f](https://github.com/ng-lightning/ng-lightning/commit/95a013f7c75de558ca7c9536c5506902156ee562)), closes [#200](https://github.com/ng-lightning/ng-lightning/issues/200) [#202](https://github.com/ng-lightning/ng-lightning/issues/202)
* **tooltips:** support custom classes ([19c07a2](https://github.com/ng-lightning/ng-lightning/commit/19c07a210f7fdec49e62d24d52d4d7229813bcc2))
* **util:** support generation of unique IDs ([afe628d](https://github.com/ng-lightning/ng-lightning/commit/afe628d0efa4f9aa4d7cceb9343341a859c22732))


### Performance Improvements

* **app:** minizimze calls to `Renderer` to add/remove class on HostService ([f86c0ea](https://github.com/ng-lightning/ng-lightning/commit/f86c0eaea782e5adef68ac714aafe4fb0a62a9fa))
* **datepickers:** reduce renedring operations ([b38dc47](https://github.com/ng-lightning/ng-lightning/commit/b38dc477315004b6139b0d37ea0b8917d24565ad))
* **NglBreadcrumbs:** use `onPush` as change detection strategy ([3d9053f](https://github.com/ng-lightning/ng-lightning/commit/3d9053f05517a9adbe4ab2647b164b0931452d08))
* **NglInternalOutlet:** reduce number of checks needed ([2b3b1ab](https://github.com/ng-lightning/ng-lightning/commit/2b3b1ab55b76b79afb2eca6659ad4c600e0bd4b1)), closes [#209](https://github.com/ng-lightning/ng-lightning/issues/209)
* **NglPill:** use `onPush` as change detection strategy ([e0fb26c](https://github.com/ng-lightning/ng-lightning/commit/e0fb26ce043eb62c79be8411145768c4c630c85a)), closes [#104](https://github.com/ng-lightning/ng-lightning/issues/104)
* **popovers, tooltips:** improve performance on scroll ([372fb33](https://github.com/ng-lightning/ng-lightning/commit/372fb339337a1f8f0f5066770e0be5997611b19f))
* **tooltip:** mark for change detection only when it is really needed ([d55890e](https://github.com/ng-lightning/ng-lightning/commit/d55890eda269a728262f79df683b966158eba8db))


### BREAKING CHANGES

* **datepicker:** `ngl-datepicker-input` should contain the `<input
nglDatepickerInput>

  Before:

  ```html
  <ngl-datepicker-input readonlyInput placeholder="..."></ngl-datepicker-input>
  ```

  After:

  ```html
  <ngl-datepicker-input><input nglDatepickerInput readonly placeholder="..." /></ngl-datepicker-input>
  ```
* **combobox:** Single selection comboboxes (picklists) will not be
cleared upon re-selection the already selected value. If you want to
keep the old behaviour (although it is not recommended) you should
either provide an external clear button or an extra "empty" option.
* **app:** drop runtime errors for missing required input properties
* **app:** ng-lightning requires a minimal version of Angular 9
* **app:** ng-lightning requires a minimal version of SLDS 2.9
* **app:** ng-lightning requires a minimal version of Angular 8
* **app:**  * `NglModule.forRoot` is now removed. You should now use the new `NGL_ICON_CONFIG` and `NGL_RATING_CONFIG` to customize  the default behavior.
 * `NglConfig` and `INglConfig` are now removed.
 * Run-time configuration is not provided as an API of the library. You should use the injection tokens on per module/component basis.
* **app:**  `<ngl-picklist>` and `<ngl-lookup>` components are removed, and you should use `<ngl-combobox>` instead.
* **app:**   Tooltips and Popovers are now completely separate modules.
  Visit http://ng-lightning.github.io/ng-lightning/#/components/popovers & http://ng-lightning.github.io/ng-lightning/#/tooltips for more.
* **app:**   Before:

  ```html
  <button type="button" nglButton="neutral" [(nglButtonState)]="selected">
    <ngl-icon icon="add" state="not-selected">Follow</ngl-icon>
    <ngl-icon icon="check" state="selected">Following</ngl-icon>
    <ngl-icon icon="close" state="selected-focus">Unfollow</ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonStateful  [(state)]="selected>
    <ngl-state-off iconName="add">Follow</ngl-state-off>
    <ngl-state-on iconName="check">Following</ngl-state-on>
    <ngl-state-hover iconName="close">Unfollow</ngl-state-hover>
  </button>
  ```
* **app:**   Before:

  ```html
  <button type="button" [nglButton]="brand">
    <ngl-icon icon="warning"></ngl-icon>
    Text
  </button>
  ```

  After:

  ```html
  <button type="button" nglButton variant="brand" iconName="utility:warning">Text</button>
  ```
* **app:**   Before:

  ```html
  <button type="button" [nglButtonIcon]="brand">
    <ngl-icon icon="warning"></ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonIcon variant="brand" iconName="utility:warning"></button>
  ```
* **app:**   * `<ngl-form-element>` has been renamed to `<ngl-input>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="text" />
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-input [label]="tpt">
    <input ngl type="text" />
  </ngl-input >
  ```
* **app:**   * `<ngl-form-element>` has been renamed to `<ngl-textarea>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <textarea nglFormControl></textarea>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-textarea [label]="tpt">
    <textarea ngl></textarea>
  </ngl-form-element>
  ```
* **app:**   * `<ngl-form-element>` has been renamed to `<ngl-select>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <select nglFormControl></select>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-select [label]="tpt">
    <select ngl></select>
  </ngl-form-element>
  ```
* **app:**   * `ngl-form-group` has been renamed to `ngl-radio-group`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `<ngl-form-group-element>` has been renamed to `<ngl-radio-option>`
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group-alt` is now `type="button"`

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="radio" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-radio-group [label]="tpt">
    <ngl-radio-option label="..."><input ngl type="radio" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**   * `<ngl-form-checkbox>` has been renamed to `<ngl-checkbox>`
  * `<ngl-form-checkbox-toggle>` has been renamed to `<ngl-checkbox-toggle>`
  * `<ngl-form-checkbox-add>` has been renamed to `<ngl-checkbox-button>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group` has been renamed to `ngl-checkbox-group`
  * `<ngl-form-group-element>` has been renamed to `<ngl-checkbox-option>`
  * `ngl-form-group-alt` is now `ngl-checkbox-group type="button"`

  Before:

  ```html
  <ngl-form-checkbox>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="checkbox" />
  </ngl-form-checkbox>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-checkbox [label]="tpt">
    <input ngl type="checkbox" />
  </ngl-checkbox>
  ```

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="checkbox" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-checkbox-group [label]="tpt">
    <ngl-checkbox-option label="..."><input ngl type="checkbox" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**   * '0' in boolean inputs is now coerced to true
* **datatables:**   * `[bordered]` has been removed in favor of `slds-table_bordered` class on host element
  * `[striped]` has been removed in favor of `slds-table_striped` class on host element

  Before:

  ```html
  <table ngl-datatable bordered="true" striped="true">
  ```

  After:

  ```html
  <table ngl-datatable class="slds-table_bordered slds-table_striped">
  ```
* **pills:**   * `[NglPillImage]` selector is not needed anymore
  * `(nglPillRemove)` output has been renamed to `remove`
  * `[nglPillRemovable]` input has been renamed to `removable`
  * `<a>` must have `nglPillAction` attribute

  Before:

  ```html
  <ngl-pill (nglPillRemove)="remove()" NglPillRemovable="false">
    <ngl-icon iconName="standard:feedback" nglPillImage></ngl-icon>
    <a>...</a>
  </ngl-pill>
  ```

  After:

  ```html
  <ngl-pill icon="standard:feedback" (remove)="remove()" removable="false">
    <a nglPillAction>...</a>
  </ngl-pill>
  ```

ADDED
  * `[icon]`: NglIcon component or iconName to show on the left of the pill
  * `[avatar]`: NglAvatar component or src to show on the left of the pill
  * `[hasError]`: Applies the error style to the component
  * `[removeTitle]`: Remove button title (and assistive text)
* **modals:**   * `[body]` selector is not needed anymore
  * `[tagline]` selector has been renamed to `nglModalFooter`
  * `ngl-modal-footer` has been renamed to `nglModalFooter`

  Before:

  ```html
  <ngl-modal>
    <div body>...</div>
    <div tagline>...</div>
    <ngl-template ngl-modal-footer>...</ngl-template>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    <div class="slds-p-around_medium">...</div>
    <ngl-template nglModalTagline>...</ngl-template>
    <ngl-template nglModalFooter>...</ngl-template>
  </ngl-modal>
  ```
* **notifications:**   * `ngl-notifications` has been split to `ngl-toast`/`ngl-alert` and `type` has been removed
  * `severity` has been renamed to `variant`
  * `timeout` has been renamed to `duration`
  * `closeAssistiveText` has been renamed to `closeButtonAssistiveText`
  * `(nglNotificationClose)` has been renamed to `(close)`
* **tabs:**   * `ngl-tabs` has been renamed to `ngl-tabset`
  * tabset's `type` has been renamed to `variant`
  * `titleCaps` has been removed. Use CSS to adjust it.
  * tab's `heading` has been renamed to `label`
  * `ngl-tab-heading` has been renamed to `ngl-tab-label`
  * `nglTabId` has been removed, use `id` instead.
  * `(onActivate)` has been renamed to `(activate)`
  * `(onDeactivate)` has been renamed to `(deactivate)`
* **app:** NglIconWaffle became NglDynamicIcon of type waffle

To migrate the code follow the example below:

Before:

```html
<span ngl-icon-waffle></span>
<ngl-icon-waffle></ngl-icon-waffle>
```

After:

```html
<ngl-dynamic-icon type="waffle"></ngl-dynamic-icon>
```
* **icons:** in NglIcon category and icon inputs have been merged into one iconName field, type input was renamed to variant and alt is now named alternativeText. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

<ngl-icon category="custom" icon="1" type="default" alt="Alternative Text"></ngl-icon>

After:

<ngl-icon iconName="custom:custom1" variant="default" alternativeText="Alternative Text"></ngl-icon>
* **icons:** in NglSvg nglIconCategory and nglIcon inputs have been merged into one nglIconName field. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

<svg nglIconCategory="custom" nglIcon="1"></svg>

After:

<svg nglIconName="custom:custom1"></svg>
* **spinners:** `type` has been renamed to `variant` & `container` has been removed
* **avatar:** `alt` has been renamed to `alternativeText` & `type` has been renamed to `variant`

  Before:

  ```html
  <ngl-avatar type="..." alt="...">...</ngl-avatar>
  ```

  After:

  ```html
  <ngl-avatar variant="..." alternativeText="...">...</ngl-avatar>
  ```
* **sections:** `ngl-section` has been renamed to `ngl-expandable-section`

  Before:

  ```html
  <ngl-section>...</ngl-section>
  ```

  After:

  ```html
  <ngl-expandable-section>...</ngl-expandable-section>
  ```
* **badges:** input `type` has been renamed to `theme`

  Before:

  ```html
  <ngl-badge [type]="...">...</ngl-badge>
  ```

  After:

  ```html
  <ngl-badge [theme]="...">...</ngl-badge>
  ```
* **app:** ng-lightning requires a minimal version of LDS  2.5.0, and is not backward-compatible with previous versions
* **app:** ng-lightning requires a minimal version of Angular 5
* **breadcrumbs:** breadcrumb is now a structural directive

  Before:

  ```html
  <ngl-breadcrumb href="...">...</ngl-breadcrumb>
  ```

  After:

  ```html
  <a *nglBreadcrumb href="...">...</a>
  ```
* **build:** code is now available as ES modules or UMD bundle and no longer as commonjs
* **forms:**   * all input/textarea/select inside `<ngl-form-element>` or `<ngl-form-group-element>` should have `nglFormControl` attribute
  * single checkboxes should be wrapped by `<ngl-form-checkbox>`

  Before:

  ```html
  <ngl-form-element><input type="checkbox" /></ngl-form-element>
  <ngl-form-element><select></select></ngl-form-element>
  ```

  After:

  ```html
  <ngl-form-checkbox><input nglFormControl type="checkbox" /></ngl-form-element>
  <ngl-form-element><select nglFormControl></select></ngl-form-element>
  ```
* **lookups:** `nglLookupLabel` should be hosted on `<template>`

  Before:

  ```html
  <ngl-lookup>
     <span nglLookupLabel>...</span>
  </ngl-lookup>
  ```

  After:

  ```html
  <ngl-lookup>
     <template nglLookupLabel>...</template>
  </ngl-lookup>

  ```
  or
  ```html
  <ngl-lookup label="..."></ngl-lookup>

  ```
* **app:** `NglModule` must now be imported using the `forRoot()` static method.
* **config:** In case you didn't override default configuration values, just remove `provideNglConfig()`. If you did then, check the `Configuration` section for more details.
* **forms:** renamed `nglForm*` attributes to just `*`

  Before:

  ```html
  <... [nglFormLabel]="..."></...>
  <... [nglFormError]="..."></...>
  <... [nglFormRequired]="..."></...>
  ```

  After:

  ```html
  <... [label]="..."></...>
  <... [error]="..."></...>
  <... [required]="..."></...>
  ```
* **icons:** utility icons have no default type `default`

  Before:

  ```html
  <ngl-icon ...></ngl-icon>
  ```

  After:

  ```html
  <ngl-icon ... type="default"></ngl-icon>
  ```
* **datepickers:** Intl polypill for Safari is no longer needed
* **app:** use `@NgModule` to setup your application. Check the `Usage` section for more details.
* **modals:** modal footer is inside <template ngl-modal-footer>

  Before:

  ```html
  <ngl-modal>
    ...
    <button>Cancel</button>
    <button>Submit</button>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    ...
    <template ngl-modal-footer>
      <button>Cancel</button>
      <button>Submit</button>
    </template>
  </ngl-modal>
  ```
* **app:** Add `NGL_PRECOMPILE` on your root component of your application.

  ```js
  import {NGL_DIRECTIVES, NGL_PRECOMPILE} from 'ng-lightning/ng-lightning';

  @Component({
    ...
    precompile: [NGL_PRECOMPILE],
    ...
  })
  export class App {
    ...
  }
  ```
* **app:** `ngl-form-group-element` should be added as attribute on a `<label>`

  Before:

  ```html
  <ngl-form-group-element>...</ngl-form-group-element>
  ```

  After:
  ```html
  <label ngl-form-group-element>...</label>
  ```
* **NglPill:** `ngl-pill` is now an element instead of attribute and `<a>` moved inside content

  Before:

  ```html
  <a href="..." nglPill>
    <ngl-icon nglPillImage></ngl-icon>With icon
  </a>
  ```

  After:
  ```html
  <ngl-pill>
    <ngl-icon nglPillImage></ngl-icon>
    <a href="...">With icon</a>
  </ngl-pill>
  ```
* **NglPopover:**   * `nglPopoverTrigger` renamed to `nglPopover`
  * `nglPlacement` renamed to `nglPopoverPlacement`
  * Theme and tooltip declarations are now input of `nglPopover`

  Before:

  ```html
  <ngl-popover #tip theme="success">my text</ngl-popover>
  <span [nglPopoverTrigger]="tip" [nglPlacement]="placement" ...>here</span>
  ```

  After:
  ```html
  <template #tip>my text</template>
  <span [nglPopover]="tip" [nglPopoverPlacement]="placement" nglPopoverTheme="success" ...>here</span>
  ```
* **NglTabs:** `nglTabId` is now a separate input
  Before:

  ```html
  <template ngl-tab="myid" ...></ngl-tab>
  ```

  After:
  ```html
  <template ngl-tab nglTabId="myid" ...></ngl-tab>
  ```
* **NglLookup:** `pill` is now two way binded

  Before:

  ```html
  <ngl-lookup (pill)="selected = $event" ...></ngl-lookup>
  ```

  After:
  ```html
  <ngl-lookup [(pill)]="selected" ...></ngl-lookup>
  ```
* **NglIcon:** Don't include `utility-sprite` into `svgPath` of `NglConfig`
* **app:** Rename `<ngl-icon-button>` to `<ngl-icon>`

  Before:

  ```html
  <ngl-icon-button icon="add" ...></ngl-icon-button>
  ```

  After:
  ```html
  <ngl-icon icon="add" ...></ngl-icon>
  ```
* **NglPill:** Replace `(remove)` with `(nglPillRemove)`

  Before:
  ```html
  <span nglPill (remove)="onRemove()">...</span>
  <span nglPill removable="false">...</span>
  <span nglPill (remove)="onRemove()" removable="false">...</span>
  ```

  After:
  ```html
  <span nglPill (nglPillRemove)="onRemove()">...</span>
  <span nglPill>...</span>
  <span nglPill (nglPillRemove)="onRemove()" nglPillRemovable="false">...</span>
  ```
* **NglPick:**   Before:

  ```html
  <div [(nglPick)]="selected">
    ...
    <button type="button" nglPickOption="..." activeClass="custom-class"></button>
  ```

  After:
  ```html
  <div [(nglPick)]="selected" nglPickActiveClass="slds-button--brand">
    ...
    <button type="button" nglPickOption="..." nglPickActiveClass="custom-class"></button>
  </div>
  ```
* **config:** Use `provideNglConfig` instead of `NGL_CONFIG`.

  Before:

  ```js
  import {NGL_CONFIG} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provide(NGL_CONFIG, {useValue: {}}),
    ...
  ]);
  ```

  After:

  ```js
  import {provideNglConfig} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provideNglConfig({...}),
    ...
  ]);
  ```



# [8.0.0](https://github.com/ng-lightning/ng-lightning/compare/v7.0.2...v8.0.0) (2021-06-27)


### Features

* **app:** update project to angular 12 ([510188f](https://github.com/ng-lightning/ng-lightning/commit/510188f38482352e2f5288c424bf8fc219fa74ff))

### BREAKING CHANGES

* **app:** ng-lightning requires a minimal version of Angular 12



## Next version

### Features

* **app:** support Angular v12

## [7.0.2](https://github.com/ng-lightning/ng-lightning/compare/v7.0.1...v7.0.2) (2021-03-16)


### Bug Fixes

* **paginations:** show correct `start` and `end` values when `current` is undefined ([655ba96](https://github.com/ng-lightning/ng-lightning/commit/655ba96a15312de1f5de1cd3f3344edd22f1951c))



## [7.0.1](https://github.com/ng-lightning/ng-lightning/compare/v7.0.0...v7.0.1) (2021-01-11)


### Bug Fixes

* **tooltip:** fix interactive mode ([382a159](https://github.com/ng-lightning/ng-lightning/commit/382a1590315159cb99fd7b6ba59d972bf1d0956a)), closes [#528](https://github.com/ng-lightning/ng-lightning/issues/528)



# [7.0.0](https://github.com/ng-lightning/ng-lightning/compare/v6.1.1...v7.0.0) (2020-06-16)


### Bug Fixes

* **combobox:** single selections shouldn't be cleared upon re-selection ([b5655d3](https://github.com/ng-lightning/ng-lightning/commit/b5655d319fffb1b698a13f3057690eb9e9340c23)), closes [#507](https://github.com/ng-lightning/ng-lightning/issues/507) [#509](https://github.com/ng-lightning/ng-lightning/issues/509)


### Features

* **datepicker:** expose <input> to allow extra functionality ([2ca43e0](https://github.com/ng-lightning/ng-lightning/commit/2ca43e0bd1861edeab024a3b8713647e0ae444f7))
* **datepicker:** option to display the date pattern as placeholder of input ([9b71b8f](https://github.com/ng-lightning/ng-lightning/commit/9b71b8faa09187b7c74e1ace916c94eea3af12fd))


### BREAKING CHANGES

* **datepicker:** `ngl-datepicker-input` should contain the `<input
nglDatepickerInput>

  Before:

  ```html
  <ngl-datepicker-input readonlyInput placeholder="..."></ngl-datepicker-input>
  ```

  After:

  ```html
  <ngl-datepicker-input><input nglDatepickerInput readonly placeholder="..." /></ngl-datepicker-input>
  ```
* **combobox:** Single selection comboboxes (picklists) will not be
cleared upon re-selection the already selected value. If you want to
keep the old behaviour (although it is not recommended) you should
either provide an external clear button or an extra "empty" option.



## [6.1.1](https://github.com/ng-lightning/ng-lightning/compare/v6.1.0...v6.1.1) (2020-05-27)


### Bug Fixes

* **tabs:** change class calculation for content element ([756c607](https://github.com/ng-lightning/ng-lightning/commit/756c6076992f9a4c9d861b3c8fe1e1b1e5cf1781))



# [6.1.0](https://github.com/ng-lightning/ng-lightning/compare/v6.0.0...v6.1.0) (2020-05-17)


### Bug Fixes

* **accordion:** correct button type tp prevent form submission ([9306d61](https://github.com/ng-lightning/ng-lightning/commit/9306d613c6b2c802f4d522a687438cd3294ac0e9)), closes [#505](https://github.com/ng-lightning/ng-lightning/issues/505)
* **package.json:** strict v9 Angular peer dependencies ([95025f7](https://github.com/ng-lightning/ng-lightning/commit/95025f7cb9e6a116cbc91d4cb3cb08da753ba461)), closes [#508](https://github.com/ng-lightning/ng-lightning/issues/508)


### Features

* **combobox:** support custom labels & global configuration ([e11cc72](https://github.com/ng-lightning/ng-lightning/commit/e11cc72e1ab6c9ee71d14f2e471497bb6cea0b59)), closes [#511](https://github.com/ng-lightning/ng-lightning/issues/511)



# [6.0.0](https://github.com/ng-lightning/ng-lightning/compare/v5.0.0...v6.0.0) (2020-02-11)


### Bug Fixes

* **app:** remove `isRequired` decorator ([9053123](https://github.com/ng-lightning/ng-lightning/commit/9053123df68ecb11ce73ad64476922a2c2da3db8))


### Features

* **app:** support Angular v9 ([1ecd81f](https://github.com/ng-lightning/ng-lightning/commit/1ecd81f3617aa83d223965423a002d336d5832ad))


### BREAKING CHANGES

* **app:** drop runtime errors for missing required input properties
* **app:** ng-lightning requires a minimal version of Angular 9



# [5.0.0](https://github.com/ng-lightning/ng-lightning/compare/v4.8.2...v5.0.0) (2020-01-06)


### Bug Fixes

* **tabs:** correct `tabindex` value for non selected header ([f87539b](https://github.com/ng-lightning/ng-lightning/commit/f87539b3d4e38c420a25a64d820820c030fa62fd))


### Features

* **app:** support Angular v8 ([752eb14](https://github.com/ng-lightning/ng-lightning/commit/752eb144ed60d39b71f9faba41cc2c54f020a77e))
* **app:** support LDS v2.9 ([2bd5082](https://github.com/ng-lightning/ng-lightning/commit/2bd5082758d428f6cfd02789f5af9383a86dc8d9))


### BREAKING CHANGES

* **app:** ng-lightning requires a minimal version of SLDS 2.9
* **app:** ng-lightning requires a minimal version of Angular 8



## [4.8.2](https://github.com/ng-lightning/ng-lightning/compare/v4.8.1...v4.8.2) (2019-08-20)


### Bug Fixes

* **checkboxes:** support dynamic options ([6c11877](https://github.com/ng-lightning/ng-lightning/commit/6c11877))



## [4.8.1](https://github.com/ng-lightning/ng-lightning/compare/v4.8.0...v4.8.1) (2019-07-17)


### Bug Fixes

* correctly export individual modules to avoid aot issues ([4986423](https://github.com/ng-lightning/ng-lightning/commit/4986423))
* **checkboxes:** support template as `error` ([3e63b41](https://github.com/ng-lightning/ng-lightning/commit/3e63b41))
* **input:** correctly handle error as "false" string ([7f03235](https://github.com/ng-lightning/ng-lightning/commit/7f03235))
* **select:** support template as `error` ([967cdbf](https://github.com/ng-lightning/ng-lightning/commit/967cdbf))



# [4.8.0](https://github.com/ng-lightning/ng-lightning/compare/v4.7.1...v4.8.0) (2019-07-15)


### Features

* **input:** support template as `error` ([264ff66](https://github.com/ng-lightning/ng-lightning/commit/264ff66))
* **tooltips:** support delay option in global configuration ([a56a1a4](https://github.com/ng-lightning/ng-lightning/commit/a56a1a4))
* support importing individual modules ([4c84883](https://github.com/ng-lightning/ng-lightning/commit/4c84883))



## [4.7.1](https://github.com/ng-lightning/ng-lightning/compare/v4.7.0...v4.7.1) (2019-06-28)

This relase will just fix a problem we had with the previous one.

# [4.7.0](https://github.com/ng-lightning/ng-lightning/compare/v4.6.0...v4.7.0) (2019-06-28)


### Bug Fixes

* **file-upolad:** correcty validate file extensions on `accept` input ([170737e](https://github.com/ng-lightning/ng-lightning/commit/170737e))


### Features

* **datepickers:** add "Today", "Previous Month" and "Next Month" labels on configuration ([2bcedc1](https://github.com/ng-lightning/ng-lightning/commit/2bcedc1))
* **tooltips:** support custom classes ([19c07a2](https://github.com/ng-lightning/ng-lightning/commit/19c07a2))
* export components to public API ([0dd6361](https://github.com/ng-lightning/ng-lightning/commit/0dd6361))



# [4.6.0](https://github.com/ng-lightning/ng-lightning/compare/v4.5.2...v4.6.0) (2019-06-23)


### Features

* **datepickers:** add inputs for static text in templates ([d7d9bf8](https://github.com/ng-lightning/ng-lightning/commit/d7d9bf8))
* **file-upload:** add `<ngl-file-upload>` component ([6832101](https://github.com/ng-lightning/ng-lightning/commit/6832101))



## [4.5.2](https://github.com/ng-lightning/ng-lightning/compare/v4.5.1...v4.5.2) (2019-05-20)


### Bug Fixes

* **comboboxes:** hide menu if element is scrolled outside of view ([cbdbb72](https://github.com/ng-lightning/ng-lightning/commit/cbdbb72))
* **datepickers:** hide calendar if input is scrolled outside of view ([1c5e10f](https://github.com/ng-lightning/ng-lightning/commit/1c5e10f))
* **modals:** mark body as a scrollable container ([b780ec5](https://github.com/ng-lightning/ng-lightning/commit/b780ec5)), closes [#478](https://github.com/ng-lightning/ng-lightning/issues/478)



## [4.5.1](https://github.com/ng-lightning/ng-lightning/compare/v4.5.0...v4.5.1) (2019-05-16)


### Bug Fixes

* **comboboxes:** add accessibility attribute for disabled options ([eed7bcd](https://github.com/ng-lightning/ng-lightning/commit/eed7bcd))
* **datepickers:** prevent multiple input datepickers open at the same time ([38f363b](https://github.com/ng-lightning/ng-lightning/commit/38f363b))
* **datepickers:** update input validity if `min`/`max` changes ([c4df4ff](https://github.com/ng-lightning/ng-lightning/commit/c4df4ff))
* **popovers:** remove comments from template output ([dee6ba2](https://github.com/ng-lightning/ng-lightning/commit/dee6ba2))



# [4.5.0](https://github.com/ng-lightning/ng-lightning/compare/v4.4.0...v4.5.0) (2019-05-13)


### Bug Fixes

* **comboboxes:** prevent close if clicking a non-option inside the dropdown menu ([7e1717c](https://github.com/ng-lightning/ng-lightning/commit/7e1717c)), closes [#472](https://github.com/ng-lightning/ng-lightning/issues/472)
* **datepickers:** open the datepicker when a mouse user clicks on the input ([9a659d8](https://github.com/ng-lightning/ng-lightning/commit/9a659d8))


### Features

* **comoboboxes:** render menu as overlay ([f4aa1b2](https://github.com/ng-lightning/ng-lightning/commit/f4aa1b2))
* **datepickers:** localized month/day names and first day of week & configurable `firstDayOfWeek ` ([a1487fc](https://github.com/ng-lightning/ng-lightning/commit/a1487fc))



# [4.4.0](https://github.com/ng-lightning/ng-lightning/compare/v4.3.1...v4.4.0) (2019-05-04)


### Bug Fixes

* **checkboxes:** toggle should set `aria-describedby` on input element ([9ed081b](https://github.com/ng-lightning/ng-lightning/commit/9ed081b)), closes [#465](https://github.com/ng-lightning/ng-lightning/issues/465)
* **colorpicker:** display empty intial values as empty string in input ([7f183f7](https://github.com/ng-lightning/ng-lightning/commit/7f183f7))
* **radio-group:** correctly render dynamic options ([2357b5a](https://github.com/ng-lightning/ng-lightning/commit/2357b5a))


### Features

* **colorpicker:** support configuration ([aad87d8](https://github.com/ng-lightning/ng-lightning/commit/aad87d8))
* **colorpicker:** support input placeholder ([0a7b766](https://github.com/ng-lightning/ng-lightning/commit/0a7b766))
* **datecpickers:** support `min` and `max` dates ([a50719c](https://github.com/ng-lightning/ng-lightning/commit/a50719c))
* **datepickers:** add datepicker input ([1137b99](https://github.com/ng-lightning/ng-lightning/commit/1137b99))
* **datepickers:** add inputs and configuration options for years range ([7251f2d](https://github.com/ng-lightning/ng-lightning/commit/7251f2d))
* **datepickers:** support custom disabled dates via input callback ([bf06068](https://github.com/ng-lightning/ng-lightning/commit/bf06068))


### Performance Improvements

* **datepickers:** reduce renedring operations ([b38dc47](https://github.com/ng-lightning/ng-lightning/commit/b38dc47))



## [4.3.1](https://github.com/ng-lightning/ng-lightning/compare/v4.3.0...v4.3.1) (2019-04-22)


### Bug Fixes

* **datepickers:** move focus on keyboard navigation & mark only once as today ([c4dc7a6](https://github.com/ng-lightning/ng-lightning/commit/c4dc7a6))
* **modals:** render as CDK overlay to prevent stacking porblems ([7ab80b1](https://github.com/ng-lightning/ng-lightning/commit/7ab80b1))



# [4.3.0](https://github.com/ng-lightning/ng-lightning/compare/v4.2.0...v4.3.0) (2019-04-16)


### Features

* **buttonicons:** support extra classes for SVG element ([6fdaa1e](https://github.com/ng-lightning/ng-lightning/commit/6fdaa1e))
* **tooltips:** initial configuration support ([febe6df](https://github.com/ng-lightning/ng-lightning/commit/febe6df))
* **tooltips:** open/close without two-way binding to input ([01883ff](https://github.com/ng-lightning/ng-lightning/commit/01883ff))



# [4.2.0](https://github.com/ng-lightning/ng-lightning/compare/v4.1.0...v4.2.0) (2019-04-14)


### Bug Fixes

* **datepickers:** correctly spell Thursday in `dayNamesLong` ([0171be4](https://github.com/ng-lightning/ng-lightning/commit/0171be4))


### Features

* **accordion:** add accordion component ([214f9a4](https://github.com/ng-lightning/ng-lightning/commit/214f9a4))
* **modals:** support `prompt` variation ([ad652e8](https://github.com/ng-lightning/ng-lightning/commit/ad652e8))
* **popovers, tooltips:** support corner placements ([3b309fb](https://github.com/ng-lightning/ng-lightning/commit/3b309fb))
* **slider:** add `<ngl-slider>` component ([6419506](https://github.com/ng-lightning/ng-lightning/commit/6419506))


### Performance Improvements

* **tooltip:** mark for change detection only when it is really needed ([d55890e](https://github.com/ng-lightning/ng-lightning/commit/d55890e))



# [4.1.0](https://github.com/ng-lightning/ng-lightning/compare/v4.0.0...v4.1.0) (2019-04-06)


### Bug Fixes

* **tabs:** add `aria-controls` &`aria-labelledby` for accesibility ([d8d3d8a](https://github.com/ng-lightning/ng-lightning/commit/d8d3d8a))


### Features

* **carousel:** add carousel component ([4d49ee6](https://github.com/ng-lightning/ng-lightning/commit/4d49ee6))
* **colorpicker:** add `<ngl-colorpicker>` component ([a5bdf27](https://github.com/ng-lightning/ng-lightning/commit/a5bdf27))
* **popovers:** add custom classes on host element with `nglPopoverClass` ([712e4a1](https://github.com/ng-lightning/ng-lightning/commit/712e4a1))
* **popovers:** control close button visibility from input ([7746137](https://github.com/ng-lightning/ng-lightning/commit/7746137))
* **popovers/tooltips:** support more complex placements ([678a955](https://github.com/ng-lightning/ng-lightning/commit/678a955))
* **tabs:** support non-lazy mode for every tab's contents ([93df6ca](https://github.com/ng-lightning/ng-lightning/commit/93df6ca)), closes [#356](https://github.com/ng-lightning/ng-lightning/issues/356)


### Performance Improvements

* **popovers, tooltips:** improve performance on scroll ([372fb33](https://github.com/ng-lightning/ng-lightning/commit/372fb33))



# [4.0.0](https://github.com/ng-lightning/ng-lightning/compare/v2.0.1...v4.0.0) (2019-03-24)


### Bug Fixes

* **alert/toast:** don't add `default` variant color on icon ([37815fc](https://github.com/ng-lightning/ng-lightning/commit/37815fc))
* **datatables:** safe unsubscription for column updates ([6e2a67b](https://github.com/ng-lightning/ng-lightning/commit/6e2a67b))
* **datepicker:** add missing label on year to improve accessibility ([f703bff](https://github.com/ng-lightning/ng-lightning/commit/f703bff)), closes [#388](https://github.com/ng-lightning/ng-lightning/issues/388)
* **icons:** `slds-icon_container` shouldn't apply for `utility` icons and set `default` as default `variant` ([8cc0764](https://github.com/ng-lightning/ng-lightning/commit/8cc0764))
* **lookups:** prevent form submission on polymprhic selection ([78181d7](https://github.com/ng-lightning/ng-lightning/commit/78181d7)), closes [#350](https://github.com/ng-lightning/ng-lightning/issues/350)
* **lookups:** turn autocomplete off for input ([7ce34b2](https://github.com/ng-lightning/ng-lightning/commit/7ce34b2)), closes [#348](https://github.com/ng-lightning/ng-lightning/issues/348)
* **modal:** use `cdkTrapFocus` to prevent user from tabbing away ([1c24ba8](https://github.com/ng-lightning/ng-lightning/commit/1c24ba8))
* **modals:** add ARIA `describedby` for content ([392177d](https://github.com/ng-lightning/ng-lightning/commit/392177d))
* **pills:** remove unnecessary host classes ([649813f](https://github.com/ng-lightning/ng-lightning/commit/649813f))
* **spinner:** do not add default size class when initialized with different one ([a81c75a](https://github.com/ng-lightning/ng-lightning/commit/a81c75a))


### Features

* **app:** add Combobox component ([9f424fd](https://github.com/ng-lightning/ng-lightning/commit/9f424fd))
* **app:** add dynamic icons module ([1c4987c](https://github.com/ng-lightning/ng-lightning/commit/1c4987c))
* **app:** add progress bar component ([5e40587](https://github.com/ng-lightning/ng-lightning/commit/5e40587))
* **app:** migrate button icons to LDS v2.8 ([1d191e1](https://github.com/ng-lightning/ng-lightning/commit/1d191e1))
* **app:** migrate buttons to LDS v2.8 ([3da487b](https://github.com/ng-lightning/ng-lightning/commit/3da487b))
* **app:** migrate checkboxes to LDS v2.8 ([4a9a368](https://github.com/ng-lightning/ng-lightning/commit/4a9a368))
* **app:** migrate input to LDS v2.8 ([fc4613e](https://github.com/ng-lightning/ng-lightning/commit/fc4613e))
* **app:** migrate menus to LDS v2.8 ([2a4f3c0](https://github.com/ng-lightning/ng-lightning/commit/2a4f3c0))
* **app:** migrate popovers to LDS v2.8 ([d5f12f9](https://github.com/ng-lightning/ng-lightning/commit/d5f12f9))
* **app:** migrate radio groups to LDS v2.8 ([6439dc9](https://github.com/ng-lightning/ng-lightning/commit/6439dc9))
* **app:** migrate select to LDS v2.8 ([09c2aa0](https://github.com/ng-lightning/ng-lightning/commit/09c2aa0))
* **app:** migrate stateful buttons to LDS v2.8 ([fec0947](https://github.com/ng-lightning/ng-lightning/commit/fec0947))
* **app:** migrate textarea to LDS v2.8 ([d701792](https://github.com/ng-lightning/ng-lightning/commit/d701792))
* **app:** provide injection configuration tokens per component ([45fb789](https://github.com/ng-lightning/ng-lightning/commit/45fb789))
* **app:** support `isRequired` decorator ([8276160](https://github.com/ng-lightning/ng-lightning/commit/8276160))
* **app:** support Angular v5 ([3008ded](https://github.com/ng-lightning/ng-lightning/commit/3008ded))
* **app:** support LDS v2.5 ([4399e1d](https://github.com/ng-lightning/ng-lightning/commit/4399e1d))
* **avatar:** migrate to LDS v2.5 ([bd400e2](https://github.com/ng-lightning/ng-lightning/commit/bd400e2))
* **avatar:** support initials & fallback to initials if image fails to load ([c131c82](https://github.com/ng-lightning/ng-lightning/commit/c131c82))
* **badges:** migrate to LDS v2.5 ([5d74394](https://github.com/ng-lightning/ng-lightning/commit/5d74394)), closes [#366](https://github.com/ng-lightning/ng-lightning/issues/366)
* **breadcrumbs:** migrate to LDS v2.5 ([0a1aa20](https://github.com/ng-lightning/ng-lightning/commit/0a1aa20))
* **build:** switch to Angular CLI library format ([d39d324](https://github.com/ng-lightning/ng-lightning/commit/d39d324))
* **datatables:** migrate to LDS v2.8 ([d3b1d48](https://github.com/ng-lightning/ng-lightning/commit/d3b1d48))
* **files:** upgrade files ([220f870](https://github.com/ng-lightning/ng-lightning/commit/220f870))
* **forms:** add `fieldLevelHelpTooltip` input ([351ee63](https://github.com/ng-lightning/ng-lightning/commit/351ee63)), closes [#374](https://github.com/ng-lightning/ng-lightning/issues/374)
* **icons:** migrate to slds v2.5.0 ([42ce810](https://github.com/ng-lightning/ng-lightning/commit/42ce810))
* **icons:** migrate waffle to NglDynamicIcon ([902d429](https://github.com/ng-lightning/ng-lightning/commit/902d429))
* **modal:** focus the previously focused element on close ([4777ee6](https://github.com/ng-lightning/ng-lightning/commit/4777ee6))
* **modal:** hide close button if `openChange` output is not binded ([ed76e79](https://github.com/ng-lightning/ng-lightning/commit/ed76e79))
* **modals:** migrate to LDS v2.5 & add `closeButtonAssistiveText` ([d68f9a7](https://github.com/ng-lightning/ng-lightning/commit/d68f9a7))
* **modals:** prevent body scrolling while open ([2a7e965](https://github.com/ng-lightning/ng-lightning/commit/2a7e965))
* **modals:** support close when clicking outside ([49cbc06](https://github.com/ng-lightning/ng-lightning/commit/49cbc06))
* **notifications:** migrate to LDS v2.5 & add `iconName` and `dismissible` ([7bc6bc6](https://github.com/ng-lightning/ng-lightning/commit/7bc6bc6))
* **paginations:** migrate to LDS v2.5 ([3aa9d55](https://github.com/ng-lightning/ng-lightning/commit/3aa9d55))
* **pills:** migrate to LDS v2.8 ([4603d22](https://github.com/ng-lightning/ng-lightning/commit/4603d22))
* **ratings:** migrate to LDS v2.5 ([be681e0](https://github.com/ng-lightning/ng-lightning/commit/be681e0))
* **sections:** migrate to LDS v2.5 & add `collapsable` attribute ([9e66ab3](https://github.com/ng-lightning/ng-lightning/commit/9e66ab3)), closes [#368](https://github.com/ng-lightning/ng-lightning/issues/368)
* **spinners:** migrate to LDS v2.5 & add `alternativeText` attribute ([d3de48f](https://github.com/ng-lightning/ng-lightning/commit/d3de48f))
* **tabs:** migrate to LDS v2.5 ([a96e707](https://github.com/ng-lightning/ng-lightning/commit/a96e707))


### BREAKING CHANGES

* **app:**  
 * `NglModule.forRoot` is now removed. You should now use the new `NGL_ICON_CONFIG` and `NGL_RATING_CONFIG` to customize  the default behavior.
 * `NglConfig` and `INglConfig` are now removed.
 * Run-time configuration is not provided as an API of the library. You should use the injection tokens on per module/component basis.
* **app:** ng-lightning requires a minimal version of Angular 5
* **app:**   Tooltips and Popovers are now completely separate modules.
  Visit http://ng-lightning.github.io/ng-lightning/#/components/popovers & http://ng-lightning.github.io/ng-lightning/#/tooltips for more.
* **app:**   Before:

  ```html
  <button type="button" nglButton="neutral" [(nglButtonState)]="selected">
    <ngl-icon icon="add" state="not-selected">Follow</ngl-icon>
    <ngl-icon icon="check" state="selected">Following</ngl-icon>
    <ngl-icon icon="close" state="selected-focus">Unfollow</ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonStateful  [(state)]="selected>
    <ngl-state-off iconName="add">Follow</ngl-state-off>
    <ngl-state-on iconName="check">Following</ngl-state-on>
    <ngl-state-hover iconName="close">Unfollow</ngl-state-hover>
  </button>
  ```
* **app:**   Before:

  ```html
  <button type="button" [nglButton]="brand">
    <ngl-icon icon="warning"></ngl-icon>
    Text
  </button>
  ```

  After:

  ```html
  <button type="button" nglButton variant="brand" iconName="utility:warning">Text</button>
  ```
* **app:**   
  Before:

  ```html
  <button type="button" [nglButtonIcon]="brand">
    <ngl-icon icon="warning"></ngl-icon>
  </button>
  ```

  After:

  ```html
  <button type="button" nglButtonIcon variant="brand" iconName="utility:warning"></button>
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-input>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="text" />
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-input [label]="tpt">
    <input ngl type="text" />
  </ngl-input >
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-textarea>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <textarea nglFormControl></textarea>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-textarea [label]="tpt">
    <textarea ngl></textarea>
  </ngl-form-element>
  ```
* **app:**   
  * `<ngl-form-element>` has been renamed to `<ngl-select>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`

  Before:

  ```html
  <ngl-form-element>
    <ng-template nglFormLabel>...</ng-template>
    <select nglFormControl></select>
  </ngl-form-element>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-select [label]="tpt">
    <select ngl></select>
  </ngl-form-element>
  ```
* **app:**   
  * `ngl-form-group` has been renamed to `ngl-radio-group`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `<ngl-form-group-element>` has been renamed to `<ngl-radio-option>`
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group-alt` is now `type="button"`

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="radio" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-radio-group [label]="tpt">
    <ngl-radio-option label="..."><input ngl type="radio" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**   
  * `<ngl-form-checkbox>` has been renamed to `<ngl-checkbox>`
  * `<ngl-form-checkbox-toggle>` has been renamed to `<ngl-checkbox-toggle>`
  * `<ngl-form-checkbox-add>` has been renamed to `<ngl-checkbox-button>`
  * `<ng-template nglFormLabel>` has been removed since `[label]` now supports TemplateRef
  * `nglFormControl` has been renamed to `ngl`
  * `ngl-form-group` has been renamed to `ngl-checkbox-group`
  * `<ngl-form-group-element>` has been renamed to `<ngl-checkbox-option>`
  * `ngl-form-group-alt` is now `ngl-checkbox-group type="button"`

  Before:

  ```html
  <ngl-form-checkbox>
    <ng-template nglFormLabel>...</ng-template>
    <input nglFormControl type="checkbox" />
  </ngl-form-checkbox>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <ngl-checkbox [label]="tpt">
    <input ngl type="checkbox" />
  </ngl-checkbox>
  ```

  Before:

  ```html
  <fieldset ngl-form-group>
    <ng-template nglFormLabel>...</ng-template>
    <ngl-form-group-element label="..."><input nglFormControl type="checkbox" /></ngl-form-group-element>
  </fieldset>
  ```

  After:

  ```html
  <ng-template #tpl>...</ng-template>
  <fieldset ngl-checkbox-group [label]="tpt">
    <ngl-checkbox-option label="..."><input ngl type="checkbox" /></ngl-radio-option>
  </ngl-form-element>
  ```
* **app:**  '0' in boolean inputs is now coerced to true
* **datatables:**   
  * `[bordered]` has been removed in favor of `slds-table_bordered` class on host element
  * `[striped]` has been removed in favor of `slds-table_striped` class on host element

  Before:

  ```html
  <table ngl-datatable bordered="true" striped="true">
  ```

  After:

  ```html
  <table ngl-datatable class="slds-table_bordered slds-table_striped">
  ```
* **app:**  `<ngl-picklist>` and `<ngl-lookup>` components are removed, and you should use `<ngl-combobox>` instead.
* **modals:**   * `[body]` selector is not needed anymore
  * `[tagline]` selector has been renamed to `nglModalFooter`
  * `ngl-modal-footer` has been renamed to `nglModalFooter`

  Before:

  ```html
  <ngl-modal>
    <div body>...</div>
    <div tagline>...</div>
    <ngl-template ngl-modal-footer>...</ngl-template>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    <div class="slds-p-around_medium">...</div>
    <ngl-template nglModalTagline>...</ngl-template>
    <ngl-template nglModalFooter>...</ngl-template>
  </ngl-modal>
  ```
* **notifications:**   
  * `ngl-notifications` has been split to `ngl-toast`/`ngl-alert` and `type` has been removed
  * `severity` has been renamed to `variant`
  * `timeout` has been renamed to `duration`
  * `closeAssistiveText` has been renamed to `closeButtonAssistiveText`
  * `(nglNotificationClose)` has been renamed to `(close)`
* **tabs:**   * `ngl-tabs` has been renamed to `ngl-tabset`
  * tabset's `type` has been renamed to `variant`
  * `titleCaps` has been removed. Use CSS to adjust it.
  * tab's `heading` has been renamed to `label`
  * `ngl-tab-heading` has been renamed to `ngl-tab-label`
  * `nglTabId` has been removed, use `id` instead.
  * `(onActivate)` has been renamed to `(activate)`
  * `(onDeactivate)` has been renamed to `(deactivate)`
* **app:** NglIconWaffle became NglDynamicIcon of type waffle

To migrate the code follow the example below:

Before:

```html
<span ngl-icon-waffle></span>
<ngl-icon-waffle></ngl-icon-waffle>
```

After:

```html
<ngl-dynamic-icon type="waffle"></ngl-dynamic-icon>
```
* **icons:** in NglIcon category and icon inputs have been merged into one iconName field, type input was renamed to variant and alt is now named alternativeText. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

```html
<ngl-icon category="custom" icon="1" type="default" alt="Alternative Text"></ngl-icon>
```

After:

<ngl-icon iconName="custom:custom1" variant="default" alternativeText="Alternative Text"></ngl-icon>
* **icons:** in NglSvg nglIconCategory and nglIcon inputs have been merged into one nglIconName field. The custom icons will not be prefixed with `custom` any longer

To migrate the code follow the example below:

Before:

```html
<svg nglIconCategory="custom" nglIcon="1"></svg>
```

After:

```html
<svg nglIconName="custom:custom1"></svg>
```

* **spinners:** `type` has been renamed to `variant` & `container` has been removed
* **avatar:** `alt` has been renamed to `alternativeText` & `type` has been renamed to `variant`

  Before:

  ```html
  <ngl-avatar type="..." alt="...">...</ngl-avatar>
  ```

  After:

  ```html
  <ngl-avatar variant="..." alternativeText="...">...</ngl-avatar>
  ```
* **sections:** `ngl-section` has been renamed to `ngl-expandable-section`

  Before:

  ```html
  <ngl-section>...</ngl-section>
  ```

  After:

  ```html
  <ngl-expandable-section>...</ngl-expandable-section>
  ```
* **badges:** input `type` has been renamed to `theme`

  Before:

  ```html
  <ngl-badge [type]="...">...</ngl-badge>
  ```

  After:

  ```html
  <ngl-badge [theme]="...">...</ngl-badge>
  ```
* **app:** ng-lightning requires a minimal version of LDS  2.5.0, and is not backward-compatible with previous versions
* **pills:**   * `[NglPillImage]` selector is not needed anymore
  * `(nglPillRemove)` output has been renamed to `remove`
  * `[nglPillRemovable]` input has been renamed to `removable`
  * `<a>` must have `nglPillAction` attribute

  Before:

  ```html
  <ngl-pill (nglPillRemove)="remove()" NglPillRemovable="false">
    <ngl-icon iconName="standard:feedback" nglPillImage></ngl-icon>
    <a>...</a>
  </ngl-pill>
  ```

  After:

  ```html
  <ngl-pill icon="standard:feedback" (remove)="remove()" removable="false">
    <a nglPillAction>...</a>
  </ngl-pill>
  ```

ADDED
  * `[icon]`: NglIcon component or iconName to show on the left of the pill
  * `[avatar]`: NglAvatar component or src to show on the left of the pill
  * `[hasError]`: Applies the error style to the component
  * `[removeTitle]`: Remove button title (and assistive text)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/ng-lightning/ng-lightning/compare/v2.0.1...v3.0.0) (2018-11-28)


### Bug Fixes

* **app:** lock Tether version to prevent production build errors ([ed15887](https://github.com/ng-lightning/ng-lightning/commit/ed15887))
* **datepicker:** add missing label on year to improve accessibility ([bfc364b](https://github.com/ng-lightning/ng-lightning/commit/bfc364b)), closes [#388](https://github.com/ng-lightning/ng-lightning/issues/388)
* **lookups:** prevent form submission on polymprhic selection ([78181d7](https://github.com/ng-lightning/ng-lightning/commit/78181d7)), closes [#350](https://github.com/ng-lightning/ng-lightning/issues/350)
* **lookups:** turn autocomplete off for input ([7ce34b2](https://github.com/ng-lightning/ng-lightning/commit/7ce34b2)), closes [#348](https://github.com/ng-lightning/ng-lightning/issues/348)


### Features

* **app:** support Angular v5 ([3008ded](https://github.com/ng-lightning/ng-lightning/commit/3008ded))
* **forms:** add tooltip help ([b06890f](https://github.com/ng-lightning/ng-lightning/commit/b06890f)), closes [#374](https://github.com/ng-lightning/ng-lightning/issues/374)


### BREAKING CHANGES

* **app:** ng-lightning requires a minimal version of Angular 5



<a name="2.0.1"></a>
## [2.0.1](https://github.com/ng-lightning/ng-lightning/compare/v2.0.0...v2.0.1) (2017-08-17)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/ng-lightning/ng-lightning/compare/v1.3.0...v2.0.0) (2017-08-17)


### Bug Fixes

* **dropdown:** sfae unsubscribe from open event ([330e66b](https://github.com/ng-lightning/ng-lightning/commit/330e66b))
* **paginations:** remove neutral class on current page ([ab5bd47](https://github.com/ng-lightning/ng-lightning/commit/ab5bd47)), closes [#325](https://github.com/ng-lightning/ng-lightning/issues/325)


### Features

* **app:** support Angular v4 ([44b2c2a](https://github.com/ng-lightning/ng-lightning/commit/44b2c2a)), closes [#328](https://github.com/ng-lightning/ng-lightning/issues/328) [#331](https://github.com/ng-lightning/ng-lightning/issues/331)
* **forms:** add checkbox add button component ([f5527bb](https://github.com/ng-lightning/ng-lightning/commit/f5527bb)), closes [#318](https://github.com/ng-lightning/ng-lightning/issues/318)

### BREAKING CHANGES

* ng-lightning requires a minimal version of Angular 4



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ng-lightning/ng-lightning/compare/v1.2.1...v1.3.0) (2017-03-28)


### Bug Fixes

* **picklist:** empty `filter` should filter based on value ([11832d2](https://github.com/ng-lightning/ng-lightning/commit/11832d2)), closes [#309](https://github.com/ng-lightning/ng-lightning/issues/309)


### Features

* **datatables:** support custom header classes per column ([04c24f4](https://github.com/ng-lightning/ng-lightning/commit/04c24f4)), closes [#299](https://github.com/ng-lightning/ng-lightning/issues/299) [#308](https://github.com/ng-lightning/ng-lightning/issues/308)
* **images:** add figure component ([b6f5ab5](https://github.com/ng-lightning/ng-lightning/commit/b6f5ab5)), closes [#284](https://github.com/ng-lightning/ng-lightning/issues/284)
* **popovers:** support header and footer ([3b9c3bd](https://github.com/ng-lightning/ng-lightning/commit/3b9c3bd)), closes [#313](https://github.com/ng-lightning/ng-lightning/issues/313)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ng-lightning/ng-lightning/compare/v1.2.0...v1.2.1) (2017-03-03)


### Bug Fixes

* **icons:** remove `xmlns:xlink` attribute from SVG ([5706cd5](https://github.com/ng-lightning/ng-lightning/commit/5706cd5))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ng-lightning/ng-lightning/compare/v1.1.0...v1.2.0) (2016-12-18)


### Bug Fixes

* **picklist:** empty initial and handle falsy values of placeholder ([2ca807f](https://github.com/ng-lightning/ng-lightning/commit/2ca807f))


### Features

* **icons:** add waffle icon ([047f13d](https://github.com/ng-lightning/ng-lightning/commit/047f13d)), closes [#281](https://github.com/ng-lightning/ng-lightning/issues/281)
* **lookups:** support custom header ([edfb316](https://github.com/ng-lightning/ng-lightning/commit/edfb316)), closes [#136](https://github.com/ng-lightning/ng-lightning/issues/136) [#286](https://github.com/ng-lightning/ng-lightning/issues/286)
* **tabs:** configurable tab header capitalisation ([3513dbc](https://github.com/ng-lightning/ng-lightning/commit/3513dbc)), closes [#285](https://github.com/ng-lightning/ng-lightning/issues/285)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ng-lightning/ng-lightning/compare/v1.0.2...v1.1.0) (2016-11-29)


### Bug Fixes

* **popovers:** properly cleanup content passed as `TemplateRef` ([52687c9](https://github.com/ng-lightning/ng-lightning/commit/52687c9)), closes [#274](https://github.com/ng-lightning/ng-lightning/issues/274)


### Features

* **popovers:** expose `position` method ([00b1a74](https://github.com/ng-lightning/ng-lightning/commit/00b1a74)), closes [#273](https://github.com/ng-lightning/ng-lightning/issues/273)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/ng-lightning/ng-lightning/compare/v1.0.1...v1.0.2) (2016-11-17)


### Bug Fixes

* **config:** don’t try to unsubscribe if no subscription ([931496f](https://github.com/ng-lightning/ng-lightning/commit/931496f)), closes [#270](https://github.com/ng-lightning/ng-lightning/issues/270) [#271](https://github.com/ng-lightning/ng-lightning/issues/271)
* **datatables:** correctly use `trackByKey` input ([ab754e7](https://github.com/ng-lightning/ng-lightning/commit/ab754e7)), closes [#268](https://github.com/ng-lightning/ng-lightning/issues/268) [#269](https://github.com/ng-lightning/ng-lightning/issues/269)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ng-lightning/ng-lightning/compare/v1.0.0...v1.0.1) (2016-11-11)


### Bug Fixes

* **app:** remove `[@types](https://github.com/types)/core-js` ([3c316a9](https://github.com/ng-lightning/ng-lightning/commit/3c316a9)), closes [#265](https://github.com/ng-lightning/ng-lightning/issues/265) [#267](https://github.com/ng-lightning/ng-lightning/issues/267)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ng-lightning/ng-lightning/compare/v0.27.0...v1.0.0) (2016-11-07)


### Bug Fixes

* **datepicker:** correctly handle `firstDayOfWeek` as string attribute ([eab39df](https://github.com/ng-lightning/ng-lightning/commit/eab39df))
* **datepicker:** handle when first day of week after first day of month ([3850150](https://github.com/ng-lightning/ng-lightning/commit/3850150))


### Features

* **datepicker:** support custom first day of week ([990783b](https://github.com/ng-lightning/ng-lightning/commit/990783b)), closes [#252](https://github.com/ng-lightning/ng-lightning/issues/252) [#255](https://github.com/ng-lightning/ng-lightning/issues/255)
* **demo:** support AoT compilation ([b0f2f71](https://github.com/ng-lightning/ng-lightning/commit/b0f2f71)), closes [#262](https://github.com/ng-lightning/ng-lightning/issues/262)



<a name="0.27.0"></a>
# [0.27.0](https://github.com/ng-lightning/ng-lightning/compare/v0.26.0...v0.27.0) (2016-10-27)


### Bug Fixes

* **popovers:** `nglInteractive` is handled as boolean ([01e4981](https://github.com/ng-lightning/ng-lightning/commit/01e4981))
* **popovers:** `nglPopoverBehavior` makes host focusable by default ([40e1d5b](https://github.com/ng-lightning/ng-lightning/commit/40e1d5b))


### Features

* **popovers:** support interaction with content ([cbef50d](https://github.com/ng-lightning/ng-lightning/commit/cbef50d)), closes [#254](https://github.com/ng-lightning/ng-lightning/issues/254)
* **rating:** support on/off color to be configurable ([f314e06](https://github.com/ng-lightning/ng-lightning/commit/f314e06)), closes [#253](https://github.com/ng-lightning/ng-lightning/issues/253)



<a name="0.26.0"></a>
# [0.26.0](https://github.com/ng-lightning/ng-lightning/compare/v0.25.0...v0.26.0) (2016-10-26)


### Bug Fixes

* **breadcrumbs:** support `routerLink` on each breadcrumb ([e978ed6](https://github.com/ng-lightning/ng-lightning/commit/e978ed6)), closes [#248](https://github.com/ng-lightning/ng-lightning/issues/248)
* **popovers:** position after popover view is initialized ([1259247](https://github.com/ng-lightning/ng-lightning/commit/1259247)), closes [#251](https://github.com/ng-lightning/ng-lightning/issues/251)


### Features

* **rating:** expose `fill` value in custom template icons ([931359c](https://github.com/ng-lightning/ng-lightning/commit/931359c)), closes [#247](https://github.com/ng-lightning/ng-lightning/issues/247)
* **rating:** support fractional values ([6aba289](https://github.com/ng-lightning/ng-lightning/commit/6aba289)), closes [#229](https://github.com/ng-lightning/ng-lightning/issues/229)


### BREAKING CHANGES

* breadcrumbs: breadcrumb is now a structural directive

  Before:

  ```html
  <ngl-breadcrumb href="...">...</ngl-breadcrumb>
  ```

  After:

  ```html
  <a *nglBreadcrumb href="...">...</a>
  ```



<a name="0.25.0"></a>
# [0.25.0](https://github.com/ng-lightning/ng-lightning/compare/v0.24.0...v0.25.0) (2016-10-15)


### Features

* **forms:** add checkbox toggle component ([99d0ddd](https://github.com/ng-lightning/ng-lightning/commit/99d0ddd)), closes [#246](https://github.com/ng-lightning/ng-lightning/issues/246)
* **popovers:** add output event when shows or hides ([4d08456](https://github.com/ng-lightning/ng-lightning/commit/4d08456)), closes [#244](https://github.com/ng-lightning/ng-lightning/issues/244)



<a name="0.24.0"></a>
# [0.24.0](https://github.com/ng-lightning/ng-lightning/compare/v0.23.0...v0.24.0) (2016-10-12)


### Bug Fixes

* **forms:** checkbox/radios have more accessible DOM structure ([22a2464](https://github.com/ng-lightning/ng-lightning/commit/22a2464)), closes [#214](https://github.com/ng-lightning/ng-lightning/issues/214)
* **lookups:** correctly declare `debounce` as input instead of attribute ([170bcd1](https://github.com/ng-lightning/ng-lightning/commit/170bcd1))
* **lookups:** don't render `<label>` element if empty ([c50572e](https://github.com/ng-lightning/ng-lightning/commit/c50572e)), closes [#233](https://github.com/ng-lightning/ng-lightning/issues/233)
* **notifications:** clear timeout when destroyed ([c91a20c](https://github.com/ng-lightning/ng-lightning/commit/c91a20c)), closes [#237](https://github.com/ng-lightning/ng-lightning/issues/237)


### Features

* **build:** distribute ESM with metadata and UMD bundle ([a52702f](https://github.com/ng-lightning/ng-lightning/commit/a52702f)), closes [#239](https://github.com/ng-lightning/ng-lightning/issues/239)
* **app:** upgrade SLDS to to 2.1.2 ([8125ec7](https://github.com/ng-lightning/ng-lightning/commit/8125ec7))
* **modals:** support custom header template ([345bce7](https://github.com/ng-lightning/ng-lightning/commit/345bce7)), closes [#234](https://github.com/ng-lightning/ng-lightning/issues/234)
* **popovers:** support "manual" open and close with custom delay ([adc0fcc](https://github.com/ng-lightning/ng-lightning/commit/adc0fcc)), closes [#235](https://github.com/ng-lightning/ng-lightning/issues/235)
* **popovers:** support delayed closing ([cb0b2c6](https://github.com/ng-lightning/ng-lightning/commit/cb0b2c6)), closes [#231](https://github.com/ng-lightning/ng-lightning/issues/231)


### BREAKING CHANGES

* build: code is now available as ES modules or UMD bundle and no longer as commonjs
* forms: structural changes
  * all input/textarea/select inside `<ngl-form-element>` or `<ngl-form-group-element>` should have `nglFormControl` attribute
  * single checkboxes should be wrapped by `<ngl-form-checkbox>`

  Before:

  ```html
  <ngl-form-element><input type="checkbox" /></ngl-form-element>
  <ngl-form-element><select></select></ngl-form-element>
  ```

  After:

  ```html
  <ngl-form-checkbox><input nglFormControl type="checkbox" /></ngl-form-element>
  <ngl-form-element><select nglFormControl></select></ngl-form-element>
  ```
* lookups: `nglLookupLabel` should be hosted on `<template>`

  Before:

  ```html
  <ngl-lookup>
     <span nglLookupLabel>...</span>
  </ngl-lookup>
  ```

  After:

  ```html
  <ngl-lookup>
     <template nglLookupLabel>...</template>
  </ngl-lookup>

  ```
  or
  ```html
  <ngl-lookup label="..."></ngl-lookup>

  ```



<a name="0.23.0"></a>
# [0.23.0](https://github.com/ng-lightning/ng-lightning/compare/v0.22.0...v0.23.0) (2016-10-03)


### Bug Fixes

* **app:** add `forRoot` to `NglModule` ([6426534](https://github.com/ng-lightning/ng-lightning/commit/6426534)), closes [#228](https://github.com/ng-lightning/ng-lightning/issues/228)
* **config:** remove `provideNglConfig` for injectable `NglConfig` ([47acd3d](https://github.com/ng-lightning/ng-lightning/commit/47acd3d)), closes [#218](https://github.com/ng-lightning/ng-lightning/issues/218)
* **forms:** remove `nglForm` prefix from input attributes ([5e9f16a](https://github.com/ng-lightning/ng-lightning/commit/5e9f16a)), closes [#217](https://github.com/ng-lightning/ng-lightning/issues/217)
* **menus:** don't close when inner element is clicked and removed from DOM ([5361f80](https://github.com/ng-lightning/ng-lightning/commit/5361f80)), closes [#223](https://github.com/ng-lightning/ng-lightning/issues/223) [#224](https://github.com/ng-lightning/ng-lightning/issues/224)


### Features

* **config:** support runtime change of configuration ([3a14b44](https://github.com/ng-lightning/ng-lightning/commit/3a14b44)), closes [#219](https://github.com/ng-lightning/ng-lightning/issues/219)
* **popovers:** support delayed opening ([8878beb](https://github.com/ng-lightning/ng-lightning/commit/8878beb)), closes [#222](https://github.com/ng-lightning/ng-lightning/issues/222)
* **rating:** support custom color for on/off state ([0e771e1](https://github.com/ng-lightning/ng-lightning/commit/0e771e1)), closes [#226](https://github.com/ng-lightning/ng-lightning/issues/226)


### BREAKING CHANGES

* app: `NglModule` must now be imported using the `forRoot()` static method.
* config: In case you didn't override default configuration values, just remove `provideNglConfig()`. If you did then, check the `Configuration` section for more details.
* forms: renamed `nglForm*` attributes to just `*`

  Before:

  ```html
  <... [nglFormLabel]="..."></...>
  <... [nglFormError]="..."></...>
  <... [nglFormRequired]="..."></...>
  ```

  After:

  ```html
  <... [label]="..."></...>
  <... [error]="..."></...>
  <... [required]="..."></...>
  ```



<a name="0.22.0"></a>
# [0.22.0](https://github.com/ng-lightning/ng-lightning/compare/v0.21.0...v0.22.0) (2016-09-15)


### Features

* **app:** upgrade Angular to 2.0.0 ([cab4c08](https://github.com/ng-lightning/ng-lightning/commit/cab4c08)), closes [#213](https://github.com/ng-lightning/ng-lightning/issues/213)
* **datatables:** add loading overlay ([15fd577](https://github.com/ng-lightning/ng-lightning/commit/15fd577)), closes [#201](https://github.com/ng-lightning/ng-lightning/issues/201)
* **datatables:** add row event handler ([446fe68](https://github.com/ng-lightning/ng-lightning/commit/446fe68)), closes [#204](https://github.com/ng-lightning/ng-lightning/issues/204) [#208](https://github.com/ng-lightning/ng-lightning/issues/208)
* **datatables:** custom message when no data available ([052a0a6](https://github.com/ng-lightning/ng-lightning/commit/052a0a6)), closes [#205](https://github.com/ng-lightning/ng-lightning/issues/205)
* **datatables:** support custom header template ([c0ecd8c](https://github.com/ng-lightning/ng-lightning/commit/c0ecd8c)), closes [#206](https://github.com/ng-lightning/ng-lightning/issues/206) [#211](https://github.com/ng-lightning/ng-lightning/issues/211)
* **rating:** support `max` as input ([456ce76](https://github.com/ng-lightning/ng-lightning/commit/456ce76)), closes [#203](https://github.com/ng-lightning/ng-lightning/issues/203)
* **rating:** support custom icon ([95a013f](https://github.com/ng-lightning/ng-lightning/commit/95a013f)), closes [#200](https://github.com/ng-lightning/ng-lightning/issues/200) [#202](https://github.com/ng-lightning/ng-lightning/issues/202)


### Performance Improvements

* **NglInternalOutlet:** reduce number of checks needed ([2b3b1ab](https://github.com/ng-lightning/ng-lightning/commit/2b3b1ab)), closes [#209](https://github.com/ng-lightning/ng-lightning/issues/209)



<a name="0.21.0"></a>
# [0.21.0](https://github.com/ng-lightning/ng-lightning/compare/v0.20.0...v0.21.0) (2016-09-09)


### Bug Fixes

* **icons:** remove `default` as default color ([288e65b](https://github.com/ng-lightning/ng-lightning/commit/288e65b)), closes [#191](https://github.com/ng-lightning/ng-lightning/issues/191)
* **modals:** use default change detection strategy ([3e6fd4b](https://github.com/ng-lightning/ng-lightning/commit/3e6fd4b)), closes [#197](https://github.com/ng-lightning/ng-lightning/issues/197)
* **picklist:** convent filter to lowercase before compare ([17899ab](https://github.com/ng-lightning/ng-lightning/commit/17899ab))


### Features

* **lookups:** support custom message when no results found ([cd1b758](https://github.com/ng-lightning/ng-lightning/commit/cd1b758)), closes [#198](https://github.com/ng-lightning/ng-lightning/issues/198) [#199](https://github.com/ng-lightning/ng-lightning/issues/199)
* **paginations:** support custom text for non-number buttons ([3c38201](https://github.com/ng-lightning/ng-lightning/commit/3c38201)), closes [#193](https://github.com/ng-lightning/ng-lightning/issues/193) [#195](https://github.com/ng-lightning/ng-lightning/issues/195)


### BREAKING CHANGES

* icons: utility icons have no default type `default`

  Before:

  ```html
  <ngl-icon ...></ngl-icon>
  ```

  After:

  ```html
  <ngl-icon ... type="default"></ngl-icon>
  ```



<a name="0.20.0"></a>
# [0.20.0](https://github.com/ng-lightning/ng-lightning/compare/v0.19.0...v0.20.0) (2016-09-02)


### Features

* **app:** upgrade Angular 2 to rc.6 ([ea144aa](https://github.com/ng-lightning/ng-lightning/commit/ea144aa)), closes [#187](https://github.com/ng-lightning/ng-lightning/issues/187)



<a name="0.19.0"></a>
# [0.19.0](https://github.com/ng-lightning/ng-lightning/compare/v0.18.0...v0.19.0) (2016-08-25)


### Bug Fixes

* **app:** declare `@angular/*` as peer dependencies ([722cf23](https://github.com/ng-lightning/ng-lightning/commit/722cf23))


### Features

* **datepickers:** support custom month and day names ([1f7bbb3](https://github.com/ng-lightning/ng-lightning/commit/1f7bbb3)), closes [#184](https://github.com/ng-lightning/ng-lightning/issues/184)


### BREAKING CHANGES

* datepickers: Intl polypill for Safari is no longer needed



<a name="0.18.0"></a>
# [0.18.0](https://github.com/ng-lightning/ng-lightning/compare/v0.17.0...v0.18.0) (2016-08-24)


### Bug Fixes

* **pagination:** bound start page by total elements ([ee08318](https://github.com/ng-lightning/ng-lightning/commit/ee08318)), closes [#178](https://github.com/ng-lightning/ng-lightning/issues/178)


### Features

* **app:** upgrade Angular 2 to rc.5 and [@NgModule](https://github.com/NgModule) ([7b3a902](https://github.com/ng-lightning/ng-lightning/commit/7b3a902)), closes [#182](https://github.com/ng-lightning/ng-lightning/issues/182)


### BREAKING CHANGES

* app: use `@NgModule` to setup your application. Check the `Usage` section for more details.



<a name="0.17.0"></a>
# [0.17.0](https://github.com/ng-lightning/ng-lightning/compare/v0.16.0...v0.17.0) (2016-08-08)


### Bug Fixes

* **build:** support and test IE11 ([b925469](https://github.com/ng-lightning/ng-lightning/commit/b925469)), closes [#121](https://github.com/ng-lightning/ng-lightning/issues/121) [#163](https://github.com/ng-lightning/ng-lightning/issues/163)
* **icons:** use `utility` as default category for `svg[nglIcon]` ([c4b7cfe](https://github.com/ng-lightning/ng-lightning/commit/c4b7cfe))
* **modals:** simplify structure and correctly handle open state ([f87eeec](https://github.com/ng-lightning/ng-lightning/commit/f87eeec)), closes [#168](https://github.com/ng-lightning/ng-lightning/issues/168)
* **pick:** emit on `nglOptionDestroyed` when a selected option is "destroyed" ([65546e9](https://github.com/ng-lightning/ng-lightning/commit/65546e9)), closes [#156](https://github.com/ng-lightning/ng-lightning/issues/156)
* **popovers:** reposition generated popover after it's view initialized ([ae5a825](https://github.com/ng-lightning/ng-lightning/commit/ae5a825)), closes [#151](https://github.com/ng-lightning/ng-lightning/issues/151)


### Features

* **icons:** expose `svg[nglIcon]` component for increased flexibility ([e942ff1](https://github.com/ng-lightning/ng-lightning/commit/e942ff1)), closes [#161](https://github.com/ng-lightning/ng-lightning/issues/161)
* **lookups:** add search icon option ([63867ba](https://github.com/ng-lightning/ng-lightning/commit/63867ba)), closes [#162](https://github.com/ng-lightning/ng-lightning/issues/162)
* **lookups:** support polymorphic variation ([8249715](https://github.com/ng-lightning/ng-lightning/commit/8249715)), closes [#139](https://github.com/ng-lightning/ng-lightning/issues/139) [#165](https://github.com/ng-lightning/ng-lightning/issues/165)
* **menus:** add picklist component ([2482ebe](https://github.com/ng-lightning/ng-lightning/commit/2482ebe)), closes [#158](https://github.com/ng-lightning/ng-lightning/issues/158)
* **menus:** support picklist filter ([9cf07a7](https://github.com/ng-lightning/ng-lightning/commit/9cf07a7)), closes [#175](https://github.com/ng-lightning/ng-lightning/issues/175)
* **modals:** support directional footer ([6bf0d2d](https://github.com/ng-lightning/ng-lightning/commit/6bf0d2d)), closes [#172](https://github.com/ng-lightning/ng-lightning/issues/172)
* **modals:** support empty header ([723b563](https://github.com/ng-lightning/ng-lightning/commit/723b563)), closes [#169](https://github.com/ng-lightning/ng-lightning/issues/169)
* **modals:** support removed footer ([f88cbbd](https://github.com/ng-lightning/ng-lightning/commit/f88cbbd)), closes [#173](https://github.com/ng-lightning/ng-lightning/issues/173) [#174](https://github.com/ng-lightning/ng-lightning/issues/174)


### BREAKING CHANGES

* modals: modal footer is inside <template ngl-modal-footer>

  Before:

  ```html
  <ngl-modal>
    ...
    <button>Cancel</button>
    <button>Submit</button>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    ...
    <template ngl-modal-footer>
      <button>Cancel</button>
      <button>Submit</button>
    </template>
  </ngl-modal>
  ```



<a name="0.16.0"></a>
# [0.16.0](https://github.com/ng-lightning/ng-lightning/compare/v0.15.0...v0.16.0) (2016-07-13)


### Bug Fixes

* **app:** export INglDatatableSort ([d4e26dc](https://github.com/ng-lightning/ng-lightning/commit/d4e26dc)), closes [#147](https://github.com/ng-lightning/ng-lightning/issues/147)
* **app:** use `NGL_PRECOMPILE` for precompiled directives ([6a3ba50](https://github.com/ng-lightning/ng-lightning/commit/6a3ba50)), closes [#148](https://github.com/ng-lightning/ng-lightning/issues/148)
* **datatables:** only render cell templates when needed ([6041743](https://github.com/ng-lightning/ng-lightning/commit/6041743)), closes [#149](https://github.com/ng-lightning/ng-lightning/issues/149)


### BREAKING CHANGES

* app: Add `NGL_PRECOMPILE` on your root component of your application.

  ```js
  import {NGL_DIRECTIVES, NGL_PRECOMPILE} from 'ng-lightning/ng-lightning';

  @Component({
    ...
    precompile: [NGL_PRECOMPILE],
    ...
  })
  export class App {
    ...
  }
  ```



<a name="0.15.0"></a>
# [0.15.0](https://github.com/ng-lightning/ng-lightning/compare/v0.14.0...v0.15.0) (2016-07-12)


### Bug Fixes

* **datatables:** don't force `slds-truncate` on each cell ([3c3bcaa](https://github.com/ng-lightning/ng-lightning/commit/3c3bcaa))


### Features

* **datatables:** support user defined cell classes per column ([071f614](https://github.com/ng-lightning/ng-lightning/commit/071f614)), closes [#144](https://github.com/ng-lightning/ng-lightning/issues/144)



<a name="0.14.0"></a>
# [0.14.0](https://github.com/ng-lightning/ng-lightning/compare/v0.13.1...v0.14.0) (2016-07-11)


### Features

* **app:** add datatable component ([d5e56bc](https://github.com/ng-lightning/ng-lightning/commit/d5e56bc)), closes [#140](https://github.com/ng-lightning/ng-lightning/issues/140)
* **app:** upgrade Angular 2 to rc.4 ([208a755](https://github.com/ng-lightning/ng-lightning/commit/208a755)), closes [#138](https://github.com/ng-lightning/ng-lightning/issues/138)
* **datables:** add sorting ([8bab4af](https://github.com/ng-lightning/ng-lightning/commit/8bab4af)), closes [#142](https://github.com/ng-lightning/ng-lightning/issues/142)
* **paginations:** `exportAs` starting and ending row index ([8ba2107](https://github.com/ng-lightning/ng-lightning/commit/8ba2107)), closes [#141](https://github.com/ng-lightning/ng-lightning/issues/141)
* **popovers:** support string as content ([76c956f](https://github.com/ng-lightning/ng-lightning/commit/76c956f)), closes [#143](https://github.com/ng-lightning/ng-lightning/issues/143)



<a name="0.13.1"></a>
## [0.13.1](https://github.com/ng-lightning/ng-lightning/compare/v0.13.0...v0.13.1) (2016-06-23)


### Bug Fixes

* **popovers:** always run change detection on creation ([a5b54f9](https://github.com/ng-lightning/ng-lightning/commit/a5b54f9)), closes [#134](https://github.com/ng-lightning/ng-lightning/issues/134)
* **popovers:** specify absolute position with bigger specificity ([6c8c825](https://github.com/ng-lightning/ng-lightning/commit/6c8c825))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/ng-lightning/ng-lightning/compare/v0.12.1...v0.13.0) (2016-06-23)


### Bug Fixes

* **popover:** ensure that a position call happens after layouts have finished ([74e5ba7](https://github.com/ng-lightning/ng-lightning/commit/74e5ba7))


### Features

* **popover:** add `nglPopoverBehavior` to handle common open/hide events ([ff3883b](https://github.com/ng-lightning/ng-lightning/commit/ff3883b)), closes [#133](https://github.com/ng-lightning/ng-lightning/issues/133)



<a name="0.12.1"></a>
## [0.12.1](https://github.com/ng-lightning/ng-lightning/compare/v0.12.0...v0.12.1) (2016-06-17)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/ng-lightning/ng-lightning/compare/v0.11.1...v0.12.0) (2016-06-17)


### Bug Fixes

* **NglBreadcrumbs:** make breadcrumbs markup compatible with v2.0 ([8377b5e](https://github.com/ng-lightning/ng-lightning/commit/8377b5e))
* **NglIcon:** make custom icons compatible with v2.0 ([d5bac96](https://github.com/ng-lightning/ng-lightning/commit/d5bac96))
* **NglLookup:** make lookup markup compatible with v2.0 ([bc653dd](https://github.com/ng-lightning/ng-lightning/commit/bc653dd))
* **NglPill:** make compatible with v2.0 ([d5f0434](https://github.com/ng-lightning/ng-lightning/commit/d5f0434)), closes [#122](https://github.com/ng-lightning/ng-lightning/issues/122)


### Features

* **app:** support alternate radio & checkbox group component ([278f97e](https://github.com/ng-lightning/ng-lightning/commit/278f97e)), closes [#123](https://github.com/ng-lightning/ng-lightning/issues/123)
* **app:** upgrade SLDS to v2.0 ([91502ea](https://github.com/ng-lightning/ng-lightning/commit/91502ea))
* **forms:** support `<template>` element as label ([f9d85b5](https://github.com/ng-lightning/ng-lightning/commit/f9d85b5)), closes [#127](https://github.com/ng-lightning/ng-lightning/issues/127)
* **lookup:** support custom item template for results ([3732a5a](https://github.com/ng-lightning/ng-lightning/commit/3732a5a)), closes [#66](https://github.com/ng-lightning/ng-lightning/issues/66) [#130](https://github.com/ng-lightning/ng-lightning/issues/130)


### BREAKING CHANGES

* app: `ngl-form-group-element` should be added as attribute on a `<label>`

  Before:

  ```html
  <ngl-form-group-element>...</ngl-form-group-element>
  ```

  After:
  ```html
  <label ngl-form-group-element>...</label>
  ```
* NglPill: `ngl-pill` is now an element instead of attribute and `<a>` moved inside content

  Before:

  ```html
  <a href="..." nglPill>
    <ngl-icon nglPillImage></ngl-icon>With icon
  </a>
  ```

  After:
  ```html
  <ngl-pill>
    <ngl-icon nglPillImage></ngl-icon>
    <a href="...">With icon</a>
  </ngl-pill>
  ```



<a name="0.11.1"></a>
## [0.11.1](https://github.com/ng-lightning/ng-lightning/compare/v0.11.0...v0.11.1) (2016-06-08)


### Bug Fixes

* **NglFormElement:** don't let form directives leak on whole app ([4be0c3c](https://github.com/ng-lightning/ng-lightning/commit/4be0c3c)), closes [#120](https://github.com/ng-lightning/ng-lightning/issues/120)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/ng-lightning/ng-lightning/compare/v0.10.1...v0.11.0) (2016-06-07)


### Bug Fixes

* **util:** namespace automatically generated IDs ([3ca0956](https://github.com/ng-lightning/ng-lightning/commit/3ca0956))


### Features

* **app:** add checkbox form component ([b7a4673](https://github.com/ng-lightning/ng-lightning/commit/b7a4673)), closes [#115](https://github.com/ng-lightning/ng-lightning/issues/115)
* **app:** add input form component ([f159037](https://github.com/ng-lightning/ng-lightning/commit/f159037)), closes [#112](https://github.com/ng-lightning/ng-lightning/issues/112)
* **app:** add radio & checkbox group component ([5b306ec](https://github.com/ng-lightning/ng-lightning/commit/5b306ec)), closes [#117](https://github.com/ng-lightning/ng-lightning/issues/117)
* **app:** add select form component ([5489cb6](https://github.com/ng-lightning/ng-lightning/commit/5489cb6)), closes [#114](https://github.com/ng-lightning/ng-lightning/issues/114)
* **app:** add textarea form component ([9d14331](https://github.com/ng-lightning/ng-lightning/commit/9d14331)), closes [#113](https://github.com/ng-lightning/ng-lightning/issues/113)



<a name="0.10.1"></a>
## [0.10.1](https://github.com/ng-lightning/ng-lightning/compare/v0.10.0...v0.10.1) (2016-06-01)


### Bug Fixes

* **build:** define `ts-helpers` as dependency ([7a5bde3](https://github.com/ng-lightning/ng-lightning/commit/7a5bde3))
* **NglPopover:** explicitly destroy popover when host is destroyed ([fb4f325](https://github.com/ng-lightning/ng-lightning/commit/fb4f325)), closes [#111](https://github.com/ng-lightning/ng-lightning/issues/111)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/ng-lightning/ng-lightning/compare/v0.9.0...v0.10.0) (2016-05-30)


### Bug Fixes

* **NglDatepicker:** input/output Date object instead of string ([aec4e07](https://github.com/ng-lightning/ng-lightning/commit/aec4e07))
* **NglPopover:** fix memory leak when hiding ([b869c03](https://github.com/ng-lightning/ng-lightning/commit/b869c03)), closes [#107](https://github.com/ng-lightning/ng-lightning/issues/107)


### Features

* **app:** add datepicker component ([c77afde](https://github.com/ng-lightning/ng-lightning/commit/c77afde)), closes [#86](https://github.com/ng-lightning/ng-lightning/issues/86)
* **NglDatepicker:** add option to show "Today" button ([c26bdf4](https://github.com/ng-lightning/ng-lightning/commit/c26bdf4)), closes [#108](https://github.com/ng-lightning/ng-lightning/issues/108)
* **NglPopover:** support reusable `<template>` elements ([6b49cc0](https://github.com/ng-lightning/ng-lightning/commit/6b49cc0)), closes [#106](https://github.com/ng-lightning/ng-lightning/issues/106)


### Performance Improvements

* **NglBreadcrumbs:** use `onPush` as change detection strategy ([3d9053f](https://github.com/ng-lightning/ng-lightning/commit/3d9053f))
* **NglPill:** use `onPush` as change detection strategy ([e0fb26c](https://github.com/ng-lightning/ng-lightning/commit/e0fb26c)), closes [#104](https://github.com/ng-lightning/ng-lightning/issues/104)


### BREAKING CHANGES

* NglPopover:   
  * `nglPopoverTrigger` renamed to `nglPopover`
  * `nglPlacement` renamed to `nglPopoverPlacement`
  * Theme and tooltip declarations are now input of `nglPopover`

  Before:

  ```html
  <ngl-popover #tip theme="success">my text</ngl-popover>
  <span [nglPopoverTrigger]="tip" [nglPlacement]="placement" ...>here</span>
  ```

  After:
  ```html
  <template #tip>my text</template>
  <span [nglPopover]="tip" [nglPopoverPlacement]="placement" nglPopoverTheme="success" ...>here</span>
  ```



<a name="0.9.0"></a>
# [0.9.0](https://github.com/ng-lightning/ng-lightning/compare/v0.8.0...v0.9.0) (2016-05-20)


### Bug Fixes

* **NglPagination:** add `trackBy` on page elements ([0491b1e](https://github.com/ng-lightning/ng-lightning/commit/0491b1e)), closes [#98](https://github.com/ng-lightning/ng-lightning/issues/98)
* **NglPagination:** don't keep internal state of current page ([87eb763](https://github.com/ng-lightning/ng-lightning/commit/87eb763)), closes [#93](https://github.com/ng-lightning/ng-lightning/issues/93)


### Features

* **build:** improve SystemJS bundle size ([91f9d54](https://github.com/ng-lightning/ng-lightning/commit/91f9d54)), closes [#89](https://github.com/ng-lightning/ng-lightning/issues/89)
* **NglPagination:** support always visible boundary numbers ([ede3bf1](https://github.com/ng-lightning/ng-lightning/commit/ede3bf1)), closes [#92](https://github.com/ng-lightning/ng-lightning/issues/92)
* **NglPagination:** support First/Last buttons ([6d04c1b](https://github.com/ng-lightning/ng-lightning/commit/6d04c1b)), closes [#95](https://github.com/ng-lightning/ng-lightning/issues/95)
* **NglTabs:** support more verbose syntax for "richer" heading ([c195d52](https://github.com/ng-lightning/ng-lightning/commit/c195d52)), closes [#103](https://github.com/ng-lightning/ng-lightning/issues/103)


### BREAKING CHANGES

* NglTabs: `nglTabId` is now a separate input

  Before:

  ```html
  <template ngl-tab="myid" ...></template>
  ```

  After:
  ```html
  <template ngl-tab nglTabId="myid" ...></template>
  ```



<a name="0.8.0"></a>
# [0.8.0](https://github.com/ng-lightning/ng-lightning/compare/v0.7.0...v0.8.0) (2016-05-12)


### Bug Fixes

* **build:** import from `rxjs/Rx` to avoid SystemJS issues ([2cd7f96](https://github.com/ng-lightning/ng-lightning/commit/2cd7f96)), closes [#80](https://github.com/ng-lightning/ng-lightning/issues/80)


### Features

* **NglLookup:** support single selection ([b5f1013](https://github.com/ng-lightning/ng-lightning/commit/b5f1013)), closes [#79](https://github.com/ng-lightning/ng-lightning/issues/79)
* **NglTab:** add `exportAs` ([f63646b](https://github.com/ng-lightning/ng-lightning/commit/f63646b)), closes [#84](https://github.com/ng-lightning/ng-lightning/issues/84)
* **NglTab:** support template as heading ([93fa880](https://github.com/ng-lightning/ng-lightning/commit/93fa880)), closes [#85](https://github.com/ng-lightning/ng-lightning/issues/85)


### BREAKING CHANGES

* NglLookup: `pick` is now two way binded

  Before:

  ```html
  <ngl-lookup (pick)="selected = $event" ...></ngl-lookup>
  ```

  After:
  ```html
  <ngl-lookup [(pick)]="selected" ...></ngl-lookup>
  ```



<a name="0.7.0"></a>
# [0.7.0](https://github.com/ng-lightning/ng-lightning/compare/v0.6.0...v0.7.0) (2016-04-19)


### Bug Fixes

* **app:** deprecate `ngl-icon-button` in favour of `ngl-icon` ([339f867](https://github.com/ng-lightning/ng-lightning/commit/339f867)), closes [#70](https://github.com/ng-lightning/ng-lightning/issues/70)
* **nglPillImage:** handle `ngl-icon` and `ngl-avatar` ([4be9e09](https://github.com/ng-lightning/ng-lightning/commit/4be9e09)), closes [#74](https://github.com/ng-lightning/ng-lightning/issues/74)

### Code Refactoring

* **NglIcon:** move sprite definition into component from `NglConfig` ([62c3eec](https://github.com/ng-lightning/ng-lightning/commit/62c3eec))

### Features

* **app:** add notification component ([2b94946](https://github.com/ng-lightning/ng-lightning/commit/2b94946)), closes [#65](https://github.com/ng-lightning/ng-lightning/issues/65)
* **NglIcon:** support all available sprites ([04e6f64](https://github.com/ng-lightning/ng-lightning/commit/04e6f64)), closes [#73](https://github.com/ng-lightning/ng-lightning/issues/73)
* **NglNotification:** add timeout support ([78e0e6b](https://github.com/ng-lightning/ng-lightning/commit/78e0e6b)), closes [#75](https://github.com/ng-lightning/ng-lightning/issues/75)


### BREAKING CHANGES

* NglIcon: Don't include `utility-sprite` into `svgPath` of `NglConfig`
* app: Rename `<ngl-icon-button>` to `<ngl-icon>`

  Before:

  ```html
  <ngl-icon-button icon="add" ...></ngl-icon-button>
  ```

  After:
  ```html
  <ngl-icon icon="add" ...></ngl-icon>
  ```



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ng-lightning/ng-lightning/compare/v0.5.0...v0.6.0) (2016-04-11)


### Bug Fixes

* **NglDropdown:** apply picklist styles if used in conjunction with `nglPick` ([36302b2](https://github.com/ng-lightning/ng-lightning/commit/36302b2)), closes [#64](https://github.com/ng-lightning/ng-lightning/issues/64)
* **NglIcon:** provide a way to omit default text type ([9428d56](https://github.com/ng-lightning/ng-lightning/commit/9428d56)), closes [#58](https://github.com/ng-lightning/ng-lightning/issues/58) [#61](https://github.com/ng-lightning/ng-lightning/issues/61)
* **NglPill:** existence of `nglPillRemove` determines removability ([1095a26](https://github.com/ng-lightning/ng-lightning/commit/1095a26)), closes [#63](https://github.com/ng-lightning/ng-lightning/issues/63)

### Features

* **app:** add pill component ([f922e09](https://github.com/ng-lightning/ng-lightning/commit/f922e09)), closes [#50](https://github.com/ng-lightning/ng-lightning/issues/50) [#59](https://github.com/ng-lightning/ng-lightning/issues/59)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ng-lightning/ng-lightning/compare/v0.4.0...v0.5.0) (2016-04-07)


### Bug Fixes

* **NglPick:** change `activeClass` to `nglPickActiveClass` and support on `nglPick` ([9837f6f](https://github.com/ng-lightning/ng-lightning/commit/9837f6f))
* **NglRating:** prevent icons from wrapping ([664e595](https://github.com/ng-lightning/ng-lightning/commit/664e595))

### Features

* **app:** add lookup component ([c4ea74e](https://github.com/ng-lightning/ng-lightning/commit/c4ea74e)), closes [#48](https://github.com/ng-lightning/ng-lightning/issues/48)
* **demo:** add a picklist example inside menus ([14ebd03](https://github.com/ng-lightning/ng-lightning/commit/14ebd03)), closes [#51](https://github.com/ng-lightning/ng-lightning/issues/51) [#57](https://github.com/ng-lightning/ng-lightning/issues/57)
* **NglLookup:** support aria attributes and keyboard selection ([28a0ad6](https://github.com/ng-lightning/ng-lightning/commit/28a0ad6)), closes [#53](https://github.com/ng-lightning/ng-lightning/issues/53)
* **NglPickOption:** add `exportAs` ([8314999](https://github.com/ng-lightning/ng-lightning/commit/8314999)), closes [#56](https://github.com/ng-lightning/ng-lightning/issues/56)
* **NglPickOption:** add aria role and keyboard interaction ([add94a1](https://github.com/ng-lightning/ng-lightning/commit/add94a1)), closes [#55](https://github.com/ng-lightning/ng-lightning/issues/55)
* **NglRating:** support custom size ([c4b7abd](https://github.com/ng-lightning/ng-lightning/commit/c4b7abd)), closes [#47](https://github.com/ng-lightning/ng-lightning/issues/47)


### BREAKING CHANGES

* NglPick:   Before:

  ```html
  <div [(nglPick)]="selected">
    ...
    <button type="button" nglPickOption="..." activeClass="custom-class"></button>
  ```

  After:
  ```html
  <div [(nglPick)]="selected" nglPickActiveClass="slds-button--brand">
    ...
    <button type="button" nglPickOption="..." nglPickActiveClass="custom-class"></button>
  </div>
  ```



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ng-lightning/ng-lightning/compare/v0.3.0...v0.4.0) (2016-03-30)


### Bug Fixes

* **NglBreadcrumbs:** support `aria-labelledby` for assistive text ([0167009](https://github.com/ng-lightning/ng-lightning/commit/0167009))
* **nglDropdown:** set class `slds-dropdown-trigger--click` ([421a8f4](https://github.com/ng-lightning/ng-lightning/commit/421a8f4)), closes [#37](https://github.com/ng-lightning/ng-lightning/issues/37)
* **nglPick:** use `nglPick` instead of `selected` ([7549bb2](https://github.com/ng-lightning/ng-lightning/commit/7549bb2))
* **NglTabs:** prevent default window scrolling on arrow keys press ([7cda810](https://github.com/ng-lightning/ng-lightning/commit/7cda810)), closes [#43](https://github.com/ng-lightning/ng-lightning/issues/43)

### Features

* **app:** add breadcrumbs component ([ad11599](https://github.com/ng-lightning/ng-lightning/commit/ad11599)), closes [#24](https://github.com/ng-lightning/ng-lightning/issues/24) [#34](https://github.com/ng-lightning/ng-lightning/issues/34)
* **app:** add button group component ([69ee128](https://github.com/ng-lightning/ng-lightning/commit/69ee128))
* **app:** add section component ([ffaf227](https://github.com/ng-lightning/ng-lightning/commit/ffaf227))
* **NglPick:** support multiple selection ([fecb4ee](https://github.com/ng-lightning/ng-lightning/commit/fecb4ee)), closes [#42](https://github.com/ng-lightning/ng-lightning/issues/42) [#45](https://github.com/ng-lightning/ng-lightning/issues/45)
* **nglPopover:** add `theme` as input ([aafb713](https://github.com/ng-lightning/ng-lightning/commit/aafb713)), closes [#39](https://github.com/ng-lightning/ng-lightning/issues/39)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ng-lightning/ng-lightning/compare/v0.2.0...v0.3.0) (2016-03-22)


### Bug Fixes

* **demo:** properly highlight html language ([ebd8bdb](https://github.com/ng-lightning/ng-lightning/commit/ebd8bdb))
* **nglButtonIcon:** default class is not removed ([77466b3](https://github.com/ng-lightning/ng-lightning/commit/77466b3)), closes [#22](https://github.com/ng-lightning/ng-lightning/issues/22) [#23](https://github.com/ng-lightning/ng-lightning/issues/23)
* **nglModal:** support `aria-labelledby` to the modal’s heading ([607a92e](https://github.com/ng-lightning/ng-lightning/commit/607a92e)), closes [#35](https://github.com/ng-lightning/ng-lightning/issues/35)
* **nglPopover:** position call happens after all layouts have finished ([8834564](https://github.com/ng-lightning/ng-lightning/commit/8834564)), closes [#33](https://github.com/ng-lightning/ng-lightning/issues/33)
* **nglSpinner:** make container class configurable instead of required ([1175645](https://github.com/ng-lightning/ng-lightning/commit/1175645)), closes [#32](https://github.com/ng-lightning/ng-lightning/issues/32)

### Features

* **app:** add dropdowns component ([7c6b155](https://github.com/ng-lightning/ng-lightning/commit/7c6b155)), closes [#12](https://github.com/ng-lightning/ng-lightning/issues/12)
* **app:** add popovers component ([9a9b8e5](https://github.com/ng-lightning/ng-lightning/commit/9a9b8e5)), closes [#27](https://github.com/ng-lightning/ng-lightning/issues/27)
* **build:** add systemjs bundle to distribution ([a2d2b99](https://github.com/ng-lightning/ng-lightning/commit/a2d2b99))
* **build:** integrate with Saucelabs for testing ([f2272d4](https://github.com/ng-lightning/ng-lightning/commit/f2272d4))
* **demo:** add live edit button ([f7f8855](https://github.com/ng-lightning/ng-lightning/commit/f7f8855)), closes [#10](https://github.com/ng-lightning/ng-lightning/issues/10)
* **nglIcon:** ability to specify extra classes for SVG ([f8baa0b](https://github.com/ng-lightning/ng-lightning/commit/f8baa0b)), closes [#28](https://github.com/ng-lightning/ng-lightning/issues/28) [#31](https://github.com/ng-lightning/ng-lightning/issues/31)
* **util:** support generation of unique IDs ([afe628d](https://github.com/ng-lightning/ng-lightning/commit/afe628d))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ng-lightning/ng-lightning/compare/v0.1.0...v0.2.0) (2016-03-10)


### Bug Fixes

* **buttons:** don't use default class when value is empty or not set ([66a8237](https://github.com/ng-lightning/ng-lightning/commit/66a8237)), closes [#3](https://github.com/ng-lightning/ng-lightning/issues/3)
* **NGL_CONFIG:** relative path for SVG to use application's `<base>` ([e465d69](https://github.com/ng-lightning/ng-lightning/commit/e465d69))

### Features

* **app:** add avatar component ([6b24956](https://github.com/ng-lightning/ng-lightning/commit/6b24956)), closes [#6](https://github.com/ng-lightning/ng-lightning/issues/6)
* **app:** add pagination component ([66d82cf](https://github.com/ng-lightning/ng-lightning/commit/66d82cf))
* **app:** add rating component ([f2623cc](https://github.com/ng-lightning/ng-lightning/commit/f2623cc)), closes [#8](https://github.com/ng-lightning/ng-lightning/issues/8)
* **build:** make logging level while testing configurable ([b23fb91](https://github.com/ng-lightning/ng-lightning/commit/b23fb91)), closes [#5](https://github.com/ng-lightning/ng-lightning/issues/5) [#7](https://github.com/ng-lightning/ng-lightning/issues/7)
* **config:** use `provideNglConfig` to hide bootstrapping complexity ([5b1b1ec](https://github.com/ng-lightning/ng-lightning/commit/5b1b1ec))


### BREAKING CHANGES

* config: Use `provideNglConfig` instead of `NGL_CONFIG`.

  Before:

  ```js
  import {NGL_CONFIG} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provide(NGL_CONFIG, {useValue: {}}),
    ...
  ]);
  ```

  After:

  ```js
  import {provideNglConfig} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provideNglConfig({...}),
    ...
  ]);
  ```



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ng-lightning/ng-lightning/compare/f2bbc41...v0.1.0) (2016-03-04)


### Features

* **app:** add badge component ([e67741c](https://github.com/ng-lightning/ng-lightning/commit/e67741c))
* **app:** add button components ([4045bd3](https://github.com/ng-lightning/ng-lightning/commit/4045bd3))
* **app:** add icon component ([527b24f](https://github.com/ng-lightning/ng-lightning/commit/527b24f))
* **app:** add modal component ([c34019e](https://github.com/ng-lightning/ng-lightning/commit/c34019e))
* **app:** add tabs/tab components ([f2bbc41](https://github.com/ng-lightning/ng-lightning/commit/f2bbc41))
* **app:** add spinner component ([8cfd811](https://github.com/ng-lightning/ng-lightning/commit/8cfd811))
