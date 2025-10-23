import './polyfills.server.mjs';
import {
  ChangeDetectorRef,
  CommonModule,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HttpClient,
  HttpClientModule,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  Version,
  booleanAttribute,
  bootstrapApplication,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OYCIGIO5.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// src/app/components/header/header.component.ts
var _HeaderComponent = class _HeaderComponent {
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [[1, "logo"], ["routerLink", "/"], ["src", "assets\\team_logo.jpg", "alt", "Logo"], [1, "navbar"], ["routerLink", "/volunteer", "routerLinkActive", "active"], ["routerLink", "/contact-us", "routerLinkActive", "active"], ["routerLink", "/faq", "routerLinkActive", "active"], [1, "donate-button"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "div", 0)(2, "a", 1);
    \u0275\u0275element(3, "img", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "nav", 3)(5, "ul")(6, "li")(7, "a", 4);
    \u0275\u0275text(8, "Volunteer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 5);
    \u0275\u0275text(11, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 6);
    \u0275\u0275text(14, "FAQs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 7)(16, "button");
    \u0275\u0275text(17, "Donate");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [RouterLink, RouterLinkActive], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  font-family: "Roboto", sans-serif;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 20px;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  padding: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #007bff;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  list-style: none;\n  z-index: 1;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: block;\n  color: #000;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 16px;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\nheader[_ngcontent-%COMP%]   .donate-button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\nheader[_ngcontent-%COMP%]   .donate-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid #fe8282;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 14px;\n  color: #fe8282;\n}\nheader[_ngcontent-%COMP%]   .donate-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fe8282;\n  color: #fff;\n}\n/*# sourceMappingURL=header.component.css.map */'] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 11 });
})();

// src/app/components/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 0, consts: [[1, "footer-container"], [1, "footer-logo"], ["routerLink", "/"], ["src", "assets/team_logo_grey.png", "alt", "Logo"], [1, "footer-info-hours"], [1, "footer-info"], [1, "footer-hours"], [1, "footer-social"], [1, "social-icons"], ["href", "https://www.facebook.com/profile.php?id=61565831557507&mibextid=LQQJ4d"], ["src", "assets/facebook.png", "alt", "Facebook"], ["href", "https://www.instagram.com/fcwhitehaven?igsh=MTB0ejQ2Z2lxMnA0&utm_source=qr"], ["src", "assets/instagram.png", "alt", "Instagram"], [1, "footer-stay-connected"], ["type", "email", "placeholder", "Email Address", "required", ""], ["type", "submit"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "a", 2);
    \u0275\u0275element(4, "img", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "p")(8, "strong");
    \u0275\u0275text(9, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, "White Haven Park");
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13, "63 Invergordon Ave");
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, "Scarborough, ON");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 6)(17, "p")(18, "strong");
    \u0275\u0275text(19, "Contact Us:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21, "(416) 558-1330");
    \u0275\u0275element(22, "br");
    \u0275\u0275text(23, "fcwhitehaven@gmail.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 7)(25, "p")(26, "strong");
    \u0275\u0275text(27, "Follow us:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "a", 9);
    \u0275\u0275element(30, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 11);
    \u0275\u0275element(32, "img", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 13)(34, "p")(35, "strong");
    \u0275\u0275text(36, "Stay Connected:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "form");
    \u0275\u0275element(38, "input", 14);
    \u0275\u0275elementStart(39, "button", 15);
    \u0275\u0275text(40, "Submit");
    \u0275\u0275elementEnd()()()()();
  }
}, styles: ['\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333333;\n  color: white;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  font-family: "Roboto", sans-serif;\n}\n.footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  align-items: flex-start;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.footer-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.footer-info-hours[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.footer-info[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  font-size: 16px;\n}\n.footer-hours[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  font-size: 16px;\n}\n.footer-social[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  font-size: 16px;\n}\n.footer-newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 7px;\n  display: inline-block;\n}\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.footer-stay-connected[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.footer-stay-connected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  font-size: 16px;\n}\n.footer-stay-connected[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n.footer-stay-connected[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 20px;\n  margin-right: 10px;\n  font-size: 16px;\n  width: 250px;\n}\n.footer-stay-connected[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  background-color: red;\n  color: white;\n  font-size: 16px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.footer-stay-connected[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: darkred;\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 10 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(t) {
  return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: [InputFlags.None, "ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: [InputFlags.None, "ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(t) {
  return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"],
    options: [InputFlags.None, "ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
  return new (t || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: "root"
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: [InputFlags.None, "formControl", "form"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: [InputFlags.None, "formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: [InputFlags.None, "formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: [InputFlags.None, "formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: [InputFlags.None, "formControlName", "name"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
  return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
  return new (t || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.3.12");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "whcfc-frontend";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 0, consts: [[1, "page-container"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`, "data-tag", "font"], ["rel", "stylesheet", "href", \u0275\u0275trustConstantResourceUrl`https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`, "data-tag", "font"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "link", 1)(2, "link", 2)(3, "link", 3)(4, "link", 1)(5, "link", 4)(6, "link", 4)(7, "link", 4)(8, "link", 1)(9, "link", 5)(10, "link", 6)(11, "link", 5)(12, "link", 5)(13, "link", 5)(14, "link", 5)(15, "link", 6)(16, "link", 6)(17, "link", 7)(18, "link", 7)(19, "link", 7)(20, "link", 7)(21, "link", 7)(22, "link", 7)(23, "app-header")(24, "router-outlet")(25, "app-footer");
    \u0275\u0275elementEnd();
  }
}, dependencies: [
  RouterOutlet,
  HeaderComponent,
  FooterComponent,
  HttpClientModule,
  ReactiveFormsModule
], styles: ['html[_ngcontent-%COMP%] {  line-height: 1.15;}body[_ngcontent-%COMP%] {  margin: 0;}*[_ngcontent-%COMP%] {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p[_ngcontent-%COMP%], li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], div[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%] {  margin: 0;  padding: 0;}button[_ngcontent-%COMP%] {  background-color: transparent;}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {  text-transform: none;}button[_ngcontent-%COMP%], [type="button"][_ngcontent-%COMP%], [type="reset"][_ngcontent-%COMP%], [type="submit"][_ngcontent-%COMP%] {  -webkit-appearance: button;}button[_ngcontent-%COMP%]::-moz-focus-inner, [type="button"][_ngcontent-%COMP%]::-moz-focus-inner, [type="reset"][_ngcontent-%COMP%]::-moz-focus-inner, [type="submit"][_ngcontent-%COMP%]::-moz-focus-inner {  border-style: none;  padding: 0;}button[_ngcontent-%COMP%]:-moz-focus, [type="button"][_ngcontent-%COMP%]:-moz-focus, [type="reset"][_ngcontent-%COMP%]:-moz-focus, [type="submit"][_ngcontent-%COMP%]:-moz-focus {  outline: 1px dotted ButtonText;}a[_ngcontent-%COMP%] {  color: inherit;  text-decoration: inherit;}input[_ngcontent-%COMP%] {  padding: 2px 4px;}img[_ngcontent-%COMP%] {  display: block;}html[_ngcontent-%COMP%] { scroll-behavior: smooth  }', "html[_ngcontent-%COMP%] {\n      font-family: Inter;\n      font-size: 16px;\n    }\n\n    body[_ngcontent-%COMP%] {\n      font-weight: 400;\n      font-style:normal;\n      text-decoration: none;\n      text-transform: none;\n      letter-spacing: normal;\n      line-height: 1.15;\n      color: var(--dl-color-theme-neutral-dark);\n      background: var(--dl-color-theme-neutral-light);\n\n      fill: var(--dl-color-theme-neutral-dark);\n    }"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 21 });
})();

// src/app/components/home/home.component.ts
function HomeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(benefit_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.description);
  }
}
var _HomeComponent = class _HomeComponent {
  constructor() {
    this.benefits = [
      {
        icon: "\u26BD",
        title: "Free Football Experiences",
        description: "Attend our Wednesday and Sunday scrimmages at no cost and no obligation. Participate in team play and summer tournaments with no cost."
      },
      {
        icon: "\u{1F3C6}",
        title: "Team Play and Tournaments",
        description: "Enjoy competitive football opportunities without the financial burden. Join a team with minimal uniform costs and benefit from our efforts to keep expenses low."
      },
      {
        icon: "\u{1F31F}",
        title: "Community and Networking",
        description: "Interact with like-minded individuals, develop long-term relationships, and be part of a supportive community. Build connections that enhance both personal and professional growth."
      },
      {
        icon: "\u{1F4DA}",
        title: "Educational Workshops",
        description: "Join free workshops focused on developing life skills, career growth, and personal development. Enhance your skills and knowledge to support your future endeavors."
      }
    ];
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 1, consts: [[1, "hero"], [1, "blurred-background"], [1, "hero-content"], [1, "sub-text"], [1, "description"], [1, "benefits-section"], [1, "benefits"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], [1, "vision-mission-section"], [1, "vision-container"], [1, "vision-text"], [1, "vision-image"], ["src", "/assets/vision_home.jpg", "alt", "Community and Football"], [1, "mission-container"], [1, "mission-image"], ["src", "/assets/mission_home.jpg", "alt", "Inclusivity and Diversity"], [1, "mission-text"], [1, "video-section"], [1, "video-content"], [1, "video-text"], [1, "video-player"], ["controls", ""], ["src", "path-to-joe-video.mp4", "type", "video/mp4"], [1, "benefit-card"], [1, "benefit-icon"], [1, "benefit-text"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h1");
    \u0275\u0275text(4, "Play Soccer for Free with WHCFC!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Yes, you heard it right! It's free.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, " Join us for free soccer sessions, team tournaments, and workshops to enhance your skills and career. Network with like-minded individuals and be part of our supportive community. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "h2");
    \u0275\u0275text(11, "Why Join WHCFC?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275template(13, HomeComponent_div_13_Template, 8, 3, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "h2");
    \u0275\u0275text(18, "Our Vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, " WHCFC aims to be Scarborough\u2019s first club offering free soccer opportunities, promoting community, diversity, and inclusivity. We strive to foster a welcoming environment for equity-deserving groups and celebrate cultural differences. Our goal is to enhance community spirit through football while providing free educational workshops on essential life skills like project management and mental health. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11);
    \u0275\u0275element(22, "img", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275element(25, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16)(27, "h2");
    \u0275\u0275text(28, "Our Mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, " While some costs may apply for team play and tournaments, we are committed to minimizing these expenses. WHCFC seeks to support marginalized communities by securing funding from government and businesses, ensuring accessibility and minimal costs for participation. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "h2");
    \u0275\u0275text(35, "Message from Joe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37, " Discover Joe\u2019s personal journey with WHCFC. In this heartfelt message, Joe shares how he first joined the club, the passion that drives him, and his vision for making a difference in the community. Learn about the values and experiences that make WHCFC unique and hear firsthand why Joe believes in our mission. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 20)(39, "video", 21);
    \u0275\u0275element(40, "source", 22);
    \u0275\u0275text(41, " Your browser does not support the video tag. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx.benefits);
  }
}, dependencies: [CommonModule, NgForOf], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: white;\n  padding: 20px;\n  overflow: hidden;\n  font-family: "Roboto", sans-serif;\n}\n.blurred-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/assets/soccer_home.jpeg) no-repeat center center;\n  background-size: cover;\n  z-index: -1;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  z-index: 1;\n  padding: 20px;\n  background: rgba(94, 94, 94, 0.5);\n  border-radius: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  font-weight: bold;\n  margin-bottom: 10px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n}\n.sub-text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 20px;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);\n}\n.benefits-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background-color: #f8f9fa;\n  text-align: center;\n  font-family: "Roboto", sans-serif;\n}\n.benefits-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  margin-bottom: 20px;\n  color: #333;\n}\n.benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  width: 280px;\n  text-align: center;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n  color: #007bff;\n  margin-bottom: 15px;\n}\n.benefit-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 10px;\n  color: #333;\n}\n.benefit-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #666;\n}\n.vision-mission-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background-color: #fff;\n  font-family: "Roboto", sans-serif;\n}\n.vision-container[_ngcontent-%COMP%], .mission-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.vision-text[_ngcontent-%COMP%], .mission-text[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  text-align: left;\n}\n.vision-image[_ngcontent-%COMP%], .mission-image[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n.vision-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mission-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 20px;\n  color: #333;\n}\n.vision-mission-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  line-height: 1.6;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .vision-container[_ngcontent-%COMP%], .mission-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .vision-text[_ngcontent-%COMP%], .mission-text[_ngcontent-%COMP%], .vision-image[_ngcontent-%COMP%], .mission-image[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.video-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background-color: #f8f9fa;\n  text-align: center;\n  font-family: "Roboto", sans-serif;\n}\n.video-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.video-text[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin-bottom: 20px;\n}\n.video-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  margin-bottom: 15px;\n  color: #333;\n}\n.video-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  line-height: 1.6;\n  color: #666;\n}\n.video-player[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 640px;\n}\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n@media (max-width: 768px) {\n  .video-player[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 11 });
})();

// src/app/components/volunteer/vol-heading/vol-heading.component.ts
var _VolHeadingComponent = class _VolHeadingComponent {
  scrollToBottom() {
    const scrollHeight = document.body.scrollHeight;
    const offset = 1200;
    window.scrollTo({ top: scrollHeight - offset, behavior: "smooth" });
  }
};
_VolHeadingComponent.\u0275fac = function VolHeadingComponent_Factory(t) {
  return new (t || _VolHeadingComponent)();
};
_VolHeadingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolHeadingComponent, selectors: [["app-vol-heading"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "volunteer-volunteer-header-black"], [1, "volunteer-volunteer-header"], [1, "volunteer-text1"], [1, "volunteer-text2", "WHCFCBody"], ["src", "/assets/girl_volunteer.png", "alt", "WHCFC Volunteer Coach", 1, "volunteer-image1"], [1, "volunteer-button1", "volunteer-text3", "WHCFCButtonText", 3, "click"]], template: function VolHeadingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "span");
    \u0275\u0275text(4, "Volunteer With Us!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 3)(6, "span");
    \u0275\u0275text(7, " Join White Haven Football Club as a volunteer and make a positive impact in your community! This is a great opportunity to promote health, fitness, and community spirit while gaining experience and making new friends. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "img", 4);
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function VolHeadingComponent_Template_button_click_9_listener() {
      return ctx.scrollToBottom();
    });
    \u0275\u0275text(10, "APPLY NOW");
    \u0275\u0275elementEnd()()();
  }
}, styles: ["\n\n.volunteer-volunteer-header-black[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(0, 0, 0, 1);\n}\n.volunteer-volunteer-header[_ngcontent-%COMP%] {\n  top: 123px;\n  left: 188px;\n  width: 1065px;\n  height: 477px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text1[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 1);\n  width: 524px;\n  height: auto;\n  position: absolute;\n  font-size: 96px;\n  font-style: Bold;\n  text-align: left;\n  font-family: Outfit;\n  font-weight: 700;\n  line-height: normal;\n  font-stretch: normal;\n  text-decoration: none;\n}\n.volunteer-text2[_ngcontent-%COMP%] {\n  top: 307px;\n  color: rgba(255, 255, 255, 1);\n  width: 499px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-image1[_ngcontent-%COMP%] {\n  top: 70px;\n  left: 700px;\n  width: 600px;\n  height: 370px;\n  position: absolute;\n  border-radius: 30px;\n}\n.volunteer-button1[_ngcontent-%COMP%] {\n  gap: 10px;\n  top: 500px;\n  left: 100px;\n  display: flex;\n  padding: 29px 30px;\n  position: absolute;\n  align-items: center;\n  border-radius: 100px;\n  justify-content: center;\n  background-color: rgba(224, 212, 118, 1);\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.volunteer-button1[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 225, 255, 0.871);\n}\n.volunteer-text3[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n/*# sourceMappingURL=vol-heading.component.css.map */"] });
var VolHeadingComponent = _VolHeadingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolHeadingComponent, { className: "VolHeadingComponent", filePath: "src\\app\\components\\volunteer\\vol-heading\\vol-heading.component.ts", lineNumber: 10 });
})();

// src/app/components/volunteer/vol-opportunities/vol-opportunities.component.ts
var _VolOpportunitiesComponent = class _VolOpportunitiesComponent {
  scrollToBottom() {
    const scrollHeight = document.body.scrollHeight;
    const offset = 1200;
    window.scrollTo({ top: scrollHeight - offset, behavior: "smooth" });
  }
};
_VolOpportunitiesComponent.\u0275fac = function VolOpportunitiesComponent_Factory(t) {
  return new (t || _VolOpportunitiesComponent)();
};
_VolOpportunitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolOpportunitiesComponent, selectors: [["app-vol-opportunities"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 0, consts: [[1, "volunteer-discover-volunteering-opps"], [1, "volunteer-text1", "WHCFCH1"], [1, "volunteer-text2", "WHCFCBody"], [1, "volunteer-connect1"], [1, "volunteer-connect2"], [1, "volunteer-text3", "WHCFCSUBHEADING"], [1, "volunteer-text4", "WHCFCH2"], [1, "volunteer-text5", "WHCFCBody2"], ["src", "/assets/Shaun_meet.png", "alt", "Meeting up with Shaun", 1, "volunteer-Shaun"], [1, "volunteer-gain-experience"], [1, "volunteer-connect3"], [1, "volunteer-text6", "WHCFCSUBHEADING"], [1, "volunteer-text7", "WHCFCH2"], [1, "volunteer-text8", "WHCFCBody2"], ["src", "/assets/coaching.png", "alt", "Coach mentors team", 1, "volunteer-image2"], [1, "volunteer-support"], [1, "volunteer-connect4"], [1, "volunteer-text9", "WHCFCSUBHEADING"], [1, "volunteer-text10", "WHCFCH2"], [1, "volunteer-text11", "WHCFCBody2"], ["src", "/assets/canada_soccer.png", "alt", "Canadians playing soccer", 1, "volunteer-image3"], [1, "volunteer-middle-button"], [1, "volunteer-text12"], [1, "volunteer-text13"], [1, "volunteer-button1", "volunteer-text14", "WHCFCButtonText", 3, "click"]], template: function VolOpportunitiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "Discover Volunteer Opportunities for You!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "span");
    \u0275\u0275text(6, " We rely on volunteers to assist with scrimmages, coach young players, organize events, coordinate logistics, and handle administrative tasks. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "span", 5)(10, "span");
    \u0275\u0275text(11, "CONNECT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 6)(13, "span");
    \u0275\u0275text(14, "Network with Your Community Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 7)(16, "span");
    \u0275\u0275text(17, " Meet like-minded individuals who share your passion for soccer and community service to make meaningful friendships and develop a sense of belonging within the community. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "span", 11)(22, "span");
    \u0275\u0275text(23, "GAIN EXPERIENCE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 12)(25, "span");
    \u0275\u0275text(26, "Develop Your Skills in Event Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "span", 13)(28, "span");
    \u0275\u0275text(29, " Improve your communication, leadership and teamwork capabilities that are valuable in many areas of life and work. Enhance your problem-solving abilities, as you learn to handle unexpected challenges. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(30, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "span", 17)(34, "span");
    \u0275\u0275text(35, "MAKE A DIFFERENCE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "span", 18)(37, "span");
    \u0275\u0275text(38, "Support a great cause for Canadians");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span", 19)(40, "span");
    \u0275\u0275text(41, " Contribute to a non-for-profit organization dedicated to promoting community by helping us provide a positive and inclusive environment for players of all ages and skill levels. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(42, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21)(44, "span", 22)(45, "span");
    \u0275\u0275text(46, "ARE YOU INTERESTED?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "span", 23)(48, "span");
    \u0275\u0275text(49, "Join the movement shaping the future of soccer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 24);
    \u0275\u0275listener("click", function VolOpportunitiesComponent_Template_button_click_50_listener() {
      return ctx.scrollToBottom();
    });
    \u0275\u0275text(51, "APPLY NOW");
    \u0275\u0275elementEnd()();
  }
}, styles: ["\n\n.volunteer-discover-volunteering-opps[_ngcontent-%COMP%] {\n  top: 1000px;\n  width: 100vw;\n  height: 133px;\n  display: flex;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text1[_ngcontent-%COMP%] {\n  top: 1050px;\n  color: rgba(0, 0, 0, 1);\n  width: 1065px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text2[_ngcontent-%COMP%] {\n  top: 1150px;\n  color: rgba(0, 0, 0, 1);\n  width: 700px;\n  height: auto;\n  display: flex;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n}\n.volunteer-connect1[_ngcontent-%COMP%] {\n  top: 1307px;\n  left: 300px;\n  width: 1065px;\n  height: 295px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-connect2[_ngcontent-%COMP%] {\n  top: 20px;\n  left: 630px;\n  width: 435px;\n  height: 275px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text3[_ngcontent-%COMP%] {\n  color: rgba(67, 102, 230, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text4[_ngcontent-%COMP%] {\n  top: 38px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text5[_ngcontent-%COMP%] {\n  top: 147px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-Shaun[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  width: 525px;\n  height: 295px;\n  position: absolute;\n  border-radius: 30px;\n}\n.volunteer-gain-experience[_ngcontent-%COMP%] {\n  top: 1715px;\n  left: 300px;\n  width: 1065px;\n  height: 326px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-connect3[_ngcontent-%COMP%] {\n  top: 28px;\n  left: 0px;\n  width: 435px;\n  height: 275px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text6[_ngcontent-%COMP%] {\n  color: rgba(67, 102, 230, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text7[_ngcontent-%COMP%] {\n  top: 38px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text8[_ngcontent-%COMP%] {\n  top: 147px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-image2[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 540px;\n  width: 525px;\n  height: 326px;\n  position: absolute;\n  border-radius: 30px;\n}\n.volunteer-support[_ngcontent-%COMP%] {\n  top: 2121px;\n  left: 300px;\n  width: 1065px;\n  height: 314px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-connect4[_ngcontent-%COMP%] {\n  top: 30px;\n  left: 630px;\n  width: 435px;\n  height: 275px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text9[_ngcontent-%COMP%] {\n  color: rgba(67, 102, 230, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text10[_ngcontent-%COMP%] {\n  top: 38px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text11[_ngcontent-%COMP%] {\n  top: 147px;\n  color: rgba(0, 0, 0, 1);\n  width: 435px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-image3[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  width: 525px;\n  height: 314px;\n  position: absolute;\n  border-radius: 30px;\n}\n.volunteer-middle-button[_ngcontent-%COMP%] {\n  top: 2536px;\n  left: 300px;\n  width: 1066px;\n  height: 429px;\n  display: flex;\n  position: absolute;\n  background:\n    linear-gradient(\n      158deg,\n      rgba(146, 226, 93, 1) 0%,\n      rgba(95, 146, 182, 1) 65%,\n      rgba(67, 102, 230, 1) 100%);\n  align-items: flex-start;\n  flex-shrink: 1;\n  border-radius: 30px;\n}\n.volunteer-text12[_ngcontent-%COMP%] {\n  top: 60px;\n  left: 399px;\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  position: absolute;\n  font-size: 24px;\n  font-style: SemiBold;\n  text-align: center;\n  font-family: Outfit;\n  font-weight: 600;\n  line-height: normal;\n  font-stretch: normal;\n  text-decoration: none;\n}\n.volunteer-text13[_ngcontent-%COMP%] {\n  top: 122px;\n  left: 206px;\n  color: rgba(255, 255, 255, 1);\n  width: 648px;\n  height: auto;\n  position: absolute;\n  font-size: 48px;\n  font-style: Bold;\n  text-align: center;\n  font-family: Outfit;\n  font-weight: 700;\n  line-height: normal;\n  font-stretch: normal;\n  text-decoration: none;\n}\n.volunteer-button1[_ngcontent-%COMP%] {\n  gap: 10px;\n  top: 289px;\n  left: 405px;\n  display: flex;\n  padding: 29px 30px;\n  position: absolute;\n  align-items: center;\n  border-radius: 100px;\n  justify-content: center;\n  background-color: rgba(224, 212, 118, 1);\n  border: none;\n  transition: background-color 0.3s ease;\n}\n.volunteer-button1[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 225, 255, 0.871);\n}\n.volunteer-text14[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n/*# sourceMappingURL=vol-opportunities.component.css.map */"] });
var VolOpportunitiesComponent = _VolOpportunitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolOpportunitiesComponent, { className: "VolOpportunitiesComponent", filePath: "src\\app\\components\\volunteer\\vol-opportunities\\vol-opportunities.component.ts", lineNumber: 10 });
})();

// src/app/components/volunteer/vol-testimonials/vol-testimonials.component.ts
var _VolTestimonialsComponent = class _VolTestimonialsComponent {
};
_VolTestimonialsComponent.\u0275fac = function VolTestimonialsComponent_Factory(t) {
  return new (t || _VolTestimonialsComponent)();
};
_VolTestimonialsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolTestimonialsComponent, selectors: [["app-vol-testimonials"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 0, consts: [[1, "volunteer-testimonials"], [1, "volunteer-text1", "WHCFCSUBHEADING"], [1, "volunteer-text2", "WHCFCH1"], [1, "volunteer-cards-center"], [1, "volunteer-testimonial-card1"], [1, "volunteer-pic-name1"], ["src", "/assets/Michael.png", "alt", "Picture of Michael", 1, "volunteer-ellipse1"], [1, "volunteer-text3"], [1, "volunteer-text4", "WHCFCBody2"], [1, "volunteer-testimonial-card2"], [1, "volunteer-pic-name2"], ["src", "/assets/Geoff.png", "alt", "Picture of Geoff", 1, "volunteer-ellipse2"], [1, "volunteer-text5"], [1, "volunteer-text6", "WHCFCBody2"], [1, "volunteer-testimonial-card3"], [1, "volunteer-pic-name3"], ["src", "/assets/Will.png", "alt", "Picture of Will", 1, "volunteer-ellipse3"], [1, "volunteer-text7"], [1, "volunteer-text8", "WHCFCBody2"]], template: function VolTestimonialsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "TESTIMONIALS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "span");
    \u0275\u0275text(6, "Voices From Our Community");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 3)(8, "div", 4)(9, "div", 5);
    \u0275\u0275element(10, "img", 6);
    \u0275\u0275elementStart(11, "span", 7)(12, "span");
    \u0275\u0275text(13, "Michael F. Charles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 8)(15, "span");
    \u0275\u0275text(16, ' "Joining this club has been a game-changer for me. There is an amazing community and top-notch coaching!" ');
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 10);
    \u0275\u0275element(19, "img", 11);
    \u0275\u0275elementStart(20, "span", 12)(21, "span");
    \u0275\u0275text(22, "Geoffrey Goodfellow");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 13)(24, "span");
    \u0275\u0275text(25, ' "This club has brought out the best in my soccer skills and my confidence and it has been an incredible place to grow as a player and make lifelong friends." ');
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 15);
    \u0275\u0275element(28, "img", 16);
    \u0275\u0275elementStart(29, "span", 17)(30, "span");
    \u0275\u0275text(31, "Will Wong");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "span", 18)(33, "span");
    \u0275\u0275text(34, ' "A welcoming community and a supportive team atmosphere that truly fosters love for the game of soccer!" ');
    \u0275\u0275elementEnd()()()()()();
  }
}, styles: ["\n\n.volunteer-testimonials[_ngcontent-%COMP%] {\n  top: 3066px;\n  left: 0px;\n  width: 100vw;\n  height: 901px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(0, 0, 0, 1);\n}\n.volunteer-text1[_ngcontent-%COMP%] {\n  top: 32px;\n  color: rgba(146, 226, 93, 1);\n  width: 216px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text2[_ngcontent-%COMP%] {\n  top: 79px;\n  color: rgba(255, 255, 255, 1);\n  width: 685px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n  font-size: 3em;\n}\n.volunteer-cards-center[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: normal;\n}\n.volunteer-testimonial-card1[_ngcontent-%COMP%] {\n  top: 259px;\n  left: 300px;\n  width: 345px;\n  height: 582px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  justify-content: center;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(67, 102, 230, 1);\n  border-radius: 30px;\n}\n.volunteer-pic-name1[_ngcontent-%COMP%] {\n  top: 34px;\n  width: 249px;\n  height: 444px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text3[_ngcontent-%COMP%] {\n  top: 246px;\n  left: 25px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  font-size: 24px;\n  font-style: ExtraBold;\n  text-align: center;\n  font-family: Outfit;\n  font-weight: 800;\n  line-height: normal;\n  font-stretch: normal;\n}\n.volunteer-text4[_ngcontent-%COMP%] {\n  top: 316px;\n  color: rgba(255, 255, 255, 1);\n  width: 249px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n}\n.volunteer-ellipse1[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 23px;\n  width: 205px;\n  height: 206px;\n  position: absolute;\n}\n.volunteer-testimonial-card2[_ngcontent-%COMP%] {\n  top: 259px;\n  left: 660px;\n  width: 345px;\n  height: 582px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(67, 102, 230, 1);\n  border-radius: 30px;\n}\n.volunteer-pic-name2[_ngcontent-%COMP%] {\n  top: 34px;\n  left: 17px;\n  width: 309px;\n  height: 444px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text5[_ngcontent-%COMP%] {\n  top: 246px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  font-size: 24px;\n  font-style: ExtraBold;\n  text-align: center;\n  font-family: Outfit;\n  font-weight: 800;\n  line-height: normal;\n  font-stretch: normal;\n  text-decoration: none;\n}\n.volunteer-text6[_ngcontent-%COMP%] {\n  top: 316px;\n  left: 30px;\n  color: rgba(255, 255, 255, 1);\n  width: 249px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n}\n.volunteer-ellipse2[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 53px;\n  width: 205px;\n  height: 206px;\n  position: absolute;\n}\n.volunteer-testimonial-card3[_ngcontent-%COMP%] {\n  top: 259px;\n  left: 1020px;\n  width: 345px;\n  height: 582px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(67, 102, 230, 1);\n  border-radius: 30px;\n}\n.volunteer-pic-name3[_ngcontent-%COMP%] {\n  top: 34px;\n  left: 47px;\n  width: 249px;\n  height: 444px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text7[_ngcontent-%COMP%] {\n  top: 246px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  font-size: 24px;\n  font-style: ExtraBold;\n  text-align: center;\n  font-family: Outfit;\n  font-weight: 800;\n  line-height: normal;\n  font-stretch: normal;\n}\n.volunteer-text8[_ngcontent-%COMP%] {\n  top: 316px;\n  color: rgba(255, 255, 255, 1);\n  width: 249px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n}\n.volunteer-ellipse3[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 23px;\n  width: 205px;\n  height: 206px;\n  position: absolute;\n}\n/*# sourceMappingURL=vol-testimonials.component.css.map */"] });
var VolTestimonialsComponent = _VolTestimonialsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolTestimonialsComponent, { className: "VolTestimonialsComponent", filePath: "src\\app\\components\\volunteer\\vol-testimonials\\vol-testimonials.component.ts", lineNumber: 10 });
})();

// src/app/components/volunteer/vol-get-involved/vol-get-involved.component.ts
var _VolGetInvolvedComponent = class _VolGetInvolvedComponent {
};
_VolGetInvolvedComponent.\u0275fac = function VolGetInvolvedComponent_Factory(t) {
  return new (t || _VolGetInvolvedComponent)();
};
_VolGetInvolvedComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolGetInvolvedComponent, selectors: [["app-vol-get-involved"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 0, consts: [[1, "volunteer-get-involved"], [1, "volunteer-text1", "WHCFCH1"], [1, "volunteer-text2", "WHCFCSUBHEADING"], [1, "volunteer-text3", "WHCFCSUBHEADING"], [1, "volunteer-text4", "WHCFCSUBHEADING"], [1, "volunteer-text5", "WHCFCSUBHEADING"], [1, "volunteer-text6", "WHCFCSUBHEADING"], [1, "volunteer-text7", "WHCFCSUBHEADING"], [1, "volunteer-text8", "WHCFCSUBHEADING"], [1, "volunteer-text9", "WHCFCSUBHEADING"], [1, "volunteer-text10", "WHCFCSUBHEADING"], [1, "volunteer-text11", "WHCFCSUBHEADING"], [1, "volunteer-text12", "WHCFCSUBHEADING"], [1, "volunteer-text13", "WHCFCSUBHEADING"], ["src", "/assets/image132393-apxp-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image1"], ["src", "/assets/image142393-6vjk-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image2"], ["src", "/assets/image152393-92zj-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image3"], ["src", "/assets/image162393-6w9e-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image4"], ["src", "/assets/image172393-vq2s-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image5"], ["src", "/assets/image182393-sloi-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image6"], ["src", "/assets/image192393-trbh-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image7"], ["src", "/assets/image202393-8nw6-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image8"], ["src", "/assets/image222393-hb1k-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image9"], ["src", "/assets/image232393-yuy-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image10"], ["src", "/assets/image212393-8q78-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image11"], ["src", "/assets/image214793-8oq8-200h.png", "alt", "Ways to Get Involved", 1, "volunteer-image12"]], template: function VolGetInvolvedComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "How Can You Get Involved?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "span");
    \u0275\u0275text(6, "Coaching & Training");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 3)(8, "span");
    \u0275\u0275text(9, "Lead Fitness Programs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 4)(11, "span");
    \u0275\u0275text(12, "Referee Matches");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 5)(14, "span");
    \u0275\u0275text(15, "Become A Linesmen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 6)(17, "span");
    \u0275\u0275text(18, "Organize Tournaments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 7)(20, "span");
    \u0275\u0275text(21, "Manage Volunteers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 8)(23, "span");
    \u0275\u0275text(24, "Write Newsletters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 9)(26, "span");
    \u0275\u0275text(27, "Marketing & Promotions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span", 10)(29, "span");
    \u0275\u0275text(30, "Coordinate Logistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "span", 11)(32, "span");
    \u0275\u0275text(33, "Financial Budgeting");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "span", 12)(35, "span");
    \u0275\u0275text(36, "Fundraising & Sponsorships");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "span", 13)(38, "span");
    \u0275\u0275text(39, "Community Engagement");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "img", 14)(41, "img", 15)(42, "img", 16)(43, "img", 17)(44, "img", 18)(45, "img", 19)(46, "img", 20)(47, "img", 21)(48, "img", 22)(49, "img", 23)(50, "img", 24)(51, "img", 25);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.volunteer-get-involved[_ngcontent-%COMP%] {\n  top: 4020px;\n  left: 300px;\n  width: 1068px;\n  height: 627px;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.volunteer-text1[_ngcontent-%COMP%] {\n  left: 234px;\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text2[_ngcontent-%COMP%] {\n  top: 276px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text3[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 180px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text4[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 360px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text5[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 540px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text6[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 720px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text7[_ngcontent-%COMP%] {\n  top: 276px;\n  left: 902px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text8[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 2px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text9[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 180px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text10[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 362px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text11[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 542px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text12[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 720px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text13[_ngcontent-%COMP%] {\n  top: 567px;\n  left: 902px;\n  color: rgba(0, 0, 0, 1);\n  width: 165px;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-image1[_ngcontent-%COMP%] {\n  top: 112px;\n  left: 542px;\n  width: 164px;\n  height: 143px;\n  position: absolute;\n}\n.volunteer-image2[_ngcontent-%COMP%] {\n  top: 112px;\n  left: 180px;\n  width: 165px;\n  height: 132px;\n  position: absolute;\n}\n.volunteer-image3[_ngcontent-%COMP%] {\n  top: 93px;\n  left: 362px;\n  width: 165px;\n  height: 165px;\n  position: absolute;\n}\n.volunteer-image4[_ngcontent-%COMP%] {\n  top: 100px;\n  left: 727px;\n  width: 151px;\n  height: 151px;\n  position: absolute;\n}\n.volunteer-image5[_ngcontent-%COMP%] {\n  top: 93px;\n  left: 902px;\n  width: 166px;\n  height: 166px;\n  position: absolute;\n}\n.volunteer-image6[_ngcontent-%COMP%] {\n  top: 396px;\n  left: 0px;\n  width: 165px;\n  height: 141px;\n  position: absolute;\n}\n.volunteer-image7[_ngcontent-%COMP%] {\n  top: 381px;\n  left: 180px;\n  width: 165px;\n  height: 165px;\n  position: absolute;\n}\n.volunteer-image8[_ngcontent-%COMP%] {\n  top: 384px;\n  left: 362px;\n  width: 163px;\n  height: 163px;\n  position: absolute;\n}\n.volunteer-image9[_ngcontent-%COMP%] {\n  top: 397.583984375px;\n  left: 720px;\n  width: 165px;\n  height: 135px;\n  position: absolute;\n}\n.volunteer-image10[_ngcontent-%COMP%] {\n  top: 381px;\n  left: 902px;\n  width: 163px;\n  height: 163px;\n  position: absolute;\n}\n.volunteer-image11[_ngcontent-%COMP%] {\n  top: 385px;\n  left: 532px;\n  width: 170px;\n  height: 166px;\n  position: absolute;\n}\n.volunteer-image12[_ngcontent-%COMP%] {\n  top: 100px;\n  left: 2px;\n  width: 163px;\n  height: 161px;\n  position: absolute;\n}\n/*# sourceMappingURL=vol-get-involved.component.css.map */"] });
var VolGetInvolvedComponent = _VolGetInvolvedComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolGetInvolvedComponent, { className: "VolGetInvolvedComponent", filePath: "src\\app\\components\\volunteer\\vol-get-involved\\vol-get-involved.component.ts", lineNumber: 10 });
})();

// src/app/services/vol-apply-info.service.ts
var _VolApplyInfoService = class _VolApplyInfoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8000/api/vol-info";
  }
  sendContactForm(contactData) {
    return this.http.post(this.apiUrl, contactData);
  }
};
_VolApplyInfoService.\u0275fac = function VolApplyInfoService_Factory(t) {
  return new (t || _VolApplyInfoService)(\u0275\u0275inject(HttpClient));
};
_VolApplyInfoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VolApplyInfoService, factory: _VolApplyInfoService.\u0275fac, providedIn: "root" });
var VolApplyInfoService = _VolApplyInfoService;

// src/app/components/volunteer/vol-apply/vol-apply.component.ts
function VolApplyComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Form Submitted Successfully! ");
    \u0275\u0275elementEnd();
  }
}
var _VolApplyComponent = class _VolApplyComponent {
  constructor(volService) {
    this.volService = volService;
    this.volApplyInfo = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      category: "",
      message: ""
    };
    this.formSubmitted = false;
  }
  onSubmit(form) {
    if (form.valid) {
      this.formSubmitted = true;
      console.log("Form Data:", this.volApplyInfo);
      this.volService.sendContactForm(this.volApplyInfo).subscribe((response) => {
        console.log("Form submitted successfully", response);
      }, (error) => {
        console.log("Error sending message.", error);
      });
      form.resetForm();
    }
  }
};
_VolApplyComponent.\u0275fac = function VolApplyComponent_Factory(t) {
  return new (t || _VolApplyComponent)(\u0275\u0275directiveInject(VolApplyInfoService));
};
_VolApplyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolApplyComponent, selectors: [["app-vol-apply"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 6, consts: [["form", "ngForm"], [1, "volunteer-volunteer-application-form"], [1, "volunteer-text1", "WHCFCH1"], [1, "volunteer-text2", "WHCFCBody"], [1, "volunteer-text3", "WHCFCBody"], [3, "ngSubmit"], ["for", "firstName"], ["type", "first-name", "placeholder", "First Name", "name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], [1, "volunteer-text4", "WHCFCBody"], ["for", "lastName"], ["type", "last-name", "placeholder", "Last Name", "name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], [1, "volunteer-text5", "WHCFCBody"], ["for", "emailAddress"], ["type", "email-address", "placeholder", "Email Address", "name", "emailAddress", "required", "", 3, "ngModelChange", "ngModel"], [1, "volunteer-text6", "WHCFCBody"], ["for", "phoneNumber"], ["type", "phone-number", "placeholder", "(XXX) XXX - XXXX", "name", "phoneNumber", "required", "", 3, "ngModelChange", "ngModel"], [1, "volunteer-text7", "WHCFCBody"], [1, "form-group"], [1, "custom-select"], ["id", "options", "name", "options", "required", ""], ["value", "", "disabled", "", "selected", "", "required", "", 1, "placeholder"], ["value", "option1"], ["value", "option2"], ["value", "option3"], ["value", "option4"], ["value", "option5"], ["value", "option6"], ["value", "option7"], [1, "volunteer-text8", "WHCFCBody"], ["for", "message"], ["type", "message-content", "placeholder", "Message", "name", "message", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "volunteer-button1", "volunteer-text9", "WHCFCButtonText"], ["class", "success-message WHCFCSUBHEADING", 4, "ngIf"], [1, "success-message", "WHCFCSUBHEADING"]], template: function VolApplyComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2)(2, "span");
    \u0275\u0275text(3, "Apply Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 3)(5, "span");
    \u0275\u0275text(6, " If you are interested in becoming a volunteer for the White Haven Community Football Club, please submit the following form and our team will invite you to a phone interview to discuss your interests. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 4)(8, "span");
    \u0275\u0275text(9, "First Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 5, 0);
    \u0275\u0275listener("ngSubmit", function VolApplyComponent_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const form_r2 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(ctx.onSubmit(form_r2));
    });
    \u0275\u0275elementStart(12, "label", 6);
    \u0275\u0275text(13, "First Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function VolApplyComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.volApplyInfo.firstName, $event) || (ctx.volApplyInfo.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8)(16, "span");
    \u0275\u0275text(17, "Last Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 9);
    \u0275\u0275text(19, "Last Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function VolApplyComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.volApplyInfo.lastName, $event) || (ctx.volApplyInfo.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 11)(22, "span");
    \u0275\u0275text(23, "Email Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 12);
    \u0275\u0275text(25, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function VolApplyComponent_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.volApplyInfo.emailAddress, $event) || (ctx.volApplyInfo.emailAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 14)(28, "span");
    \u0275\u0275text(29, "Phone Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 15);
    \u0275\u0275text(31, "Phone Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function VolApplyComponent_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.volApplyInfo.phoneNumber, $event) || (ctx.volApplyInfo.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 17)(34, "span");
    \u0275\u0275text(35, "Category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 18)(37, "div", 19)(38, "select", 20)(39, "option", 21);
    \u0275\u0275text(40, "Select an Option");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 22);
    \u0275\u0275text(42, "Coaching & Training");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 23);
    \u0275\u0275text(44, "Fitness Programs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 24);
    \u0275\u0275text(46, "Referees/Linesmen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 25);
    \u0275\u0275text(48, "Marketing & Promotions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 26);
    \u0275\u0275text(50, "Logistics Coordination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 27);
    \u0275\u0275text(52, "Fundraising & Sponsorships");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 28);
    \u0275\u0275text(54, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "span", 29)(56, "span");
    \u0275\u0275text(57, "Message (Comments, Questions, Involvement Interest)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "label", 30);
    \u0275\u0275text(59, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function VolApplyComponent_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.volApplyInfo.message, $event) || (ctx.volApplyInfo.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 32);
    \u0275\u0275text(62, "SUBMIT");
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, VolApplyComponent_div_63_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx.volApplyInfo.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.volApplyInfo.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.volApplyInfo.emailAddress);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.volApplyInfo.phoneNumber);
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx.volApplyInfo.message);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.formSubmitted);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf], styles: ['\n\n.volunteer-volunteer-application-form[_ngcontent-%COMP%] {\n  top: 4742px;\n  left: 0px;\n  width: 100vw;\n  height: 1103px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(0, 0, 0, 1);\n}\n.volunteer-text1[_ngcontent-%COMP%] {\n  top: 33px;\n  left: 300px;\n  color: rgba(224, 212, 118, 1);\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.volunteer-text2[_ngcontent-%COMP%] {\n  top: 146px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  width: 1065px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 500;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   input[type=first-name][_ngcontent-%COMP%] {\n  top: 280px;\n  left: 300px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   input[type=last-name][_ngcontent-%COMP%] {\n  top: 280px;\n  left: 840px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   input[type=email-address][_ngcontent-%COMP%] {\n  top: 425px;\n  left: 300px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   input[type=phone-number][_ngcontent-%COMP%] {\n  top: 425px;\n  left: 840px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.volunteer-volunteer-application-form[_ngcontent-%COMP%]   input[type=message-content][_ngcontent-%COMP%] {\n  top: 700px;\n  left: 300px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 1040px;\n  height: 220px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  top: 550px;\n  left: 300px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n}\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: transparent;\n  width: 500px;\n  height: 58px;\n  padding: 12px 20px;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  font-size: 16px;\n  color: #333;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.74);\n  transition: background-color 0.3s ease;\n}\n.custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.custom-select[_ngcontent-%COMP%]:after {\n  content: "\\25bc";\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: #000000;\n}\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #666;\n}\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  background-color: #eaeaea;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option.placeholder[_ngcontent-%COMP%] {\n  color: rgb(255, 0, 0);\n}\n.volunteer-text3[_ngcontent-%COMP%] {\n  top: 240px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-text4[_ngcontent-%COMP%] {\n  top: 240px;\n  left: 840px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-text5[_ngcontent-%COMP%] {\n  top: 384px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-text6[_ngcontent-%COMP%] {\n  top: 384px;\n  left: 840px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-text7[_ngcontent-%COMP%] {\n  top: 518px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-text8[_ngcontent-%COMP%] {\n  top: 651px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.volunteer-button1[_ngcontent-%COMP%] {\n  border: none;\n  top: 956px;\n  left: 1140px;\n  display: flex;\n  padding: 29px 30px;\n  position: absolute;\n  align-items: center;\n  border-radius: 100px;\n  justify-content: center;\n  background-color: rgba(224, 212, 118, 1);\n  transition: background-color 0.3s ease;\n}\n.volunteer-button1[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 225, 255, 0.871);\n}\n.volunteer-text9[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.success-message[_ngcontent-%COMP%] {\n  border: none;\n  top: 956px;\n  left: 300px;\n  display: flex;\n  padding: 29px 30px;\n  position: absolute;\n  align-items: center;\n  color: rgb(255, 255, 255);\n  font-weight: 700;\n  color: rgba(146, 226, 93, 1);\n}\n/*# sourceMappingURL=vol-apply.component.css.map */'] });
var VolApplyComponent = _VolApplyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolApplyComponent, { className: "VolApplyComponent", filePath: "src\\app\\components\\volunteer\\vol-apply\\vol-apply.component.ts", lineNumber: 15 });
})();

// src/app/pages/volunteer/volunteer.component.ts
var _VolunteerComponent = class _VolunteerComponent {
};
_VolunteerComponent.\u0275fac = function VolunteerComponent_Factory(t) {
  return new (t || _VolunteerComponent)();
};
_VolunteerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VolunteerComponent, selectors: [["app-volunteer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "volunteer-container"], [1, "volunteer-volunteer"]], template: function VolunteerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-vol-heading")(3, "app-vol-opportunities")(4, "app-vol-testimonials")(5, "app-vol-get-involved")(6, "app-vol-apply");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [VolHeadingComponent, VolOpportunitiesComponent, VolTestimonialsComponent, VolGetInvolvedComponent, VolApplyComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.volunteer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  overflow: auto;\n  min-height: 100vh;\n  align-items: center;\n  flex-direction: column;\n}\n.volunteer-volunteer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5840px;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: flex-start;\n  flex-shrink: 0;\n  background-color: rgba(255, 255, 255, 1);\n}\n/*# sourceMappingURL=volunteer.component.css.map */"] });
var VolunteerComponent = _VolunteerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VolunteerComponent, { className: "VolunteerComponent", filePath: "src\\app\\pages\\volunteer\\volunteer.component.ts", lineNumber: 15 });
})();

// src/app/components/faq/faq-heading/faq-heading.component.ts
var _FaqHeadingComponent = class _FaqHeadingComponent {
};
_FaqHeadingComponent.\u0275fac = function FaqHeadingComponent_Factory(t) {
  return new (t || _FaqHeadingComponent)();
};
_FaqHeadingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqHeadingComponent, selectors: [["app-faq-heading"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "faqfaq-header"], [1, "faq-text1"], [1, "faq-text2", "WHCFCBody"], ["src", "/assets/faqs.png", "alt", "FAQs graphic", 1, "faq-image1"]], template: function FaqHeadingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "Frequently Asked Questions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "span");
    \u0275\u0275text(6, " You\u2019ll find the answers to our most asked questions below about our White Haven Community Football Club ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 3);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.faqfaq-header[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(0, 0, 0, 1);\n}\n.faq-text1[_ngcontent-%COMP%] {\n  top: 123px;\n  left: 188px;\n  color: rgba(255, 255, 255, 1);\n  width: 524px;\n  height: auto;\n  position: absolute;\n  font-size: 96px;\n  font-style: Bold;\n  text-align: left;\n  font-family: Outfit;\n  font-weight: 700;\n  line-height: normal;\n  font-stretch: normal;\n  text-decoration: none;\n}\n.faq-text2[_ngcontent-%COMP%] {\n  top: 645px;\n  left: 188px;\n  color: rgba(255, 255, 255, 1);\n  width: 499px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-image1[_ngcontent-%COMP%] {\n  top: 169px;\n  left: 851px;\n  width: 627px;\n  height: 398px;\n  position: absolute;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=faq-heading.component.css.map */"] });
var FaqHeadingComponent = _FaqHeadingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqHeadingComponent, { className: "FaqHeadingComponent", filePath: "src\\app\\components\\faq\\faq-heading\\faq-heading.component.ts", lineNumber: 10 });
})();

// src/app/components/faq/faq-core/faq-core.component.ts
var _c0 = (a0) => ({ "open": a0 });
function FaqCoreComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r4.answer);
  }
}
function FaqCoreComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275listener("click", function FaqCoreComponent_div_10_Template_div_click_1_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq(i_r2));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "\u25BC");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, FaqCoreComponent_div_10_div_6_Template, 3, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r4.question);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, faq_r4.isOpen));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", faq_r4.isOpen);
  }
}
var _FaqCoreComponent = class _FaqCoreComponent {
  constructor() {
    this.faqs = [
      {
        question: "What age groups does WHCFC support?",
        answer: "As a not-for-profit community organization, we offer programs for adults ranging from ages 18 and up.",
        isOpen: false
      },
      {
        question: "What equipment do I need to participate?",
        answer: "Each player will need to bring their own shin guards and their size-fitting soccer cleats. We can provide the team jersey.",
        isOpen: false
      },
      {
        question: "When do the practices and matches take place?",
        answer: "Free scrimmages occur on Sunday evenings and Wednesday evenings during the summer. Depending on match availability, we may have matches any day of the week usually outside of working hours.",
        isOpen: false
      },
      {
        question: "Where are the games played?",
        answer: "Our free scrimmages and practices take place at our home field at White Haven Park. For friendly matches, locations can be anywhere across the GTA and team members are responsible for their own transportation.",
        isOpen: false
      },
      {
        question: "What are fitness programs?",
        answer: "Fitness programs are tailored plans to enhance physical fitness, typically including exercises and workouts.",
        isOpen: false
      },
      {
        question: "What is coaching & training?",
        answer: "Coaching & training involve preparing individuals for competitive sports by improving their skills and fitness.",
        isOpen: false
      }
    ];
  }
  toggleFaq(index) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
  toggleAll(expand) {
    this.faqs.forEach((faq) => faq.isOpen = expand);
  }
};
_FaqCoreComponent.\u0275fac = function FaqCoreComponent_Factory(t) {
  return new (t || _FaqCoreComponent)();
};
_FaqCoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqCoreComponent, selectors: [["app-faq-core"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "faqfaq-core"], [1, "faq-text1", "WHCFCH1"], [1, "faq-text2", "WHCFCSUBHEADING"], [1, "faq-container"], [3, "click"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "faq-item"], [1, "faq-question", 3, "click"], [1, "arrow", 3, "ngClass"], ["class", "faq-answer", 4, "ngIf"], [1, "faq-answer"]], template: function FaqCoreComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "How can we help you?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function FaqCoreComponent_Template_button_click_6_listener() {
      return ctx.toggleAll(true);
    });
    \u0275\u0275text(7, "EXPAND ALL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function FaqCoreComponent_Template_button_click_8_listener() {
      return ctx.toggleAll(false);
    });
    \u0275\u0275text(9, "COLLAPSE ALL");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FaqCoreComponent_div_10_Template, 7, 5, "div", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.faqs);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n\n.faqfaq-core[_ngcontent-%COMP%] {\n  top: 1000px;\n  left: 0px;\n  width: 100vw;\n  height: 1044px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n}\n.faqfaq-core[_ngcontent-%COMP%]   input[type=search-faq][_ngcontent-%COMP%] {\n  top: 77px;\n  left: 600px;\n  padding: 10px;\n  border: black;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(209, 206, 206, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 490px;\n  height: 58px;\n}\n.faqfaq-core[_ngcontent-%COMP%]   input[type=search-faq][_ngcontent-%COMP%]::placeholder {\n  font-family:\n    FontAwesome,\n    Arial,\n    sans-serif;\n  content: "\\f002";\n}\n.faq-text1[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.faq-text2[_ngcontent-%COMP%] {\n  top: 179px;\n  left: 300px;\n  color: rgba(67, 102, 230, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n.faq-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n.faq-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: 5px solid #ccc;\n  padding: 10px;\n  border-radius: 10px;\n}\n.faq-question[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1100px;\n  justify-content: space-between;\n  cursor: pointer;\n  font-weight: bold;\n  color: black;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  width: 1100px;\n  background-color: #f9f9f9;\n}\n.arrow[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease;\n}\n.arrow.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.toggle-all[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  padding: 10px;\n  border: none;\n  cursor: pointer;\n  background-color: #007bff;\n  color: white;\n  border-radius: 10px;\n  font-weight: 700;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=faq-core.component.css.map */'] });
var FaqCoreComponent = _FaqCoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqCoreComponent, { className: "FaqCoreComponent", filePath: "src\\app\\components\\faq\\faq-core\\faq-core.component.ts", lineNumber: 11 });
})();

// src/app/components/faq/faq-miss/faq-miss.component.ts
var _FaqMissComponent = class _FaqMissComponent {
};
_FaqMissComponent.\u0275fac = function FaqMissComponent_Factory(t) {
  return new (t || _FaqMissComponent)();
};
_FaqMissComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqMissComponent, selectors: [["app-faq-miss"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 0, consts: [[1, "faq-faq-missing-form"], [1, "faq-text1", "WHCFCH1"], [1, "faq-text2", "WHCFCBody"], [1, "faq-text3", "WHCFCBody"], ["type", "first-name", "placeholder", "First Name", "required", ""], [1, "faq-text4", "WHCFCBody"], ["type", "last-name", "placeholder", "Last Name", "required", ""], [1, "faq-text5", "WHCFCBody"], ["type", "email-address", "placeholder", "Email Address", "required", ""], [1, "faq-text6", "WHCFCBody"], ["type", "phone-number", "placeholder", "(XXX) XXX - XXXX", "required", ""], [1, "faq-text7", "WHCFCBody"], ["type", "message-content", "placeholder", "Question?", "required", ""], [1, "faq-button1", "faq-text9", "WHCFCButtonText"]], template: function FaqMissComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1)(2, "span");
    \u0275\u0275text(3, "Did We Miss Anything?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 2)(5, "span");
    \u0275\u0275text(6, " If you have any further questions for the White Haven Community Football Club, please submit the following form and our team will reach out to you with an answer. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 3)(8, "span");
    \u0275\u0275text(9, "First Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form");
    \u0275\u0275element(11, "input", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 5)(13, "span");
    \u0275\u0275text(14, "Last Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "form");
    \u0275\u0275element(16, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 7)(18, "span");
    \u0275\u0275text(19, "Email Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "form");
    \u0275\u0275element(21, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 9)(23, "span");
    \u0275\u0275text(24, "Phone Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "form");
    \u0275\u0275element(26, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 11)(28, "span");
    \u0275\u0275text(29, "Question");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "form");
    \u0275\u0275element(31, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 13);
    \u0275\u0275text(33, "SUBMIT");
    \u0275\u0275elementEnd()();
  }
}, styles: ["\n\n.faq-faq-missing-form[_ngcontent-%COMP%] {\n  top: 2000px;\n  left: 0px;\n  width: 100vw;\n  height: 900px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  align-items: flex-start;\n  flex-shrink: 1;\n  background-color: rgba(0, 0, 0, 1);\n}\n.faq-text1[_ngcontent-%COMP%] {\n  top: 33px;\n  left: 300px;\n  color: rgba(224, 212, 118, 1);\n  height: auto;\n  position: absolute;\n  text-align: center;\n  line-height: normal;\n  font-weight: 700;\n}\n.faq-text2[_ngcontent-%COMP%] {\n  top: 146px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  width: 1065px;\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n  font-weight: 500;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   input[type=first-name][_ngcontent-%COMP%] {\n  top: 280px;\n  left: 300px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   input[type=last-name][_ngcontent-%COMP%] {\n  top: 280px;\n  left: 840px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   input[type=email-address][_ngcontent-%COMP%] {\n  top: 425px;\n  left: 300px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   input[type=phone-number][_ngcontent-%COMP%] {\n  top: 425px;\n  left: 840px;\n  height: 58px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 500px;\n}\n.faq-faq-missing-form[_ngcontent-%COMP%]   input[type=message-content][_ngcontent-%COMP%] {\n  top: 568px;\n  left: 300px;\n  padding: 10px;\n  border: none;\n  position: absolute;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.74);\n  margin-right: 10px;\n  font-size: 16px;\n  width: 1040px;\n  height: 116px;\n}\n.faq-text3[_ngcontent-%COMP%] {\n  top: 240px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-text4[_ngcontent-%COMP%] {\n  top: 240px;\n  left: 840px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-text5[_ngcontent-%COMP%] {\n  top: 384px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-text6[_ngcontent-%COMP%] {\n  top: 384px;\n  left: 840px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-text7[_ngcontent-%COMP%] {\n  top: 528px;\n  left: 300px;\n  color: rgba(255, 255, 255, 1);\n  height: auto;\n  position: absolute;\n  text-align: left;\n  line-height: normal;\n}\n.faq-button1[_ngcontent-%COMP%] {\n  border: none;\n  top: 725px;\n  left: 1140px;\n  display: flex;\n  padding: 29px 30px;\n  position: absolute;\n  align-items: center;\n  border-radius: 100px;\n  justify-content: center;\n  background-color: rgba(224, 212, 118, 1);\n  transition: background-color 0.3s ease;\n}\n.faq-button1[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 225, 255, 0.871);\n}\n.faq-text9[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 1);\n  height: auto;\n  text-align: left;\n  line-height: normal;\n  font-weight: 700;\n}\n/*# sourceMappingURL=faq-miss.component.css.map */"] });
var FaqMissComponent = _FaqMissComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqMissComponent, { className: "FaqMissComponent", filePath: "src\\app\\components\\faq\\faq-miss\\faq-miss.component.ts", lineNumber: 10 });
})();

// src/app/pages/faq/faq.component.ts
var _FaqComponent = class _FaqComponent {
};
_FaqComponent.\u0275fac = function FaqComponent_Factory(t) {
  return new (t || _FaqComponent)();
};
_FaqComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "faq-container"], [1, "faqfa-qs"]], template: function FaqComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-faq-heading")(3, "app-faq-core")(4, "app-faq-miss");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [FaqHeadingComponent, FaqCoreComponent, FaqMissComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.faq-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  min-height: 100vh;\n  align-items: center;\n  flex-direction: column;\n}\n.faqfa-qs[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2900px;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: flex-start;\n  flex-shrink: 0;\n  background-color: rgba(255, 255, 255, 1);\n}\n/*# sourceMappingURL=faq.component.css.map */"] });
var FaqComponent = _FaqComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\pages\\faq\\faq.component.ts", lineNumber: 13 });
})();

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:8000"
};

// src/app/services/email.service.ts
var _EmailService = class _EmailService {
  constructor(http) {
    this.http = http;
    this.url = environment.apiUrl;
  }
  sendContactForm(formData) {
    return this.http.post(this.url + "/send-email/contact", formData);
  }
};
_EmailService.\u0275fac = function EmailService_Factory(t) {
  return new (t || _EmailService)(\u0275\u0275inject(HttpClient));
};
_EmailService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
var EmailService = _EmailService;

// src/app/components/contact/contact.component.ts
var _ContactComponent = class _ContactComponent {
  constructor(emailService, fb) {
    this.emailService = emailService;
    this.fb = fb;
    this.contactForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      message: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendContactForm(this.contactForm.value).subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
  }
};
_ContactComponent.\u0275fac = function ContactComponent_Factory(t) {
  return new (t || _ContactComponent)(\u0275\u0275directiveInject(EmailService), \u0275\u0275directiveInject(FormBuilder));
};
_ContactComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 1, consts: [[1, "container", "mx-auto", "flex-grow", "px-28", "pt-10", "pb-20"], [1, "font-bold", "text-3xl", "text-center"], [1, "mt-3", "text-center"], [1, "mt-8", 3, "ngSubmit", "formGroup"], [1, "md:columns-2"], [1, "form-group", "mb-5"], ["for", "firstname", 1, "text-sm"], ["type", "text", "id", "firstname", "formControlName", "firstname", 1, "form-control", "w-full", "border-solid", "border-2", "border-gray", "rounded-lg", "p-1"], ["for", "lastname", 1, "text-sm"], ["type", "text", "id", "lastname", "formControlName", "lastname", 1, "form-control", "w-full", "border-solid", "border-2", "border-gray", "rounded-lg", "p-1"], ["for", "email", 1, "text-sm"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", "w-full", "border-solid", "border-2", "border-gray", "rounded-lg", "p-1"], [1, "form-group"], ["for", "phone", 1, "text-sm"], ["type", "phone", "id", "phone", "formControlName", "phone", 1, "form-control", "w-full", "border-solid", "border-2", "border-gray", "rounded-lg", "p-1"], ["for", "message", 1, "text-sm"], ["id", "message", "formControlName", "message", 1, "form-control", "w-full", "border-solid", "border-2", "border-gray", "rounded-lg", "min-h-20", "p-1"], ["type", "submit", 1, "btn", "btn-primary", "mt-10", "w-full", "h-10", "bg-blue-400", "rounded-md", "hover:bg-blue-500", "transition-all", "shadow-md", "text-lg", "font-bold", "text-white"]], template: function ContactComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Contact Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, " If you have any further questions for the White Haven Community Football Club, please submit the following form and our team will reach out to you with an answer. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label", 6);
    \u0275\u0275text(9, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br")(11, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "label", 8);
    \u0275\u0275text(14, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br")(16, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 4)(18, "div", 5)(19, "label", 10);
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "br")(22, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12)(24, "label", 13);
    \u0275\u0275text(25, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "br")(27, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "label", 15);
    \u0275\u0275text(30, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "br")(32, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 17);
    \u0275\u0275text(34, " Submit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.contactForm);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName] });
var ContactComponent = _ContactComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\components\\contact\\contact.component.ts", lineNumber: 17 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "volunteer", component: VolunteerComponent },
  { path: "faq", component: FaqComponent },
  { path: "contact-us", component: ContactComponent }
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DT7DYGH3.mjs.map
