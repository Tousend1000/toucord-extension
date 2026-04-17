import {injectQuery as __vite__injectQuery} from "/@vite/client";
import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/main.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
}
;
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
}
;

// src/main.ts
import {bootstrapApplication} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_platform-browser.js?v=909ddf94";

// src/app/app.config.ts
import {importProvidersFrom, provideBrowserGlobalErrorListeners} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {provideRouter, withInMemoryScrolling} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";

// src/app/features/auth/login/login.component.ts
import {Component as Component2, inject} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
import {Router, RouterLink} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";

// src/app/shared/validators/email.validator.ts
function emailValidator() {
    return (control) => {
        const value = control.value;
        if (!value)
            return null;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? null : {
            invalidEmail: true
        };
    }
    ;
}

// src/app/shared/validators/password.validator.ts
function passwordStrengthValidator() {
    return (control) => {
        const value = control.value;
        if (!value)
            return null;
        const errors = {
            hasUpper: /[A-Z]/.test(value),
            hasLower: /[a-z]/.test(value),
            hasNumber: /\d/.test(value),
            minLength: value.length >= 8
        };
        const valid = Object.values(errors).every(Boolean);
        return valid ? null : {
            passwordStrength: errors
        };
    }
    ;
}
function passwordRequiredValidator() {
    return (control) => {
        const value = control.value;
        if (!value || value.trim() === "") {
            return {
                passwordRequired: true
            };
        }
        return null;
    }
    ;
}

// src/app/shared/validators/text.validator.ts
function safeTextValidator() {
    const safePattern = /^[a-zA-Z0-9 .,!?@()_-]*$/;
    return (control) => {
        if (!control.value)
            return null;
        return safePattern.test(control.value) ? null : {
            unsafeCharacters: true
        };
    }
    ;
}

// src/app/features/auth/login/login.component.ts
import {firstValueFrom} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i06 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";

// src/app/core/services/notification/notification.service.ts
var notification_service_exports = {};
__export(notification_service_exports, {
    NotificationService: () => NotificationService
});
import {Injectable} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";

// src/app/shared/components/toast/toast.component.ts
import {CommonModule} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import {Component, Inject} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {MAT_SNACK_BAR_DATA} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_material_snack-bar.js?v=909ddf94";
import*as i0 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i1 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_material_snack-bar.js?v=909ddf94";
import*as i2 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
function ToastComponent_Case_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "img", 2);
    }
}
function ToastComponent_Case_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "img", 3);
    }
}
var ToastComponent = class _ToastComponent {
    snackBarRef;
    data;
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    close() {
        this.snackBarRef.dismiss();
    }
    static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ToastComponent)(i0.\u0275\u0275directiveInject(i1.MatSnackBarRef),i0.\u0275\u0275directiveInject(MAT_SNACK_BAR_DATA));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i0.\u0275\u0275defineComponent({
        type: _ToastComponent,
        selectors: [["app-toast"]],
        decls: 8,
        vars: 3,
        consts: [[1, "toast-container", 3, "ngClass"], [1, "toast-icon"], ["src", "../../../../assets/svgs/circle-close.svg", "alt", "error icon", 1, "icon"], ["src", "../../../../assets/svgs/success.svg", "alt", "success icon", 1, "icon"], [1, "toast-message"], [1, "toast-close", 3, "click"], ["src", "../../../../assets/svgs/close.svg", "alt", "Close"]],
        template: function ToastComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
                i0.\u0275\u0275conditionalCreate(2, ToastComponent_Case_2_Template, 1, 0, "img", 2)(3, ToastComponent_Case_3_Template, 1, 0, "img", 3);
                i0.\u0275\u0275elementEnd();
                i0.\u0275\u0275elementStart(4, "div", 4);
                i0.\u0275\u0275text(5);
                i0.\u0275\u0275elementEnd();
                i0.\u0275\u0275elementStart(6, "button", 5);
                i0.\u0275\u0275listener("click", function ToastComponent_Template_button_click_6_listener() {
                    return ctx.close();
                });
                i0.\u0275\u0275element(7, "img", 6);
                i0.\u0275\u0275elementEnd()();
            }
            if (rf & 2) {
                let tmp_1_0;
                i0.\u0275\u0275property("ngClass", ctx.data.type);
                i0.\u0275\u0275advance(2);
                i0.\u0275\u0275conditional((tmp_1_0 = ctx.data.type) === "error" ? 2 : tmp_1_0 === "success" ? 3 : -1);
                i0.\u0275\u0275advance(3);
                i0.\u0275\u0275textInterpolate1(" ", ctx.data.message, " ");
            }
        },
        dependencies: [CommonModule, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe],
        styles: ['\n\n.toast-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 18px 24px;\n  border-radius: 12px;\n  background: rgba(28, 28, 40, 0.9);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);\n  min-width: 400px;\n  max-width: 550px;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.toast-container.success[_ngcontent-%COMP%] {\n  border-left: 6px solid #2fbf71;\n}\n.toast-container.error[_ngcontent-%COMP%] {\n  border-left: 6px solid #ff4d4d;\n}\n.toast-container.info[_ngcontent-%COMP%] {\n  border-left: 6px solid #6c53b4;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.toast-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.toast-close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #ffffff;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  padding-right: 12px;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.4;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.15);\n}\n  .mdc-snackbar__surface {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  max-width: none !important;\n}\n.toast-container.error[_ngcontent-%COMP%], \n.toast-container.success[_ngcontent-%COMP%], \n.toast-container.info[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  transform: none !important;\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    transform: translateY(30px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.toast-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_toast-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n/*# sourceMappingURL=toast.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
            selector: "app-toast",
            imports: [CommonModule],
            template: `<div class="toast-container" [ngClass]="data.type">
  <div class="toast-icon">
    @switch (data.type) {
      @case ('error') {
        <img src="../../../../assets/svgs/circle-close.svg" class="icon" alt="error icon" />
      }

      @case ('success') {
        <img src="../../../../assets/svgs/success.svg" class="icon" alt="success icon" />
      }
    }
  </div>

  <div class="toast-message">
    {{ data.message }}
  </div>

  <button class="toast-close" (click)="close()">
    <img src="../../../../assets/svgs/close.svg" alt="Close" />
  </button>
</div>
`,
            styles: ['/* src/app/shared/components/toast/toast.component.css */\n.toast-container {\n  display: flex;\n  align-items: center;\n  padding: 18px 24px;\n  border-radius: 12px;\n  background: rgba(28, 28, 40, 0.9);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);\n  min-width: 400px;\n  max-width: 550px;\n  gap: 16px;\n  transition: all 0.3s ease;\n}\n.toast-container.success {\n  border-left: 6px solid #2fbf71;\n}\n.toast-container.error {\n  border-left: 6px solid #ff4d4d;\n}\n.toast-container.info {\n  border-left: 6px solid #6c53b4;\n}\n.toast-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.toast-icon img,\n.toast-close img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.toast-message {\n  flex-grow: 1;\n  color: #ffffff;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  padding-right: 12px;\n}\n.toast-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.4;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.toast-close:hover {\n  opacity: 1;\n  transform: scale(1.15);\n}\n::ng-deep .mdc-snackbar__surface {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  max-width: none !important;\n}\n.toast-container.error,\n.toast-container.success,\n.toast-container.info {\n  visibility: visible !important;\n  transform: none !important;\n}\n@keyframes toast-in {\n  from {\n    transform: translateY(30px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.toast-container {\n  animation: toast-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n/*# sourceMappingURL=toast.component.css.map */\n']
        }]
    }], () => [{
        type: i1.MatSnackBarRef
    }, {
        type: void 0,
        decorators: [{
            type: Inject,
            args: [MAT_SNACK_BAR_DATA]
        }]
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(ToastComponent, {
        className: "ToastComponent",
        filePath: "app/shared/components/toast/toast.component.ts",
        lineNumber: 13
    });
}
)();
( () => {
    const id = "app%2Fshared%2Fcomponents%2Ftoast%2Ftoast.component.ts%40ToastComponent";
    function ToastComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i0.\u0275\u0275replaceMetadata(ToastComponent, m.default, [i0, i2, i1], [CommonModule, MAT_SNACK_BAR_DATA, Component, Inject], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && ToastComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ToastComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/core/services/notification/notification.service.ts
import*as i02 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i12 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_material_snack-bar.js?v=909ddf94";
var NotificationService = class _NotificationService {
    snackBar;
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showError(message) {
        this.snackBar.openFromComponent(ToastComponent, {
            data: {
                message,
                type: "error"
            },
            duration: 2500,
            verticalPosition: "top",
            horizontalPosition: "center",
            panelClass: ["snackbar-error"]
        });
    }
    showSuccess(message) {
        this.snackBar.openFromComponent(ToastComponent, {
            data: {
                message,
                type: "success"
            },
            duration: 2500,
            verticalPosition: "top",
            horizontalPosition: "center",
            panelClass: ["snackbar-success"]
        });
    }
    showInfo(message) {
        this.snackBar.openFromComponent(ToastComponent, {
            data: {
                message,
                type: "info"
            },
            duration: 2500,
            verticalPosition: "top",
            horizontalPosition: "center",
            panelClass: ["snackbar-info"]
        });
    }
    static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NotificationService)(i02.\u0275\u0275inject(i12.MatSnackBar));
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i02.\u0275\u0275defineInjectable({
        token: _NotificationService,
        factory: _NotificationService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{
            providedIn: "root"
        }]
    }], () => [{
        type: i12.MatSnackBar
    }], null);
}
)();

// src/app/core/auth/authentication.service.ts
var authentication_service_exports = {};
__export(authentication_service_exports, {
    AuthService: () => AuthService
});
import {HttpHeaders} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";
import {Injectable as Injectable3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {catchError, throwError} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i04 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i13 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";

// src/app/core/auth/device-id.service.ts
import {Injectable as Injectable2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i03 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var DeviceIDService = class _DeviceIDService {
    storageKey = "device_id";
    getId() {
        let id = localStorage.getItem(this.storageKey);
        if (!id) {
            id = crypto.randomUUID();
            localStorage.setItem(this.storageKey, id);
        }
        return id;
    }
    static \u0275fac = function DeviceIDService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DeviceIDService)();
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i03.\u0275\u0275defineInjectable({
        token: _DeviceIDService,
        factory: _DeviceIDService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(DeviceIDService, [{
        type: Injectable2,
        args: [{
            providedIn: "root"
        }]
    }], null, null);
}
)();

// src/app/core/auth/authentication.service.ts
var AuthService = class _AuthService {
    http;
    deviceIDService;
    baseURL = "http://localhost:8080/api/v1/auth";
    constructor(http, deviceIDService) {
        this.http = http;
        this.deviceIDService = deviceIDService;
    }
    login(request) {
        const headers = new HttpHeaders({
            "X-Device-Id": this.deviceIDService.getId(),
            "Content-Type": "application/json"
        });
        return this.http.post(`${this.baseURL}/login`, request, {
            headers,
            withCredentials: true
        });
    }
    signup(request) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return this.http.post(`${this.baseURL}/signup`, request, {
            headers
        }).pipe(catchError( (error) => {
            return throwError( () => error.error);
        }
        ));
    }
    static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AuthService)(i04.\u0275\u0275inject(i13.HttpClient),i04.\u0275\u0275inject(DeviceIDService));
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i04.\u0275\u0275defineInjectable({
        token: _AuthService,
        factory: _AuthService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(AuthService, [{
        type: Injectable3,
        args: [{
            providedIn: "root"// Makes it globally accessable
        }]
    }], () => [{
        type: i13.HttpClient
    }, {
        type: DeviceIDService
    }], null);
}
)();

// src/app/core/auth/auth-state.service.ts
var auth_state_service_exports = {};
__export(auth_state_service_exports, {
    AuthStateService: () => AuthStateService
});
import {Injectable as Injectable4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i05 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var AuthStateService = class _AuthStateService {
    accessToken = null;
    userProfile = null;
    setAccessToken(token) {
        this.accessToken = token;
    }
    getAccessToken() {
        return this.accessToken;
    }
    setUserProfile(userProfile) {
        this.userProfile = userProfile;
    }
    getUserProfile() {
        return this.userProfile;
    }
    clear() {
        this.accessToken = null;
        this.userProfile = null;
    }
    isAuthenticated() {
        return this.accessToken !== null;
    }
    static \u0275fac = function AuthStateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AuthStateService)();
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i05.\u0275\u0275defineInjectable({
        token: _AuthStateService,
        factory: _AuthStateService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(AuthStateService, [{
        type: Injectable4,
        args: [{
            providedIn: "root"
        }]
    }], null, null);
}
)();

// src/app/features/auth/login/login.component.ts
import*as i4 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
var LoginComponent = class _LoginComponent {
    notification;
    authService;
    authStateService;
    constructor(notification, authService, authStateService) {
        this.notification = notification;
        this.authService = authService;
        this.authStateService = authStateService;
    }
    router = inject(Router);
    showPassword = false;
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    isFocused = {
        email: false,
        password: false
    };
    loginForm = new FormGroup({
        email: new FormControl("",[Validators.required, emailValidator(), safeTextValidator()]),
        password: new FormControl("",[Validators.required, passwordRequiredValidator(), safeTextValidator()])
    });
    async onSubmit() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.invalid) {
            const errorMessages = {
                email_required: "Please enter an email",
                email_invalidEmail: "Please enter a valid email",
                password_required: "Please enter a password"
            };
            const errors = [];
            Object.entries(this.loginForm.controls).forEach( ([controlName,control]) => {
                if (!control.errors)
                    return;
                Object.keys(control.errors).forEach( (errorKey) => {
                    const messageKey = `${controlName}_${errorKey}`;
                    errors.push(errorMessages[messageKey] ?? "Invalid input");
                }
                );
            }
            );
            if (errors.length > 0) {
                this.notification.showError(errors[0]);
            }
            return;
        }
        const {email, password} = this.loginForm.value;
        const loginData = {
            email,
            password
        };
        try {
            const response = await firstValueFrom(this.authService.login(loginData));
            console.log("Logged in successfully:", response);
            this.authStateService.setAccessToken(response.accessToken);
            let userProfile = {
                displayName: response.displayName || null,
                email: response.email,
                userID: response.userID,
                username: response.username,
                createdAt: response.createdAt,
                profilePicture: response.profilePicture,
                presence: "Online"// TODO: Update this to dynamically update based on the status
            };
            this.authStateService.setUserProfile(userProfile);
            this.notification.showSuccess("Successfully logged in!");
            await this.router.navigateByUrl("/home");
        } catch (err) {
            console.error("Login failed:", err);
            if (err.status === 401) {
                this.notification.showError("Email or password invalid.");
                this.loginForm.patchValue({
                    password: ""
                });
            } else {
                this.notification.showError("Unknown error, please try again later.");
            }
        }
    }
    static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LoginComponent)(i06.\u0275\u0275directiveInject(NotificationService),i06.\u0275\u0275directiveInject(AuthService),i06.\u0275\u0275directiveInject(AuthStateService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i06.\u0275\u0275defineComponent({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 35,
        vars: 11,
        consts: [[1, "login-container"], [1, "login-left"], [1, "login-text-container"], ["src", "../../../../assets/images/StarcordBannerPNG.png"], [1, "login-right"], [1, "loin-form-container"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["id", "login-text"], ["id", "signup-text"], ["routerLink", "/signup"], ["id", "font-user"], [1, "fa-regular", "fa-envelope"], ["id", "email-input", "type", "text", "placeholder", "Email", "formControlName", "email", 3, "focus", "blur"], ["id", "font-password"], ["id", "key-icon", 1, "fa-solid", "fa-key"], ["id", "password-input", "placeholder", "Password", "formControlName", "password", 3, "focus", "blur", "type"], ["type", "button", "id", "password-toggle", 3, "click"], [1, "fa-solid"], ["id", "submit-button", "type", "submit", 3, "disabled"], [1, "divider"], [1, "social-login"], ["href", "/auth/google", 1, "social-btn", "google"], ["src", "../../../../assets/svgs/google.svg", "alt", ""], ["href", "/auth/github", 1, "social-btn", "github"], ["src", "../../../../assets/svgs/github.svg", "alt", ""]],
        template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                i06.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
                i06.\u0275\u0275element(3, "img", 3);
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "form", 6);
                i06.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
                    return ctx.onSubmit();
                });
                i06.\u0275\u0275elementStart(7, "h1", 7);
                i06.\u0275\u0275text(8, "Log into an account");
                i06.\u0275\u0275elementEnd();
                i06.\u0275\u0275elementStart(9, "p", 8);
                i06.\u0275\u0275text(10, "Not a member? ");
                i06.\u0275\u0275elementStart(11, "a", 9);
                i06.\u0275\u0275text(12, "Create an account");
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(13, "div", 10);
                i06.\u0275\u0275element(14, "i", 11);
                i06.\u0275\u0275elementStart(15, "input", 12);
                i06.\u0275\u0275listener("focus", function LoginComponent_Template_input_focus_15_listener() {
                    return ctx.isFocused.email = true;
                })("blur", function LoginComponent_Template_input_blur_15_listener() {
                    return ctx.isFocused.email = false;
                });
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(16, "div", 13);
                i06.\u0275\u0275element(17, "i", 14);
                i06.\u0275\u0275elementStart(18, "input", 15);
                i06.\u0275\u0275listener("focus", function LoginComponent_Template_input_focus_18_listener() {
                    return ctx.isFocused.password = true;
                })("blur", function LoginComponent_Template_input_blur_18_listener() {
                    return ctx.isFocused.password = false;
                });
                i06.\u0275\u0275elementEnd();
                i06.\u0275\u0275elementStart(19, "button", 16);
                i06.\u0275\u0275listener("click", function LoginComponent_Template_button_click_19_listener() {
                    return ctx.togglePassword();
                });
                i06.\u0275\u0275element(20, "i", 17);
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(21, "button", 18);
                i06.\u0275\u0275text(22, " Let's Go! ");
                i06.\u0275\u0275elementEnd();
                i06.\u0275\u0275elementStart(23, "div", 19)(24, "span");
                i06.\u0275\u0275text(25, "Or log in with");
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(26, "div", 20)(27, "a", 21);
                i06.\u0275\u0275element(28, "img", 22);
                i06.\u0275\u0275elementStart(29, "span");
                i06.\u0275\u0275text(30, "Google");
                i06.\u0275\u0275elementEnd()();
                i06.\u0275\u0275elementStart(31, "a", 23);
                i06.\u0275\u0275element(32, "img", 24);
                i06.\u0275\u0275elementStart(33, "span");
                i06.\u0275\u0275text(34, "Github");
                i06.\u0275\u0275elementEnd()()()()()()();
            }
            if (rf & 2) {
                i06.\u0275\u0275advance(6);
                i06.\u0275\u0275property("formGroup", ctx.loginForm);
                i06.\u0275\u0275advance(9);
                i06.\u0275\u0275classProp("error-border", ctx.loginForm.controls.email.invalid && !ctx.isFocused.email && ctx.loginForm.controls.email.touched);
                i06.\u0275\u0275advance(3);
                i06.\u0275\u0275classProp("error-border", ctx.loginForm.controls.password.invalid && !ctx.isFocused.password && ctx.loginForm.controls.password.touched);
                i06.\u0275\u0275property("type", ctx.showPassword ? "text" : "password");
                i06.\u0275\u0275advance(2);
                i06.\u0275\u0275classProp("fa-eye", ctx.showPassword)("fa-eye-slash", !ctx.showPassword);
                i06.\u0275\u0275advance();
                i06.\u0275\u0275property("disabled", ctx.loginForm.invalid);
            }
        },
        dependencies: [RouterLink, FormsModule, i4.\u0275NgNoValidate, i4.NgSelectOption, i4.\u0275NgSelectMultipleOption, i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.RangeValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.SelectMultipleControlValueAccessor, i4.RadioControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i4.PatternValidator, i4.CheckboxRequiredValidator, i4.EmailValidator, i4.MinValidator, i4.MaxValidator, i4.NgModel, i4.NgModelGroup, i4.NgForm, ReactiveFormsModule, i4.FormControlDirective, i4.FormGroupDirective, i4.FormArrayDirective, i4.FormControlName, i4.FormGroupName, i4.FormArrayName],
        styles: ['@import "https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary-background-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  color: var(--primary-text-color);\n  font-family: "Roboto", sans-serif;\n}\n.login-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.login-left[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: calc(50% - 5px);\n  float: left;\n  background-color: var(--primary-background-color);\n  border-right-width: 0px;\n  border-right-color: var(--accent-color-gray);\n  border-right-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.login-right[_ngcontent-%COMP%] {\n  background-color: var(--primary-background-color);\n  height: 100vh;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loin-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#login-text[_ngcontent-%COMP%] {\n  font-family: "Google Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n  font-size: 3rem;\n  margin-bottom: 0;\n}\n#signup-text[_ngcontent-%COMP%] {\n  color: var(--secondary-text-color);\n}\na[_ngcontent-%COMP%] {\n  color: var(--accent-color-light-gray);\n  text-decoration: dashed;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  color: var(--accent-color-light-gray);\n  background-color: var(--secondary-color-2);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  margin-bottom: 20px;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  color: var(--primary-text-color);\n  border: 1px solid var(--accent-color-light-gray);\n}\n#submit-button[_ngcontent-%COMP%] {\n  width: 40%;\n  min-width: 280px;\n  height: 50px;\n  background-color: var(--login-button-background-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n}\n#submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #4a4a4a;\n  color: #a0a0a0;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n#submit-button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: var(--login-button-background-hover-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);\n}\n#font-user[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n#font-user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%]   #key-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-11px);\n}\n#font-password[_ngcontent-%COMP%]   #password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-9px);\n}\n#font-user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n  padding-right: 45px;\n}\n.error-border[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--error-color) !important;\n}\n.divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: var(--accent-color-light-gray);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n}\n.divider[_ngcontent-%COMP%]::before, \n.divider[_ngcontent-%COMP%]::after {\n  background: var(--accent-color-light-gray);\n  height: 2px;\n  flex: 1;\n  content: "";\n}\n.divider[_ngcontent-%COMP%]::before {\n  margin-right: 20px;\n}\n.divider[_ngcontent-%COMP%]::after {\n  margin-left: 20px;\n}\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 40%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  padding: 12px 50px;\n  border: 2px solid var(--accent-color-light-gray);\n  border-radius: 6px;\n  color: var(--primary-text-color);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.15s ease;\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.06);\n  border-color: var(--primary-text-color);\n  transform: translateY(-1px);\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=login.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(LoginComponent, [{
        type: Component2,
        args: [{
            selector: "app-login",
            imports: [RouterLink, FormsModule, ReactiveFormsModule],
            template: `<div class="login-container">
  <div class="login-left">
    <div class="login-text-container">
      <img src="../../../../assets/images/StarcordBannerPNG.png" />
    </div>
  </div>
  <div class="login-right">
    <div class="loin-form-container">
      <form class="login-form" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <h1 id="login-text">Log into an account</h1>
        <p id="signup-text">Not a member? <a routerLink="/signup">Create an account</a></p>
        <div id="font-user">
          <i class="fa-regular fa-envelope"></i>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            formControlName="email"
            (focus)="isFocused.email = true"
            (blur)="isFocused.email = false"
            [class.error-border]="
              loginForm.controls.email.invalid &&
              !isFocused.email &&
              loginForm.controls.email.touched
            "
          />
        </div>
        <div id="font-password">
          <i class="fa-solid fa-key" id="key-icon"></i>
          <input
            id="password-input"
            [type]="showPassword ? 'text' : 'password'"
            placeholder="Password"
            formControlName="password"
            (focus)="isFocused.password = true"
            (blur)="isFocused.password = false"
            [class.error-border]="
              loginForm.controls.password.invalid &&
              !isFocused.password &&
              loginForm.controls.password.touched
            "
          />
          <button type="button" id="password-toggle" (click)="togglePassword()">
            <i
              class="fa-solid"
              [class.fa-eye]="showPassword"
              [class.fa-eye-slash]="!showPassword"
            ></i>
          </button>
        </div>
        <button
          id="submit-button"
          type="submit"
          [disabled]="loginForm.invalid">
          Let's Go!
        </button>
        <div class="divider">
          <span>Or log in with</span>
        </div>
        <div class="social-login">
          <a href="/auth/google" class="social-btn google">
            <img src="../../../../assets/svgs/google.svg" alt="" />
            <span>Google</span>
          </a>

          <a href="/auth/github" class="social-btn github">
            <img src="../../../../assets/svgs/github.svg" alt="" />
            <span>Github</span>
          </a>
        </div>
      </form>
    </div>
  </div>
</div>
`,
            styles: ['@import "https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap";\n\n/* src/app/features/auth/login/login.component.css */\n:host {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary-background-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  color: var(--primary-text-color);\n  font-family: "Roboto", sans-serif;\n}\n.login-container {\n  height: 100vh;\n}\n.login-left {\n  height: 100vh;\n  width: calc(50% - 5px);\n  float: left;\n  background-color: var(--primary-background-color);\n  border-right-width: 0px;\n  border-right-color: var(--accent-color-gray);\n  border-right-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-left img {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.login-right {\n  background-color: var(--primary-background-color);\n  height: 100vh;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loin-form-container {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#login-text {\n  font-family: "Google Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n  font-size: 3rem;\n  margin-bottom: 0;\n}\n#signup-text {\n  color: var(--secondary-text-color);\n}\na {\n  color: var(--accent-color-light-gray);\n  text-decoration: dashed;\n}\n.login-form input {\n  width: 40%;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  color: var(--accent-color-light-gray);\n  background-color: var(--secondary-color-2);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  margin-bottom: 20px;\n}\n.login-form input:focus {\n  color: var(--primary-text-color);\n  border: 1px solid var(--accent-color-light-gray);\n}\n#submit-button {\n  width: 40%;\n  min-width: 280px;\n  height: 50px;\n  background-color: var(--login-button-background-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n}\n#submit-button:disabled {\n  background-color: #4a4a4a;\n  color: #a0a0a0;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n#submit-button:not(:disabled):hover {\n  background-color: var(--login-button-background-hover-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);\n}\n#font-user,\n#font-password {\n  position: relative;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n#font-user i,\n#font-password #key-icon {\n  position: absolute;\n  left: 12px;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-11px);\n}\n#font-password #password-toggle {\n  position: absolute;\n  right: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-9px);\n}\n#font-user input,\n#font-password input {\n  width: 100%;\n  padding-left: 40px;\n  padding-right: 45px;\n}\n.error-border {\n  border-bottom: 2px solid var(--error-color) !important;\n}\n.divider {\n  margin-top: 20px;\n  color: var(--accent-color-light-gray);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n}\n.divider::before,\n.divider::after {\n  background: var(--accent-color-light-gray);\n  height: 2px;\n  flex: 1;\n  content: "";\n}\n.divider::before {\n  margin-right: 20px;\n}\n.divider::after {\n  margin-left: 20px;\n}\n.social-login {\n  margin-top: 20px;\n  width: 40%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n}\n.social-login .social-btn {\n  padding: 12px 50px;\n  border: 2px solid var(--accent-color-light-gray);\n  border-radius: 6px;\n  color: var(--primary-text-color);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.15s ease;\n}\n.social-login .social-btn:hover {\n  background-color: rgba(255, 255, 255, 0.06);\n  border-color: var(--primary-text-color);\n  transform: translateY(-1px);\n}\n.social-login .social-btn:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=login.component.css.map */\n']
        }]
    }], () => [{
        type: NotificationService
    }, {
        type: AuthService
    }, {
        type: AuthStateService
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(LoginComponent, {
        className: "LoginComponent",
        filePath: "app/features/auth/login/login.component.ts",
        lineNumber: 26
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fauth%2Flogin%2Flogin.component.ts%40LoginComponent";
    function LoginComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i06.\u0275\u0275replaceMetadata(LoginComponent, m.default, [i06, i4, notification_service_exports, authentication_service_exports, auth_state_service_exports], [RouterLink, FormsModule, ReactiveFormsModule, Component2], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && LoginComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoginComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/auth/signup/signup.component.ts
import {Component as Component3, inject as inject2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {FormControl as FormControl2, FormGroup as FormGroup2, FormsModule as FormsModule2, ReactiveFormsModule as ReactiveFormsModule2, Validators as Validators2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
import {Router as Router2, RouterLink as RouterLink2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import {firstValueFrom as firstValueFrom2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";

// src/app/shared/utils/api-error.guard.ts
function isApiError(error) {
    return !!error && typeof error === "object" && "errorCode"in error && "message"in error && "status"in error;
}

// src/app/features/auth/signup/signup.component.ts
import*as i07 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i42 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
var SignupComponent = class _SignupComponent {
    notification;
    authService;
    authStateService;
    constructor(notification, authService, authStateService) {
        this.notification = notification;
        this.authService = authService;
        this.authStateService = authStateService;
    }
    router = inject2(Router2);
    signupForm = new FormGroup2({
        email: new FormControl2("",[Validators2.required, emailValidator(), safeTextValidator()]),
        displayName: new FormControl2("",[safeTextValidator()]),
        username: new FormControl2("",[Validators2.required, safeTextValidator()]),
        password: new FormControl2("",[Validators2.required, passwordRequiredValidator(), passwordStrengthValidator(), safeTextValidator()])
    });
    showPassword = false;
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    isFocused = {
        email: false,
        displayName: false,
        username: false,
        password: false
    };
    async onSubmit() {
        this.signupForm.markAllAsTouched();
        if (this.signupForm.invalid) {
            const errorMessages = {
                email_required: "Please enter an email",
                email_invalidEmail: "Please enter a valid email",
                password_required: "Please enter a password",
                password_strength: "Please input a stronger password"
            };
            const errors = [];
            Object.entries(this.signupForm.controls).forEach( ([controlName,control]) => {
                if (!control.errors)
                    return;
                Object.keys(control.errors).forEach( (errorKey) => {
                    const messageKey = `${controlName}_${errorKey}`;
                    errors.push(errorMessages[messageKey] ?? "Invalid input");
                }
                );
            }
            );
            if (errors.length > 0) {
                this.notification.showError(errors[0]);
            }
            return;
        }
        const {username, password, email, displayName} = this.signupForm.value;
        const signupData = {
            username,
            password,
            email,
            displayName
        };
        try {
            const response = await firstValueFrom2(this.authService.signup(signupData));
            this.notification.showSuccess("Account created successfully");
            this.router.navigateByUrl("/login");
        } catch (err) {
            if (isApiError(err)) {
                this.notification.showError(err.message);
            } else {
                this.notification.showError("An Unknown error occoured");
            }
        }
    }
    static \u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SignupComponent)(i07.\u0275\u0275directiveInject(NotificationService),i07.\u0275\u0275directiveInject(AuthService),i07.\u0275\u0275directiveInject(AuthStateService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i07.\u0275\u0275defineComponent({
        type: _SignupComponent,
        selectors: [["app-signup"]],
        decls: 41,
        vars: 15,
        consts: [[1, "signup-container"], [1, "signup-left"], [1, "login-text-container"], ["src", "../../../../assets/images/StarcordBannerPNG.png"], [1, "signup-right"], [1, "signup-form-container"], [1, "signup-form", 3, "ngSubmit", "formGroup"], ["id", "signup-text"], ["id", "login-text"], ["routerLink", "/login"], ["id", "font-email"], [1, "fa-regular", "fa-envelope"], ["id", "email-input", "type", "text", "placeholder", "Email", "formControlName", "email", 3, "focus", "blur"], ["id", "font-display"], [1, "fa-regular", "fa-address-card"], ["id", "display-input", "type", "text", "placeholder", "Display name", "formControlName", "displayName", 3, "focus", "blur"], ["id", "font-username"], [1, "fa-regular", "fa-user"], ["id", "username-input", "type", "text", "placeholder", "Username", "formControlName", "username", 3, "focus", "blur"], ["id", "font-password"], ["id", "key-icon", 1, "fa-solid", "fa-key"], ["id", "password-input", "placeholder", "Password", "formControlName", "password", 3, "focus", "blur", "type"], ["type", "button", "id", "password-toggle", 3, "click"], [1, "fa-solid"], ["id", "submit-button", "type", "submit", 3, "disabled"], [1, "divider"], [1, "social-login"], ["href", "/auth/google", 1, "social-btn", "google"], ["src", "../../../../assets/svgs/google.svg", "alt", ""], ["href", "/auth/github", 1, "social-btn", "github"], ["src", "../../../../assets/svgs/github.svg", "alt", ""]],
        template: function SignupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i07.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
                i07.\u0275\u0275element(3, "img", 3);
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "form", 6);
                i07.\u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() {
                    return ctx.onSubmit();
                });
                i07.\u0275\u0275elementStart(7, "h1", 7);
                i07.\u0275\u0275text(8, "Create a new account");
                i07.\u0275\u0275elementEnd();
                i07.\u0275\u0275elementStart(9, "p", 8);
                i07.\u0275\u0275text(10, "Already have an account? ");
                i07.\u0275\u0275elementStart(11, "a", 9);
                i07.\u0275\u0275text(12, "Login");
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(13, "div", 10);
                i07.\u0275\u0275element(14, "i", 11);
                i07.\u0275\u0275elementStart(15, "input", 12);
                i07.\u0275\u0275listener("focus", function SignupComponent_Template_input_focus_15_listener() {
                    return ctx.isFocused.email = true;
                })("blur", function SignupComponent_Template_input_blur_15_listener() {
                    return ctx.isFocused.email = false;
                });
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(16, "div", 13);
                i07.\u0275\u0275element(17, "i", 14);
                i07.\u0275\u0275elementStart(18, "input", 15);
                i07.\u0275\u0275listener("focus", function SignupComponent_Template_input_focus_18_listener() {
                    return ctx.isFocused.displayName = true;
                })("blur", function SignupComponent_Template_input_blur_18_listener() {
                    return ctx.isFocused.displayName = false;
                });
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(19, "div", 16);
                i07.\u0275\u0275element(20, "i", 17);
                i07.\u0275\u0275elementStart(21, "input", 18);
                i07.\u0275\u0275listener("focus", function SignupComponent_Template_input_focus_21_listener() {
                    return ctx.isFocused.username = true;
                })("blur", function SignupComponent_Template_input_blur_21_listener() {
                    return ctx.isFocused.username = false;
                });
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(22, "div", 19);
                i07.\u0275\u0275element(23, "i", 20);
                i07.\u0275\u0275elementStart(24, "input", 21);
                i07.\u0275\u0275listener("focus", function SignupComponent_Template_input_focus_24_listener() {
                    return ctx.isFocused.password = true;
                })("blur", function SignupComponent_Template_input_blur_24_listener() {
                    return ctx.isFocused.password = false;
                });
                i07.\u0275\u0275elementEnd();
                i07.\u0275\u0275elementStart(25, "button", 22);
                i07.\u0275\u0275listener("click", function SignupComponent_Template_button_click_25_listener() {
                    return ctx.togglePassword();
                });
                i07.\u0275\u0275element(26, "i", 23);
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(27, "button", 24);
                i07.\u0275\u0275text(28, " Let's Go! ");
                i07.\u0275\u0275elementEnd();
                i07.\u0275\u0275elementStart(29, "div", 25)(30, "span");
                i07.\u0275\u0275text(31, "Or log in with");
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(32, "div", 26)(33, "a", 27);
                i07.\u0275\u0275element(34, "img", 28);
                i07.\u0275\u0275elementStart(35, "span");
                i07.\u0275\u0275text(36, "Google");
                i07.\u0275\u0275elementEnd()();
                i07.\u0275\u0275elementStart(37, "a", 29);
                i07.\u0275\u0275element(38, "img", 30);
                i07.\u0275\u0275elementStart(39, "span");
                i07.\u0275\u0275text(40, "Github");
                i07.\u0275\u0275elementEnd()()()()()()();
            }
            if (rf & 2) {
                i07.\u0275\u0275advance(6);
                i07.\u0275\u0275property("formGroup", ctx.signupForm);
                i07.\u0275\u0275advance(9);
                i07.\u0275\u0275classProp("error-border", ctx.signupForm.controls.email.invalid && !ctx.isFocused.email && ctx.signupForm.controls.email.touched);
                i07.\u0275\u0275advance(3);
                i07.\u0275\u0275classProp("error-border", ctx.signupForm.controls.displayName.invalid && !ctx.isFocused.username && ctx.signupForm.controls.displayName.touched);
                i07.\u0275\u0275advance(3);
                i07.\u0275\u0275classProp("error-border", ctx.signupForm.controls.username.invalid && !ctx.isFocused.username && ctx.signupForm.controls.username.touched);
                i07.\u0275\u0275advance(3);
                i07.\u0275\u0275classProp("error-border", ctx.signupForm.controls.password.invalid && !ctx.isFocused.password && ctx.signupForm.controls.password.touched);
                i07.\u0275\u0275property("type", ctx.showPassword ? "text" : "password");
                i07.\u0275\u0275advance(2);
                i07.\u0275\u0275classProp("fa-eye", ctx.showPassword)("fa-eye-slash", !ctx.showPassword);
                i07.\u0275\u0275advance();
                i07.\u0275\u0275property("disabled", ctx.signupForm.invalid);
            }
        },
        dependencies: [RouterLink2, FormsModule2, i42.\u0275NgNoValidate, i42.NgSelectOption, i42.\u0275NgSelectMultipleOption, i42.DefaultValueAccessor, i42.NumberValueAccessor, i42.RangeValueAccessor, i42.CheckboxControlValueAccessor, i42.SelectControlValueAccessor, i42.SelectMultipleControlValueAccessor, i42.RadioControlValueAccessor, i42.NgControlStatus, i42.NgControlStatusGroup, i42.RequiredValidator, i42.MinLengthValidator, i42.MaxLengthValidator, i42.PatternValidator, i42.CheckboxRequiredValidator, i42.EmailValidator, i42.MinValidator, i42.MaxValidator, i42.NgModel, i42.NgModelGroup, i42.NgForm, ReactiveFormsModule2, i42.FormControlDirective, i42.FormGroupDirective, i42.FormArrayDirective, i42.FormControlName, i42.FormGroupName, i42.FormArrayName],
        styles: ['@import "https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary-background-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  color: var(--primary-text-color);\n  font-family: "Roboto", sans-serif;\n}\n.signup-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.signup-left[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: calc(50% - 5px);\n  float: left;\n  background-color: var(--primary-background-color);\n  border-right-width: 0px;\n  border-right-color: var(--accent-color-gray);\n  border-right-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.signup-right[_ngcontent-%COMP%] {\n  background-color: var(--primary-background-color);\n  height: 100vh;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#signup-text[_ngcontent-%COMP%] {\n  font-family: "Google Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n  font-size: 3rem;\n  margin-bottom: 0;\n}\n#login-text[_ngcontent-%COMP%] {\n  color: var(--secondary-text-color);\n}\na[_ngcontent-%COMP%] {\n  color: var(--accent-color-light-gray);\n  text-decoration: dashed;\n}\n.signup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  color: var(--accent-color-light-gray);\n  background-color: var(--secondary-color-2);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  margin-bottom: 20px;\n}\n.signup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  color: var(--primary-text-color);\n  border: 1px solid var(--accent-color-light-gray);\n}\n#submit-button[_ngcontent-%COMP%] {\n  width: 40%;\n  min-width: 280px;\n  height: 50px;\n  background-color: var(--login-button-background-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n}\n#submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #4a4a4a;\n  color: #a0a0a0;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n#submit-button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: var(--login-button-background-hover-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);\n}\n#font-email[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%], \n#font-display[_ngcontent-%COMP%], \n#font-username[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n#font-email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%]   #key-icon[_ngcontent-%COMP%], \n#font-username[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n#font-display[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-11px);\n}\n#font-password[_ngcontent-%COMP%]   #password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-9px);\n}\n#font-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n#font-password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n#font-username[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n#font-display[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n  padding-right: 45px;\n}\n.error-border[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--error-color) !important;\n}\n.divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: var(--accent-color-light-gray);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n}\n.divider[_ngcontent-%COMP%]::before, \n.divider[_ngcontent-%COMP%]::after {\n  background: var(--accent-color-light-gray);\n  height: 2px;\n  flex: 1;\n  content: "";\n}\n.divider[_ngcontent-%COMP%]::before {\n  margin-right: 20px;\n}\n.divider[_ngcontent-%COMP%]::after {\n  margin-left: 20px;\n}\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 40%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  padding: 12px 50px;\n  border: 2px solid var(--accent-color-light-gray);\n  border-radius: 6px;\n  color: var(--primary-text-color);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.15s ease;\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.06);\n  border-color: var(--primary-text-color);\n  transform: translateY(-1px);\n}\n.social-login[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=signup.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(SignupComponent, [{
        type: Component3,
        args: [{
            selector: "app-signup",
            imports: [RouterLink2, FormsModule2, ReactiveFormsModule2],
            template: `<div class="signup-container">
  <div class="signup-left">
    <div class="login-text-container">
      <img src="../../../../assets/images/StarcordBannerPNG.png" />
    </div>
  </div>
  <div class="signup-right">
    <div class="signup-form-container">
      <form class="signup-form" [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <h1 id="signup-text">Create a new account</h1>
        <p id="login-text">Already have an account? <a routerLink="/login">Login</a></p>
        <div id="font-email">
          <i class="fa-regular fa-envelope"></i>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            formControlName="email"
            (focus)="isFocused.email = true"
            (blur)="isFocused.email = false"
            [class.error-border]="
              signupForm.controls.email.invalid &&
              !isFocused.email &&
              signupForm.controls.email.touched
            "
          />
        </div>
        <div id="font-display">
          <i class="fa-regular fa-address-card"></i>
          <input
            id="display-input"
            type="text"
            placeholder="Display name"
            formControlName="displayName"
            (focus)="isFocused.displayName = true"
            (blur)="isFocused.displayName = false"
            [class.error-border]="
              signupForm.controls.displayName.invalid &&
              !isFocused.username &&
              signupForm.controls.displayName.touched
            "
          />
        </div>
        <div id="font-username">
          <i class="fa-regular fa-user"></i>
          <input
            id="username-input"
            type="text"
            placeholder="Username"
            formControlName="username"
            (focus)="isFocused.username = true"
            (blur)="isFocused.username = false"
            [class.error-border]="
              signupForm.controls.username.invalid &&
              !isFocused.username &&
              signupForm.controls.username.touched
            "
          />
        </div>
        <div id="font-password">
          <i class="fa-solid fa-key" id="key-icon"></i>
          <input
            id="password-input"
            [type]="showPassword ? 'text' : 'password'"
            placeholder="Password"
            formControlName="password"
            (focus)="isFocused.password = true"
            (blur)="isFocused.password = false"
            [class.error-border]="
              signupForm.controls.password.invalid &&
              !isFocused.password &&
              signupForm.controls.password.touched
            "
          />
          <button type="button" id="password-toggle" (click)="togglePassword()">
            <i
              class="fa-solid"
              [class.fa-eye]="showPassword"
              [class.fa-eye-slash]="!showPassword"
            ></i>
          </button>
        </div>
        <button
          id="submit-button"
          type="submit"
          [disabled]="signupForm.invalid">
          Let's Go!
        </button>
        <div class="divider">
          <span>Or log in with</span>
        </div>
        <div class="social-login">
          <a href="/auth/google" class="social-btn google">
            <img src="../../../../assets/svgs/google.svg" alt="" />
            <span>Google</span>
          </a>

          <a href="/auth/github" class="social-btn github">
            <img src="../../../../assets/svgs/github.svg" alt="" />
            <span>Github</span>
          </a>
        </div>
      </form>
    </div>
  </div>
</div>
`,
            styles: ['@import "https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap";\n\n/* src/app/features/auth/signup/signup.component.css */\n:host {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary-background-color);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  color: var(--primary-text-color);\n  font-family: "Roboto", sans-serif;\n}\n.signup-container {\n  height: 100vh;\n}\n.signup-left {\n  height: 100vh;\n  width: calc(50% - 5px);\n  float: left;\n  background-color: var(--primary-background-color);\n  border-right-width: 0px;\n  border-right-color: var(--accent-color-gray);\n  border-right-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-left img {\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.signup-right {\n  background-color: var(--primary-background-color);\n  height: 100vh;\n  width: 50%;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-form-container {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.signup-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#signup-text {\n  font-family: "Google Sans", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n  font-size: 3rem;\n  margin-bottom: 0;\n}\n#login-text {\n  color: var(--secondary-text-color);\n}\na {\n  color: var(--accent-color-light-gray);\n  text-decoration: dashed;\n}\n.signup-form input {\n  width: 40%;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  color: var(--accent-color-light-gray);\n  background-color: var(--secondary-color-2);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  margin-bottom: 20px;\n}\n.signup-form input:focus {\n  color: var(--primary-text-color);\n  border: 1px solid var(--accent-color-light-gray);\n}\n#submit-button {\n  width: 40%;\n  min-width: 280px;\n  height: 50px;\n  background-color: var(--login-button-background-color);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n}\n#submit-button:disabled {\n  background-color: #4a4a4a;\n  color: #a0a0a0;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n#submit-button:not(:disabled):hover {\n  background-color: var(--login-button-background-hover-color);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);\n}\n#font-email,\n#font-password,\n#font-display,\n#font-username {\n  position: relative;\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n#font-email i,\n#font-password #key-icon,\n#font-username i,\n#font-display i {\n  position: absolute;\n  left: 12px;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-11px);\n}\n#font-password #password-toggle {\n  position: absolute;\n  right: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: var(--accent-color-light-gray);\n  font-size: 18px;\n  transform: translateY(-9px);\n}\n#font-email input,\n#font-password input,\n#font-username input,\n#font-display input {\n  width: 100%;\n  padding-left: 40px;\n  padding-right: 45px;\n}\n.error-border {\n  border-bottom: 2px solid var(--error-color) !important;\n}\n.divider {\n  margin-top: 20px;\n  color: var(--accent-color-light-gray);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n}\n.divider::before,\n.divider::after {\n  background: var(--accent-color-light-gray);\n  height: 2px;\n  flex: 1;\n  content: "";\n}\n.divider::before {\n  margin-right: 20px;\n}\n.divider::after {\n  margin-left: 20px;\n}\n.social-login {\n  margin-top: 20px;\n  width: 40%;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n}\n.social-login .social-btn {\n  padding: 12px 50px;\n  border: 2px solid var(--accent-color-light-gray);\n  border-radius: 6px;\n  color: var(--primary-text-color);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    background-color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.15s ease;\n}\n.social-login .social-btn:hover {\n  background-color: rgba(255, 255, 255, 0.06);\n  border-color: var(--primary-text-color);\n  transform: translateY(-1px);\n}\n.social-login .social-btn:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=signup.component.css.map */\n']
        }]
    }], () => [{
        type: NotificationService
    }, {
        type: AuthService
    }, {
        type: AuthStateService
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(SignupComponent, {
        className: "SignupComponent",
        filePath: "app/features/auth/signup/signup.component.ts",
        lineNumber: 30
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fauth%2Fsignup%2Fsignup.component.ts%40SignupComponent";
    function SignupComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i07.\u0275\u0275replaceMetadata(SignupComponent, m.default, [i07, i42, notification_service_exports, authentication_service_exports, auth_state_service_exports], [RouterLink2, FormsModule2, ReactiveFormsModule2, Component3], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && SignupComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SignupComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/main/home/home.component.ts
import {Component as Component5} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {LucideAngularModule} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";

// src/app/shared/components/sidebar-user/sidebar-user.component.ts
import {Component as Component4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {map as map2, switchMap, BehaviorSubject as BehaviorSubject2, take} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import {AsyncPipe as AsyncPipe2, TitleCasePipe as TitleCasePipe2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i012 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";

// src/app/core/services/channels/channel.service.ts
var channel_service_exports = {};
__export(channel_service_exports, {
    ChannelService: () => ChannelService
});
import {Injectable as Injectable5} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {tap} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i08 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i14 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";
var ChannelService = class _ChannelService {
    http;
    authStateService;
    baseURL = "http://localhost:8080/api/v1/channels";
    constructor(http, authStateService) {
        this.http = http;
        this.authStateService = authStateService;
    }
    getChannel(channelID) {
        return this.http.get(`${this.baseURL}/get/${channelID}`);
    }
    getAllChannels() {
        return this.http.get(`${this.baseURL}/getAll`).pipe(tap( (data) => {
            console.log("Data received:", data);
        }
        ));
    }
    getChats() {
        return this.http.get(`${this.baseURL}/getAll/chats`).pipe(tap( (data) => console.log("Data received:", data)));
    }
    static \u0275fac = function ChannelService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ChannelService)(i08.\u0275\u0275inject(i14.HttpClient),i08.\u0275\u0275inject(AuthStateService));
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i08.\u0275\u0275defineInjectable({
        token: _ChannelService,
        factory: _ChannelService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(ChannelService, [{
        type: Injectable5,
        args: [{
            providedIn: "root"
        }]
    }], () => [{
        type: i14.HttpClient
    }, {
        type: AuthStateService
    }], null);
}
)();

// src/app/core/services/channels/channel-state.service.ts
var channel_state_service_exports = {};
__export(channel_state_service_exports, {
    ChannelStateService: () => ChannelStateService
});
import {Injectable as Injectable6} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {BehaviorSubject} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i09 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var ChannelStateService = class _ChannelStateService {
    activeChannelId$ = new BehaviorSubject(null);
    selectedChannel$ = this.activeChannelId$.asObservable();
    setActiveChannel(id) {
        this.activeChannelId$.next(id);
    }
    getActiveId() {
        return this.activeChannelId$.getValue();
    }
    static \u0275fac = function ChannelStateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ChannelStateService)();
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i09.\u0275\u0275defineInjectable({
        token: _ChannelStateService,
        factory: _ChannelStateService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(ChannelStateService, [{
        type: Injectable6,
        args: [{
            providedIn: "root"
        }]
    }], null, null);
}
)();

// src/app/core/services/user/user.service.ts
var user_service_exports = {};
__export(user_service_exports, {
    UserService: () => UserService
});
import {Injectable as Injectable7} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {tap as tap2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i010 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i15 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";
var UserService = class _UserService {
    http;
    baseURL = "http://localhost:8080/api/v1/users";
    // The Source of Truth for user data across the app
    userCache = /* @__PURE__ */
    new Map();
    constructor(http) {
        this.http = http;
    }
    /**
   * Fetches multiple users and saves them to the local cache automatically.
   */
    getMultipleUsers(userIds) {
        const stringIds = userIds.map( (id) => String(id));
        const body = {
            users: stringIds
        };
        return this.http.post(`${this.baseURL}/get`, body).pipe(tap2( (users) => {
            users.forEach( (user) => {
                this.userCache.set(String(user.userID), user);
            }
            );
        }
        ));
    }
    /**
   * Synchronous lookup for the UI.
   * Returns undefined if the user isn't loaded yet.
   */
    getUserById(userId) {
        if (!userId)
            return void 0;
        return this.userCache.get(String(userId));
    }
    /**
   * Manually add a user to the cache (e.g., the current logged-in user).
   */
    addToCache(user) {
        if (user && user.userID) {
            this.userCache.set(String(user.userID), user);
        }
    }
    static \u0275fac = function UserService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _UserService)(i010.\u0275\u0275inject(i15.HttpClient));
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i010.\u0275\u0275defineInjectable({
        token: _UserService,
        factory: _UserService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(UserService, [{
        type: Injectable7,
        args: [{
            providedIn: "root"
        }]
    }], () => [{
        type: i15.HttpClient
    }], null);
}
)();

// src/app/core/services/chat/chat.service.ts
var chat_service_exports = {};
__export(chat_service_exports, {
    ChatService: () => ChatService
});
import {Injectable as Injectable8} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {RxStomp, RxStompState} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@stomp_rx-stomp.js?v=909ddf94";
import {map} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs_operators.js?v=909ddf94";
import {Subject} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";

// src/app/core/config/websocket.config.ts
var customRxStompConfig = {
    brokerURL: "ws://localhost:8080/ws",
    // Matches your Spring boot endpoint
    heartbeatIncoming: 0,
    heartbeatOutgoing: 2e4,
    reconnectDelay: 5e3,
    debug: (msg) => {
        console.log((/* @__PURE__ */
        new Date()).toLocaleTimeString(), "- STOMP:", msg);
    }
};

// src/app/core/services/chat/chat.service.ts
import*as i011 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i22 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";
var ChatService = class _ChatService {
    authState;
    http;
    rxStomp;
    API_URL = "http://localhost:8080/api/v1/messages";
    // NEW: The "Bus" that allows components to hear live messages
    newMessageSource = new Subject();
    newMessage$ = this.newMessageSource.asObservable();
    constructor(authState, http) {
        this.authState = authState;
        this.http = http;
        this.rxStomp = new RxStomp();
        if (this.authState.isAuthenticated()) {
            this.connect();
        }
    }
    announceNewMessage(message) {
        this.newMessageSource.next(message);
    }
    connect() {
        const token = this.authState.getAccessToken();
        this.rxStomp.configure(__spreadProps(__spreadValues({}, customRxStompConfig), {
            connectHeaders: {
                Authorization: `Bearer ${token}`
            }
        }));
        this.rxStomp.activate();
        this.rxStomp.connectionState$.subscribe( (state) => {
            console.log("Chat WebSocket State:", RxStompState[state]);
        }
        );
    }
    getMessagesByChannel(channelId) {
        return this.http.get(`${this.API_URL}/${channelId}`);
    }
    watchDMs() {
        return this.rxStomp.watch("/user/queue/messages").pipe(map( (message) => JSON.parse(message.body)));
    }
    watchGroup(groupId) {
        return this.rxStomp.watch(`/topic/group.${groupId}`).pipe(map( (message) => JSON.parse(message.body)));
    }
    sendMessage(destination, payload) {
        this.rxStomp.publish({
            destination,
            body: JSON.stringify(payload)
        });
    }
    watchFeedback() {
        return this.rxStomp.watch("/user/queue/reply").pipe(map( (message) => JSON.parse(message.body)));
    }
    static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ChatService)(i011.\u0275\u0275inject(AuthStateService),i011.\u0275\u0275inject(i22.HttpClient));
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i011.\u0275\u0275defineInjectable({
        token: _ChatService,
        factory: _ChatService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(ChatService, [{
        type: Injectable8,
        args: [{
            providedIn: "root"
        }]
    }], () => [{
        type: AuthStateService
    }, {
        type: i22.HttpClient
    }], null);
}
)();

// src/app/shared/components/sidebar-user/sidebar-user.component.ts
import*as i6 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
var _forTrack0 = ($index, $item) => $item.channelID;
function SidebarUserComponent_For_2_Conditional_5_Case_2_Template(rf, ctx) {
    if (rf & 1) {
        i012.\u0275\u0275domElement(0, "div", 11);
    }
}
function SidebarUserComponent_For_2_Conditional_5_Case_3_Template(rf, ctx) {
    if (rf & 1) {
        i012.\u0275\u0275domElement(0, "div", 12);
    }
}
function SidebarUserComponent_For_2_Conditional_5_Template(rf, ctx) {
    if (rf & 1) {
        i012.\u0275\u0275domElementStart(0, "div", 6)(1, "div", 10);
        i012.\u0275\u0275conditionalCreate(2, SidebarUserComponent_For_2_Conditional_5_Case_2_Template, 1, 0, "div", 11)(3, SidebarUserComponent_For_2_Conditional_5_Case_3_Template, 1, 0, "div", 12);
        i012.\u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
        let tmp_12_0;
        const person_r2 = i012.\u0275\u0275nextContext().$implicit;
        i012.\u0275\u0275advance();
        i012.\u0275\u0275domProperty("className", "status-dot " + (person_r2.presence || "offline").toLowerCase());
        i012.\u0275\u0275advance();
        i012.\u0275\u0275conditional((tmp_12_0 = person_r2.presence) === "IDLE" ? 2 : tmp_12_0 === "DND" ? 3 : -1);
    }
}
function SidebarUserComponent_For_2_Conditional_10_Template(rf, ctx) {
    if (rf & 1) {
        i012.\u0275\u0275text(0);
        i012.\u0275\u0275pipe(1, "titlecase");
    }
    if (rf & 2) {
        const person_r2 = i012.\u0275\u0275nextContext().$implicit;
        i012.\u0275\u0275textInterpolate1(" ", person_r2.presence === "DND" ? "DND" : i012.\u0275\u0275pipeBind1(1, 1, person_r2.presence), " ");
    }
}
function SidebarUserComponent_For_2_Conditional_11_Template(rf, ctx) {
    if (rf & 1) {
        i012.\u0275\u0275text(0);
    }
    if (rf & 2) {
        const person_r2 = i012.\u0275\u0275nextContext().$implicit;
        i012.\u0275\u0275textInterpolate1(" ", person_r2.members.length, " members ");
    }
}
function SidebarUserComponent_For_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i012.\u0275\u0275getCurrentView();
        i012.\u0275\u0275domElementStart(0, "div", 2);
        i012.\u0275\u0275pipe(1, "async");
        i012.\u0275\u0275domListener("click", function SidebarUserComponent_For_2_Template_div_click_0_listener() {
            const person_r2 = i012.\u0275\u0275restoreView(_r1).$implicit;
            const ctx_r2 = i012.\u0275\u0275nextContext();
            return i012.\u0275\u0275resetView(ctx_r2.onChannelClick(person_r2.channelID));
        });
        i012.\u0275\u0275domElement(2, "div", 3);
        i012.\u0275\u0275domElementStart(3, "div", 4);
        i012.\u0275\u0275domElement(4, "img", 5);
        i012.\u0275\u0275conditionalCreate(5, SidebarUserComponent_For_2_Conditional_5_Template, 4, 2, "div", 6);
        i012.\u0275\u0275domElementEnd();
        i012.\u0275\u0275domElementStart(6, "div", 7)(7, "div", 8);
        i012.\u0275\u0275text(8);
        i012.\u0275\u0275domElementEnd();
        i012.\u0275\u0275domElementStart(9, "div", 9);
        i012.\u0275\u0275conditionalCreate(10, SidebarUserComponent_For_2_Conditional_10_Template, 2, 3)(11, SidebarUserComponent_For_2_Conditional_11_Template, 1, 1);
        i012.\u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
        const person_r2 = ctx.$implicit;
        const ctx_r2 = i012.\u0275\u0275nextContext();
        i012.\u0275\u0275classProp("active", i012.\u0275\u0275pipeBind1(1, 6, ctx_r2.activeChannelId$) == person_r2.channelID);
        i012.\u0275\u0275advance(4);
        i012.\u0275\u0275domProperty("src", person_r2.displayImage || "assets/images/pfp_christmas.png", i012.\u0275\u0275sanitizeUrl);
        i012.\u0275\u0275advance();
        i012.\u0275\u0275conditional(person_r2.channelType === "DM" ? 5 : -1);
        i012.\u0275\u0275advance(3);
        i012.\u0275\u0275textInterpolate(person_r2.displayName);
        i012.\u0275\u0275advance(2);
        i012.\u0275\u0275conditional(person_r2.channelType === "DM" ? 10 : 11);
    }
}
var SidebarUserComponent = class _SidebarUserComponent {
    channelService;
    channelState;
    userService;
    authStateService;
    chatService;
    router;
    contactsSubject = new BehaviorSubject2([]);
    contacts$ = this.contactsSubject.asObservable();
    activeChannelId$;
    currentUserId;
    socketSub;
    constructor(channelService, channelState, userService, authStateService, chatService, router) {
        this.channelService = channelService;
        this.channelState = channelState;
        this.userService = userService;
        this.authStateService = authStateService;
        this.chatService = chatService;
        this.router = router;
        this.activeChannelId$ = this.channelState.selectedChannel$;
        this.currentUserId = this.authStateService.getUserProfile()?.userID;
    }
    ngOnInit() {
        this.channelService.getChats().pipe(take(1), map2( (res) => res.channels), switchMap( (channels) => {
            const allUserIds = [...new Set(channels.flatMap( (c) => c.members))];
            return this.userService.getMultipleUsers(allUserIds).pipe(map2( (users) => this.mapChannelsToContacts(channels, users)));
        }
        )).subscribe( (processedContacts) => {
            this.contactsSubject.next(this.sortContacts(processedContacts));
        }
        );
        this.socketSub = this.chatService.newMessage$.subscribe( (msg) => {
            this.handleIncomingMessage(msg);
        }
        );
    }
    mapChannelsToContacts(channels, users) {
        const userMap = new Map(users.map( (u) => [u.userID, u]));
        return channels.map( (channel) => {
            let contact = __spreadValues({}, channel);
            contact.lastActive = channel.lastMessage ? new Date(channel.lastMessage.timestamp) : new Date(channel.createdAt || 0);
            if (channel.channelType === "DM") {
                const otherUser = channel.members.map( (id) => userMap.get(id)).find( (u) => u?.userID !== this.currentUserId);
                contact.displayName = otherUser?.displayName || "Unknown User";
                contact.displayImage = otherUser?.profilePicture || "assets/images/pfp_christmas.png";
                contact.presence = otherUser?.presence || "OFFLINE";
            } else {
                contact.displayName = channel.name || "Group";
                contact.displayImage = channel.image || "assets/default-group-icon.png";
                contact.presence = "";
            }
            return contact;
        }
        );
    }
    handleIncomingMessage(msg) {
        const currentList = this.contactsSubject.value;
        const channelId = String(msg.channelID || msg.channelId);
        const channelIndex = currentList.findIndex( (c) => String(c.channelID) === channelId);
        if (channelIndex !== -1) {
            const updatedChannel = __spreadProps(__spreadValues({}, currentList[channelIndex]), {
                lastActive: new Date(msg.timestamp)
            });
            const newList = [...currentList];
            newList.splice(channelIndex, 1);
            newList.unshift(updatedChannel);
            this.contactsSubject.next(newList);
        }
    }
    sortContacts(contacts) {
        return [...contacts].sort( (a, b) => b.lastActive.getTime() - a.lastActive.getTime());
    }
    onChannelClick(channelID) {
        const id = channelID.toString();
        this.channelState.setActiveChannel(id);
        void this.router.navigate(["/home/channel", id]);
    }
    ngOnDestroy() {
        this.socketSub?.unsubscribe();
    }
    static \u0275fac = function SidebarUserComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SidebarUserComponent)(i012.\u0275\u0275directiveInject(ChannelService),i012.\u0275\u0275directiveInject(ChannelStateService),i012.\u0275\u0275directiveInject(UserService),i012.\u0275\u0275directiveInject(AuthStateService),i012.\u0275\u0275directiveInject(ChatService),i012.\u0275\u0275directiveInject(i6.Router));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i012.\u0275\u0275defineComponent({
        type: _SidebarUserComponent,
        selectors: [["app-sidebar-user"]],
        decls: 4,
        vars: 2,
        consts: [[1, "main"], [1, "contact-row", 3, "active"], [1, "contact-row", 3, "click"], [1, "active-indicator"], [1, "avatar-container"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "status-mask"], [1, "info"], [1, "name"], [1, "status-text"], [1, "status-dot", 3, "className"], [1, "moon"], [1, "minus"]],
        template: function SidebarUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                i012.\u0275\u0275domElementStart(0, "div", 0);
                i012.\u0275\u0275repeaterCreate(1, SidebarUserComponent_For_2_Template, 12, 8, "div", 1, _forTrack0);
                i012.\u0275\u0275pipe(3, "async");
                i012.\u0275\u0275domElementEnd();
            }
            if (rf & 2) {
                i012.\u0275\u0275advance();
                i012.\u0275\u0275repeater(i012.\u0275\u0275pipeBind1(3, 0, ctx.contacts$));
            }
        },
        dependencies: [AsyncPipe2, TitleCasePipe2],
        styles: ["\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  box-sizing: border-box;\n  background-color: transparent !important;\n}\n.contact-row[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  margin: 1px 0;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #949ba4;\n  background-color: transparent;\n  transition: background-color 0.1s ease;\n}\n.contact-row[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #35373c !important;\n  color: #dbdee1;\n}\n.contact-row.active[_ngcontent-%COMP%] {\n  background-color: #404249 !important;\n  color: #ffffff;\n}\n.active-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 4px;\n  height: 0;\n  background-color: #ffffff;\n  border-radius: 0 4px 4px 0;\n  transition: height 0.2s ease, opacity 0.2s ease;\n  opacity: 0;\n}\n.contact-row[_ngcontent-%COMP%]:hover   .active-indicator[_ngcontent-%COMP%] {\n  height: 12px;\n  opacity: 1;\n}\n.contact-row.active[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  height: 24px;\n  opacity: 1;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: block;\n}\n.status-mask[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  padding: 2px;\n  border-radius: 50%;\n  background-color: #2b2d31;\n  transition: background-color 0.1s ease;\n}\n.contact-row[_ngcontent-%COMP%]:hover   .status-mask[_ngcontent-%COMP%] {\n  background-color: #35373c;\n}\n.contact-row.active[_ngcontent-%COMP%]   .status-mask[_ngcontent-%COMP%] {\n  background-color: #404249;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.online[_ngcontent-%COMP%] {\n  background-color: #23a55a;\n}\n.idle[_ngcontent-%COMP%] {\n  background-color: #f0b232;\n}\n.dnd[_ngcontent-%COMP%] {\n  background-color: #f23f43;\n}\n.offline[_ngcontent-%COMP%], \n.invisible[_ngcontent-%COMP%] {\n  background-color: #80848e;\n}\n.minus[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 2px;\n  background-color: #35373c;\n  border-radius: 1px;\n}\n.contact-row[_ngcontent-%COMP%]:not(:hover):not(.active)   .minus[_ngcontent-%COMP%] {\n  background-color: #2b2d31;\n}\n.contact-row.active[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%] {\n  background-color: #404249;\n}\n.moon[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #f0b232;\n  box-shadow: -2.5px -2px 0 0 #2b2d31;\n  margin-top: -2px;\n  margin-left: -2px;\n}\n.contact-row[_ngcontent-%COMP%]:hover   .moon[_ngcontent-%COMP%] {\n  box-shadow: -2.5px -2px 0 0 #35373c;\n}\n.contact-row.active[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%] {\n  box-shadow: -2.5px -2px 0 0 #404249;\n}\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #949ba4;\n}\n/*# sourceMappingURL=sidebar-user.component.css.map */"]
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(SidebarUserComponent, [{
        type: Component4,
        args: [{
            selector: "app-sidebar-user",
            standalone: true,
            imports: [AsyncPipe2, TitleCasePipe2],
            template: `<div class="main">
  @for (person of contacts$ | async; track person.channelID) {
    <div
      class="contact-row"
      [class.active]="(activeChannelId$ | async) == person.channelID"
      (click)="onChannelClick(person.channelID)">

      <div class="active-indicator"></div>

      <div class="avatar-container">
        <img
          class="avatar"
          [src]="person.displayImage || 'assets/images/pfp_christmas.png'"
          alt="avatar">

        @if (person.channelType === 'DM') {
          <div class="status-mask">
            <div class="status-dot" [className]="'status-dot ' + (person.presence || 'offline').toLowerCase()">
              @switch (person.presence) {
                @case ('IDLE') {
                  <div class="moon"></div>
                }
                @case ('DND') {
                  <div class="minus"></div>
                }
              }
            </div>
          </div>
        }
      </div>

      <div class="info">
        <div class="name">{{ person.displayName }}</div>
        <div class="status-text">
          @if (person.channelType === 'DM') {
            {{ person.presence === 'DND' ? 'DND' : (person.presence | titlecase) }}
          } @else {
            {{ person.members.length }} members
          }
        </div>
      </div>
    </div>
  }
</div>
`,
            styles: ["/* src/app/shared/components/sidebar-user/sidebar-user.component.css */\n.main {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  box-sizing: border-box;\n  background-color: transparent !important;\n}\n.contact-row {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  margin: 1px 0;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #949ba4;\n  background-color: transparent;\n  transition: background-color 0.1s ease;\n}\n.contact-row:hover:not(.active) {\n  background-color: #35373c !important;\n  color: #dbdee1;\n}\n.contact-row.active {\n  background-color: #404249 !important;\n  color: #ffffff;\n}\n.active-indicator {\n  position: absolute;\n  left: 0;\n  width: 4px;\n  height: 0;\n  background-color: #ffffff;\n  border-radius: 0 4px 4px 0;\n  transition: height 0.2s ease, opacity 0.2s ease;\n  opacity: 0;\n}\n.contact-row:hover .active-indicator {\n  height: 12px;\n  opacity: 1;\n}\n.contact-row.active .active-indicator {\n  height: 24px;\n  opacity: 1;\n}\n.avatar-container {\n  position: relative;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: block;\n}\n.status-mask {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  padding: 2px;\n  border-radius: 50%;\n  background-color: #2b2d31;\n  transition: background-color 0.1s ease;\n}\n.contact-row:hover .status-mask {\n  background-color: #35373c;\n}\n.contact-row.active .status-mask {\n  background-color: #404249;\n}\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.online {\n  background-color: #23a55a;\n}\n.idle {\n  background-color: #f0b232;\n}\n.dnd {\n  background-color: #f23f43;\n}\n.offline,\n.invisible {\n  background-color: #80848e;\n}\n.minus {\n  width: 6px;\n  height: 2px;\n  background-color: #35373c;\n  border-radius: 1px;\n}\n.contact-row:not(:hover):not(.active) .minus {\n  background-color: #2b2d31;\n}\n.contact-row.active .minus {\n  background-color: #404249;\n}\n.moon {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #f0b232;\n  box-shadow: -2.5px -2px 0 0 #2b2d31;\n  margin-top: -2px;\n  margin-left: -2px;\n}\n.contact-row:hover .moon {\n  box-shadow: -2.5px -2px 0 0 #35373c;\n}\n.contact-row.active .moon {\n  box-shadow: -2.5px -2px 0 0 #404249;\n}\n.info {\n  flex: 1;\n  min-width: 0;\n}\n.name {\n  font-size: 0.95rem;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-text {\n  font-size: 0.75rem;\n  color: #949ba4;\n}\n/*# sourceMappingURL=sidebar-user.component.css.map */\n"]
        }]
    }], () => [{
        type: ChannelService
    }, {
        type: ChannelStateService
    }, {
        type: UserService
    }, {
        type: AuthStateService
    }, {
        type: ChatService
    }, {
        type: i6.Router
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(SidebarUserComponent, {
        className: "SidebarUserComponent",
        filePath: "app/shared/components/sidebar-user/sidebar-user.component.ts",
        lineNumber: 18
    });
}
)();
( () => {
    const id = "app%2Fshared%2Fcomponents%2Fsidebar-user%2Fsidebar-user.component.ts%40SidebarUserComponent";
    function SidebarUserComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i012.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i012.\u0275\u0275replaceMetadata(SidebarUserComponent, m.default, [i012, channel_service_exports, channel_state_service_exports, user_service_exports, auth_state_service_exports, chat_service_exports, i6], [AsyncPipe2, TitleCasePipe2, Component4], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && SidebarUserComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SidebarUserComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/main/home/home.component.ts
import {FormsModule as FormsModule3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
import {RouterOutlet} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import {CommonModule as CommonModule2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i013 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i43 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i5 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
import*as i62 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_forms.js?v=909ddf94";
function HomeComponent_div_17_Template(rf, ctx) {
    if (rf & 1) {
        i013.\u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
        i013.\u0275\u0275element(3, "img", 27)(4, "div", 28);
        i013.\u0275\u0275elementEnd();
        i013.\u0275\u0275elementStart(5, "div", 29)(6, "span", 30);
        i013.\u0275\u0275text(7);
        i013.\u0275\u0275elementEnd();
        i013.\u0275\u0275elementStart(8, "span", 31);
        i013.\u0275\u0275text(9, "Online");
        i013.\u0275\u0275elementEnd()()();
        i013.\u0275\u0275elementStart(10, "div", 32)(11, "button", 33);
        i013.\u0275\u0275element(12, "lucide-icon", 34);
        i013.\u0275\u0275elementEnd();
        i013.\u0275\u0275elementStart(13, "button", 35);
        i013.\u0275\u0275element(14, "lucide-icon", 36);
        i013.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        const ctx_r1 = i013.\u0275\u0275nextContext();
        i013.\u0275\u0275advance(3);
        i013.\u0275\u0275property("src", ctx_r1.userProfile.profilePicture, i013.\u0275\u0275sanitizeUrl);
        i013.\u0275\u0275advance(4);
        i013.\u0275\u0275textInterpolate(ctx_r1.userProfile.username);
        i013.\u0275\u0275advance(5);
        i013.\u0275\u0275property("size", 16);
        i013.\u0275\u0275advance(2);
        i013.\u0275\u0275property("size", 16);
    }
}
var HomeComponent = class _HomeComponent {
    chatService;
    authState;
    channelState;
    dmSub;
    userProfile = null;
    constructor(chatService, authState, channelState) {
        this.chatService = chatService;
        this.authState = authState;
        this.channelState = channelState;
    }
    ngOnInit() {
        if (this.authState.isAuthenticated()) {
            this.userProfile = this.authState.getUserProfile();
            this.dmSub = this.chatService.watchDMs().subscribe({
                next: (message) => {
                    const activeChannelId = this.channelState.getActiveId();
                    if (String(message.channelID) === String(activeChannelId)) {
                        this.chatService.announceNewMessage(message);
                    }
                }
                ,
                error: (err) => console.error("DM Subscription Error:", err)
            });
        }
    }
    adjustHeight(el) {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    }
    handleSend(event, el) {
        event.preventDefault();
        const message = el.value.trim();
        if (message) {
            const activeId = this.channelState.getActiveId();
            const user = this.authState.getUserProfile();
            const tempId = `temp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
            const optimisticMsg = {
                content: message,
                authorID: user?.userID,
                timestamp: (/* @__PURE__ */
                new Date()).toISOString(),
                tempId,
                status: "pending"
            };
            this.chatService.announceNewMessage(optimisticMsg);
            const payload = {
                content: message,
                channelId: activeId,
                tempId
            };
            this.chatService.sendMessage("/app/chat.private", payload);
            el.value = "";
            el.style.height = "auto";
        }
    }
    ngOnDestroy() {
        if (this.dmSub) {
            this.dmSub.unsubscribe();
        }
    }
    static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HomeComponent)(i013.\u0275\u0275directiveInject(ChatService),i013.\u0275\u0275directiveInject(AuthStateService),i013.\u0275\u0275directiveInject(ChannelStateService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i013.\u0275\u0275defineComponent({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 30,
        vars: 4,
        consts: [["messageInput", ""], [1, "home-container"], [1, "sidebar-left"], [1, "logo"], ["src", "../../../../assets/images/StarcordBannerTransparent.png", "alt", "logo"], [1, "divider"], [1, "direct-messages-div"], ["id", "add-star", "src", "../../../../assets/svgs/four-point-star.svg", "alt", "add"], [1, "sidebar-users"], [1, "sidebar-footer"], [1, "footer-top-actions"], [1, "footer-item"], ["name", "users", 3, "size"], ["class", "user-control-bar", 4, "ngIf"], [1, "main-content"], [1, "message-content"], [1, "message-sending"], [1, "input-wrapper"], [1, "add-button"], ["name", "plus", 3, "size"], ["placeholder", "Message this chat", "rows", "1", 3, "input", "keydown.enter"], [1, "send-button", 3, "click"], ["name", "send-horizontal", 3, "size"], [1, "sidebar-right"], [1, "user-control-bar"], [1, "user-info-section"], [1, "avatar-wrapper"], ["alt", "avatar", 3, "src"], [1, "status-indicator"], [1, "user-text"], [1, "username"], [1, "status-text"], [1, "user-actions"], ["title", "Settings", 1, "action-btn"], ["name", "settings", 3, "size"], ["title", "Log out", 1, "action-btn", "logout"], ["name", "log-out", 3, "size"]],
        template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r1 = i013.\u0275\u0275getCurrentView();
                i013.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
                i013.\u0275\u0275element(3, "img", 4);
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275element(4, "div", 5);
                i013.\u0275\u0275elementStart(5, "div", 6)(6, "p");
                i013.\u0275\u0275text(7, "Direct Messages");
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275element(8, "img", 7);
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275elementStart(9, "div", 8);
                i013.\u0275\u0275element(10, "app-sidebar-user");
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11);
                i013.\u0275\u0275element(14, "lucide-icon", 12);
                i013.\u0275\u0275elementStart(15, "span");
                i013.\u0275\u0275text(16, "Friends");
                i013.\u0275\u0275elementEnd()()();
                i013.\u0275\u0275template(17, HomeComponent_div_17_Template, 15, 4, "div", 13);
                i013.\u0275\u0275elementEnd()();
                i013.\u0275\u0275elementStart(18, "div", 14)(19, "div", 15);
                i013.\u0275\u0275element(20, "router-outlet");
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "button", 18);
                i013.\u0275\u0275element(24, "lucide-icon", 19);
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275elementStart(25, "textarea", 20, 0);
                i013.\u0275\u0275listener("input", function HomeComponent_Template_textarea_input_25_listener() {
                    i013.\u0275\u0275restoreView(_r1);
                    const messageInput_r3 = i013.\u0275\u0275reference(26);
                    return i013.\u0275\u0275resetView(ctx.adjustHeight(messageInput_r3));
                })("keydown.enter", function HomeComponent_Template_textarea_keydown_enter_25_listener($event) {
                    i013.\u0275\u0275restoreView(_r1);
                    const messageInput_r3 = i013.\u0275\u0275reference(26);
                    return i013.\u0275\u0275resetView($event.shiftKey ? null : ctx.handleSend($event, messageInput_r3));
                });
                i013.\u0275\u0275elementEnd();
                i013.\u0275\u0275elementStart(27, "button", 21);
                i013.\u0275\u0275listener("click", function HomeComponent_Template_button_click_27_listener($event) {
                    i013.\u0275\u0275restoreView(_r1);
                    const messageInput_r3 = i013.\u0275\u0275reference(26);
                    return i013.\u0275\u0275resetView(ctx.handleSend($event, messageInput_r3));
                });
                i013.\u0275\u0275element(28, "lucide-icon", 22);
                i013.\u0275\u0275elementEnd()()()();
                i013.\u0275\u0275element(29, "div", 23);
                i013.\u0275\u0275elementEnd();
            }
            if (rf & 2) {
                i013.\u0275\u0275advance(14);
                i013.\u0275\u0275property("size", 18);
                i013.\u0275\u0275advance(3);
                i013.\u0275\u0275property("ngIf", ctx.userProfile);
                i013.\u0275\u0275advance(7);
                i013.\u0275\u0275property("size", 16);
                i013.\u0275\u0275advance(4);
                i013.\u0275\u0275property("size", 18);
            }
        },
        dependencies: [CommonModule2, i43.NgClass, i43.NgComponentOutlet, i43.NgForOf, i43.NgIf, i43.NgTemplateOutlet, i43.NgStyle, i43.NgSwitch, i43.NgSwitchCase, i43.NgSwitchDefault, i43.NgPlural, i43.NgPluralCase, SidebarUserComponent, LucideAngularModule, i5.LucideAngularComponent, FormsModule3, i62.\u0275NgNoValidate, i62.NgSelectOption, i62.\u0275NgSelectMultipleOption, i62.DefaultValueAccessor, i62.NumberValueAccessor, i62.RangeValueAccessor, i62.CheckboxControlValueAccessor, i62.SelectControlValueAccessor, i62.SelectMultipleControlValueAccessor, i62.RadioControlValueAccessor, i62.NgControlStatus, i62.NgControlStatusGroup, i62.RequiredValidator, i62.MinLengthValidator, i62.MaxLengthValidator, i62.PatternValidator, i62.CheckboxRequiredValidator, i62.EmailValidator, i62.MinValidator, i62.MaxValidator, i62.NgModel, i62.NgModelGroup, i62.NgForm, RouterOutlet, i43.AsyncPipe, i43.UpperCasePipe, i43.LowerCasePipe, i43.JsonPipe, i43.SlicePipe, i43.DecimalPipe, i43.PercentPipe, i43.TitleCasePipe, i43.CurrencyPipe, i43.DatePipe, i43.I18nPluralPipe, i43.I18nSelectPipe, i43.KeyValuePipe],
        styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: #1e1e2e;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.home-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n.sidebar-left[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 15%;\n  display: flex;\n  flex-direction: column;\n  background-color: #1e1e2e;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 10px 20px;\n}\n.direct-messages-div[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.direct-messages-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.4);\n}\n#add-star[_ngcontent-%COMP%] {\n  width: 16px;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.direct-messages-div[_ngcontent-%COMP%]:hover   #add-star[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotate(90deg);\n}\n.sidebar-users[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.footer-top-actions[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n.user-control-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.user-info-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: 0.2s;\n}\n.user-info-section[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 10px;\n  height: 10px;\n  background: #23a559;\n  border: 2px solid #1e1e2e;\n  border-radius: 50%;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.username[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.action-btn.logout[_ngcontent-%COMP%]:hover {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n}\n.footer-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.7);\n  transition: 0.2s;\n}\n.footer-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #fff;\n}\n.main-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n.message-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 20px 0 20px;\n}\n.message-sending[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 30px 30px 30px;\n  box-sizing: border-box;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 8px 16px;\n  min-height: 44px;\n  box-sizing: border-box;\n}\n.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  line-height: 24px;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  display: block;\n  box-sizing: border-box;\n}\n.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  line-height: 24px;\n}\n.add-button[_ngcontent-%COMP%], \n.send-button[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.add-button[_ngcontent-%COMP%] {\n  background: none;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  margin-right: 12px;\n  flex-shrink: 0;\n  padding: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.add-button[_ngcontent-%COMP%]   lucide-icon[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1px;\n  transition: transform 0.3s ease;\n}\n.add-button[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  color: #fff;\n}\n.add-button[_ngcontent-%COMP%]:hover   lucide-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.send-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  margin-left: 12px;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.send-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  transform: translateX(2px);\n}\n.sidebar-right[_ngcontent-%COMP%] {\n  width: 15%;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=home.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassMetadata(HomeComponent, [{
        type: Component5,
        args: [{
            selector: "app-home",
            standalone: true,
            imports: [CommonModule2, SidebarUserComponent, LucideAngularModule, FormsModule3, RouterOutlet],
            template: '<div class="home-container">\n  <div class="sidebar-left">\n    <div class="logo">\n      <img src="../../../../assets/images/StarcordBannerTransparent.png" alt="logo">\n    </div>\n\n    <div class="divider"></div>\n\n    <div class="direct-messages-div">\n      <p>Direct Messages</p>\n      <img id="add-star" src="../../../../assets/svgs/four-point-star.svg" alt="add" />\n    </div>\n\n    <div class="sidebar-users">\n      <app-sidebar-user></app-sidebar-user>\n    </div>\n\n    <div class="sidebar-footer">\n      <div class="footer-top-actions">\n        <div class="footer-item">\n          <lucide-icon name="users" [size]="18"></lucide-icon>\n          <span>Friends</span>\n        </div>\n      </div>\n\n      <div class="user-control-bar" *ngIf="userProfile">\n        <div class="user-info-section">\n          <div class="avatar-wrapper">\n            <img [src]="userProfile.profilePicture" alt="avatar">\n            <div class="status-indicator"></div>\n          </div>\n          <div class="user-text">\n            <span class="username">{{ userProfile.username }}</span>\n            <span class="status-text">Online</span>\n          </div>\n        </div>\n\n        <div class="user-actions">\n          <button class="action-btn" title="Settings">\n            <lucide-icon name="settings" [size]="16"></lucide-icon>\n          </button>\n          <button class="action-btn logout" title="Log out">\n            <lucide-icon name="log-out" [size]="16"></lucide-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="main-content">\n    <div class="message-content">\n      <router-outlet></router-outlet>\n    </div>\n\n    <div class="message-sending">\n      <div class="input-wrapper">\n        <button class="add-button">\n          <lucide-icon name="plus" [size]="16"></lucide-icon>\n        </button>\n\n        <textarea\n          #messageInput\n          placeholder="Message this chat"\n          rows="1"\n          (input)="adjustHeight(messageInput)"\n          (keydown.enter)="$any($event).shiftKey ? null : handleSend($event, messageInput)"\n        ></textarea>\n\n        <button class="send-button" (click)="handleSend($event, messageInput)">\n          <lucide-icon name="send-horizontal" [size]="18"></lucide-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="sidebar-right"></div>\n</div>\n',
            styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap";\n\n/* src/app/features/main/home/home.component.css */\n:host {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: #1e1e2e;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.home-container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n.sidebar-left {\n  height: 100vh;\n  width: 15%;\n  display: flex;\n  flex-direction: column;\n  background-color: #1e1e2e;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.logo {\n  margin-top: 10px;\n}\n.logo img {\n  width: 100%;\n  display: block;\n}\n.divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 10px 20px;\n}\n.direct-messages-div {\n  margin-top: 15px;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.direct-messages-div p {\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.4);\n}\n#add-star {\n  width: 16px;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.direct-messages-div:hover #add-star {\n  opacity: 1;\n  transform: rotate(90deg);\n}\n.sidebar-users {\n  flex: 1;\n  overflow-y: auto;\n}\n.sidebar-footer {\n  margin-top: auto;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.footer-top-actions {\n  padding: 8px 12px;\n}\n.user-control-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.user-info-section {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: 0.2s;\n}\n.user-info-section:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.avatar-wrapper {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.avatar-wrapper img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.status-indicator {\n  position: absolute;\n  bottom: -1px;\n  right: -1px;\n  width: 10px;\n  height: 10px;\n  background: #23a559;\n  border: 2px solid #1e1e2e;\n  border-radius: 50%;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.username {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-text {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.user-actions {\n  display: flex;\n  gap: 2px;\n}\n.action-btn {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n.action-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.action-btn.logout:hover {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n}\n.footer-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.7);\n  transition: 0.2s;\n}\n.footer-item:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #fff;\n}\n.main-content {\n  height: 100vh;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n.message-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 20px 0 20px;\n}\n.message-sending {\n  width: 100%;\n  padding: 10px 30px 30px 30px;\n  box-sizing: border-box;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 8px 16px;\n  min-height: 44px;\n  box-sizing: border-box;\n}\n.input-wrapper textarea {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  line-height: 24px;\n  padding: 0;\n  margin: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  display: block;\n  box-sizing: border-box;\n}\n.input-wrapper textarea::placeholder {\n  line-height: 24px;\n}\n.add-button,\n.send-button {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.add-button {\n  background: none;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  margin-right: 12px;\n  flex-shrink: 0;\n  padding: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.add-button lucide-icon {\n  display: flex;\n  margin-top: 1px;\n  transition: transform 0.3s ease;\n}\n.add-button:hover {\n  border-color: #fff;\n  color: #fff;\n}\n.add-button:hover lucide-icon {\n  transform: rotate(90deg);\n}\n.send-button {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  margin-left: 12px;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.send-button:hover {\n  color: #fff;\n  transform: translateX(2px);\n}\n.sidebar-right {\n  width: 15%;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n}\n/*# sourceMappingURL=home.component.css.map */\n']
        }]
    }], () => [{
        type: ChatService
    }, {
        type: AuthStateService
    }, {
        type: ChannelStateService
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(HomeComponent, {
        className: "HomeComponent",
        filePath: "app/features/main/home/home.component.ts",
        lineNumber: 26
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fmain%2Fhome%2Fhome.component.ts%40HomeComponent";
    function HomeComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i013.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i013.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i013, i43, i5, i62, chat_service_exports, auth_state_service_exports, channel_state_service_exports], [CommonModule2, SidebarUserComponent, LucideAngularModule, FormsModule3, RouterOutlet, Component5], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/shared/components/chat-messages/chat-messages.ts
import {Component as Component6, ViewChild} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {switchMap as switchMap2, filter, map as map3, tap as tap3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs_operators.js?v=909ddf94";
import {CommonModule as CommonModule3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import {Subscription} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs.js?v=909ddf94";
import*as i014 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i16 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i52 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
var _c0 = ["scrollContainer"];
var _forTrack02 = ($index, $item) => $item.dateLabel;
var _forTrack1 = ($index, $item) => $item.uniqueId;
function ChatMessagesComponent_For_9_For_4_Template(rf, ctx) {
    if (rf & 1) {
        i014.\u0275\u0275elementStart(0, "div", 5);
        i014.\u0275\u0275element(1, "img", 6);
        i014.\u0275\u0275elementStart(2, "div", 7)(3, "div", 8)(4, "span", 9);
        i014.\u0275\u0275text(5);
        i014.\u0275\u0275elementEnd();
        i014.\u0275\u0275elementStart(6, "span", 10);
        i014.\u0275\u0275text(7);
        i014.\u0275\u0275elementEnd()();
        i014.\u0275\u0275elementStart(8, "div", 11);
        i014.\u0275\u0275text(9);
        i014.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        const msg_r1 = ctx.$implicit;
        i014.\u0275\u0275property("ngClass", msg_r1.status);
        i014.\u0275\u0275advance();
        i014.\u0275\u0275property("src", msg_r1.profilePicture, i014.\u0275\u0275sanitizeUrl);
        i014.\u0275\u0275advance(4);
        i014.\u0275\u0275textInterpolate(msg_r1.displayName);
        i014.\u0275\u0275advance(2);
        i014.\u0275\u0275textInterpolate(msg_r1.displayTime);
        i014.\u0275\u0275advance(2);
        i014.\u0275\u0275textInterpolate(msg_r1.content);
    }
}
function ChatMessagesComponent_For_9_Template(rf, ctx) {
    if (rf & 1) {
        i014.\u0275\u0275elementStart(0, "div", 4)(1, "span");
        i014.\u0275\u0275text(2);
        i014.\u0275\u0275elementEnd()();
        i014.\u0275\u0275repeaterCreate(3, ChatMessagesComponent_For_9_For_4_Template, 10, 5, "div", 5, _forTrack1);
    }
    if (rf & 2) {
        const group_r2 = ctx.$implicit;
        i014.\u0275\u0275advance(2);
        i014.\u0275\u0275textInterpolate(group_r2.dateLabel);
        i014.\u0275\u0275advance();
        i014.\u0275\u0275repeater(group_r2.messages);
    }
}
var ChatMessagesComponent = class _ChatMessagesComponent {
    route;
    chatService;
    userService;
    cdr;
    notificationService;
    scrollContainer;
    currentChannelId = null;
    groupedMessages = [];
    shouldScroll = false;
    subscriptions = new Subscription();
    constructor(route, chatService, userService, cdr, notificationService) {
        this.route = route;
        this.chatService = chatService;
        this.userService = userService;
        this.cdr = cdr;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.subscriptions.add(this.route.paramMap.pipe(map3( (params) => params.get("id")), filter( (id) => !!id), tap3( (id) => {
            this.groupedMessages = [];
            this.currentChannelId = id;
            this.cdr.detectChanges();
        }
        ), switchMap2( (id) => this.chatService.getMessagesByChannel(id).pipe(map3( (res) => this.processMessages(res.messages || []))))).subscribe({
            next: (groups) => {
                this.groupedMessages = groups;
                this.shouldScroll = true;
                this.cdr.detectChanges();
            }
        }));
        this.subscriptions.add(this.chatService.newMessage$.subscribe( (msg) => {
            this.appendLiveMessage(msg, !!msg.status);
        }
        ));
        this.subscriptions.add(this.chatService.watchFeedback().subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.updateMessageStatus(response.data.tempId, "sent", response.data);
                } else {
                    this.notificationService.showError("An error occurred while trying to watch feedback");
                    this.updateMessageStatus(response.data?.tempId, "error");
                }
            }
            ,
            error: (err) => console.error("Feedback error:", err)
        }));
    }
    updateMessageStatus(tempId, status, finalData) {
        if (!tempId)
            return;
        for (const group of this.groupedMessages) {
            const msgIndex = group.messages.findIndex( (m) => m.uniqueId === tempId);
            if (msgIndex !== -1) {
                group.messages[msgIndex].status = status;
                if (finalData?.messageID) {
                    group.messages[msgIndex].uniqueId = String(finalData.messageID);
                }
                break;
            }
        }
        this.cdr.detectChanges();
    }
    appendLiveMessage(m, isOptimistic=false) {
        const authorId = String(m.authorID || m.authorId);
        const user = this.userService.getUserById(authorId);
        const date = new Date(m.timestamp);
        const dateLabel = this.getDateLabel(date);
        const normalizedMsg = __spreadProps(__spreadValues({}, m), {
            displayName: user ? user.displayName : `User ${authorId}`,
            profilePicture: user?.profilePicture || "assets/images/pfp_christmas.png",
            displayTime: this.formatMessageTime(date),
            uniqueId: String(m.messageID || m.tempId),
            status: m.status || (isOptimistic ? "pending" : "sent")
        });
        const lastGroup = this.groupedMessages[this.groupedMessages.length - 1];
        if (lastGroup && lastGroup.dateLabel === dateLabel) {
            lastGroup.messages.push(normalizedMsg);
        } else {
            this.groupedMessages.push({
                dateLabel,
                messages: [normalizedMsg]
            });
        }
        this.shouldScroll = true;
        this.cdr.detectChanges();
    }
    processMessages(raw) {
        const groups = [];
        raw.forEach( (m) => {
            const authorId = String(m.authorID || m.authorId);
            const user = this.userService.getUserById(authorId);
            const date = new Date(m.timestamp);
            const dateLabel = this.getDateLabel(date);
            const normalizedMsg = __spreadProps(__spreadValues({}, m), {
                displayName: user ? user.displayName : `User ${authorId}`,
                profilePicture: user?.profilePicture || "assets/images/pfp_christmas.png",
                displayTime: this.formatMessageTime(date),
                uniqueId: String(m.messageID || m.id),
                status: "sent"// Loaded history is always 'sent'
            });
            const lastGroup = groups[groups.length - 1];
            if (lastGroup && lastGroup.dateLabel === dateLabel) {
                lastGroup.messages.push(normalizedMsg);
            } else {
                groups.push({
                    dateLabel,
                    messages: [normalizedMsg]
                });
            }
        }
        );
        return groups;
    }
    formatMessageTime(date) {
        const now = /* @__PURE__ */
        new Date();
        const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const msgDate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
        const timeStr = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
        if (msgDate.getTime() === today.getTime())
            return timeStr;
        if (msgDate.getTime() === yesterday.getTime())
            return `Yesterday at ${timeStr}`;
        return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()} ${timeStr}`;
    }
    getDateLabel(date) {
        const now = /* @__PURE__ */
        new Date();
        const today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const msgDate = new Date(date.getFullYear(),date.getMonth(),date.getDate());
        if (msgDate.getTime() === today.getTime())
            return "Today";
        if (msgDate.getTime() === yesterday.getTime())
            return "Yesterday";
        const day = date.getDate();
        const suffix = (d) => {
            if (d > 3 && d < 21)
                return "th";
            switch (d % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
            }
        }
        ;
        return `${day}${suffix(day)} ${date.toLocaleString("default", {
            month: "long"
        })} ${date.getFullYear()}`;
    }
    ngAfterViewChecked() {
        if (this.shouldScroll) {
            this.scrollToBottom();
            this.shouldScroll = false;
        }
    }
    scrollToBottom() {
        if (!this.scrollContainer)
            return;
        setTimeout( () => {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
        , 50);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    static \u0275fac = function ChatMessagesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ChatMessagesComponent)(i014.\u0275\u0275directiveInject(i16.ActivatedRoute),i014.\u0275\u0275directiveInject(ChatService),i014.\u0275\u0275directiveInject(UserService),i014.\u0275\u0275directiveInject(i014.ChangeDetectorRef),i014.\u0275\u0275directiveInject(NotificationService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i014.\u0275\u0275defineComponent({
        type: _ChatMessagesComponent,
        selectors: [["app-chat-messages"]],
        viewQuery: function ChatMessagesComponent_Query(rf, ctx) {
            if (rf & 1) {
                i014.\u0275\u0275viewQuery(_c0, 5);
            }
            if (rf & 2) {
                let _t;
                i014.\u0275\u0275queryRefresh(_t = i014.\u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
            }
        },
        decls: 10,
        vars: 0,
        consts: [["scrollContainer", ""], [1, "chat-wrapper"], [1, "messages-container"], [1, "channel-intro"], [1, "divider-line"], [1, "message-entry", 3, "ngClass"], ["alt", "pfp", 1, "avatar", 3, "src"], [1, "content-area"], [1, "header"], [1, "username"], [1, "time"], [1, "text"]],
        template: function ChatMessagesComponent_Template(rf, ctx) {
            if (rf & 1) {
                i014.\u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2)(3, "div", 3)(4, "h1");
                i014.\u0275\u0275text(5, "Welcome to the start of the channel!");
                i014.\u0275\u0275elementEnd();
                i014.\u0275\u0275elementStart(6, "p");
                i014.\u0275\u0275text(7, "This is the beginning of your history in this chat.");
                i014.\u0275\u0275elementEnd()();
                i014.\u0275\u0275repeaterCreate(8, ChatMessagesComponent_For_9_Template, 5, 1, null, null, _forTrack02);
                i014.\u0275\u0275elementEnd()();
            }
            if (rf & 2) {
                i014.\u0275\u0275advance(8);
                i014.\u0275\u0275repeater(ctx.groupedMessages);
            }
        },
        dependencies: [CommonModule3, i52.NgClass, i52.NgComponentOutlet, i52.NgForOf, i52.NgIf, i52.NgTemplateOutlet, i52.NgStyle, i52.NgSwitch, i52.NgSwitchCase, i52.NgSwitchDefault, i52.NgPlural, i52.NgPluralCase, i52.AsyncPipe, i52.UpperCasePipe, i52.LowerCasePipe, i52.JsonPipe, i52.SlicePipe, i52.DecimalPipe, i52.PercentPipe, i52.TitleCasePipe, i52.CurrencyPipe, i52.DatePipe, i52.I18nPluralPipe, i52.I18nSelectPipe, i52.KeyValuePipe],
        styles: ['@import "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap";\n\n\n\n.chat-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  background-color: transparent;\n  font-family: "Figtree", sans-serif;\n  scrollbar-width: thin;\n  scrollbar-color: #1e1f22 transparent;\n}\n.messages-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  padding-bottom: 10px;\n}\n.channel-intro[_ngcontent-%COMP%] {\n  padding: 40px 20px 10px 20px;\n}\n.channel-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 2rem;\n  margin: 0 0 8px 0;\n  font-weight: 700;\n}\n.channel-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b5bac1;\n  margin: 0;\n}\n.divider-line[_ngcontent-%COMP%] {\n  border-top: 1px solid #3f4147;\n  margin: 24px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 1px;\n}\n.divider-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #313338;\n  padding: 0 12px;\n  color: #949ba4;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.message-entry[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px 20px;\n  gap: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  transition: opacity 0.3s ease;\n}\n.message-entry[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.015);\n}\n.message-entry.pending[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.message-entry.pending[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #949ba4;\n}\n.message-entry.error[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #fa777c;\n}\n.message-entry.error[_ngcontent-%COMP%] {\n  background-color: rgba(250, 119, 124, 0.03);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 0px;\n}\n.username[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.time[_ngcontent-%COMP%] {\n  color: #949ba4;\n  font-size: 0.72rem;\n  margin-left: 8px;\n  font-weight: 400;\n}\n.text[_ngcontent-%COMP%] {\n  color: #dbdee1;\n  font-size: 1rem;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-top: 0;\n}\n.chat-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.chat-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #1e1f22;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=chat-messages.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassMetadata(ChatMessagesComponent, [{
        type: Component6,
        args: [{
            selector: "app-chat-messages",
            standalone: true,
            imports: [CommonModule3],
            template: '<div class="chat-wrapper" #scrollContainer>\n  <div class="messages-container">\n    <div class="channel-intro">\n      <h1>Welcome to the start of the channel!</h1>\n      <p>This is the beginning of your history in this chat.</p>\n    </div>\n\n    @for (group of groupedMessages; track group.dateLabel) {\n      <div class="divider-line"><span>{{ group.dateLabel }}</span></div>\n\n      @for (msg of group.messages; track msg.uniqueId) {\n        <div class="message-entry" [ngClass]="msg.status">\n          <img class="avatar" [src]="msg.profilePicture" alt="pfp">\n          <div class="content-area">\n            <div class="header">\n              <span class="username">{{ msg.displayName }}</span>\n              <span class="time">{{ msg.displayTime }}</span>\n            </div>\n            <div class="text">{{ msg.content }}</div>\n          </div>\n        </div>\n      }\n    }\n  </div>\n</div>\n',
            styles: ['@import "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap";\n\n/* src/app/shared/components/chat-messages/chat-messages.css */\n.chat-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  background-color: transparent;\n  font-family: "Figtree", sans-serif;\n  scrollbar-width: thin;\n  scrollbar-color: #1e1f22 transparent;\n}\n.messages-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  padding-bottom: 10px;\n}\n.channel-intro {\n  padding: 40px 20px 10px 20px;\n}\n.channel-intro h1 {\n  color: #ffffff;\n  font-size: 2rem;\n  margin: 0 0 8px 0;\n  font-weight: 700;\n}\n.channel-intro p {\n  color: #b5bac1;\n  margin: 0;\n}\n.divider-line {\n  border-top: 1px solid #3f4147;\n  margin: 24px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 1px;\n}\n.divider-line span {\n  position: absolute;\n  background-color: #313338;\n  padding: 0 12px;\n  color: #949ba4;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.message-entry {\n  display: flex;\n  padding: 10px 20px;\n  gap: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  transition: opacity 0.3s ease;\n}\n.message-entry:hover {\n  background-color: rgba(255, 255, 255, 0.015);\n}\n.message-entry.pending {\n  opacity: 0.7;\n}\n.message-entry.pending .text {\n  color: #949ba4;\n}\n.message-entry.error .text {\n  color: #fa777c;\n}\n.message-entry.error {\n  background-color: rgba(250, 119, 124, 0.03);\n}\n.avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n.content-area {\n  flex: 1;\n  min-width: 0;\n}\n.header {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 0px;\n}\n.username {\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.time {\n  color: #949ba4;\n  font-size: 0.72rem;\n  margin-left: 8px;\n  font-weight: 400;\n}\n.text {\n  color: #dbdee1;\n  font-size: 1rem;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-top: 0;\n}\n.chat-wrapper::-webkit-scrollbar {\n  width: 8px;\n}\n.chat-wrapper::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chat-wrapper::-webkit-scrollbar-thumb {\n  background: #1e1f22;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=chat-messages.css.map */\n']
        }]
    }], () => [{
        type: i16.ActivatedRoute
    }, {
        type: ChatService
    }, {
        type: UserService
    }, {
        type: i014.ChangeDetectorRef
    }, {
        type: NotificationService
    }], {
        scrollContainer: [{
            type: ViewChild,
            args: ["scrollContainer"]
        }]
    });
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(ChatMessagesComponent, {
        className: "ChatMessagesComponent",
        filePath: "app/shared/components/chat-messages/chat-messages.ts",
        lineNumber: 22
    });
}
)();
( () => {
    const id = "app%2Fshared%2Fcomponents%2Fchat-messages%2Fchat-messages.ts%40ChatMessagesComponent";
    function ChatMessagesComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i014.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i014.\u0275\u0275replaceMetadata(ChatMessagesComponent, m.default, [i014, i52, i16, chat_service_exports, user_service_exports, notification_service_exports], [CommonModule3, Component6, ViewChild], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && ChatMessagesComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ChatMessagesComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/shared/resolvers/endpoint-resolver.ts
import {inject as inject3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";

// src/app/core/services/docs/DocService.ts
var DocService_exports = {};
__export(DocService_exports, {
    DocService: () => DocService
});
import {Injectable as Injectable9} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";

// src/assets/data/default-responses.ts
var BAD_REQUEST_EXCEPTION = {
    code: 400,
    title: "Bad Request",
    description: "Bad Request Body, example the wrong type of request",
    exampleJson: '{\n    "errorCode": "BAD_REQUEST",\n    "message": "You have already hit the maximum number of members. The maximum for this type of channel is 2",\n    "status": 400,\n    "timestamp": "2026-03-31T21:48:55.580669300Z"\n}'
};
var INVALID_CREDENTIALS_EXCEPTION = {
    code: 401,
    title: "Invalid Credentials",
    description: "Credentials provided are invalid, usually an email or password",
    exampleJson: '{\n    "errorCode": "UNAUTHORIZED",\n    "message": "Email or password invalid.",\n    "status": 401,\n    "timestamp": "2026-03-31T21:58:26.060953200Z"\n}'
};
var UNAUTHORIZED_EXCEPTION = {
    code: 401,
    title: "Unauthorized",
    description: "Happens when you attempt to view data, and you are not logged in",
    exampleJson: '{\n    "errorCode": "UNAUTHORIZED",\n    "message": "Please login or signup before attempting to view this data.",\n    "status": 401,\n    "timestamp": "2026-03-31T22:00:32.0649541240Z"\n}'
};
var FORBIDDEN_EXCEPTION = {
    code: 401,
    title: "Forbidden",
    description: "Happens when you attempt to view data you are not allowed to see, but you are authenticated",
    exampleJson: '{\n    "errorCode": "FORBIDDEN",\n    "message": "You are not permitted to see this channel.",\n    "status": 401,\n    "timestamp": "2026-03-31T22:01:38.06392541211Z"\n}'
};
var NOT_FOUND_EXCEPTION = {
    code: 404,
    title: "Not Found",
    description: "Happens when you attempt to get data that is not found, or doesn't exist",
    exampleJson: '{\n    "errorCode": "NOT_FOUND",\n    "message": "No channel found with that Id.",\n    "status": 401,\n    "timestamp": "2026-03-31T22:02:11.3122343567"\n}'
};
var EMAIL_IN_USE_EXCEPTION = {
    code: 409,
    title: "Email in use",
    description: "Another user is already using that email",
    exampleJson: '{\n    "errorCode": "CONFLICT",\n    "message": "This email is already in use.",\n    "status": 409,\n    "timestamp": "2026-03-31T22:08:56.614495900Z"\n}'
};
var USERNAME_IN_USE_EXCEPTION = {
    code: 409,
    title: "Username in use",
    description: "Another user is already using that username",
    exampleJson: '{\n    "errorCode": "CONFLICT",\n    "message": "This username is already in use.",\n    "status": 409,\n    "timestamp": "2026-03-31T22:13:19.903419Z"\n}'
};
var RATELIMIT_EXCEPTION = {
    code: 429,
    title: "Rate limit",
    description: "Error showing that you have exceeded the maximum number of requests in a given time",
    exampleJson: '{\n    "errorCode": "TOO_MANY_REQUESTS",\n    "message": "Too Many Requests. Please try again later.",\n    "status": 429,\n    "timestamp": "2026-03-31T12:21:36.986531200Z"\n}'
};
var INTERNAL_SERVER_EXCEPTION = {
    code: 500,
    title: "Internal Server Error",
    description: "This is usually something out of your control, something is wrong with the server.",
    exampleJson: '{\n    "errorCode": "INTERNAL_SERVER_ERROR",\n    "message": "An unknown error occurred.",\n    "status": 500,\n    "timestamp": "2026-03-31T22:15:25.297525600Z"\n}'
};
var STANDARD_EXCEPTIONS = {
    BAD_REQUEST_EXCEPTION,
    UNAUTHORIZED_EXCEPTION,
    FORBIDDEN_EXCEPTION,
    RATELIMIT_EXCEPTION,
    INTERNAL_SERVER_EXCEPTION
};
var AUTHORIZATION_HEADER = {
    name: "Authorization",
    type: "string",
    description: 'Your access token, passed via "Bearer ..."\n\nSee authentication docs for more info',
    exampleValue: "Bearer nothingtoseehereofficer",
    required: true
};

// src/assets/data/endpoints.config.ts
var API_STRUCTURE = [// Auth
{
    name: "Auth",
    basePath: "http://localhost:8080/api/v1/auth",
    description: "Authentication endpoint",
    endpoints: [{
        id: "auth-signup",
        path: "/signup",
        title: "Create account",
        method: "POST",
        description: "Create a new account. \n\n You will still need to log in after the signup request",
        bodyParams: [{
            name: "username",
            type: "string",
            description: "Your username",
            exampleValue: "star123best@gmail.com",
            required: true
        }, {
            name: "password",
            type: "string",
            description: "Your password",
            exampleValue: "##########",
            required: true
        }, {
            name: "email",
            type: "string",
            description: "Your email",
            exampleValue: "star123best@gmail.com",
            required: true
        }, {
            name: "displayName",
            type: "string",
            description: "A display name",
            exampleValue: "Star",
            required: false
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful login",
            exampleJson: '{\n    "createdAt": 1774996384,\n    "displayName": "Star",\n    "email": "star123best@gmail.com",\n    "userID": 283880589279232,\n    "username": "star123best"\n}'
        }, BAD_REQUEST_EXCEPTION, EMAIL_IN_USE_EXCEPTION, USERNAME_IN_USE_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 10,
        authenticated: false
    }, {
        id: "auth-login",
        path: "/login",
        title: "Login",
        method: "POST",
        description: "Authenticate and receive a JWT.",
        bodyParams: [{
            name: "email",
            type: "string",
            description: "Your email",
            exampleValue: "star123best@gmail.com",
            required: true
        }, {
            name: "password",
            type: "string",
            description: "Your password",
            exampleValue: "##########",
            required: true
        }],
        headers: [{
            name: "X-Device-Id",
            type: "uuid",
            description: "Unique UUID for your device, generated by the browser",
            exampleValue: "288442c6-3f19-461c-a054-2b517dbf6837",
            required: true
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful login",
            exampleJson: '{\n    "accessToken": "nuh uh not so fast",\n    "createdAt": 1770677612,\n    "displayName": "Star",\n    "email": "star123best@gmail.com",\n    "profilePicture": "https://someurl.com",\n    "userID": 266190899122176,\n    "username": "star123best"\n}'
        }, BAD_REQUEST_EXCEPTION, INVALID_CREDENTIALS_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 10,
        authenticated: false
    }, {
        id: "auth-logout",
        path: "/logout",
        title: "Logout",
        method: "POST",
        description: "Log out of an account via a specific device-id.",
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful logout",
            exampleJson: '{\n    "data": null,\n    "message": "Successful Logout",\n    "status": 200,\n    "timestamp": "2026-03-31T22:42:19.252440200Z"\n}'
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, INVALID_CREDENTIALS_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        headers: [AUTHORIZATION_HEADER, {
            name: "X-Device-Id",
            type: "uuid",
            description: "Unique UUID for your device, generated by the browser",
            exampleValue: "288442c6-3f19-461c-a054-2b517dbf6837",
            required: true
        }],
        rateLimit: 10,
        authenticated: true
    }, {
        id: "auth-logout-all",
        path: "/logoutAll",
        title: "Logout all",
        method: "POST",
        description: "Log out of all sessions of an account irrespective of device.",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful logout",
            exampleJson: '{\n    "data": null,\n    "message": "Successful Logout",\n    "status": 200,\n    "timestamp": "2026-03-31T22:42:19.252440200Z"\n}'
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, INVALID_CREDENTIALS_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 10,
        authenticated: true
    }, {
        id: "auth-refresh-token",
        path: "/refresh",
        title: "Refresh Token",
        method: "POST",
        description: "Refreshes the access token via a refresh token (see Authentication help tab for more).",
        headers: [{
            name: "Cookie",
            type: "string",
            description: 'Your refresh token, passed via "refreshToken=..."',
            exampleValue: "refreshToken=notsofastpartner",
            required: true
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful logout",
            exampleJson: `{
    "createdAt": 1774997415,
    "expiresAt": 1774998315,
    "token": "wouldn't you like to know weather boy"
}`
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, INVALID_CREDENTIALS_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 10,
        authenticated: true
    }, {
        id: "auth-delete-account",
        path: "/:id",
        title: "Delete Account",
        method: "DELETE",
        description: "Deletes an account, no second chances (sorry little timmy)",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "string",
            description: "The id of the account",
            exampleValue: "266190899122176"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successful deletion",
            exampleJson: '{\n    "data": null,\n    "message": "Account deleted successfully",\n    "status": 200,\n    "timestamp": "2026-03-31T22:42:19.252440200Z"\n}'
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 10,
        authenticated: true
    }]
}, // Channels
{
    name: "Channels",
    basePath: "http://localhost:8080/api/v1/channels",
    description: "Channels Endpoint",
    endpoints: [{
        id: "channel-get-data",
        path: "/:id",
        title: "Get Channel Data",
        method: "GET",
        description: "Get the data for a specific channel",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "string",
            description: "The id of the channel",
            exampleValue: "279273641291776"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Channel data retrieved",
            exampleJson: '{\n    "channelID": 279273641291776,\n    "channelType": "GROUP",\n    "createdAt": "2026-03-18T22:07:21.331800Z",\n    "creatorID": 266190899122176,\n    "image": "https://someUrl.com",\n    "members": [\n        266373788000256,\n        266190899122176,\n        266772090200064,\n        276635052175360\n    ],\n    "name": "Groupchat"\n}'
        }, ...Object.values(STANDARD_EXCEPTIONS), NOT_FOUND_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 50
    }, {
        id: "channel-create",
        path: "/create",
        title: "Create Channel",
        method: "POST",
        description: "Create a new channel",
        headers: [AUTHORIZATION_HEADER],
        bodyParams: [{
            name: "name",
            type: "string",
            description: "The name of the channel (Not to be used in DMS)",
            exampleValue: "Random group chat",
            required: false
        }, {
            name: "channelType",
            type: "string",
            description: "ChannelType enum",
            exampleValue: "DM",
            required: true
        }, {
            name: "members",
            type: "object",
            description: "List of members ids",
            exampleValue: "[266373788000256]",
            required: false
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "New Channel Created",
            exampleJson: '{\n    "channelID": 284043489480704,\n    "channelType": "DM",\n    "createdAt": "2026-04-01T09:35:55.049509700Z",\n    "creatorID": 266190899122176,\n    "image": null,\n    "members": [\n        266373788000256,\n        266190899122176\n    ],\n    "name": null\n}'
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 10
    }, {
        id: "channel-delete",
        path: "/:id",
        title: "Delete Channel",
        method: "DELETE",
        description: "Delete a channel",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "string",
            description: "The id of the channel",
            exampleValue: "279273641291776"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Channel deleted successfully",
            exampleJson: '{\n    "data": null,\n    "message": "Channel deleted successfully",\n    "status": 200,\n    "timestamp": "2026-03-31T22:42:19.252440200Z"\n}'
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 20
    }, {
        id: "channel-update",
        path: "/:id",
        title: "Update Channel",
        method: "PATCH",
        description: "Update a channel",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "string",
            description: "The id of the channel",
            exampleValue: "279273641291776"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Channel updated successfully",
            exampleJson: '{"token": "xyz"}'
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 20
    }, {
        id: "channel-add-member",
        path: "/add",
        title: "Add members",
        method: "POST",
        description: "Add members to a specific channel",
        headers: [AUTHORIZATION_HEADER],
        bodyParams: [{
            name: "channelId",
            type: "string",
            description: "The id of the channel",
            exampleValue: "279273641291776"
        }, {
            name: "members",
            type: "array",
            description: "List of members ids",
            exampleValue: "[266373788000256]"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successfully added user",
            exampleJson: '{\n    "data": null,\n    "message": "Successfully added user",\n    "status": 200,\n    "timestamp": "2026-04-01T09:45:01.510491700Z"\n}'
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 20
    }, {
        id: "channel-get-all",
        path: "/getAll",
        title: "Get All Conversations",
        method: "GET",
        description: "Get all conversations (chats and channels)",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successfully retrieved conversations",
            exampleJson: '{\n    "channels": [\n        {\n            "channelID": 284043489480704,\n            "channelType": "DM",\n            "createdAt": "2026-04-01T09:35:55.049510Z",\n            "creatorID": 266190899122176,\n            "image": null,\n            "members": [\n                266373788000256,\n                266190899122176\n            ],\n            "name": null\n        }    ],\n    "timestamp": "2026-04-01T09:50:17.032115200Z"\n}'
        }, UNAUTHORIZED_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 10
    }, {
        id: "channel-get-chats",
        path: "/getAll/chats",
        title: "Get All Chats",
        method: "GET",
        description: "Get all chats for a user",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successfully retrieved chats",
            exampleJson: '{\n    "channels": [\n        {\n            "channelID": 284043489480704,\n            "channelType": "DM",\n            "createdAt": "2026-04-01T09:35:55.049510Z",\n            "creatorID": 266190899122176,\n            "image": null,\n            "members": [\n                266373788000256,\n                266190899122176\n            ],\n            "name": null\n        }    ],\n    "timestamp": "2026-04-01T09:50:17.032115200Z"\n}'
        }, UNAUTHORIZED_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 10
    }, {
        id: "channel-get-channels",
        path: "/getAll/channels",
        title: "Get All Channels",
        method: "GET",
        description: "Get all channels for a user",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Successfully retrieved channels",
            exampleJson: '{\n    "channels": [\n        {\n            "channelID": 284043489480704,\n            "channelType": "CHANNEL",\n            "createdAt": "2026-04-01T09:35:55.049510Z",\n            "creatorID": 266190899122176,\n            "name": null\n        }    ],\n    "timestamp": "2026-04-01T09:50:17.032115200Z"\n}'
        }, UNAUTHORIZED_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 20
    }]
}, // Messages
{
    name: "Messages",
    basePath: "http://localhost:8080/api/v1/messages",
    description: "Messages Endpoint",
    endpoints: [{
        id: "message-get",
        path: "/:id",
        title: "Get Messages",
        method: "GET",
        description: 'Get messages in a specific channel, where :id is the channel Id\n\nNote: tempId is a value used for the "pre-sending" feature, more information on that is in the web-sockets section, and should NOT be used outside of web sockets',
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Messages retrieved",
            exampleJson: `{
    "channelID": 280903007481856,
    "messages": [
        {
            "authorID": 266190899122176,
            "channelID": 280903007481856,
            "content": "if you're reading this, you're cool beans",
            "messageID": 281609683959808,
            "tempId": null,
            "timestamp": "2026-03-25T12:32:44.248529Z"
        }
    ],
    "timestamp": 1775029188
}`
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 100
    }, {
        id: "message-get-history",
        path: "/history/:id",
        title: "Get Message History",
        method: "GET",
        description: 'Get messages in a specific channel, where :id is the channel Id, with specific parameters\n\nNote: tempId is a value used for the "pre-sending" feature, more information on that is in the web-sockets section. tempId should NOT be used outside of web sockets',
        parameters: [{
            name: "id",
            type: "number",
            description: "The channel id to get history for",
            exampleValue: 280903007481856,
            required: true
        }, {
            name: "page",
            type: "number",
            description: "Query parameter for the index of the page, used for pagination (start from 0)",
            exampleValue: 0
        }, {
            name: "size",
            type: "number",
            description: "Query parameter for the maximum number of messages that can be returned in one page",
            exampleValue: 100
        }, {
            name: "ascending",
            type: "number",
            description: "Query parameter, set to true if the result should be sorted ascending (old -> new), and false if descending (new -> old)",
            exampleValue: true
        }, {
            name: "after",
            type: "number",
            description: "Query parameter for the unix timestamp the messages should be sent after",
            exampleValue: 1771162177
        }, {
            name: "before",
            type: "number",
            description: "Query parameter for the unix timestamp the messages should be sent before",
            exampleValue: 1771252177
        }],
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Message history retrieved",
            exampleJson: `{
    "channelID": 280903007481856,
    "messages": [
        {
            "authorID": 266190899122176,
            "channelID": 280903007481856,
            "content": "if you're reading this, you're extra cool beans",
            "messageID": 281609683959808,
            "tempId": null,
            "timestamp": "2026-03-25T12:32:44.248529Z"
        }
    ],
    "timestamp": 1775029188
}`
        }, NOT_FOUND_EXCEPTION, ...Object.values(STANDARD_EXCEPTIONS)].sort( (a, b) => a.code - b.code),
        rateLimit: 100
    }]
}, // Users
{
    name: "Users",
    basePath: "http://localhost:8080/api/v1/users",
    description: "Users Endpoint",
    endpoints: [{
        id: "get-user",
        path: "/:id",
        title: "Get User",
        method: "GET",
        description: "Get a user's information",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "number",
            description: "The id of the user you wish to get the information for"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "User information retrieved",
            exampleJson: '{\n    "createdAt": 1770677612,\n    "displayName": "Star",\n    "presence": "ONLINE",\n    "profilePicture": "https://someApi.com",\n    "userID": 266190899122176,\n    "username": "star123best"\n}'
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 50,
        authenticated: true
    }, {
        id: "get-multiple-users",
        path: "/get",
        title: "Get Multiple Users",
        method: "POST",
        description: "Get multiple user's information \n\nNote: The request method is set to POST to allow a request body, this is the only way I could have done it",
        headers: [AUTHORIZATION_HEADER],
        bodyParams: [{
            name: "users",
            type: "array",
            description: "A list of the ids of the users you wish to get the presence for",
            exampleValue: "[266190899122176, 266373788000256, 266772090200064]",
            required: true
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "User presence retrieved",
            exampleJson: '{\n    "userId": 266190899122176,\n    "presence": "ONLINE"\n}'
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 30,
        authenticated: true
    }, {
        id: "get-presence",
        path: "/:id/presence",
        title: "Get Presence",
        method: "GET",
        description: "Get a users presence",
        headers: [AUTHORIZATION_HEADER],
        parameters: [{
            name: "id",
            type: "number",
            description: "The id of the user you wish to get the presence for"
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "User presence retrieved",
            exampleJson: '{\n    "userId": 266190899122176,\n    "presence": "ONLINE"\n}'
        }, BAD_REQUEST_EXCEPTION, UNAUTHORIZED_EXCEPTION, NOT_FOUND_EXCEPTION, RATELIMIT_EXCEPTION, INTERNAL_SERVER_EXCEPTION],
        rateLimit: 30,
        authenticated: true
    }, {
        id: "update-presence",
        path: "/:id/presence",
        title: "Update Presence",
        method: "PATCH",
        description: "Update the presence for a specific user",
        headers: [AUTHORIZATION_HEADER],
        bodyParams: [{
            name: "presence",
            type: "string",
            description: "The new presence for the user (ONLINE, IDLE, DND, INVISIBLE)",
            exampleValue: "ONLINE",
            required: true
        }],
        responses: [{
            code: 200,
            title: "Success",
            description: "Presence updated successfully",
            exampleJson: '{\n    "data": null,\n    "message": "Successfully updated presence to ONLINE",\n    "status": 200,\n    "timestamp": "2026-04-01T11:08:52.791152500Z"\n}'
        }, ...Object.values(STANDARD_EXCEPTIONS), NOT_FOUND_EXCEPTION].sort( (a, b) => a.code - b.code),
        rateLimit: 30,
        authenticated: true
    }]
}, // Web sockets
{
    name: "Web sockets",
    basePath: "ws://localhost:8080",
    description: "All the websockets used in Starcord",
    endpoints: [{
        id: "ws-connect",
        path: "/ws",
        title: "Connect",
        method: "WS",
        description: "Connect to the websocket\n\nNote: user-name is actually your user id, due to Spring websocket limitations I had to use this convention",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Connected successfully",
            exampleJson: "10:32:47 - STOMP: <<< CONNECTED\nuser-name:266190899122176\nheart-beat:0,0\nversion:1.2\ncontent-length:0"
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }, {
        id: "ws-send-gc",
        path: "/app/group/:id",
        title: "Send to GC",
        method: "WS",
        description: "Send a message to a group chat",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Message sent successfully",
            exampleJson: "10:43:32 - STOMP: >>> SEND\ndestination:/app/group/279273641291776\ncontent-length:86"
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }, {
        id: "ws-listen-gc",
        path: "/app/group/:id",
        title: "Listen to GC",
        method: "WS",
        description: "Listed to messages from a group chat",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Listening connection established",
            exampleJson: "10:47:39 - STOMP: >>> SUBSCRIBE\nid:sub-1\ndestination:/topic/group.groupId"
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }, {
        id: "ws-send-dm",
        path: "/app/chat.private",
        title: "Send Private DM",
        method: "WS",
        description: "Send a private message to a specific user via a DM channel",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Message sent to the message broker",
            exampleJson: '11:05:12 - STOMP: >>> SEND\ndestination:/app/chat.private\ncontent-type:application/json\n\n{"channelId": "280903007481856", "content": "hi cool person", "tempId": "dfb73345-d2b7-4b9f-840c-f4da376a8508"}'
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }, {
        id: "ws-receive-dm",
        path: "/user/queue/messages",
        title: "Receive Private DM",
        method: "WS",
        description: "The STOMP frame received when another user sends a message to your private queue",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "Incoming message payload",
            exampleJson: '11:29:56 - STOMP: <<< MESSAGE\ncontent-length:341\nmessage-id:628d11e0-889a-0dd1-1d0a-ea9e042f8ab6-6\nsubscription:sub-1\ncontent-type:application/json\ndestination:/user/queue/messages\n\n{"messageID": 281609683959808, "authorID": 266190899122176, "content": "why hello there", "channelID": 555, "timestamp": "2024-05-20T12:00:00Z"}'
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }, {
        id: "ws-receive-dm-receipt",
        path: "/user/queue/reply",
        title: "Receive DM Receipt",
        method: "WS",
        description: "The STOMP frame received after you send a DM, confirming the server processed it",
        headers: [AUTHORIZATION_HEADER],
        responses: [{
            code: 200,
            title: "Success",
            description: "SuccessResponse payload",
            exampleJson: '11:29:56 - STOMP: <<< MESSAGE\ncontent-length:341\nmessage-id:628d11e0-889a-0dd1-1d0a-ea9e042f8ab6-6\nsubscription:sub-1\ncontent-type:application/json\ndestination:/user/queue/reply\n\n{"success": true, "message": "HALLOOOOO", "tempId": "dfb73345-d2b7-4b9f-840c-f4da376a8508", "messageId": 281609683959808}'
        }, ...Object.values(STANDARD_EXCEPTIONS)],
        rateLimit: 20
    }]
}];

// src/app/core/services/docs/DocService.ts
import*as i015 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var DocService = class _DocService {
    _structure = API_STRUCTURE;
    constructor() {}
    getCategoryStructure() {
        return this._structure;
    }
    getCategoryByName(name) {
        return this._structure.find( (cat) => cat.name.toLowerCase() === name.toLowerCase()) || null;
    }
    getEndpointById(id) {
        for (const category of this._structure) {
            const found = category.endpoints.find( (e) => e.id === id);
            if (found) {
                return __spreadProps(__spreadValues({}, found), {
                    fullUrl: `${category.basePath}${found.path}`
                });
            }
        }
        return null;
    }
    getAllEndpoints() {
        return this._structure.flatMap( (cat) => cat.endpoints);
    }
    static \u0275fac = function DocService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DocService)();
    }
    ;
    static \u0275prov = /* @__PURE__ */
    i015.\u0275\u0275defineInjectable({
        token: _DocService,
        factory: _DocService.\u0275fac,
        providedIn: "root"
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassMetadata(DocService, [{
        type: Injectable9,
        args: [{
            providedIn: "root"
        }]
    }], () => [], null);
}
)();

// src/app/shared/resolvers/endpoint-resolver.ts
var endpointResolver = (route) => {
    const docService = inject3(DocService);
    const id = route.paramMap.get("endpointId");
    if (!id) {
        return docService.getCategoryStructure();
    }
    return docService.getEndpointById(id);
}
;

// src/app/features/other/docs/docs-layout/docs-layout.component.ts
import {Component as Component8} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {RouterOutlet as RouterOutlet2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";

// src/app/features/other/docs/components/sidebar/sidebar.component.ts
import {Component as Component7} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {CommonModule as CommonModule4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import {NavigationEnd, RouterLink as RouterLink3, RouterLinkActive} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import {filter as filter2} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/rxjs_operators.js?v=909ddf94";
import {LucideAngularModule as LucideAngularModule2, ChevronRight, BookOpen, Key, Search, Lock} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
import*as i016 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i23 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i3 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i44 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
var _c02 = (a0) => ["/docs/category", a0];
var _c1 = (a0) => ["/docs", a0];
var _forTrack03 = ($index, $item) => $item.name;
var _forTrack12 = ($index, $item) => $item.id;
function SidebarComponent_For_18_Conditional_8_For_2_Template(rf, ctx) {
    if (rf & 1) {
        i016.\u0275\u0275elementStart(0, "a", 20)(1, "span", 21);
        i016.\u0275\u0275text(2);
        i016.\u0275\u0275elementEnd();
        i016.\u0275\u0275elementStart(3, "span", 22);
        i016.\u0275\u0275text(4);
        i016.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const end_r4 = ctx.$implicit;
        i016.\u0275\u0275property("routerLink", i016.\u0275\u0275pureFunction1(4, _c1, end_r4.id));
        i016.\u0275\u0275attribute("data-method", end_r4.method);
        i016.\u0275\u0275advance(2);
        i016.\u0275\u0275textInterpolate(end_r4.title);
        i016.\u0275\u0275advance(2);
        i016.\u0275\u0275textInterpolate(end_r4.method);
    }
}
function SidebarComponent_For_18_Conditional_8_Template(rf, ctx) {
    if (rf & 1) {
        i016.\u0275\u0275elementStart(0, "div", 19);
        i016.\u0275\u0275repeaterCreate(1, SidebarComponent_For_18_Conditional_8_For_2_Template, 5, 6, "a", 20, _forTrack12);
        i016.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const cat_r2 = i016.\u0275\u0275nextContext().$implicit;
        i016.\u0275\u0275advance();
        i016.\u0275\u0275repeater(cat_r2.endpoints);
    }
}
function SidebarComponent_For_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i016.\u0275\u0275getCurrentView();
        i016.\u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
        i016.\u0275\u0275listener("click", function SidebarComponent_For_18_Template_div_click_2_listener() {
            const cat_r2 = i016.\u0275\u0275restoreView(_r1).$implicit;
            const ctx_r2 = i016.\u0275\u0275nextContext();
            return i016.\u0275\u0275resetView(ctx_r2.toggleCategory(cat_r2.name));
        });
        i016.\u0275\u0275element(3, "lucide-icon", 16);
        i016.\u0275\u0275elementEnd();
        i016.\u0275\u0275elementStart(4, "a", 17, 0)(6, "span", 18);
        i016.\u0275\u0275text(7);
        i016.\u0275\u0275elementEnd()()();
        i016.\u0275\u0275conditionalCreate(8, SidebarComponent_For_18_Conditional_8_Template, 3, 0, "div", 19);
        i016.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const cat_r2 = ctx.$implicit;
        const rla_r5 = i016.\u0275\u0275reference(5);
        const ctx_r2 = i016.\u0275\u0275nextContext();
        i016.\u0275\u0275classProp("is-open", ctx_r2.expandedCategories[cat_r2.name]);
        i016.\u0275\u0275advance();
        i016.\u0275\u0275classProp("active-category", rla_r5.isActive);
        i016.\u0275\u0275advance(2);
        i016.\u0275\u0275property("img", ctx_r2.ChevronRight)("size", 14);
        i016.\u0275\u0275advance();
        i016.\u0275\u0275property("routerLink", i016.\u0275\u0275pureFunction1(9, _c02, cat_r2.name.toLowerCase()));
        i016.\u0275\u0275advance(3);
        i016.\u0275\u0275textInterpolate(cat_r2.name);
        i016.\u0275\u0275advance();
        i016.\u0275\u0275conditional(ctx_r2.expandedCategories[cat_r2.name] ? 8 : -1);
    }
}
var SidebarComponent = class _SidebarComponent {
    docService;
    router;
    menuData = [];
    expandedCategories = {};
    ChevronRight = ChevronRight;
    BookOpen = BookOpen;
    Key = Key;
    Search = Search;
    constructor(docService, router) {
        this.docService = docService;
        this.router = router;
        this.menuData = this.docService.getCategoryStructure();
    }
    ngOnInit() {
        this.checkActiveRoute();
        this.router.events.pipe(filter2( (event) => event instanceof NavigationEnd)).subscribe( () => {
            this.checkActiveRoute();
        }
        );
    }
    checkActiveRoute() {
        this.menuData.forEach( (cat) => {
            const isChildActive = cat.endpoints.some( (end) => this.router.url.includes(end.id));
            const isCategoryPageActive = this.router.url.includes(`/category/${cat.name.toLowerCase()}`);
            if (isChildActive || isCategoryPageActive) {
                this.expandedCategories[cat.name] = true;
            }
        }
        );
    }
    toggleCategory(name) {
        this.expandedCategories[name] = !this.expandedCategories[name];
    }
    Lock = Lock;
    static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SidebarComponent)(i016.\u0275\u0275directiveInject(DocService),i016.\u0275\u0275directiveInject(i23.Router));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i016.\u0275\u0275defineComponent({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 19,
        vars: 6,
        consts: [["rla", "routerLinkActive"], [1, "sidebar-wrapper"], [1, "sidebar-header"], [1, "jump-to"], [1, "icon-muted", 3, "img", "size"], [1, "jump-to-text"], [1, "static-links"], ["routerLink", "/docs/getting-started", "routerLinkActive", "active-static", 1, "nav-item"], [1, "icon-margin", 3, "img", "size"], [1, "nav-text"], ["routerLink", "/docs/security", "routerLinkActive", "active-static", 1, "nav-item"], [1, "divider"], [1, "category-group", 3, "is-open"], [1, "category-group"], [1, "category-header"], ["title", "Toggle Category", 1, "toggle-button", 3, "click"], [1, "arrow-icon", 3, "img", "size"], ["routerLinkActive", "active-category", 1, "category-link", 3, "routerLink"], [1, "category-name"], [1, "endpoint-list"], ["routerLinkActive", "active-link", 1, "nav-item", "endpoint", 3, "routerLink"], [1, "endpoint-name"], [1, "method-badge"]],
        template: function SidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i016.\u0275\u0275elementStart(0, "nav", 1)(1, "div", 2)(2, "div", 3);
                i016.\u0275\u0275element(3, "lucide-icon", 4);
                i016.\u0275\u0275elementStart(4, "span", 5);
                i016.\u0275\u0275text(5, "JUMP TO");
                i016.\u0275\u0275elementEnd()()();
                i016.\u0275\u0275elementStart(6, "div", 6)(7, "a", 7);
                i016.\u0275\u0275element(8, "lucide-icon", 8);
                i016.\u0275\u0275elementStart(9, "span", 9);
                i016.\u0275\u0275text(10, "Getting Started");
                i016.\u0275\u0275elementEnd()();
                i016.\u0275\u0275elementStart(11, "a", 10);
                i016.\u0275\u0275element(12, "lucide-icon", 8);
                i016.\u0275\u0275elementStart(13, "span", 9);
                i016.\u0275\u0275text(14, "Security");
                i016.\u0275\u0275elementEnd()()();
                i016.\u0275\u0275elementStart(15, "div", 11);
                i016.\u0275\u0275text(16, "API REFERENCE");
                i016.\u0275\u0275elementEnd();
                i016.\u0275\u0275repeaterCreate(17, SidebarComponent_For_18_Template, 9, 11, "div", 12, _forTrack03);
                i016.\u0275\u0275elementEnd();
            }
            if (rf & 2) {
                i016.\u0275\u0275advance(3);
                i016.\u0275\u0275property("img", ctx.Search)("size", 14);
                i016.\u0275\u0275advance(5);
                i016.\u0275\u0275property("img", ctx.BookOpen)("size", 16);
                i016.\u0275\u0275advance(4);
                i016.\u0275\u0275property("img", ctx.Lock)("size", 16);
                i016.\u0275\u0275advance(5);
                i016.\u0275\u0275repeater(ctx.menuData);
            }
        },
        dependencies: [CommonModule4, i3.NgClass, i3.NgComponentOutlet, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i3.NgPlural, i3.NgPluralCase, RouterLink3, RouterLinkActive, LucideAngularModule2, i44.LucideAngularComponent, i3.AsyncPipe, i3.UpperCasePipe, i3.LowerCasePipe, i3.JsonPipe, i3.SlicePipe, i3.DecimalPipe, i3.PercentPipe, i3.TitleCasePipe, i3.CurrencyPipe, i3.DatePipe, i3.I18nPluralPipe, i3.I18nSelectPipe, i3.KeyValuePipe],
        styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n  font-family: "Inter", sans-serif;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  height: 100%;\n  overflow-y: auto;\n  scrollbar-gutter: stable;\n  scrollbar-width: none;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]:hover {\n  scrollbar-width: thin;\n  scrollbar-color: #334155 transparent;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  background-color: transparent;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  background-color: #334155;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\n.jump-to[_ngcontent-%COMP%] {\n  background: #2d3544;\n  color: #94a3b8;\n  height: 38px;\n  padding: 0 14px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #3d4658;\n  cursor: text;\n}\n.jump-to-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  height: 44px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #94a3b8;\n  transition: all 0.15s ease;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n  color: #fff;\n}\n.icon-margin[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n}\n.icon-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.divider[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #475569;\n  padding: 24px 16px 8px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n.category-group[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 8px 0 16px;\n  transition: background 0.2s ease, color 0.2s ease;\n  border-radius: 6px;\n  margin: 0 4px;\n}\n.toggle-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-right: 4px;\n  color: #64748b;\n}\n.toggle-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.category-link[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-decoration: none;\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  transition: color 0.2s;\n}\n.category-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.is-open[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.endpoint-list[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n.nav-item.endpoint[_ngcontent-%COMP%] {\n  padding-left: 48px;\n  height: 38px;\n  justify-content: space-between;\n}\n.category-header.active-category[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.1) !important;\n}\n.active-category[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%], \n.active-category[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  color: #38bdf8 !important;\n}\n.category-header[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.category-header.active-category[_ngcontent-%COMP%]:hover {\n  background: rgba(56, 189, 248, 0.15) !important;\n}\n.active-link[data-method=GET][_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.active-link[data-method=POST][_ngcontent-%COMP%] {\n  border-left-color: #ffb400;\n}\n.active-link[data-method=DELETE][_ngcontent-%COMP%] {\n  border-left-color: #f43f5e;\n}\n.active-link[data-method=PATCH][_ngcontent-%COMP%] {\n  border-left-color: #38bdf8;\n}\n.active-link[data-method=WS][_ngcontent-%COMP%] {\n  border-left-color: #a855f7;\n}\n.method-badge[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n[data-method=GET][_ngcontent-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n[data-method=POST][_ngcontent-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  color: #ffb400;\n  background: rgba(255, 180, 0, 0.1);\n}\n[data-method=DELETE][_ngcontent-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n[data-method=PATCH][_ngcontent-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  background: rgba(56, 189, 248, 0.1);\n}\n[data-method=WS][_ngcontent-%COMP%]   .method-badge[_ngcontent-%COMP%] {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n/*# sourceMappingURL=sidebar.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassMetadata(SidebarComponent, [{
        type: Component7,
        args: [{
            selector: "app-sidebar",
            standalone: true,
            imports: [CommonModule4, RouterLink3, RouterLinkActive, LucideAngularModule2],
            template: `<nav class="sidebar-wrapper">
  <div class="sidebar-header">
    <div class="jump-to">
      <lucide-icon [img]="Search" [size]="14" class="icon-muted"></lucide-icon>
      <span class="jump-to-text">JUMP TO</span>
    </div>
  </div>

  <div class="static-links">
    <a class="nav-item" routerLink="/docs/getting-started" routerLinkActive="active-static">
      <lucide-icon [img]="BookOpen" [size]="16" class="icon-margin"></lucide-icon>
      <span class="nav-text">Getting Started</span>
    </a>
    <a class="nav-item" routerLink="/docs/security" routerLinkActive="active-static">
      <lucide-icon [img]="Lock" [size]="16" class="icon-margin"></lucide-icon>
      <span class="nav-text">Security</span>
    </a>
  </div>

  <div class="divider">API REFERENCE</div>

  @for (cat of menuData; track cat.name) {
    <div class="category-group" [class.is-open]="expandedCategories[cat.name]">

      <div class="category-header" [class.active-category]="rla.isActive">
        <div class="toggle-button" (click)="toggleCategory(cat.name)" title="Toggle Category">
          <lucide-icon [img]="ChevronRight" [size]="14" class="arrow-icon"></lucide-icon>
        </div>

        <a [routerLink]="['/docs/category', cat.name.toLowerCase()]"
           routerLinkActive="active-category"
           #rla="routerLinkActive"
           class="category-link">
          <span class="category-name">{{ cat.name }}</span>
        </a>
      </div>

      @if (expandedCategories[cat.name]) {
        <div class="endpoint-list">
          @for (end of cat.endpoints; track end.id) {
            <a [routerLink]="['/docs', end.id]"
               routerLinkActive="active-link"
               class="nav-item endpoint"
               [attr.data-method]="end.method">
              <span class="endpoint-name">{{ end.title }}</span>
              <span class="method-badge">{{ end.method }}</span>
            </a>
          }
        </div>
      }
    </div>
  }
</nav>
`,
            styles: ['/* src/app/features/other/docs/components/sidebar/sidebar.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n  font-family: "Inter", sans-serif;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n}\n.sidebar-wrapper {\n  padding: 16px 0;\n  height: 100%;\n  overflow-y: auto;\n  scrollbar-gutter: stable;\n  scrollbar-width: none;\n}\n.sidebar-wrapper:hover {\n  scrollbar-width: thin;\n  scrollbar-color: #334155 transparent;\n}\n.sidebar-wrapper::-webkit-scrollbar {\n  width: 6px;\n  background-color: transparent;\n}\n.sidebar-wrapper::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 10px;\n}\n.sidebar-wrapper:hover::-webkit-scrollbar-thumb {\n  background-color: #334155;\n}\n.sidebar-wrapper::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n.sidebar-header {\n  padding: 0 16px 16px;\n}\n.jump-to {\n  background: #2d3544;\n  color: #94a3b8;\n  height: 38px;\n  padding: 0 14px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #3d4658;\n  cursor: text;\n}\n.jump-to-text {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  height: 44px;\n  text-decoration: none;\n  font-size: 14px;\n  color: #94a3b8;\n  transition: all 0.15s ease;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover {\n  background: rgba(255, 255, 255, 0.03);\n  color: #fff;\n}\n.icon-margin {\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n}\n.icon-muted {\n  color: #64748b;\n}\n.divider {\n  font-size: 10px;\n  font-weight: 800;\n  color: #475569;\n  padding: 24px 16px 8px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n.category-group {\n  margin-bottom: 2px;\n}\n.category-header {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 8px 0 16px;\n  transition: background 0.2s ease, color 0.2s ease;\n  border-radius: 6px;\n  margin: 0 4px;\n}\n.toggle-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-right: 4px;\n  color: #64748b;\n}\n.toggle-button:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n}\n.category-link {\n  flex-grow: 1;\n  text-decoration: none;\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  transition: color 0.2s;\n}\n.category-link:hover {\n  color: #fff;\n}\n.arrow-icon {\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.is-open .arrow-icon {\n  transform: rotate(90deg);\n}\n.endpoint-list {\n  margin-top: 2px;\n  margin-bottom: 8px;\n}\n.nav-item.endpoint {\n  padding-left: 48px;\n  height: 38px;\n  justify-content: space-between;\n}\n.category-header.active-category {\n  background: rgba(56, 189, 248, 0.1) !important;\n}\n.active-category .category-link,\n.active-category .arrow-icon {\n  color: #38bdf8 !important;\n}\n.category-header:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.category-header.active-category:hover {\n  background: rgba(56, 189, 248, 0.15) !important;\n}\n.active-link[data-method=GET] {\n  border-left-color: #10b981;\n}\n.active-link[data-method=POST] {\n  border-left-color: #ffb400;\n}\n.active-link[data-method=DELETE] {\n  border-left-color: #f43f5e;\n}\n.active-link[data-method=PATCH] {\n  border-left-color: #38bdf8;\n}\n.active-link[data-method=WS] {\n  border-left-color: #a855f7;\n}\n.method-badge {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n[data-method=GET] .method-badge {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n[data-method=POST] .method-badge {\n  color: #ffb400;\n  background: rgba(255, 180, 0, 0.1);\n}\n[data-method=DELETE] .method-badge {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n[data-method=PATCH] .method-badge {\n  color: #38bdf8;\n  background: rgba(56, 189, 248, 0.1);\n}\n[data-method=WS] .method-badge {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n']
        }]
    }], () => [{
        type: DocService
    }, {
        type: i23.Router
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(SidebarComponent, {
        className: "SidebarComponent",
        filePath: "app/features/other/docs/components/sidebar/sidebar.component.ts",
        lineNumber: 16
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fcomponents%2Fsidebar%2Fsidebar.component.ts%40SidebarComponent";
    function SidebarComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i016.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i016.\u0275\u0275replaceMetadata(SidebarComponent, m.default, [i016, i3, i44, DocService_exports, i23], [CommonModule4, RouterLink3, RouterLinkActive, LucideAngularModule2, Component7], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && SidebarComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SidebarComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/docs-layout/docs-layout.component.ts
import*as i017 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var DocsLayoutComponent = class _DocsLayoutComponent {
    static \u0275fac = function DocsLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DocsLayoutComponent)();
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i017.\u0275\u0275defineComponent({
        type: _DocsLayoutComponent,
        selectors: [["app-docs-layout"]],
        decls: 4,
        vars: 0,
        consts: [[1, "docs-wrapper"], [1, "docs-sidebar"], [1, "docs-content"]],
        template: function DocsLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i017.\u0275\u0275elementStart(0, "div", 0);
                i017.\u0275\u0275element(1, "app-sidebar", 1);
                i017.\u0275\u0275elementStart(2, "div", 2);
                i017.\u0275\u0275element(3, "router-outlet");
                i017.\u0275\u0275elementEnd()();
            }
        },
        dependencies: [RouterOutlet2, SidebarComponent],
        styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: #1e1e2e;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.docs-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  overflow: hidden;\n}\n.docs-sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 260px;\n  flex-shrink: 0;\n  background-color: #1e1e2e;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.docs-content[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100vh;\n  overflow-y: auto;\n  background-color: #1a1f28;\n}\n/*# sourceMappingURL=docs-layout.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassMetadata(DocsLayoutComponent, [{
        type: Component8,
        args: [{
            selector: "app-docs-layout",
            standalone: true,
            imports: [RouterOutlet2, SidebarComponent],
            template: '<div class="docs-wrapper">\n  <app-sidebar class="docs-sidebar"></app-sidebar>\n\n  <div class="docs-content">\n    <router-outlet></router-outlet> </div>\n</div>\n',
            styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap";\n\n/* src/app/features/other/docs/docs-layout/docs-layout.component.css */\n:host {\n  display: block;\n  margin: 0;\n  padding: 0;\n  background-color: #1e1e2e;\n  color: #ffffff;\n  font-family: "Inter", sans-serif;\n}\n.docs-wrapper {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  overflow: hidden;\n}\n.docs-sidebar {\n  height: 100vh;\n  width: 260px;\n  flex-shrink: 0;\n  background-color: #1e1e2e;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.docs-content {\n  flex: 1;\n  height: 100vh;\n  overflow-y: auto;\n  background-color: #1a1f28;\n}\n/*# sourceMappingURL=docs-layout.component.css.map */\n']
        }]
    }], null, null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(DocsLayoutComponent, {
        className: "DocsLayoutComponent",
        filePath: "app/features/other/docs/docs-layout/docs-layout.component.ts",
        lineNumber: 12
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fdocs-layout%2Fdocs-layout.component.ts%40DocsLayoutComponent";
    function DocsLayoutComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i017.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i017.\u0275\u0275replaceMetadata(DocsLayoutComponent, m.default, [i017], [RouterOutlet2, SidebarComponent, Component8], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && DocsLayoutComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DocsLayoutComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/docs-list/docs-list.component.ts
import {Component as Component9} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {RouterLink as RouterLink4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import {CommonModule as CommonModule5} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i018 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i24 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
var _c03 = (a0) => ["/docs", a0];
var _forTrack04 = ($index, $item) => $item.name;
var _forTrack13 = ($index, $item) => $item.id;
function DocsListComponent_For_10_For_9_Template(rf, ctx) {
    if (rf & 1) {
        i018.\u0275\u0275elementStart(0, "a", 8)(1, "div", 9)(2, "span", 10);
        i018.\u0275\u0275text(3);
        i018.\u0275\u0275elementEnd();
        i018.\u0275\u0275elementStart(4, "code", 11);
        i018.\u0275\u0275text(5);
        i018.\u0275\u0275elementEnd()();
        i018.\u0275\u0275elementStart(6, "h3");
        i018.\u0275\u0275text(7);
        i018.\u0275\u0275elementEnd();
        i018.\u0275\u0275elementStart(8, "p");
        i018.\u0275\u0275text(9);
        i018.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const end_r1 = ctx.$implicit;
        i018.\u0275\u0275property("routerLink", i018.\u0275\u0275pureFunction1(6, _c03, end_r1.id));
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275attribute("data-method", end_r1.method);
        i018.\u0275\u0275advance();
        i018.\u0275\u0275textInterpolate(end_r1.method);
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate(end_r1.path);
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate(end_r1.title);
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate(end_r1.description);
    }
}
function DocsListComponent_For_10_Template(rf, ctx) {
    if (rf & 1) {
        i018.\u0275\u0275elementStart(0, "div", 4)(1, "div", 2);
        i018.\u0275\u0275text(2);
        i018.\u0275\u0275elementEnd();
        i018.\u0275\u0275elementStart(3, "h2", 5);
        i018.\u0275\u0275text(4);
        i018.\u0275\u0275elementEnd();
        i018.\u0275\u0275elementStart(5, "p", 6);
        i018.\u0275\u0275text(6);
        i018.\u0275\u0275elementEnd();
        i018.\u0275\u0275elementStart(7, "div", 7);
        i018.\u0275\u0275repeaterCreate(8, DocsListComponent_For_10_For_9_Template, 10, 8, "a", 8, _forTrack13);
        i018.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const cat_r2 = ctx.$implicit;
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate(cat_r2.name);
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate1("", cat_r2.name, " Reference");
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275textInterpolate(cat_r2.description);
        i018.\u0275\u0275advance(2);
        i018.\u0275\u0275repeater(cat_r2.endpoints);
    }
}
var DocsListComponent = class _DocsListComponent {
    docService;
    categories = [];
    constructor(docService) {
        this.docService = docService;
    }
    ngOnInit() {
        this.categories = this.docService.getCategoryStructure();
    }
    static \u0275fac = function DocsListComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DocsListComponent)(i018.\u0275\u0275directiveInject(DocService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i018.\u0275\u0275defineComponent({
        type: _DocsListComponent,
        selectors: [["app-docs-index"]],
        decls: 11,
        vars: 0,
        consts: [[1, "category-view"], [1, "info-pane", "full-width"], [1, "section-label"], [1, "desc"], [1, "category-section", 2, "margin-top", "80px"], [2, "color", "#f8fafc", "font-size", "28px", "margin-bottom", "12px"], [1, "desc", 2, "margin-bottom", "30px"], [1, "endpoint-grid"], [1, "endpoint-card", 3, "routerLink"], [1, "card-head"], [1, "method-tag"], [1, "path-tiny"]],
        template: function DocsListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i018.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header")(3, "div", 2);
                i018.\u0275\u0275text(4, "API DOCUMENTATION");
                i018.\u0275\u0275elementEnd();
                i018.\u0275\u0275elementStart(5, "h1");
                i018.\u0275\u0275text(6, "Developer Hub");
                i018.\u0275\u0275elementEnd();
                i018.\u0275\u0275elementStart(7, "p", 3);
                i018.\u0275\u0275text(8, " Explore the Starcord API Docs Your complete guide to the Starcord API. Everything you need to handle authentication, power your messaging, and manage users is right here at your fingertips. Happy coding and try not to swear too much! ");
                i018.\u0275\u0275elementEnd()();
                i018.\u0275\u0275repeaterCreate(9, DocsListComponent_For_10_Template, 10, 3, "div", 4, _forTrack04);
                i018.\u0275\u0275elementEnd()();
            }
            if (rf & 2) {
                i018.\u0275\u0275advance(9);
                i018.\u0275\u0275repeater(ctx.categories);
            }
        },
        dependencies: [RouterLink4, CommonModule5, i24.NgClass, i24.NgComponentOutlet, i24.NgForOf, i24.NgIf, i24.NgTemplateOutlet, i24.NgStyle, i24.NgSwitch, i24.NgSwitchCase, i24.NgSwitchDefault, i24.NgPlural, i24.NgPluralCase, i24.AsyncPipe, i24.UpperCasePipe, i24.LowerCasePipe, i24.JsonPipe, i24.SlicePipe, i24.DecimalPipe, i24.PercentPipe, i24.TitleCasePipe, i24.CurrencyPipe, i24.DatePipe, i24.I18nPluralPipe, i24.I18nSelectPipe, i24.KeyValuePipe],
        styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n}\n.full-screen-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100%;\n  width: 100%;\n}\n.category-view[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n  background-color: #1a1f28;\n}\n.info-pane[_ngcontent-%COMP%] {\n  padding: 60px 80px;\n  background-color: #1a1f28;\n  overflow-y: auto;\n}\n.info-pane.full-width[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.response-pane[_ngcontent-%COMP%] {\n  padding: 60px 50px;\n  background-color: #0d1117;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n  overflow-y: auto;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  max-width: 800px;\n  white-space: pre-line;\n}\n.base-url-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.base-url-box[_ngcontent-%COMP%]   .response-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n}\n.base-url-box[_ngcontent-%COMP%]   .code-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 20px;\n  background: #0d1117;\n  border: 1px solid #21262d;\n}\n.metadata-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.auth-pill[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.auth-pill.is-unauthenticated[_ngcontent-%COMP%] {\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  margin-right: 8px;\n}\n.rate-pill[_ngcontent-%COMP%] {\n  border-color: rgba(56, 189, 248, 0.2);\n}\n.pill-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-right: 6px;\n}\n.pill-value[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n.url-bar[_ngcontent-%COMP%] {\n  background: #262c38;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #333c4d;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 35px;\n}\n.path[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  color: #e2e8f0;\n  font-size: 14px;\n}\n.method-tag[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.method-tag[data-method=GET][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid #10b98144;\n}\n.method-tag[data-method=POST][_ngcontent-%COMP%] {\n  background: rgba(255, 180, 0, 0.1);\n  color: #ffb400;\n  border: 1px solid #ffb40044;\n}\n.method-tag[data-method=PATCH][_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.1);\n  color: #38bdf8;\n  border: 1px solid #38bdf844;\n}\n.method-tag[data-method=DELETE][_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #f43f5e;\n  border: 1px solid #f43f5e44;\n}\n.method-tag[data-method=WS][_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #a855f7;\n  border: 1px solid #a855f744;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 16px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  border-bottom: none;\n}\n.param-row[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.param-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.name[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 700;\n  color: #f1f5f9;\n  font-size: 14px;\n}\n.type[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  color: #64748b;\n  margin-left: 12px;\n  font-size: 12px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #f43f5e;\n  font-size: 10px;\n  font-weight: 800;\n  margin-left: 12px;\n  padding: 2px 6px;\n  background: rgba(244, 63, 94, 0.1);\n  border-radius: 4px;\n}\n.p-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin: 8px 0;\n  line-height: 1.5;\n  font-size: 14px;\n  white-space: pre-line;\n}\n.ex[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ex[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  font-family: "JetBrains Mono", monospace;\n  background: rgba(56, 189, 248, 0.08);\n  padding: 3px 6px;\n  border-radius: 4px;\n  border: 1px solid rgba(56, 189, 248, 0.1);\n}\n.res-card[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\n.res-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.response-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 400;\n  text-align: right;\n}\n.status-code[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.code-success[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.code-error[_ngcontent-%COMP%] {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n.code-server[_ngcontent-%COMP%] {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n.code-box[_ngcontent-%COMP%] {\n  background: #010409;\n  border: 1px solid #21262d;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.code-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.code-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #a5d6ff;\n  white-space: pre;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.endpoint-card[_ngcontent-%COMP%]:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.endpoint-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #94a3b8;\n}\n.path-tiny[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.category-section[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  margin-top: 50px !important;\n  padding-top: 30px !important;\n}\n.category-section[_ngcontent-%COMP%]:first-of-type {\n  border-top: none !important;\n  margin-top: 20px !important;\n}\n.category-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.category-view[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=docs-list.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassMetadata(DocsListComponent, [{
        type: Component9,
        args: [{
            selector: "app-docs-index",
            standalone: true,
            imports: [RouterLink4, CommonModule5],
            template: `<div class="category-view">
  <div class="info-pane full-width">
    <header>
      <div class="section-label">API DOCUMENTATION</div>
      <h1>Developer Hub</h1>
      <p class="desc">
        Explore the Starcord API Docs

        Your complete guide to the Starcord API. Everything you need to handle authentication, power your messaging, and manage users is right here at your fingertips. Happy coding and try not to swear too much!
      </p>
    </header>

    @for (cat of categories; track cat.name) {
      <div class="category-section" style="margin-top: 80px;">
        <div class="section-label">{{ cat.name }}</div>
        <h2 style="color: #f8fafc; font-size: 28px; margin-bottom: 12px;">{{ cat.name }} Reference</h2>
        <p class="desc" style="margin-bottom: 30px;">{{ cat.description }}</p>

        <div class="endpoint-grid">
          @for (end of cat.endpoints; track end.id) {
            <a [routerLink]="['/docs', end.id]" class="endpoint-card">
              <div class="card-head">
                <span class="method-tag" [attr.data-method]="end.method">{{ end.method }}</span>
                <code class="path-tiny">{{ end.path }}</code>
              </div>
              <h3>{{ end.title }}</h3>
              <p>{{ end.description }}</p>
            </a>
          }
        </div>
      </div>
    }
  </div>
</div>
`,
            styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n/* src/app/features/other/docs/docs-list/docs-list.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n}\n.full-screen-detail {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100%;\n  width: 100%;\n}\n.category-view {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n  background-color: #1a1f28;\n}\n.info-pane {\n  padding: 60px 80px;\n  background-color: #1a1f28;\n  overflow-y: auto;\n}\n.info-pane.full-width {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.response-pane {\n  padding: 60px 50px;\n  background-color: #0d1117;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n  overflow-y: auto;\n}\n.title-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\nh1 {\n  font-size: 38px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.desc {\n  font-size: 16px;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  max-width: 800px;\n  white-space: pre-line;\n}\n.base-url-box {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.base-url-box .response-title {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n}\n.base-url-box .code-box {\n  display: inline-block;\n  padding: 12px 20px;\n  background: #0d1117;\n  border: 1px solid #21262d;\n}\n.metadata-pills {\n  display: flex;\n  gap: 12px;\n}\n.pill {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.auth-pill {\n  color: #fbbf24;\n}\n.auth-pill.is-unauthenticated {\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  margin-right: 8px;\n}\n.rate-pill {\n  border-color: rgba(56, 189, 248, 0.2);\n}\n.pill-label {\n  color: #64748b;\n  margin-right: 6px;\n}\n.pill-value {\n  color: #38bdf8;\n}\n.url-bar {\n  background: #262c38;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #333c4d;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 35px;\n}\n.path {\n  font-family: "JetBrains Mono", monospace;\n  color: #e2e8f0;\n  font-size: 14px;\n}\n.method-tag {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.method-tag[data-method=GET] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid #10b98144;\n}\n.method-tag[data-method=POST] {\n  background: rgba(255, 180, 0, 0.1);\n  color: #ffb400;\n  border: 1px solid #ffb40044;\n}\n.method-tag[data-method=PATCH] {\n  background: rgba(56, 189, 248, 0.1);\n  color: #38bdf8;\n  border: 1px solid #38bdf844;\n}\n.method-tag[data-method=DELETE] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #f43f5e;\n  border: 1px solid #f43f5e44;\n}\n.method-tag[data-method=WS] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #a855f7;\n  border: 1px solid #a855f744;\n}\n.section-label {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 0;\n  margin-bottom: 16px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  border-bottom: none;\n}\n.param-row {\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.param-line {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.name {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 700;\n  color: #f1f5f9;\n  font-size: 14px;\n}\n.type {\n  font-family: "JetBrains Mono", monospace;\n  color: #64748b;\n  margin-left: 12px;\n  font-size: 12px;\n}\n.req {\n  color: #f43f5e;\n  font-size: 10px;\n  font-weight: 800;\n  margin-left: 12px;\n  padding: 2px 6px;\n  background: rgba(244, 63, 94, 0.1);\n  border-radius: 4px;\n}\n.p-desc {\n  color: #94a3b8;\n  margin: 8px 0;\n  line-height: 1.5;\n  font-size: 14px;\n  white-space: pre-line;\n}\n.ex {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ex code {\n  color: #38bdf8;\n  font-family: "JetBrains Mono", monospace;\n  background: rgba(56, 189, 248, 0.08);\n  padding: 3px 6px;\n  border-radius: 4px;\n  border: 1px solid rgba(56, 189, 248, 0.1);\n}\n.res-card {\n  margin-bottom: 64px;\n}\n.res-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.response-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-description {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 400;\n  text-align: right;\n}\n.status-code {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.code-success {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.code-error {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n.code-server {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n.code-box {\n  background: #010409;\n  border: 1px solid #21262d;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.code-box pre {\n  margin: 0;\n}\n.code-box code {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #a5d6ff;\n  white-space: pre;\n}\n.endpoint-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.endpoint-card {\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.endpoint-card:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card h3 {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.endpoint-card p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #94a3b8;\n}\n.path-tiny {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.category-section {\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  margin-top: 50px !important;\n  padding-top: 30px !important;\n}\n.category-section:first-of-type {\n  border-top: none !important;\n  margin-top: 20px !important;\n}\n.category-section h2 {\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.category-view {\n  animation: fadeIn 0.4s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=docs-list.component.css.map */\n']
        }]
    }], () => [{
        type: DocService
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassDebugInfo(DocsListComponent, {
        className: "DocsListComponent",
        filePath: "app/features/other/docs/docs-list/docs-list.component.ts",
        lineNumber: 14
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fdocs-list%2Fdocs-list.component.ts%40DocsListComponent";
    function DocsListComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i018.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i018.\u0275\u0275replaceMetadata(DocsListComponent, m.default, [i018, i24, DocService_exports], [RouterLink4, CommonModule5, Component9], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && DocsListComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DocsListComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/docs-detail/docs-detail.component.ts
import {Component as Component10} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {RouterLink as RouterLink5} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import {CommonModule as CommonModule6} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
import*as i019 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i17 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i32 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common.js?v=909ddf94";
var _c04 = (a0, a1, a2) => ({
    "code-success": a0,
    "code-error": a1,
    "code-server": a2
});
var _c12 = (a0) => ["/docs", a0];
var _forTrack05 = ($index, $item) => $item.title;
var _forTrack14 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function DocsDetailComponent_Conditional_0_Conditional_21_For_4_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "span", 22);
        i019.\u0275\u0275text(1, "REQUIRED");
        i019.\u0275\u0275elementEnd();
    }
}
function DocsDetailComponent_Conditional_0_Conditional_21_For_4_Conditional_9_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 24);
        i019.\u0275\u0275text(1, "Example: ");
        i019.\u0275\u0275elementStart(2, "code");
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const param_r1 = i019.\u0275\u0275nextContext().$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(param_r1.exampleValue);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_21_For_4_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(4, "span", 21);
        i019.\u0275\u0275text(5);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(6, DocsDetailComponent_Conditional_0_Conditional_21_For_4_Conditional_6_Template, 2, 0, "span", 22);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(7, "p", 23);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(9, DocsDetailComponent_Conditional_0_Conditional_21_For_4_Conditional_9_Template, 4, 1, "div", 24);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const param_r1 = ctx.$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(param_r1.name);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(param_r1.type);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(param_r1.required ? 6 : -1);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(param_r1.description);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(param_r1.exampleValue !== void 0 ? 9 : -1);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 15);
        i019.\u0275\u0275text(1, "PARAMETERS");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(2, "div", 17);
        i019.\u0275\u0275repeaterCreate(3, DocsDetailComponent_Conditional_0_Conditional_21_For_4_Template, 10, 5, "div", 18, _forTrack14);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i019.\u0275\u0275nextContext(2);
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275repeater(ctx_r1.endpoint.parameters);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_22_For_4_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "span", 22);
        i019.\u0275\u0275text(1, "REQUIRED");
        i019.\u0275\u0275elementEnd();
    }
}
function DocsDetailComponent_Conditional_0_Conditional_22_For_4_Conditional_9_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 24);
        i019.\u0275\u0275text(1, "Example: ");
        i019.\u0275\u0275elementStart(2, "code");
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const header_r3 = i019.\u0275\u0275nextContext().$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(header_r3.exampleValue);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_22_For_4_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(4, "span", 21);
        i019.\u0275\u0275text(5);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(6, DocsDetailComponent_Conditional_0_Conditional_22_For_4_Conditional_6_Template, 2, 0, "span", 22);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(7, "p", 23);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(9, DocsDetailComponent_Conditional_0_Conditional_22_For_4_Conditional_9_Template, 4, 1, "div", 24);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const header_r3 = ctx.$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(header_r3.name);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(header_r3.type);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(header_r3.required ? 6 : -1);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(header_r3.description);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(header_r3.exampleValue ? 9 : -1);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 15);
        i019.\u0275\u0275text(1, "HEADERS");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(2, "div", 17);
        i019.\u0275\u0275repeaterCreate(3, DocsDetailComponent_Conditional_0_Conditional_22_For_4_Template, 10, 5, "div", 18, _forTrack14);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i019.\u0275\u0275nextContext(2);
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275repeater(ctx_r1.endpoint.headers);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_23_For_4_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "span", 22);
        i019.\u0275\u0275text(1, "REQUIRED");
        i019.\u0275\u0275elementEnd();
    }
}
function DocsDetailComponent_Conditional_0_Conditional_23_For_4_Conditional_9_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 24);
        i019.\u0275\u0275text(1, "Example: ");
        i019.\u0275\u0275elementStart(2, "code");
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const param_r4 = i019.\u0275\u0275nextContext().$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(param_r4.exampleValue);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_23_For_4_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(4, "span", 21);
        i019.\u0275\u0275text(5);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(6, DocsDetailComponent_Conditional_0_Conditional_23_For_4_Conditional_6_Template, 2, 0, "span", 22);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(7, "p", 23);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(9, DocsDetailComponent_Conditional_0_Conditional_23_For_4_Conditional_9_Template, 4, 1, "div", 24);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const param_r4 = ctx.$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(param_r4.name);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(param_r4.type);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(param_r4.required ? 6 : -1);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(param_r4.description);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(param_r4.exampleValue ? 9 : -1);
    }
}
function DocsDetailComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 15);
        i019.\u0275\u0275text(1, "BODY PARAMETERS");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(2, "div", 17);
        i019.\u0275\u0275repeaterCreate(3, DocsDetailComponent_Conditional_0_Conditional_23_For_4_Template, 10, 5, "div", 18, _forTrack14);
        i019.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i019.\u0275\u0275nextContext(2);
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275repeater(ctx_r1.endpoint.bodyParams);
    }
}
function DocsDetailComponent_Conditional_0_For_28_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 16)(1, "div", 25)(2, "span", 26);
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(4, "div", 27)(5, "span", 28);
        i019.\u0275\u0275text(6);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(7, "span", 29);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd()()();
        i019.\u0275\u0275elementStart(9, "div", 30)(10, "pre")(11, "code");
        i019.\u0275\u0275text(12);
        i019.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
        const res_r5 = ctx.$implicit;
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(res_r5.title);
        i019.\u0275\u0275advance(3);
        i019.\u0275\u0275textInterpolate(res_r5.description);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275property("ngClass", i019.\u0275\u0275pureFunction3(5, _c04, res_r5.code < 300, res_r5.code >= 400 && res_r5.code < 500, res_r5.code >= 500));
        i019.\u0275\u0275advance();
        i019.\u0275\u0275textInterpolate(res_r5.code);
        i019.\u0275\u0275advance(4);
        i019.\u0275\u0275textInterpolate(res_r5.exampleJson);
    }
}
function DocsDetailComponent_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3)(3, "h1");
        i019.\u0275\u0275text(4);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        i019.\u0275\u0275element(7, "span", 6);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
        i019.\u0275\u0275text(11, "Rate Limit");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(12, "span", 9);
        i019.\u0275\u0275text(13);
        i019.\u0275\u0275elementEnd()()()();
        i019.\u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
        i019.\u0275\u0275text(16);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(17, "code", 12);
        i019.\u0275\u0275text(18);
        i019.\u0275\u0275elementEnd()();
        i019.\u0275\u0275elementStart(19, "p", 13);
        i019.\u0275\u0275text(20);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275conditionalCreate(21, DocsDetailComponent_Conditional_0_Conditional_21_Template, 5, 0);
        i019.\u0275\u0275conditionalCreate(22, DocsDetailComponent_Conditional_0_Conditional_22_Template, 5, 0);
        i019.\u0275\u0275conditionalCreate(23, DocsDetailComponent_Conditional_0_Conditional_23_Template, 5, 0);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(24, "div", 14)(25, "div", 15);
        i019.\u0275\u0275text(26, "RESPONSES");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275repeaterCreate(27, DocsDetailComponent_Conditional_0_For_28_Template, 13, 9, "div", 16, _forTrack05);
        i019.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i019.\u0275\u0275nextContext();
        i019.\u0275\u0275advance(4);
        i019.\u0275\u0275textInterpolate(ctx_r1.endpoint.title);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275classProp("is-unauthenticated", ctx_r1.endpoint.authenticated === false);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate1(" ", ctx_r1.endpoint.authenticated === false ? "Public" : "Authenticated", " ");
        i019.\u0275\u0275advance(5);
        i019.\u0275\u0275textInterpolate1("", ctx_r1.endpoint.rateLimit, " requests per minute");
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275attribute("data-method", ctx_r1.endpoint.method);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275textInterpolate(ctx_r1.endpoint.method);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(ctx_r1.endpoint.path);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(ctx_r1.endpoint.description);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(ctx_r1.endpoint.parameters && ctx_r1.endpoint.parameters.length > 0 ? 21 : -1);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(ctx_r1.endpoint.headers && ctx_r1.endpoint.headers.length > 0 ? 22 : -1);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275conditional(ctx_r1.endpoint.bodyParams && ctx_r1.endpoint.bodyParams.length > 0 ? 23 : -1);
        i019.\u0275\u0275advance(4);
        i019.\u0275\u0275repeater(ctx_r1.endpoint.responses);
    }
}
function DocsDetailComponent_Conditional_1_For_19_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "a", 34)(1, "div", 35)(2, "span", 11);
        i019.\u0275\u0275text(3);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(4, "code", 36);
        i019.\u0275\u0275text(5);
        i019.\u0275\u0275elementEnd()();
        i019.\u0275\u0275elementStart(6, "h3");
        i019.\u0275\u0275text(7);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(8, "p");
        i019.\u0275\u0275text(9);
        i019.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const end_r6 = ctx.$implicit;
        i019.\u0275\u0275property("routerLink", i019.\u0275\u0275pureFunction1(6, _c12, end_r6.id));
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275attribute("data-method", end_r6.method);
        i019.\u0275\u0275advance();
        i019.\u0275\u0275textInterpolate(end_r6.method);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(end_r6.path);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(end_r6.title);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(end_r6.description);
    }
}
function DocsDetailComponent_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i019.\u0275\u0275elementStart(0, "div", 1)(1, "div", 31)(2, "header")(3, "div", 15);
        i019.\u0275\u0275text(4, "API REFERENCE");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(5, "h1");
        i019.\u0275\u0275text(6);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(7, "p", 13);
        i019.\u0275\u0275text(8);
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(9, "div", 32)(10, "span", 26);
        i019.\u0275\u0275text(11, "BASE URL");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(12, "div", 30)(13, "code");
        i019.\u0275\u0275text(14);
        i019.\u0275\u0275elementEnd()()()();
        i019.\u0275\u0275elementStart(15, "div", 15);
        i019.\u0275\u0275text(16, "ENDPOINTS");
        i019.\u0275\u0275elementEnd();
        i019.\u0275\u0275elementStart(17, "div", 33);
        i019.\u0275\u0275repeaterCreate(18, DocsDetailComponent_Conditional_1_For_19_Template, 10, 8, "a", 34, _forTrack2);
        i019.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        const ctx_r1 = i019.\u0275\u0275nextContext();
        i019.\u0275\u0275advance(6);
        i019.\u0275\u0275textInterpolate(ctx_r1.category.name);
        i019.\u0275\u0275advance(2);
        i019.\u0275\u0275textInterpolate(ctx_r1.category.description);
        i019.\u0275\u0275advance(6);
        i019.\u0275\u0275textInterpolate(ctx_r1.category.basePath);
        i019.\u0275\u0275advance(4);
        i019.\u0275\u0275repeater(ctx_r1.category.endpoints);
    }
}
var DocsDetailComponent = class _DocsDetailComponent {
    route;
    docService;
    endpoint = null;
    category = null;
    constructor(route, docService) {
        this.route = route;
        this.docService = docService;
    }
    ngOnInit() {
        this.route.params.subscribe( (params) => {
            const id = params["endpointId"];
            const catName = params["catName"];
            if (catName) {
                this.category = this.docService.getCategoryByName(catName);
                this.endpoint = null;
            } else if (id) {
                this.endpoint = this.docService.getEndpointById(id);
                this.category = null;
            }
        }
        );
    }
    static \u0275fac = function DocsDetailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DocsDetailComponent)(i019.\u0275\u0275directiveInject(i17.ActivatedRoute),i019.\u0275\u0275directiveInject(DocService));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i019.\u0275\u0275defineComponent({
        type: _DocsDetailComponent,
        selectors: [["app-docs-detail"]],
        decls: 2,
        vars: 1,
        consts: [[1, "full-screen-detail"], [1, "category-view"], [1, "info-pane"], [1, "title-row"], [1, "metadata-pills"], [1, "pill", "auth-pill"], [1, "status-dot"], [1, "pill", "rate-pill"], [1, "pill-label"], [1, "pill-value"], [1, "url-bar"], [1, "method-tag"], [1, "path"], [1, "desc"], [1, "response-pane"], [1, "section-label"], [1, "res-card"], [1, "params-container"], [1, "param-row"], [1, "param-line"], [1, "name"], [1, "type"], [1, "req"], [1, "p-desc"], [1, "ex"], [1, "res-header"], [1, "response-title"], [1, "status-wrapper"], [1, "status-description"], [1, "status-code", 3, "ngClass"], [1, "code-box"], [1, "info-pane", "full-width"], [1, "base-url-box"], [1, "endpoint-grid"], [1, "endpoint-card", 3, "routerLink"], [1, "card-head"], [1, "path-tiny"]],
        template: function DocsDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                i019.\u0275\u0275conditionalCreate(0, DocsDetailComponent_Conditional_0_Template, 29, 12, "div", 0)(1, DocsDetailComponent_Conditional_1_Template, 20, 3, "div", 1);
            }
            if (rf & 2) {
                i019.\u0275\u0275conditional(ctx.endpoint ? 0 : ctx.category ? 1 : -1);
            }
        },
        dependencies: [RouterLink5, CommonModule6, i32.NgClass, i32.NgComponentOutlet, i32.NgForOf, i32.NgIf, i32.NgTemplateOutlet, i32.NgStyle, i32.NgSwitch, i32.NgSwitchCase, i32.NgSwitchDefault, i32.NgPlural, i32.NgPluralCase, i32.AsyncPipe, i32.UpperCasePipe, i32.LowerCasePipe, i32.JsonPipe, i32.SlicePipe, i32.DecimalPipe, i32.PercentPipe, i32.TitleCasePipe, i32.CurrencyPipe, i32.DatePipe, i32.I18nPluralPipe, i32.I18nSelectPipe, i32.KeyValuePipe],
        styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n}\n.full-screen-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100%;\n  width: 100%;\n}\n.category-view[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n  background-color: #1a1f28;\n}\n.info-pane[_ngcontent-%COMP%] {\n  padding: 60px 80px;\n  background-color: #1a1f28;\n  overflow-y: auto;\n}\n.info-pane.full-width[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.response-pane[_ngcontent-%COMP%] {\n  padding: 60px 50px;\n  background-color: #0d1117;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n  overflow-y: auto;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 38px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin-bottom: 40px;\n  max-width: 800px;\n  white-space: pre-line;\n}\n.base-url-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.base-url-box[_ngcontent-%COMP%]   .response-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n}\n.base-url-box[_ngcontent-%COMP%]   .code-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 20px;\n  background: #0d1117;\n  border: 1px solid #21262d;\n}\n.metadata-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.auth-pill[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.auth-pill.is-unauthenticated[_ngcontent-%COMP%] {\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  margin-right: 8px;\n}\n.rate-pill[_ngcontent-%COMP%] {\n  border-color: rgba(56, 189, 248, 0.2);\n}\n.pill-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-right: 6px;\n}\n.pill-value[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n.url-bar[_ngcontent-%COMP%] {\n  background: #262c38;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #333c4d;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 35px;\n}\n.path[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  color: #e2e8f0;\n  font-size: 14px;\n}\n.method-tag[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.method-tag[data-method=GET][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid #10b98144;\n}\n.method-tag[data-method=POST][_ngcontent-%COMP%] {\n  background: rgba(255, 180, 0, 0.1);\n  color: #ffb400;\n  border: 1px solid #ffb40044;\n}\n.method-tag[data-method=PATCH][_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.1);\n  color: #38bdf8;\n  border: 1px solid #38bdf844;\n}\n.method-tag[data-method=DELETE][_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #f43f5e;\n  border: 1px solid #f43f5e44;\n}\n.method-tag[data-method=WS][_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #a855f7;\n  border: 1px solid #a855f744;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 50px;\n  margin-bottom: 25px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  border-bottom: none;\n}\n.param-row[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.param-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.name[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 700;\n  color: #f1f5f9;\n  font-size: 14px;\n}\n.type[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  color: #64748b;\n  margin-left: 12px;\n  font-size: 12px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #f43f5e;\n  font-size: 10px;\n  font-weight: 800;\n  margin-left: 12px;\n  padding: 2px 6px;\n  background: rgba(244, 63, 94, 0.1);\n  border-radius: 4px;\n}\n.p-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin: 8px 0;\n  line-height: 1.5;\n  font-size: 14px;\n  white-space: pre-line;\n}\n.ex[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ex[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #38bdf8;\n  font-family: "JetBrains Mono", monospace;\n  background: rgba(56, 189, 248, 0.08);\n  padding: 3px 6px;\n  border-radius: 4px;\n  border: 1px solid rgba(56, 189, 248, 0.1);\n}\n.res-card[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\n.res-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.response-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 400;\n  text-align: right;\n}\n.status-code[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.code-success[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.code-error[_ngcontent-%COMP%] {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n.code-server[_ngcontent-%COMP%] {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n.code-box[_ngcontent-%COMP%] {\n  background: #010409;\n  border: 1px solid #21262d;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.code-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.code-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #a5d6ff;\n  white-space: pre;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.endpoint-card[_ngcontent-%COMP%]:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.endpoint-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #94a3b8;\n}\n.path-tiny[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.category-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.category-view[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=docs-detail.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassMetadata(DocsDetailComponent, [{
        type: Component10,
        args: [{
            selector: "app-docs-detail",
            standalone: true,
            imports: [RouterLink5, CommonModule6],
            template: `@if (endpoint) {
  <div class="full-screen-detail">
    <div class="info-pane">
      <div class="title-row">
        <h1>{{ endpoint.title }}</h1>
        <div class="metadata-pills">
          <div class="pill auth-pill" [class.is-unauthenticated]="endpoint.authenticated === false">
            <span class="status-dot"></span>
            {{ endpoint.authenticated === false ? 'Public' : 'Authenticated' }}
          </div>
          <div class="pill rate-pill">
            <span class="pill-label">Rate Limit</span>
            <span class="pill-value">{{ endpoint.rateLimit }} requests per minute</span>
          </div>
        </div>
      </div>

      <div class="url-bar">
        <span class="method-tag" [attr.data-method]="endpoint.method">{{ endpoint.method }}</span>
        <code class="path">{{ endpoint.path }}</code>
      </div>

      <p class="desc">{{ endpoint.description }}</p>

      @if (endpoint.parameters && endpoint.parameters.length > 0) {
        <div class="section-label">PARAMETERS</div>
        <div class="params-container">
          @for (param of endpoint.parameters; track param.name) {
            <div class="param-row">
              <div class="param-line">
                <span class="name">{{ param.name }}</span>
                <span class="type">{{ param.type }}</span>
                @if (param.required) { <span class="req">REQUIRED</span> }
              </div>
              <p class="p-desc">{{ param.description }}</p>

              @if (param.exampleValue !== undefined) {
                <div class="ex">Example: <code>{{ param.exampleValue }}</code></div>
              }
            </div>
          }
        </div>
      }

      @if (endpoint.headers && endpoint.headers.length > 0) {
        <div class="section-label">HEADERS</div>
        <div class="params-container">
          @for (header of endpoint.headers; track header.name) {
            <div class="param-row">
              <div class="param-line">
                <span class="name">{{ header.name }}</span>
                <span class="type">{{ header.type }}</span>
                @if (header.required) { <span class="req">REQUIRED</span> }
              </div>
              <p class="p-desc">{{ header.description }}</p>

              @if (header.exampleValue) {
                <div class="ex">Example: <code>{{ header.exampleValue }}</code></div>
              }
            </div>
          }
        </div>
      }

      @if (endpoint.bodyParams && endpoint.bodyParams.length > 0) {
        <div class="section-label">BODY PARAMETERS</div>
        <div class="params-container">
          @for (param of endpoint.bodyParams; track param.name) {
            <div class="param-row">
              <div class="param-line">
                <span class="name">{{ param.name }}</span>
                <span class="type">{{ param.type }}</span>
                @if (param.required) { <span class="req">REQUIRED</span> }
              </div>
              <p class="p-desc">{{ param.description }}</p>

              @if (param.exampleValue) {
                <div class="ex">Example: <code>{{ param.exampleValue }}</code></div>
              }
            </div>
          }
        </div>
      }
    </div>

    <div class="response-pane">
      <div class="section-label">RESPONSES</div>
      @for (res of endpoint.responses; track res.title) {
        <div class="res-card">
          <div class="res-header">
            <span class="response-title">{{ res.title }}</span>
            <div class="status-wrapper">
              <span class="status-description">{{ res.description }}</span>
              <span class="status-code" [ngClass]="{
                'code-success': res.code < 300,
                'code-error': res.code >= 400 && res.code < 500,
                'code-server': res.code >= 500
              }">{{ res.code }}</span>
            </div>
          </div>
          <div class="code-box">
            <pre><code>{{ res.exampleJson }}</code></pre>
          </div>
        </div>
      }
    </div>
  </div>
}

@else if (category) {
  <div class="category-view">
    <div class="info-pane full-width">
      <header>
        <div class="section-label">API REFERENCE</div>
        <h1>{{ category.name }}</h1>
        <p class="desc">{{ category.description }}</p>

        <div class="base-url-box">
          <span class="response-title">BASE URL</span>
          <div class="code-box">
            <code>{{ category.basePath }}</code>
          </div>
        </div>
      </header>
      <div class="section-label">ENDPOINTS</div>
      <div class="endpoint-grid">
        @for (end of category.endpoints; track end.id) {
          <a [routerLink]="['/docs', end.id]" class="endpoint-card">
            <div class="card-head">
              <span class="method-tag" [attr.data-method]="end.method">{{ end.method }}</span>
              <code class="path-tiny">{{ end.path }}</code>
            </div>
            <h3>{{ end.title }}</h3>
            <p>{{ end.description }}</p>
          </a>
        }
      </div>
    </div>
  </div>
}
`,
            styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n/* src/app/features/other/docs/docs-detail/docs-detail.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #1a1f28;\n}\n.full-screen-detail {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100%;\n  width: 100%;\n}\n.category-view {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n  background-color: #1a1f28;\n}\n.info-pane {\n  padding: 60px 80px;\n  background-color: #1a1f28;\n  overflow-y: auto;\n}\n.info-pane.full-width {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.response-pane {\n  padding: 60px 50px;\n  background-color: #0d1117;\n  border-left: 1px solid rgba(255, 255, 255, 0.05);\n  overflow-y: auto;\n}\n.title-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 25px;\n}\nh1 {\n  font-size: 38px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.desc {\n  font-size: 16px;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin-bottom: 40px;\n  max-width: 800px;\n  white-space: pre-line;\n}\n.base-url-box {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.base-url-box .response-title {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n}\n.base-url-box .code-box {\n  display: inline-block;\n  padding: 12px 20px;\n  background: #0d1117;\n  border: 1px solid #21262d;\n}\n.metadata-pills {\n  display: flex;\n  gap: 12px;\n}\n.pill {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.auth-pill {\n  color: #fbbf24;\n}\n.auth-pill.is-unauthenticated {\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  margin-right: 8px;\n}\n.rate-pill {\n  border-color: rgba(56, 189, 248, 0.2);\n}\n.pill-label {\n  color: #64748b;\n  margin-right: 6px;\n}\n.pill-value {\n  color: #38bdf8;\n}\n.url-bar {\n  background: #262c38;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid #333c4d;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 35px;\n}\n.path {\n  font-family: "JetBrains Mono", monospace;\n  color: #e2e8f0;\n  font-size: 14px;\n}\n.method-tag {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.method-tag[data-method=GET] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border: 1px solid #10b98144;\n}\n.method-tag[data-method=POST] {\n  background: rgba(255, 180, 0, 0.1);\n  color: #ffb400;\n  border: 1px solid #ffb40044;\n}\n.method-tag[data-method=PATCH] {\n  background: rgba(56, 189, 248, 0.1);\n  color: #38bdf8;\n  border: 1px solid #38bdf844;\n}\n.method-tag[data-method=DELETE] {\n  background: rgba(244, 63, 94, 0.1);\n  color: #f43f5e;\n  border: 1px solid #f43f5e44;\n}\n.method-tag[data-method=WS] {\n  background: rgba(168, 85, 247, 0.1);\n  color: #a855f7;\n  border: 1px solid #a855f744;\n}\n.section-label {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 50px;\n  margin-bottom: 25px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  border-bottom: none;\n}\n.param-row {\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.param-line {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.name {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 700;\n  color: #f1f5f9;\n  font-size: 14px;\n}\n.type {\n  font-family: "JetBrains Mono", monospace;\n  color: #64748b;\n  margin-left: 12px;\n  font-size: 12px;\n}\n.req {\n  color: #f43f5e;\n  font-size: 10px;\n  font-weight: 800;\n  margin-left: 12px;\n  padding: 2px 6px;\n  background: rgba(244, 63, 94, 0.1);\n  border-radius: 4px;\n}\n.p-desc {\n  color: #94a3b8;\n  margin: 8px 0;\n  line-height: 1.5;\n  font-size: 14px;\n  white-space: pre-line;\n}\n.ex {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ex code {\n  color: #38bdf8;\n  font-family: "JetBrains Mono", monospace;\n  background: rgba(56, 189, 248, 0.08);\n  padding: 3px 6px;\n  border-radius: 4px;\n  border: 1px solid rgba(56, 189, 248, 0.1);\n}\n.res-card {\n  margin-bottom: 64px;\n}\n.res-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 0 4px;\n}\n.response-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-description {\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 400;\n  text-align: right;\n}\n.status-code {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.code-success {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.code-error {\n  color: #f43f5e;\n  background: rgba(244, 63, 94, 0.1);\n}\n.code-server {\n  color: #a855f7;\n  background: rgba(168, 85, 247, 0.1);\n}\n.code-box {\n  background: #010409;\n  border: 1px solid #21262d;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.code-box pre {\n  margin: 0;\n}\n.code-box code {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #a5d6ff;\n  white-space: pre;\n}\n.endpoint-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.endpoint-card {\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  text-decoration: none !important;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, border-color 0.2s ease;\n}\n.endpoint-card:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card h3 {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.endpoint-card p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #94a3b8;\n}\n.path-tiny {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.category-section h2 {\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.category-view {\n  animation: fadeIn 0.4s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=docs-detail.component.css.map */\n']
        }]
    }], () => [{
        type: i17.ActivatedRoute
    }, {
        type: DocService
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(DocsDetailComponent, {
        className: "DocsDetailComponent",
        filePath: "app/features/other/docs/docs-detail/docs-detail.component.ts",
        lineNumber: 17
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fdocs-detail%2Fdocs-detail.component.ts%40DocsDetailComponent";
    function DocsDetailComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i019.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i019.\u0275\u0275replaceMetadata(DocsDetailComponent, m.default, [i019, i32, i17, DocService_exports], [RouterLink5, CommonModule6, Component10], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && DocsDetailComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DocsDetailComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/pages/getting-started/getting-started.component.ts
import {Component as Component11} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i020 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var GettingStartedComponent = class _GettingStartedComponent {
    static \u0275fac = function GettingStartedComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _GettingStartedComponent)();
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i020.\u0275\u0275defineComponent({
        type: _GettingStartedComponent,
        selectors: [["app-getting-started"]],
        decls: 2,
        vars: 0,
        template: function GettingStartedComponent_Template(rf, ctx) {
            if (rf & 1) {
                i020.\u0275\u0275domElementStart(0, "p");
                i020.\u0275\u0275text(1, "getting-started works!");
                i020.\u0275\u0275domElementEnd();
            }
        },
        encapsulation: 2
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassMetadata(GettingStartedComponent, [{
        type: Component11,
        args: [{
            selector: "app-getting-started",
            imports: [],
            template: "<p>getting-started works!</p>\n"
        }]
    }], null, null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassDebugInfo(GettingStartedComponent, {
        className: "GettingStartedComponent",
        filePath: "app/features/other/docs/pages/getting-started/getting-started.component.ts",
        lineNumber: 9
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fpages%2Fgetting-started%2Fgetting-started.component.ts%40GettingStartedComponent";
    function GettingStartedComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i020.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i020.\u0275\u0275replaceMetadata(GettingStartedComponent, m.default, [i020], [Component11], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && GettingStartedComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && GettingStartedComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/pages/security/security-landing/security-landing.component.ts
import {Component as Component12} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {LucideAngularModule as LucideAngularModule3, Link} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";

// src/app/features/other/docs/pages/security/helper-methods.ts
function copyLink(fragment) {
    const url = window.location.origin + window.location.pathname;
    const fullUrl = `${url}#${fragment}`;
    navigator.clipboard.writeText(fullUrl).then( () => {
        console.log("Link copied to clipboard:", fullUrl);
    }
    );
}

// src/app/features/other/docs/pages/security/security-landing/security-landing.component.ts
import {RouterLink as RouterLink6} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i021 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i18 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
var SecurityLandingComponent_Defer_18_DepsFn = () => [RouterLink6];
var _c05 = () => ["./"];
var _c13 = () => ["/docs/security/auth-flow"];
var _c2 = () => ["/docs/security/ratelimit"];
function SecurityLandingComponent_Defer_16_Template(rf, ctx) {
    if (rf & 1) {
        i021.\u0275\u0275elementStart(0, "div", 16)(1, "a", 17)(2, "div", 18)(3, "span", 19);
        i021.\u0275\u0275text(4, "OAUTH");
        i021.\u0275\u0275elementEnd();
        i021.\u0275\u0275elementStart(5, "code", 20);
        i021.\u0275\u0275text(6, "Last updated: 1st April, 2026");
        i021.\u0275\u0275elementEnd()();
        i021.\u0275\u0275elementStart(7, "h3");
        i021.\u0275\u0275text(8, "The Auth Flow");
        i021.\u0275\u0275elementEnd();
        i021.\u0275\u0275elementStart(9, "p");
        i021.\u0275\u0275text(10, "Our system is built on ");
        i021.\u0275\u0275elementStart(11, "strong");
        i021.\u0275\u0275text(12, "OAuth 2.0 principles");
        i021.\u0275\u0275elementEnd();
        i021.\u0275\u0275text(13, " using JWT rotation.");
        i021.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        i021.\u0275\u0275advance();
        i021.\u0275\u0275property("routerLink", i021.\u0275\u0275pureFunction0(1, _c13));
    }
}
function SecurityLandingComponent_DeferPlaceholder_17_Template(rf, ctx) {
    if (rf & 1) {
        i021.\u0275\u0275element(0, "div", 21);
    }
}
function SecurityLandingComponent_Defer_20_Template(rf, ctx) {
    if (rf & 1) {
        i021.\u0275\u0275elementStart(0, "div", 16)(1, "a", 17)(2, "div", 18)(3, "span", 22);
        i021.\u0275\u0275text(4, "Rate Limiting");
        i021.\u0275\u0275elementEnd();
        i021.\u0275\u0275elementStart(5, "code", 20);
        i021.\u0275\u0275text(6, "Last updated: 2nd April, 2026");
        i021.\u0275\u0275elementEnd()();
        i021.\u0275\u0275elementStart(7, "h3");
        i021.\u0275\u0275text(8, "Rate Limiting");
        i021.\u0275\u0275elementEnd();
        i021.\u0275\u0275elementStart(9, "p");
        i021.\u0275\u0275text(10, "Custom annotated rate limiting built right into Starcord.");
        i021.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        i021.\u0275\u0275advance();
        i021.\u0275\u0275property("routerLink", i021.\u0275\u0275pureFunction0(1, _c2));
    }
}
function SecurityLandingComponent_DeferPlaceholder_21_Template(rf, ctx) {
    if (rf & 1) {
        i021.\u0275\u0275element(0, "div", 21);
    }
}
var SecurityLandingComponent = class _SecurityLandingComponent {
    copyLink = copyLink;
    Link = Link;
    static \u0275fac = function SecurityLandingComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SecurityLandingComponent)();
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i021.\u0275\u0275defineComponent({
        type: _SecurityLandingComponent,
        selectors: [["app-security-landing"]],
        decls: 39,
        vars: 4,
        consts: [[1, "category-view"], [1, "docs-layout"], [1, "info-pane", "wide-mode"], [1, "docs-article"], [1, "article-header"], [1, "section-label"], [1, "introduction-text"], [1, "endpoint-grid"], [1, "content-sections"], ["id", "auth-flow", 1, "article-section"], ["id", "security-levels", 1, "article-section"], [1, "toc-sidebar"], [1, "toc-container"], [1, "toc-title"], ["fragment", "auth-flow", 3, "routerLink"], ["fragment", "rate-limiting", 3, "routerLink"], [1, "animate-in"], [1, "endpoint-card", 3, "routerLink"], [1, "card-head"], ["data-method", "RED", 1, "method-tag"], [1, "path-tiny"], [1, "card-placeholder"], ["data-method", "INDIGO", 1, "method-tag"]],
        template: function SecurityLandingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i021.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "article", 3)(4, "header", 4)(5, "div", 5)(6, "span");
                i021.\u0275\u0275text(7, "Security Documentation");
                i021.\u0275\u0275elementEnd()();
                i021.\u0275\u0275elementStart(8, "h1");
                i021.\u0275\u0275text(9, "Starcord Security Overview");
                i021.\u0275\u0275elementEnd();
                i021.\u0275\u0275elementStart(10, "pre", 6);
                i021.\u0275\u0275text(11, "Hello! If you are reading this.. oh boy. You are in for quite the rollercoaster.\n\nThroughout this document, I will ");
                i021.\u0275\u0275elementStart(12, "strong");
                i021.\u0275\u0275text(13, "attempt");
                i021.\u0275\u0275elementEnd();
                i021.\u0275\u0275text(14, `, to the best of my ability, to explain to your peanut brain how Starcord makes, and uses it's security.

"Right now, I'm the only one that doesn't understand quantum mechanics. In about 7 days, all of you wil be unable to understand quantum mechanics, then you can go back and spread your ignorance everywhere else." - Richard Fineman

So friend, let's start the deep dive into the world of security shall we?

Fun fact, this doc was made on April 1st, commonly known as April fools, to represent the fool I was to take so long to learn how to properly do security, just to probably have a vulnerability anyway.`);
                i021.\u0275\u0275elementEnd()();
                i021.\u0275\u0275elementStart(15, "div", 7);
                i021.\u0275\u0275domTemplate(16, SecurityLandingComponent_Defer_16_Template, 14, 2)(17, SecurityLandingComponent_DeferPlaceholder_17_Template, 1, 0);
                i021.\u0275\u0275defer(18, 16, SecurityLandingComponent_Defer_18_DepsFn, null, 17);
                i021.\u0275\u0275deferOnViewport(0, -1);
                i021.\u0275\u0275domTemplate(20, SecurityLandingComponent_Defer_20_Template, 11, 2)(21, SecurityLandingComponent_DeferPlaceholder_21_Template, 1, 0);
                i021.\u0275\u0275defer(22, 20, SecurityLandingComponent_Defer_18_DepsFn, null, 21);
                i021.\u0275\u0275deferOnViewport(0, -1);
                i021.\u0275\u0275elementEnd();
                i021.\u0275\u0275elementStart(24, "div", 8);
                i021.\u0275\u0275element(25, "section", 9)(26, "section", 10);
                i021.\u0275\u0275elementEnd()()();
                i021.\u0275\u0275elementStart(27, "aside", 11)(28, "div", 12)(29, "span", 13);
                i021.\u0275\u0275text(30, "On this page");
                i021.\u0275\u0275elementEnd();
                i021.\u0275\u0275elementStart(31, "nav")(32, "ul")(33, "li")(34, "a", 14);
                i021.\u0275\u0275text(35, "The Auth Flow");
                i021.\u0275\u0275elementEnd()();
                i021.\u0275\u0275elementStart(36, "li")(37, "a", 15);
                i021.\u0275\u0275text(38, "Rate Limiting");
                i021.\u0275\u0275elementEnd()()()()()()()();
            }
            if (rf & 2) {
                i021.\u0275\u0275advance(34);
                i021.\u0275\u0275property("routerLink", i021.\u0275\u0275pureFunction0(2, _c05));
                i021.\u0275\u0275advance(3);
                i021.\u0275\u0275property("routerLink", i021.\u0275\u0275pureFunction0(3, _c05));
            }
        },
        dependencies: [LucideAngularModule3, i18.LucideAngularComponent, RouterLink6],
        styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  background-color: #1a1f28;\n  color: #cbd5e1;\n  font-family: "Inter", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.docs-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.info-pane.wide-mode[_ngcontent-%COMP%] {\n  padding: 60px 40px;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  padding: 0 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  box-sizing: border-box;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.copy-section-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  height: 32px;\n  width: 32px;\n  line-height: 0;\n  outline: none;\n}\n.link-icon[_ngcontent-%COMP%] {\n  display: block;\n  color: #475569;\n  transition: color 0.2s ease;\n}\n.section-label[_ngcontent-%COMP%]:hover   .link-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.copy-section-link[_ngcontent-%COMP%]:hover   .link-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.copy-section-link[_ngcontent-%COMP%]:active   .link-icon[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n  transition: none;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin-bottom: 20px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  margin-bottom: 24px;\n  max-width: 900px;\n}\n.introduction-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  white-space: pre-wrap;\n  font-size: 16px;\n  line-height: 1.8;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.toc-sidebar[_ngcontent-%COMP%] {\n  padding: 80px 20px 0 30px;\n}\n.toc-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 60px;\n}\n.toc-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 16px;\n  color: #475569;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.toc-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.toc-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #94a3b8;\n  text-decoration: none;\n  padding: 5px 0;\n  transition: 0.2s;\n}\n.toc-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #38bdf8;\n}\n.code-box[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid #21262d;\n  border-radius: 10px;\n  padding: 24px;\n  margin: 30px 0;\n}\n.response-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  padding-bottom: 8px;\n}\ncode[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  color: #38bdf8;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  will-change: opacity, transform;\n}\n@keyframes _ngcontent-%COMP%_fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.article-section[_ngcontent-%COMP%] {\n  contain: content;\n}\n.method-tag[data-method=BLUE][_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.1) !important;\n  color: #38bdf8 !important;\n  border: 1px solid rgba(56, 189, 248, 0.2) !important;\n}\n.method-tag[data-method=PURPLE][_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.1) !important;\n  color: #a855f7 !important;\n  border: 1px solid rgba(168, 85, 247, 0.2) !important;\n}\n.method-tag[data-method=RED][_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.1) !important;\n  color: #f43f5e !important;\n  border: 1px solid rgba(244, 63, 94, 0.2) !important;\n}\n.method-tag[data-method=PINK][_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.1) !important;\n  color: #ec4899 !important;\n  border: 1px solid rgba(236, 72, 153, 0.2) !important;\n}\n.method-tag[data-method=CYAN][_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1) !important;\n  color: #06b6d4 !important;\n  border: 1px solid rgba(6, 182, 212, 0.2) !important;\n}\n.method-tag[data-method=INDIGO][_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1) !important;\n  color: #6366f1 !important;\n  border: 1px solid rgba(99, 102, 241, 0.2) !important;\n}\n.method-tag[data-method=EMERALD][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1) !important;\n  color: #10b981 !important;\n  border: 1px solid rgba(16, 185, 129, 0.2) !important;\n}\n.method-tag[data-method=AMBER][_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1) !important;\n  color: #f59e0b !important;\n  border: 1px solid rgba(245, 158, 11, 0.2) !important;\n}\n.method-tag[data-method=SLATE][_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.1) !important;\n  color: #94a3b8 !important;\n  border: 1px solid rgba(148, 163, 184, 0.2) !important;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  align-items: stretch;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.animate-in[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 380px;\n  animation: _ngcontent-%COMP%_fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 150px;\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  color: #cbd5e1 !important;\n}\n.endpoint-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=general-style.css.map */', '\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  align-items: stretch;\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  color: #cbd5e1 !important;\n  text-decoration: none !important;\n}\n.endpoint-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0;\n}\n.endpoint-card[_ngcontent-%COMP%]:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n  color: #ffffff !important;\n}\n.article-section[_ngcontent-%COMP%] {\n  scroll-margin-top: 80px;\n  margin-bottom: 60px;\n}\n.introduction-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 15px;\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 20px 0;\n  color: #94a3b8;\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.method-tag[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.path-tiny[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  display: flex;\n  flex: 1;\n  min-width: 380px;\n}\n.card-placeholder[_ngcontent-%COMP%] {\n  height: 160px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 12px;\n}\n@keyframes _ngcontent-%COMP%_fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=security-landing.component.css.map */']
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassMetadata(SecurityLandingComponent, [{
        type: Component12,
        args: [{
            selector: "app-security-landing",
            imports: [LucideAngularModule3, RouterLink6],
            template: `<div class="category-view">
  <div class="docs-layout">
    <div class="info-pane wide-mode">
      <article class="docs-article">
        <header class="article-header">
          <div class="section-label"><span>Security Documentation</span></div>
          <h1>Starcord Security Overview</h1>
          <pre class="introduction-text">
Hello! If you are reading this.. oh boy. You are in for quite the rollercoaster.

Throughout this document, I will <strong>attempt</strong>, to the best of my ability, to explain to your peanut brain how Starcord makes, and uses it's security.

"Right now, I'm the only one that doesn't understand quantum mechanics. In about 7 days, all of you wil be unable to understand quantum mechanics, then you can go back and spread your ignorance everywhere else." - Richard Fineman

So friend, let's start the deep dive into the world of security shall we?

Fun fact, this doc was made on April 1st, commonly known as April fools, to represent the fool I was to take so long to learn how to properly do security, just to probably have a vulnerability anyway.</pre>
        </header>

        <div class="endpoint-grid">

          @defer (on viewport) {
            <div class="animate-in">
              <a [routerLink]="['/docs/security/auth-flow']" class="endpoint-card">
                <div class="card-head">
                  <span class="method-tag" data-method="RED">OAUTH</span>
                  <code class="path-tiny">Last updated: 1st April, 2026</code>
                </div>
                <h3>The Auth Flow</h3>
                <p>Our system is built on <strong>OAuth 2.0 principles</strong> using JWT rotation.</p>
              </a>
            </div>
          } @placeholder { <div class="card-placeholder"></div> }

          @defer (on viewport) {
            <div class="animate-in">
              <a [routerLink]="['/docs/security/ratelimit']" class="endpoint-card">
                <div class="card-head">
                  <span class="method-tag" data-method="INDIGO">Rate Limiting</span>
                  <code class="path-tiny">Last updated: 2nd April, 2026</code>
                </div>
                <h3>Rate Limiting</h3>
                <p>Custom annotated rate limiting built right into Starcord.</p>
              </a>
            </div>
          } @placeholder { <div class="card-placeholder"></div> }

        </div>

        <div class="content-sections">
          <section id="auth-flow" class="article-section">
          </section>

          <section id="security-levels" class="article-section">
          </section>
        </div>

      </article>
    </div>

    <aside class="toc-sidebar">
      <div class="toc-container">
        <span class="toc-title">On this page</span>
        <nav>
          <ul>
            <li><a [routerLink]="['./']" fragment="auth-flow">The Auth Flow</a></li>
            <li><a [routerLink]="['./']" fragment="rate-limiting">Rate Limiting</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</div>
`,
            styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n/* src/app/features/other/docs/pages/security/general-style.css */\n:host {\n  display: block;\n  width: 100%;\n  background-color: #1a1f28;\n  color: #cbd5e1;\n  font-family: "Inter", sans-serif;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.docs-layout {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.info-pane.wide-mode {\n  padding: 60px 40px;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.section-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  padding: 0 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  box-sizing: border-box;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.copy-section-link {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  height: 32px;\n  width: 32px;\n  line-height: 0;\n  outline: none;\n}\n.link-icon {\n  display: block;\n  color: #475569;\n  transition: color 0.2s ease;\n}\n.section-label:hover .link-icon {\n  color: #94a3b8;\n}\n.copy-section-link:hover .link-icon {\n  color: #ffffff !important;\n}\n.copy-section-link:active .link-icon {\n  color: #10b981 !important;\n  transition: none;\n}\nh2 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin-bottom: 20px;\n}\np {\n  font-size: 16px;\n  line-height: 1.8;\n  margin-bottom: 24px;\n  max-width: 900px;\n}\n.introduction-text {\n  font-family: "JetBrains Mono", monospace;\n  white-space: pre-wrap;\n  font-size: 16px;\n  line-height: 1.8;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.toc-sidebar {\n  padding: 80px 20px 0 30px;\n}\n.toc-container {\n  position: sticky;\n  top: 60px;\n}\n.toc-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 16px;\n  color: #475569;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.toc-sidebar ul {\n  list-style: none;\n  padding: 0;\n}\n.toc-sidebar a {\n  display: block;\n  font-size: 13px;\n  color: #94a3b8;\n  text-decoration: none;\n  padding: 5px 0;\n  transition: 0.2s;\n}\n.toc-sidebar a:hover {\n  color: #38bdf8;\n}\n.code-box {\n  background: #0d1117;\n  border: 1px solid #21262d;\n  border-radius: 10px;\n  padding: 24px;\n  margin: 30px 0;\n}\n.response-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  padding-bottom: 8px;\n}\ncode {\n  font-family: "JetBrains Mono", monospace;\n  color: #38bdf8;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.animate-in {\n  animation: fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  will-change: opacity, transform;\n}\n@keyframes fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.article-section {\n  contain: content;\n}\n.method-tag[data-method=BLUE] {\n  background: rgba(56, 189, 248, 0.1) !important;\n  color: #38bdf8 !important;\n  border: 1px solid rgba(56, 189, 248, 0.2) !important;\n}\n.method-tag[data-method=PURPLE] {\n  background: rgba(168, 85, 247, 0.1) !important;\n  color: #a855f7 !important;\n  border: 1px solid rgba(168, 85, 247, 0.2) !important;\n}\n.method-tag[data-method=RED] {\n  background: rgba(244, 63, 94, 0.1) !important;\n  color: #f43f5e !important;\n  border: 1px solid rgba(244, 63, 94, 0.2) !important;\n}\n.method-tag[data-method=PINK] {\n  background: rgba(236, 72, 153, 0.1) !important;\n  color: #ec4899 !important;\n  border: 1px solid rgba(236, 72, 153, 0.2) !important;\n}\n.method-tag[data-method=CYAN] {\n  background: rgba(6, 182, 212, 0.1) !important;\n  color: #06b6d4 !important;\n  border: 1px solid rgba(6, 182, 212, 0.2) !important;\n}\n.method-tag[data-method=INDIGO] {\n  background: rgba(99, 102, 241, 0.1) !important;\n  color: #6366f1 !important;\n  border: 1px solid rgba(99, 102, 241, 0.2) !important;\n}\n.method-tag[data-method=EMERALD] {\n  background: rgba(16, 185, 129, 0.1) !important;\n  color: #10b981 !important;\n  border: 1px solid rgba(16, 185, 129, 0.2) !important;\n}\n.method-tag[data-method=AMBER] {\n  background: rgba(245, 158, 11, 0.1) !important;\n  color: #f59e0b !important;\n  border: 1px solid rgba(245, 158, 11, 0.2) !important;\n}\n.method-tag[data-method=SLATE] {\n  background: rgba(148, 163, 184, 0.1) !important;\n  color: #94a3b8 !important;\n  border: 1px solid rgba(148, 163, 184, 0.2) !important;\n}\n.endpoint-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  align-items: stretch;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n.animate-in {\n  display: flex;\n  flex: 1;\n  min-width: 380px;\n  animation: fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.endpoint-card {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 150px;\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  color: #cbd5e1 !important;\n}\n.endpoint-card p {\n  flex-grow: 1;\n  margin: 0;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=general-style.css.map */\n', '/* src/app/features/other/docs/pages/security/security-landing/security-landing.component.css */\na {\n  color: inherit;\n  text-decoration: none;\n}\n.endpoint-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  align-items: stretch;\n}\n.endpoint-card {\n  width: 100%;\n  background: #222933;\n  border: 1px solid #2d3544;\n  padding: 24px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  color: #cbd5e1 !important;\n  text-decoration: none !important;\n}\n.endpoint-card p {\n  flex-grow: 1;\n  margin: 0;\n}\n.endpoint-card:hover {\n  border-color: #38bdf8;\n  background: #262c38;\n  transform: translateY(-3px);\n  color: #ffffff !important;\n}\n.article-section {\n  scroll-margin-top: 80px;\n  margin-bottom: 60px;\n}\n.introduction-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 15px;\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 20px 0;\n  color: #94a3b8;\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.endpoint-card h3 {\n  margin: 0 0 8px 0 !important;\n  font-size: 20px;\n  font-weight: 700;\n  color: #f8fafc !important;\n}\n.method-tag {\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 800;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.path-tiny {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  color: #64748b;\n}\n.animate-in {\n  animation: fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  display: flex;\n  flex: 1;\n  min-width: 380px;\n}\n.card-placeholder {\n  height: 160px;\n  background: rgba(255, 255, 255, 0.02);\n  border-radius: 12px;\n}\n@keyframes fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=security-landing.component.css.map */\n']
        }]
    }], null, null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassDebugInfo(SecurityLandingComponent, {
        className: "SecurityLandingComponent",
        filePath: "app/features/other/docs/pages/security/security-landing/security-landing.component.ts",
        lineNumber: 18
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fpages%2Fsecurity%2Fsecurity-landing%2Fsecurity-landing.component.ts%40SecurityLandingComponent";
    function SecurityLandingComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i021.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i021.\u0275\u0275replaceMetadata(SecurityLandingComponent, m.default, [i021, i18], [LucideAngularModule3, RouterLink6, Component12], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && SecurityLandingComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SecurityLandingComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/features/other/docs/pages/security/security-content/security-content.component.ts
import {Component as Component13, ViewEncapsulation} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {LucideAngularModule as LucideAngularModule4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
import*as i022 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import*as i19 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i25 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";
import*as i33 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_platform-browser.js?v=909ddf94";
import*as i45 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
var SecurityContentComponent = class _SecurityContentComponent {
    route;
    http;
    sanitizer;
    cdr;
    // 1. Missing Property Declarations
    safeContent;
    cache = /* @__PURE__ */
    new Map();
    preloaded = false;
    // 2. Path Fix: Based on your files, they are in a 'pages' folder
    priorityDocs = ["auth-flow"];
    // 3. Missing Constructor Injection
    constructor(route, http, sanitizer, cdr) {
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.preloadCommonDocs();
        this.route.params.subscribe( (params) => {
            const topicId = params["id"];
            if (topicId)
                this.loadDocumentation(topicId);
        }
        );
    }
    preloadCommonDocs() {
        if (this.preloaded)
            return;
        this.priorityDocs.forEach( (id) => {
            this.http.get(`assets/docs/security/${id}.html`, {
                responseType: "text"
            }).subscribe( (html) => this.cache.set(id, html));
        }
        );
        this.preloaded = true;
    }
    loadDocumentation(topicId) {
        if (this.cache.has(topicId)) {
            this.render(this.cache.get(topicId));
            return;
        }
        this.http.get(`assets/docs/security/${topicId}.html`, {
            responseType: "text"
        }).subscribe({
            next: (html) => {
                this.cache.set(topicId, html);
                this.render(html);
            }
            ,
            error: (err) => {
                console.error("Docs fetch failed:", err);
                this.render('<h1 style="padding: 50px">Content not found.</h1>');
            }
        });
    }
    // 4. Missing handleGlobalClick logic for the [innerHTML] click events
    handleGlobalClick(event) {
        const target = event.target;
        const btn = target.closest(".copy-section-link");
        if (btn) {
            const fragment = btn.getAttribute("data-fragment");
            if (fragment) {
                const fullUrl = `${window.location.origin}${window.location.pathname}#${fragment}`;
                navigator.clipboard.writeText(fullUrl).then( () => {
                    console.log("Link copied:", fullUrl);
                }
                );
            }
        }
    }
    render(html) {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(html);
        this.cdr.detectChanges();
    }
    static \u0275fac = function SecurityContentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SecurityContentComponent)(i022.\u0275\u0275directiveInject(i19.ActivatedRoute),i022.\u0275\u0275directiveInject(i25.HttpClient),i022.\u0275\u0275directiveInject(i33.DomSanitizer),i022.\u0275\u0275directiveInject(i022.ChangeDetectorRef));
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i022.\u0275\u0275defineComponent({
        type: _SecurityContentComponent,
        selectors: [["app-security-content"]],
        decls: 2,
        vars: 1,
        consts: [[1, "category-view", 3, "click"], [3, "innerHTML"]],
        template: function SecurityContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i022.\u0275\u0275elementStart(0, "div", 0);
                i022.\u0275\u0275listener("click", function SecurityContentComponent_Template_div_click_0_listener($event) {
                    return ctx.handleGlobalClick($event);
                });
                i022.\u0275\u0275element(1, "div", 1);
                i022.\u0275\u0275elementEnd();
            }
            if (rf & 2) {
                i022.\u0275\u0275advance();
                i022.\u0275\u0275property("innerHTML", ctx.safeContent, i022.\u0275\u0275sanitizeHtml);
            }
        },
        dependencies: [LucideAngularModule4, i45.LucideAngularComponent],
        styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n/* src/app/features/other/docs/pages/security/security-content/pages-styles.css */\n:host {\n  display: block;\n  width: 100%;\n  background-color: #1a1f28;\n  color: #cbd5e1;\n  font-family: "Inter", sans-serif;\n}\n.docs-layout {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.info-pane.wide-mode {\n  padding: 40px 60px;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.section-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  padding: 0 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  box-sizing: border-box;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.copy-section-link {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  height: 32px;\n  width: 32px;\n  line-height: 0;\n  outline: none;\n}\n.link-icon {\n  display: block;\n  color: #475569;\n  transition: color 0.2s ease;\n}\n.section-label:hover .link-icon {\n  color: #94a3b8;\n}\n.copy-section-link:hover .link-icon {\n  color: #ffffff !important;\n}\n.copy-section-link:active .link-icon {\n  color: #10b981 !important;\n  transition: none;\n}\nh2 {\n  font-size: 26px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin-bottom: 12px;\n}\np {\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.introduction-text {\n  font-family: "JetBrains Mono", monospace;\n  white-space: pre-wrap;\n  font-size: 16px;\n  line-height: 1.8;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.toc-sidebar {\n  padding: 80px 20px 0 30px;\n}\n.toc-container {\n  position: sticky;\n  top: 60px;\n}\n.toc-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 16px;\n  color: #475569;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.toc-sidebar ul {\n  list-style: none;\n  padding: 0;\n}\n.toc-sidebar a {\n  display: block;\n  font-size: 13px;\n  color: #94a3b8;\n  text-decoration: none;\n  padding: 5px 0;\n  transition: 0.2s;\n}\n.toc-sidebar a:hover {\n  color: #38bdf8;\n}\n.code-box {\n  background: #0d1117;\n  border: 1px solid #21262d;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n}\n.response-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  padding-bottom: 8px;\n}\ncode {\n  font-family: "JetBrains Mono", monospace;\n  color: #38bdf8;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.animate-in {\n  animation: fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  will-change: opacity, transform;\n}\n@keyframes fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.article-section {\n  contain: content;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=pages-styles.css.map */\n'],
        encapsulation: 2
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassMetadata(SecurityContentComponent, [{
        type: Component13,
        args: [{
            selector: "app-security-content",
            standalone: true,
            imports: [LucideAngularModule4],
            template: `
    <div class="category-view" (click)="handleGlobalClick($event)">
      <div [innerHTML]="safeContent"></div>
    </div>
  `,
            encapsulation: ViewEncapsulation.None,
            styles: ['@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;700&display=swap";\n\n/* src/app/features/other/docs/pages/security/security-content/pages-styles.css */\n:host {\n  display: block;\n  width: 100%;\n  background-color: #1a1f28;\n  color: #cbd5e1;\n  font-family: "Inter", sans-serif;\n}\n.docs-layout {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.info-pane.wide-mode {\n  padding: 40px 60px;\n  border-right: 1px solid rgba(255, 255, 255, 0.05);\n}\n.section-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  padding: 0 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border-left: 3px solid #475569;\n  border-radius: 0 4px 4px 0;\n  box-sizing: border-box;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.copy-section-link {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  place-items: center;\n  height: 32px;\n  width: 32px;\n  line-height: 0;\n  outline: none;\n}\n.link-icon {\n  display: block;\n  color: #475569;\n  transition: color 0.2s ease;\n}\n.section-label:hover .link-icon {\n  color: #94a3b8;\n}\n.copy-section-link:hover .link-icon {\n  color: #ffffff !important;\n}\n.copy-section-link:active .link-icon {\n  color: #10b981 !important;\n  transition: none;\n}\nh2 {\n  font-size: 26px;\n  font-weight: 700;\n  color: #f8fafc;\n  margin-bottom: 12px;\n}\np {\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.introduction-text {\n  font-family: "JetBrains Mono", monospace;\n  white-space: pre-wrap;\n  font-size: 16px;\n  line-height: 1.8;\n  max-width: 900px;\n  color: #cbd5e1;\n}\n.toc-sidebar {\n  padding: 80px 20px 0 30px;\n}\n.toc-container {\n  position: sticky;\n  top: 60px;\n}\n.toc-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 16px;\n  color: #475569;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n  letter-spacing: 1px;\n}\n.toc-sidebar ul {\n  list-style: none;\n  padding: 0;\n}\n.toc-sidebar a {\n  display: block;\n  font-size: 13px;\n  color: #94a3b8;\n  text-decoration: none;\n  padding: 5px 0;\n  transition: 0.2s;\n}\n.toc-sidebar a:hover {\n  color: #38bdf8;\n}\n.code-box {\n  background: #0d1117;\n  border: 1px solid #21262d;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n}\n.response-title {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #475569;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  padding-bottom: 8px;\n}\ncode {\n  font-family: "JetBrains Mono", monospace;\n  color: #38bdf8;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.animate-in {\n  animation: fadeInBlur 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n  will-change: opacity, transform;\n}\n@keyframes fadeInBlur {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n    filter: blur(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    filter: blur(0);\n  }\n}\n.article-section {\n  contain: content;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=pages-styles.css.map */\n']
        }]
    }], () => [{
        type: i19.ActivatedRoute
    }, {
        type: i25.HttpClient
    }, {
        type: i33.DomSanitizer
    }, {
        type: i022.ChangeDetectorRef
    }], null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassDebugInfo(SecurityContentComponent, {
        className: "SecurityContentComponent",
        filePath: "app/features/other/docs/pages/security/security-content/security-content.component.ts",
        lineNumber: 19
    });
}
)();
( () => {
    const id = "app%2Ffeatures%2Fother%2Fdocs%2Fpages%2Fsecurity%2Fsecurity-content%2Fsecurity-content.component.ts%40SecurityContentComponent";
    function SecurityContentComponent_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i022.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i022.\u0275\u0275replaceMetadata(SecurityContentComponent, m.default, [i022, i45, i19, i25, i33], [LucideAngularModule4, Component13, ViewEncapsulation], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && SecurityContentComponent_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SecurityContentComponent_HmrLoad(d.timestamp)));
}
)();

// src/app/app.routes.ts
var routes = [{
    path: "",
    redirectTo: "login",
    pathMatch: "full"
}, // Better than repeating LoginComponent twice
{
    path: "login",
    component: LoginComponent
}, {
    path: "signup",
    component: SignupComponent
}, {
    path: "home",
    component: HomeComponent,
    children: [{
        path: "channel/:id",
        component: ChatMessagesComponent
    }]
}, {
    path: "docs",
    component: DocsLayoutComponent,
    children: [{
        path: "",
        component: DocsListComponent,
        resolve: {
            docData: endpointResolver
        }
    }, {
        path: "getting-started",
        component: GettingStartedComponent
    }, // Security Module
    {
        path: "security",
        // No need for a separate Overview component unless it has its own unique layout
        children: [{
            path: "",
            component: SecurityLandingComponent
        }, // /docs/security
        {
            path: ":id",
            component: SecurityContentComponent
        }// /docs/security/auth-flow
        ]
    }, // Static categories should always be ABOVE dynamic :ids
    {
        path: "category/:catName",
        component: DocsDetailComponent
    }, // Dynamic endpoint detail (The Catch-all for everything else)
    {
        path: ":endpointId",
        component: DocsDetailComponent
    }]
}];

// src/app/app.config.ts
import {provideClientHydration, withEventReplay} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_platform-browser.js?v=909ddf94";
import {provideHttpClient, withFetch, withInterceptors} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_common_http.js?v=909ddf94";

// src/app/core/auth/auth.interceptor.ts
import {inject as inject4} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var AUTH_BASE_URL = "http://localhost:8080/api/v1/auth";
function authInterceptor(req, next) {
    const authState = inject4(AuthStateService);
    const token = authState.getAccessToken();
    if (req.url.startsWith(AUTH_BASE_URL)) {
        return next(req);
    }
    if (!token) {
        return next(req);
    }
    const newReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
    return next(newReq);
}

// src/app/app.config.ts
import {Link as Link2, LogOut, LucideAngularModule as LucideAngularModule5, Plus, SendHorizontal, Settings, Users} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/lucide-angular.js?v=909ddf94";
var appConfig = {
    providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes, withInMemoryScrolling({
        anchorScrolling: "enabled",
        scrollPositionRestoration: "enabled"
    })), provideClientHydration(withEventReplay()), provideHttpClient(withInterceptors([authInterceptor]), withFetch()), importProvidersFrom(LucideAngularModule5.pick({
        LogOut,
        Users,
        Settings,
        Plus,
        SendHorizontal,
        Link: Link2
    }))]
};

// src/app/app.ts
import {Component as Component14, signal} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
import {RouterOutlet as RouterOutlet3} from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_router.js?v=909ddf94";
import*as i023 from "/@fs/app/.angular/cache/21.1.4/frontend/vite/deps/@angular_core.js?v=909ddf94";
var App = class _App {
    title = signal("frontend", ...ngDevMode ? [{
        debugName: "title"
    }] : []);
    static \u0275fac = function App_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _App)();
    }
    ;
    static \u0275cmp = /* @__PURE__ */
    i023.\u0275\u0275defineComponent({
        type: _App,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function App_Template(rf, ctx) {
            if (rf & 1) {
                i023.\u0275\u0275element(0, "router-outlet");
            }
        },
        dependencies: [RouterOutlet3],
        encapsulation: 2
    });
}
;
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassMetadata(App, [{
        type: Component14,
        args: [{
            selector: "app-root",
            imports: [RouterOutlet3],
            template: "<router-outlet></router-outlet>\n"
        }]
    }], null, null);
}
)();
( () => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassDebugInfo(App, {
        className: "App",
        filePath: "app/app.ts",
        lineNumber: 10
    });
}
)();
( () => {
    const id = "app%2Fapp.ts%40App";
    function App_HmrLoad(t) {
        import(/* @vite-ignore */
        __vite__injectQuery(i023.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')).then( (m) => m.default && i023.\u0275\u0275replaceMetadata(App, m.default, [i023], [RouterOutlet3, Component14], import.meta, id));
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
    (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
}
)();

// src/main.ts
bootstrapApplication(App, appConfig).catch( (err) => console.error(err));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9mZWF0dXJlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsInNyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc2hhcmVkL3ZhbGlkYXRvcnMvZW1haWwudmFsaWRhdG9yLnRzIiwic3JjL2FwcC9zaGFyZWQvdmFsaWRhdG9ycy9wYXNzd29yZC52YWxpZGF0b3IudHMiLCJzcmMvYXBwL3NoYXJlZC92YWxpZGF0b3JzL3RleHQudmFsaWRhdG9yLnRzIiwic3JjL2FwcC9jb3JlL3NlcnZpY2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc2VydmljZS50cyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29yZS9hdXRoL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJzcmMvYXBwL2NvcmUvYXV0aC9kZXZpY2UtaWQuc2VydmljZS50cyIsInNyYy9hcHAvY29yZS9hdXRoL2F1dGgtc3RhdGUuc2VydmljZS50cyIsInNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvZmVhdHVyZXMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zaGFyZWQvdXRpbHMvYXBpLWVycm9yLmd1YXJkLnRzIiwic3JjL2FwcC9mZWF0dXJlcy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyLXVzZXIvc2lkZWJhci11c2VyLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci11c2VyL3NpZGViYXItdXNlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29yZS9zZXJ2aWNlcy9jaGFubmVscy9jaGFubmVsLnNlcnZpY2UudHMiLCJzcmMvYXBwL2NvcmUvc2VydmljZXMvY2hhbm5lbHMvY2hhbm5lbC1zdGF0ZS5zZXJ2aWNlLnRzIiwic3JjL2FwcC9jb3JlL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwic3JjL2FwcC9jb3JlL3NlcnZpY2VzL2NoYXQvY2hhdC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9jb3JlL2NvbmZpZy93ZWJzb2NrZXQuY29uZmlnLnRzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2VzL2NoYXQtbWVzc2FnZXMudHMiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXQtbWVzc2FnZXMvY2hhdC1tZXNzYWdlcy5odG1sIiwic3JjL2FwcC9zaGFyZWQvcmVzb2x2ZXJzL2VuZHBvaW50LXJlc29sdmVyLnRzIiwic3JjL2FwcC9jb3JlL3NlcnZpY2VzL2RvY3MvRG9jU2VydmljZS50cyIsInNyYy9hc3NldHMvZGF0YS9kZWZhdWx0LXJlc3BvbnNlcy50cyIsInNyYy9hc3NldHMvZGF0YS9lbmRwb2ludHMuY29uZmlnLnRzIiwic3JjL2FwcC9mZWF0dXJlcy9vdGhlci9kb2NzL2RvY3MtbGF5b3V0L2RvY3MtbGF5b3V0LmNvbXBvbmVudC50cyIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9kb2NzLWxheW91dC9kb2NzLWxheW91dC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvZG9jcy1saXN0L2RvY3MtbGlzdC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvZG9jcy1saXN0L2RvY3MtbGlzdC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9kb2NzLWRldGFpbC9kb2NzLWRldGFpbC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvZG9jcy1kZXRhaWwvZG9jcy1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvcGFnZXMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2ZlYXR1cmVzL290aGVyL2RvY3MvcGFnZXMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9wYWdlcy9zZWN1cml0eS9zZWN1cml0eS1sYW5kaW5nL3NlY3VyaXR5LWxhbmRpbmcuY29tcG9uZW50LnRzIiwic3JjL2FwcC9mZWF0dXJlcy9vdGhlci9kb2NzL3BhZ2VzL3NlY3VyaXR5L3NlY3VyaXR5LWxhbmRpbmcvc2VjdXJpdHktbGFuZGluZy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9wYWdlcy9zZWN1cml0eS9oZWxwZXItbWV0aG9kcy50cyIsInNyYy9hcHAvZmVhdHVyZXMvb3RoZXIvZG9jcy9wYWdlcy9zZWN1cml0eS9zZWN1cml0eS1jb250ZW50L3NlY3VyaXR5LWNvbnRlbnQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9jb3JlL2F1dGgvYXV0aC5pbnRlcmNlcHRvci50cyIsInNyYy9hcHAvYXBwLnRzIiwic3JjL2FwcC9hcHAuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHAsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCJpbXBvcnQge0FwcGxpY2F0aW9uQ29uZmlnLCBpbXBvcnRQcm92aWRlcnNGcm9tLCBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIsIHdpdGhJbk1lbW9yeVNjcm9sbGluZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBwcm92aWRlQ2xpZW50SHlkcmF0aW9uLCB3aXRoRXZlbnRSZXBsYXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgcHJvdmlkZUh0dHBDbGllbnQsIHdpdGhGZXRjaCwgd2l0aEludGVyY2VwdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGF1dGhJbnRlcmNlcHRvciB9IGZyb20gJ0Bjb3JlL2F1dGgvYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQge0xpbmssIExvZ091dCwgTHVjaWRlQW5ndWxhck1vZHVsZSwgUGx1cywgU2VuZEhvcml6b250YWwsIFNldHRpbmdzLCBVc2Vyc30gZnJvbSAnbHVjaWRlLWFuZ3VsYXInO1xuXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycygpLFxuICAgIHByb3ZpZGVSb3V0ZXIoXG4gICAgICByb3V0ZXMsXG4gICAgICB3aXRoSW5NZW1vcnlTY3JvbGxpbmcoe1xuICAgICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbjogJ2VuYWJsZWQnXG4gICAgICB9KVxuICAgICksXG4gICAgcHJvdmlkZUNsaWVudEh5ZHJhdGlvbih3aXRoRXZlbnRSZXBsYXkoKSksXG4gICAgcHJvdmlkZUh0dHBDbGllbnQod2l0aEludGVyY2VwdG9ycyhbYXV0aEludGVyY2VwdG9yXSksIHdpdGhGZXRjaCgpKSxcbiAgICBpbXBvcnRQcm92aWRlcnNGcm9tKEx1Y2lkZUFuZ3VsYXJNb2R1bGUucGljayh7IExvZ091dCwgVXNlcnMsIFNldHRpbmdzLCBQbHVzLCBTZW5kSG9yaXpvbnRhbCwgTGluayB9KSlcbiAgXVxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZW1haWxWYWxpZGF0b3IsIHBhc3N3b3JkUmVxdWlyZWRWYWxpZGF0b3IsIHNhZmVUZXh0VmFsaWRhdG9yIH0gZnJvbSAnQHNoYXJlZC92YWxpZGF0b3JzJztcbmltcG9ydCB7IGZpcnN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICdAY29yZS9zZXJ2aWNlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi9sb2dpbi1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGFwcC9jb3JlL2F1dGgvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU3RhdGVTZXJ2aWNlIH0gZnJvbSAnQGFwcC9jb3JlL2F1dGgvYXV0aC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENoYW5uZWxTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvY2hhbm5lbHMvY2hhbm5lbC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlclByb2ZpbGV9IGZyb20gJ0BzaGFyZWQvbW9kZWxzL3VzZXItcHJvZmlsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbiAgaW1wb3J0czogW1JvdXRlckxpbmssIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTdGF0ZVNlcnZpY2U6IEF1dGhTdGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG5cbiAgc2hvd1Bhc3N3b3JkID0gZmFsc2U7XG5cbiAgdG9nZ2xlUGFzc3dvcmQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XG4gIH1cblxuICBpc0ZvY3VzZWQgPSB7XG4gICAgZW1haWw6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZSxcbiAgfTtcblxuICBsb2dpbkZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sPHN0cmluZz4oJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBlbWFpbFZhbGlkYXRvcigpLCBzYWZlVGV4dFZhbGlkYXRvcigpXSksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbDxzdHJpbmc+KCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgcGFzc3dvcmRSZXF1aXJlZFZhbGlkYXRvcigpLCBzYWZlVGV4dFZhbGlkYXRvcigpXSksXG4gIH0pO1xuXG4gIGFzeW5jIG9uU3VibWl0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcmsgYWxsIGNvbnRyb2xzIGFzIHRvdWNoZWQgc28gZXJyb3JzIHNob3cgaWYgaW52YWxpZFxuICAgIHRoaXMubG9naW5Gb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS5pbnZhbGlkKSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICBlbWFpbF9yZXF1aXJlZDogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG4gICAgICAgIGVtYWlsX2ludmFsaWRFbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJyxcbiAgICAgICAgcGFzc3dvcmRfcmVxdWlyZWQ6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChbY29udHJvbE5hbWUsIGNvbnRyb2xdKSA9PiB7XG4gICAgICAgIGlmICghY29udHJvbC5lcnJvcnMpIHJldHVybjtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycykuZm9yRWFjaCgoZXJyb3JLZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlS2V5ID0gYCR7Y29udHJvbE5hbWV9XyR7ZXJyb3JLZXl9YDtcbiAgICAgICAgICBlcnJvcnMucHVzaChlcnJvck1lc3NhZ2VzW21lc3NhZ2VLZXldID8/ICdJbnZhbGlkIGlucHV0Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5zaG93RXJyb3IoZXJyb3JzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuOyAvLyBEb24ndCBzZW5kIHJlcXVlc3RcbiAgICB9XG5cbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XG4gICAgY29uc3QgbG9naW5EYXRhOiBMb2dpblJlcXVlc3QgPSB7XG4gICAgICBlbWFpbDogZW1haWwhLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkISxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5hdXRoU2VydmljZS5sb2dpbihsb2dpbkRhdGEpKTtcblxuICAgICAgY29uc29sZS5sb2coJ0xvZ2dlZCBpbiBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UpO1xuXG4gICAgICB0aGlzLmF1dGhTdGF0ZVNlcnZpY2Uuc2V0QWNjZXNzVG9rZW4ocmVzcG9uc2UuYWNjZXNzVG9rZW4pO1xuXG4gICAgICAvLyBVc2VyIHByb2ZpbGVcbiAgICAgIGxldCB1c2VyUHJvZmlsZSA9IHtcbiAgICAgICAgZGlzcGxheU5hbWU6IHJlc3BvbnNlLmRpc3BsYXlOYW1lIHx8IG51bGwsXG4gICAgICAgIGVtYWlsOiByZXNwb25zZS5lbWFpbCxcbiAgICAgICAgdXNlcklEOiByZXNwb25zZS51c2VySUQsXG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VybmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiByZXNwb25zZS5jcmVhdGVkQXQsXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiByZXNwb25zZS5wcm9maWxlUGljdHVyZSxcbiAgICAgICAgcHJlc2VuY2U6IFwiT25saW5lXCIgLy8gVE9ETzogVXBkYXRlIHRoaXMgdG8gZHluYW1pY2FsbHkgdXBkYXRlIGJhc2VkIG9uIHRoZSBzdGF0dXNcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXV0aFN0YXRlU2VydmljZS5zZXRVc2VyUHJvZmlsZSh1c2VyUHJvZmlsZSk7XG5cbiAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3dTdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIScpO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9ob21lXCIpXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3dFcnJvcignRW1haWwgb3IgcGFzc3dvcmQgaW52YWxpZC4nKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0ucGF0Y2hWYWx1ZSh7IHBhc3N3b3JkOiAnJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3dFcnJvcignVW5rbm93biBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWxlZnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibG9naW4tdGV4dC1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9TdGFyY29yZEJhbm5lclBORy5wbmdcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLXJpZ2h0XCI+XG4gICAgPGRpdiBjbGFzcz1cImxvaW4tZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwibG9naW4tZm9ybVwiIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgPGgxIGlkPVwibG9naW4tdGV4dFwiPkxvZyBpbnRvIGFuIGFjY291bnQ8L2gxPlxuICAgICAgICA8cCBpZD1cInNpZ251cC10ZXh0XCI+Tm90IGEgbWVtYmVyPyA8YSByb3V0ZXJMaW5rPVwiL3NpZ251cFwiPkNyZWF0ZSBhbiBhY2NvdW50PC9hPjwvcD5cbiAgICAgICAgPGRpdiBpZD1cImZvbnQtdXNlclwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkLmVtYWlsID0gdHJ1ZVwiXG4gICAgICAgICAgICAoYmx1cik9XCJpc0ZvY3VzZWQuZW1haWwgPSBmYWxzZVwiXG4gICAgICAgICAgICBbY2xhc3MuZXJyb3ItYm9yZGVyXT1cIlxuICAgICAgICAgICAgICBsb2dpbkZvcm0uY29udHJvbHMuZW1haWwuaW52YWxpZCAmJlxuICAgICAgICAgICAgICAhaXNGb2N1c2VkLmVtYWlsICYmXG4gICAgICAgICAgICAgIGxvZ2luRm9ybS5jb250cm9scy5lbWFpbC50b3VjaGVkXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZm9udC1wYXNzd29yZFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEta2V5XCIgaWQ9XCJrZXktaWNvblwiPjwvaT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgW3R5cGVdPVwic2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQucGFzc3dvcmQgPSB0cnVlXCJcbiAgICAgICAgICAgIChibHVyKT1cImlzRm9jdXNlZC5wYXNzd29yZCA9IGZhbHNlXCJcbiAgICAgICAgICAgIFtjbGFzcy5lcnJvci1ib3JkZXJdPVwiXG4gICAgICAgICAgICAgIGxvZ2luRm9ybS5jb250cm9scy5wYXNzd29yZC5pbnZhbGlkICYmXG4gICAgICAgICAgICAgICFpc0ZvY3VzZWQucGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgbG9naW5Gb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnRvdWNoZWRcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInBhc3N3b3JkLXRvZ2dsZVwiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZCgpXCI+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBjbGFzcz1cImZhLXNvbGlkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmZhLWV5ZV09XCJzaG93UGFzc3dvcmRcIlxuICAgICAgICAgICAgICBbY2xhc3MuZmEtZXllLXNsYXNoXT1cIiFzaG93UGFzc3dvcmRcIlxuICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBpZD1cInN1Ym1pdC1idXR0b25cIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2dpbkZvcm0uaW52YWxpZFwiPlxuICAgICAgICAgIExldCdzIEdvIVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5PciBsb2cgaW4gd2l0aDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtbG9naW5cIj5cbiAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvZ29vZ2xlXCIgY2xhc3M9XCJzb2NpYWwtYnRuIGdvb2dsZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3Zncy9nb29nbGUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvZ2l0aHViXCIgY2xhc3M9XCJzb2NpYWwtYnRuIGdpdGh1YlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3Zncy9naXRodWIuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsVmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG5cbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KHZhbHVlKVxuICAgICAgPyBudWxsXG4gICAgICA6IHsgaW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH07XG59IiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGVycm9ycyA9IHtcbiAgICAgIGhhc1VwcGVyOiAvW0EtWl0vLnRlc3QodmFsdWUpLFxuICAgICAgaGFzTG93ZXI6IC9bYS16XS8udGVzdCh2YWx1ZSksXG4gICAgICBoYXNOdW1iZXI6IC9cXGQvLnRlc3QodmFsdWUpLFxuICAgICAgbWluTGVuZ3RoOiB2YWx1ZS5sZW5ndGggPj0gOFxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZCA9IE9iamVjdC52YWx1ZXMoZXJyb3JzKS5ldmVyeShCb29sZWFuKTtcblxuICAgIHJldHVybiB2YWxpZCA/IG51bGwgOiB7IHBhc3N3b3JkU3RyZW5ndGg6IGVycm9ycyB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRSZXF1aXJlZFZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblxuICAgIC8vIElmIGVtcHR5LCByZXR1cm4gZXJyb3JcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB7IHBhc3N3b3JkUmVxdWlyZWQ6IHRydWUgfTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgdmFsaWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlVGV4dFZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gIGNvbnN0IHNhZmVQYXR0ZXJuID0gL15bYS16QS1aMC05IC4sIT9AKClfLV0qJC87XG5cbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBzYWZlUGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpXG4gICAgICA/IG51bGxcbiAgICAgIDogeyB1bnNhZmVDaGFyYWN0ZXJzOiB0cnVlIH07XG4gIH07XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICdAc2hhcmVkL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50JzsgLy8gYWRqdXN0IHBhdGggaWYgbmVlZGVkXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIHNob3dFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFRvYXN0Q29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7IG1lc3NhZ2UsIHR5cGU6ICdlcnJvcicgfSxcbiAgICAgIGR1cmF0aW9uOiAyNTAwLFxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgcGFuZWxDbGFzczpbJ3NuYWNrYmFyLWVycm9yJ11cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHsgbWVzc2FnZSwgdHlwZTogJ3N1Y2Nlc3MnIH0sXG4gICAgICBkdXJhdGlvbjogMjUwMCxcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIHBhbmVsQ2xhc3M6WydzbmFja2Jhci1zdWNjZXNzJ11cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dJbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoVG9hc3RDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHsgbWVzc2FnZSwgdHlwZTogJ2luZm8nIH0sXG4gICAgICBkdXJhdGlvbjogMjUwMCxcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIHBhbmVsQ2xhc3M6WydzbmFja2Jhci1pbmZvJ11cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LmNzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFRvYXN0Q29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IHsgbWVzc2FnZTogc3RyaW5nOyB0eXBlOiAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIH1cbiAgKSB7fVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuc25hY2tCYXJSZWYuZGlzbWlzcygpO1xuICB9XG59IiwiPGRpdiBjbGFzcz1cInRvYXN0LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImRhdGEudHlwZVwiPlxuICA8ZGl2IGNsYXNzPVwidG9hc3QtaWNvblwiPlxuICAgIEBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgQGNhc2UgKCdlcnJvcicpIHtcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3Zncy9jaXJjbGUtY2xvc2Uuc3ZnXCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiZXJyb3IgaWNvblwiIC8+XG4gICAgICB9XG5cbiAgICAgIEBjYXNlICgnc3VjY2VzcycpIHtcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3Zncy9zdWNjZXNzLnN2Z1wiIGNsYXNzPVwiaWNvblwiIGFsdD1cInN1Y2Nlc3MgaWNvblwiIC8+XG4gICAgICB9XG4gICAgfVxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidG9hc3QtbWVzc2FnZVwiPlxuICAgIHt7IGRhdGEubWVzc2FnZSB9fVxuICA8L2Rpdj5cblxuICA8YnV0dG9uIGNsYXNzPVwidG9hc3QtY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Z3MvY2xvc2Uuc3ZnXCIgYWx0PVwiQ2xvc2VcIiAvPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnQGFwcC9mZWF0dXJlcy9hdXRoL2xvZ2luL2xvZ2luLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgTG9naW5SZXNwb25zZSB9IGZyb20gJ0BhcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZXZpY2VJRFNlcnZpY2UgfSBmcm9tICcuL2RldmljZS1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZ251cFJlcXVlc3QgfSBmcm9tICdAYXBwL2ZlYXR1cmVzL2F1dGgvc2lnbnVwL3NpZ251cC1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnQGFwcC9zaGFyZWQvbW9kZWxzL2FwaS1lcnJvci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLCAvLyBNYWtlcyBpdCBnbG9iYWxseSBhY2Nlc3NhYmxlXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXV0aCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZGV2aWNlSURTZXJ2aWNlOiBEZXZpY2VJRFNlcnZpY2UsXG4gICkge31cblxuICBsb2dpbihyZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBPYnNlcnZhYmxlPExvZ2luUmVzcG9uc2U+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdYLURldmljZS1JZCc6IHRoaXMuZGV2aWNlSURTZXJ2aWNlLmdldElkKCksXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PExvZ2luUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVSTH0vbG9naW5gLCByZXF1ZXN0LCB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKHJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDx2b2lkPihgJHt0aGlzLmJhc2VVUkx9L3NpZ251cGAsIHJlcXVlc3QsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yLmVycm9yIGFzIEFwaUVycm9yKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VJRFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSAnZGV2aWNlX2lkJztcblxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBpZCk7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfVxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclByb2ZpbGV9IGZyb20gJ0BzaGFyZWQvbW9kZWxzL3VzZXItcHJvZmlsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXV0aFN0YXRlU2VydmljZSB7XG4gIHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHVzZXJQcm9maWxlOiBVc2VyUHJvZmlsZSB8IG51bGwgPSBudWxsO1xuXG4gIHNldEFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW47XG4gIH1cblxuICBnZXRBY2Nlc3NUb2tlbigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgfVxuXG4gIHNldFVzZXJQcm9maWxlKHVzZXJQcm9maWxlOiBVc2VyUHJvZmlsZSkge1xuICAgIHRoaXMudXNlclByb2ZpbGUgPSB1c2VyUHJvZmlsZTtcbiAgfVxuXG4gIGdldFVzZXJQcm9maWxlKCk6IFVzZXJQcm9maWxlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudXNlclByb2ZpbGU7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICB0aGlzLnVzZXJQcm9maWxlID0gbnVsbDtcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbiAhPT0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFN0YXRlU2VydmljZSB9IGZyb20gJ0BhcHAvY29yZS9hdXRoL2F1dGgtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhcHAvY29yZS9hdXRoL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1xuICBlbWFpbFZhbGlkYXRvcixcbiAgcGFzc3dvcmRSZXF1aXJlZFZhbGlkYXRvcixcbiAgcGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvcixcbn0gZnJvbSAnQGFwcC9zaGFyZWQvdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBzYWZlVGV4dFZhbGlkYXRvciB9IGZyb20gJ0BhcHAvc2hhcmVkL3ZhbGlkYXRvcnMvdGV4dC52YWxpZGF0b3InO1xuaW1wb3J0IHsgU2lnbnVwUmVxdWVzdCB9IGZyb20gJy4vc2lnbnVwLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnQGFwcC9zaGFyZWQvbW9kZWxzL2FwaS1lcnJvci5tb2RlbCc7XG5pbXBvcnQgeyBpc0FwaUVycm9yIH0gZnJvbSAnQGFwcC9zaGFyZWQvdXRpbHMvYXBpLWVycm9yLmd1YXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cCcsXG4gIGltcG9ydHM6IFtSb3V0ZXJMaW5rLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2lnbnVwLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTdGF0ZVNlcnZpY2U6IEF1dGhTdGF0ZVNlcnZpY2UsXG4gICkge31cblxuICBwcml2YXRlIHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuXG4gIHNpZ251cEZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sPHN0cmluZz4oJycsIFtcbiAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICBlbWFpbFZhbGlkYXRvcigpLFxuICAgICAgc2FmZVRleHRWYWxpZGF0b3IoKSxcbiAgICBdKSxcbiAgICBkaXNwbGF5TmFtZTogbmV3IEZvcm1Db250cm9sPHN0cmluZz4oJycsIFtzYWZlVGV4dFZhbGlkYXRvcigpXSksXG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbDxzdHJpbmc+KCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgc2FmZVRleHRWYWxpZGF0b3IoKV0pLFxuICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nPignJywgW1xuICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgIHBhc3N3b3JkUmVxdWlyZWRWYWxpZGF0b3IoKSxcbiAgICAgIHBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IoKSxcbiAgICAgIHNhZmVUZXh0VmFsaWRhdG9yKCksXG4gICAgXSksXG4gIH0pO1xuXG4gIHNob3dQYXNzd29yZCA9IGZhbHNlO1xuXG4gIHRvZ2dsZVBhc3N3b3JkKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICB9XG5cbiAgaXNGb2N1c2VkID0ge1xuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBkaXNwbGF5TmFtZTogZmFsc2UsXG4gICAgdXNlcm5hbWU6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZSxcbiAgfTtcblxuICBhc3luYyBvblN1Ym1pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNpZ251cEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuXG4gICAgaWYgKHRoaXMuc2lnbnVwRm9ybS5pbnZhbGlkKSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICBlbWFpbF9yZXF1aXJlZDogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG4gICAgICAgIGVtYWlsX2ludmFsaWRFbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJyxcbiAgICAgICAgcGFzc3dvcmRfcmVxdWlyZWQ6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG4gICAgICAgIHBhc3N3b3JkX3N0cmVuZ3RoOiAnUGxlYXNlIGlucHV0IGEgc3Ryb25nZXIgcGFzc3dvcmQnXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2lnbnVwRm9ybS5jb250cm9scykuZm9yRWFjaCgoW2NvbnRyb2xOYW1lLCBjb250cm9sXSkgPT4ge1xuICAgICAgICBpZiAoIWNvbnRyb2wuZXJyb3JzKSByZXR1cm47XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5lcnJvcnMpLmZvckVhY2goKGVycm9yS2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUtleSA9IGAke2NvbnRyb2xOYW1lfV8ke2Vycm9yS2V5fWA7XG4gICAgICAgICAgZXJyb3JzLnB1c2goZXJyb3JNZXNzYWdlc1ttZXNzYWdlS2V5XSA/PyAnSW52YWxpZCBpbnB1dCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uc2hvd0Vycm9yKGVycm9yc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjsgLy8gRG9uJ3Qgc2VuZCByZXF1ZXN0XG4gICAgfVxuXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsLCBkaXNwbGF5TmFtZSB9ID0gdGhpcy5zaWdudXBGb3JtLnZhbHVlO1xuICAgIGNvbnN0IHNpZ251cERhdGE6IFNpZ251cFJlcXVlc3QgPSB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUhLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkISxcbiAgICAgIGVtYWlsOiBlbWFpbCEsXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUhLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cChzaWdudXBEYXRhKSk7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbi5zaG93U3VjY2VzcygnQWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9sb2dpblwiKVxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgaWYgKGlzQXBpRXJyb3IoZXJyKSkge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5zaG93RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uc2hvd0Vycm9yKFwiQW4gVW5rbm93biBlcnJvciBvY2NvdXJlZFwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNpZ251cC1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInNpZ251cC1sZWZ0XCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ2luLXRleHQtY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvU3RhcmNvcmRCYW5uZXJQTkcucG5nXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzaWdudXAtcmlnaHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2lnbnVwLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBjbGFzcz1cInNpZ251cC1mb3JtXCIgW2Zvcm1Hcm91cF09XCJzaWdudXBGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgPGgxIGlkPVwic2lnbnVwLXRleHRcIj5DcmVhdGUgYSBuZXcgYWNjb3VudDwvaDE+XG4gICAgICAgIDxwIGlkPVwibG9naW4tdGV4dFwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCI+TG9naW48L2E+PC9wPlxuICAgICAgICA8ZGl2IGlkPVwiZm9udC1lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkLmVtYWlsID0gdHJ1ZVwiXG4gICAgICAgICAgICAoYmx1cik9XCJpc0ZvY3VzZWQuZW1haWwgPSBmYWxzZVwiXG4gICAgICAgICAgICBbY2xhc3MuZXJyb3ItYm9yZGVyXT1cIlxuICAgICAgICAgICAgICBzaWdudXBGb3JtLmNvbnRyb2xzLmVtYWlsLmludmFsaWQgJiZcbiAgICAgICAgICAgICAgIWlzRm9jdXNlZC5lbWFpbCAmJlxuICAgICAgICAgICAgICBzaWdudXBGb3JtLmNvbnRyb2xzLmVtYWlsLnRvdWNoZWRcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmb250LWRpc3BsYXlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtYWRkcmVzcy1jYXJkXCI+PC9pPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJkaXNwbGF5LWlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzcGxheSBuYW1lXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQuZGlzcGxheU5hbWUgPSB0cnVlXCJcbiAgICAgICAgICAgIChibHVyKT1cImlzRm9jdXNlZC5kaXNwbGF5TmFtZSA9IGZhbHNlXCJcbiAgICAgICAgICAgIFtjbGFzcy5lcnJvci1ib3JkZXJdPVwiXG4gICAgICAgICAgICAgIHNpZ251cEZvcm0uY29udHJvbHMuZGlzcGxheU5hbWUuaW52YWxpZCAmJlxuICAgICAgICAgICAgICAhaXNGb2N1c2VkLnVzZXJuYW1lICYmXG4gICAgICAgICAgICAgIHNpZ251cEZvcm0uY29udHJvbHMuZGlzcGxheU5hbWUudG91Y2hlZFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZvbnQtdXNlcm5hbWVcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkLnVzZXJuYW1lID0gdHJ1ZVwiXG4gICAgICAgICAgICAoYmx1cik9XCJpc0ZvY3VzZWQudXNlcm5hbWUgPSBmYWxzZVwiXG4gICAgICAgICAgICBbY2xhc3MuZXJyb3ItYm9yZGVyXT1cIlxuICAgICAgICAgICAgICBzaWdudXBGb3JtLmNvbnRyb2xzLnVzZXJuYW1lLmludmFsaWQgJiZcbiAgICAgICAgICAgICAgIWlzRm9jdXNlZC51c2VybmFtZSAmJlxuICAgICAgICAgICAgICBzaWdudXBGb3JtLmNvbnRyb2xzLnVzZXJuYW1lLnRvdWNoZWRcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmb250LXBhc3N3b3JkXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1rZXlcIiBpZD1cImtleS1pY29uXCI+PC9pPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICBbdHlwZV09XCJzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZC5wYXNzd29yZCA9IHRydWVcIlxuICAgICAgICAgICAgKGJsdXIpPVwiaXNGb2N1c2VkLnBhc3N3b3JkID0gZmFsc2VcIlxuICAgICAgICAgICAgW2NsYXNzLmVycm9yLWJvcmRlcl09XCJcbiAgICAgICAgICAgICAgc2lnbnVwRm9ybS5jb250cm9scy5wYXNzd29yZC5pbnZhbGlkICYmXG4gICAgICAgICAgICAgICFpc0ZvY3VzZWQucGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgc2lnbnVwRm9ybS5jb250cm9scy5wYXNzd29yZC50b3VjaGVkXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwYXNzd29yZC10b2dnbGVcIiAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmQoKVwiPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgY2xhc3M9XCJmYS1zb2xpZFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5mYS1leWVdPVwic2hvd1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmZhLWV5ZS1zbGFzaF09XCIhc2hvd1Bhc3N3b3JkXCJcbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgaWQ9XCJzdWJtaXQtYnV0dG9uXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwic2lnbnVwRm9ybS5pbnZhbGlkXCI+XG4gICAgICAgICAgTGV0J3MgR28hXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPlxuICAgICAgICAgIDxzcGFuPk9yIGxvZyBpbiB3aXRoPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1sb2dpblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9nb29nbGVcIiBjbGFzcz1cInNvY2lhbC1idG4gZ29vZ2xlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmdzL2dvb2dsZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4+R29vZ2xlPC9zcGFuPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9naXRodWJcIiBjbGFzcz1cInNvY2lhbC1idG4gZ2l0aHViXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmdzL2dpdGh1Yi5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBBcGlFcnJvciB9IGZyb20gJy4uL21vZGVscy9hcGktZXJyb3IubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBcGlFcnJvcihlcnJvcjogdW5rbm93bik6IGVycm9yIGlzIEFwaUVycm9yIHtcbiAgcmV0dXJuIChcbiAgICAhIWVycm9yICYmXG4gICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJlxuICAgICdlcnJvckNvZGUnIGluIGVycm9yICYmXG4gICAgJ21lc3NhZ2UnIGluIGVycm9yICYmXG4gICAgJ3N0YXR1cycgaW4gZXJyb3JcbiAgKTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvY2hhdC9jaGF0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0YXRlU2VydmljZSB9IGZyb20gJ0Bjb3JlL2F1dGgvYXV0aC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEx1Y2lkZUFuZ3VsYXJNb2R1bGUgfSBmcm9tICdsdWNpZGUtYW5ndWxhcic7XG5pbXBvcnQgeyBTaWRlYmFyVXNlckNvbXBvbmVudCB9IGZyb20gJ0BzaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyLXVzZXIvc2lkZWJhci11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGFubmVsU3RhdGVTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvY2hhbm5lbHMvY2hhbm5lbC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJ0BzaGFyZWQvbW9kZWxzL3VzZXItcHJvZmlsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTaWRlYmFyVXNlckNvbXBvbmVudCxcbiAgICBMdWNpZGVBbmd1bGFyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck91dGxldCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRtU3ViPzogU3Vic2NyaXB0aW9uO1xuICB1c2VyUHJvZmlsZTogVXNlclByb2ZpbGUgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSxcbiAgICAgIHByaXZhdGUgYXV0aFN0YXRlOiBBdXRoU3RhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNoYW5uZWxTdGF0ZTogQ2hhbm5lbFN0YXRlU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmF1dGhTdGF0ZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdGhpcy51c2VyUHJvZmlsZSA9IHRoaXMuYXV0aFN0YXRlLmdldFVzZXJQcm9maWxlKCk7XG5cbiAgICAgIHRoaXMuZG1TdWIgPSB0aGlzLmNoYXRTZXJ2aWNlLndhdGNoRE1zKCkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmVDaGFubmVsSWQgPSB0aGlzLmNoYW5uZWxTdGF0ZS5nZXRBY3RpdmVJZCgpO1xuICAgICAgICAgIGlmIChTdHJpbmcobWVzc2FnZS5jaGFubmVsSUQpID09PSBTdHJpbmcoYWN0aXZlQ2hhbm5lbElkKSkge1xuICAgICAgICAgICAgdGhpcy5jaGF0U2VydmljZS5hbm5vdW5jZU5ld01lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycikgPT4gY29uc29sZS5lcnJvcignRE0gU3Vic2NyaXB0aW9uIEVycm9yOicsIGVycilcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkanVzdEhlaWdodChlbDogSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICB9XG5cbiAgaGFuZGxlU2VuZChldmVudDogRXZlbnQsIGVsOiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZWwudmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkID0gdGhpcy5jaGFubmVsU3RhdGUuZ2V0QWN0aXZlSWQoKTtcbiAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTdGF0ZS5nZXRVc2VyUHJvZmlsZSgpO1xuICAgICAgY29uc3QgdGVtcElkID0gYHRlbXAtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA5KX1gO1xuXG4gICAgICBjb25zdCBvcHRpbWlzdGljTXNnID0ge1xuICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgICBhdXRob3JJRDogdXNlcj8udXNlcklELFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdGVtcElkOiB0ZW1wSWQsXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNoYXRTZXJ2aWNlLmFubm91bmNlTmV3TWVzc2FnZShvcHRpbWlzdGljTXNnKTtcblxuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICAgICAgY2hhbm5lbElkOiBhY3RpdmVJZCxcbiAgICAgICAgdGVtcElkOiB0ZW1wSWRcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2hhdFNlcnZpY2Uuc2VuZE1lc3NhZ2UoJy9hcHAvY2hhdC5wcml2YXRlJywgcGF5bG9hZCk7XG5cbiAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZG1TdWIpIHtcbiAgICAgIHRoaXMuZG1TdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJob21lLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwic2lkZWJhci1sZWZ0XCI+XG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9TdGFyY29yZEJhbm5lclRyYW5zcGFyZW50LnBuZ1wiIGFsdD1cImxvZ29cIj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGlyZWN0LW1lc3NhZ2VzLWRpdlwiPlxuICAgICAgPHA+RGlyZWN0IE1lc3NhZ2VzPC9wPlxuICAgICAgPGltZyBpZD1cImFkZC1zdGFyXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Z3MvZm91ci1wb2ludC1zdGFyLnN2Z1wiIGFsdD1cImFkZFwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci11c2Vyc1wiPlxuICAgICAgPGFwcC1zaWRlYmFyLXVzZXI+PC9hcHAtc2lkZWJhci11c2VyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXRvcC1hY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItaXRlbVwiPlxuICAgICAgICAgIDxsdWNpZGUtaWNvbiBuYW1lPVwidXNlcnNcIiBbc2l6ZV09XCIxOFwiPjwvbHVjaWRlLWljb24+XG4gICAgICAgICAgPHNwYW4+RnJpZW5kczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29udHJvbC1iYXJcIiAqbmdJZj1cInVzZXJQcm9maWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm8tc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cInVzZXJQcm9maWxlLnByb2ZpbGVQaWN0dXJlXCIgYWx0PVwiYXZhdGFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLWluZGljYXRvclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXNlcm5hbWVcIj57eyB1c2VyUHJvZmlsZS51c2VybmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzLXRleHRcIj5PbmxpbmU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ0blwiIHRpdGxlPVwiU2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxsdWNpZGUtaWNvbiBuYW1lPVwic2V0dGluZ3NcIiBbc2l6ZV09XCIxNlwiPjwvbHVjaWRlLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idG4gbG9nb3V0XCIgdGl0bGU9XCJMb2cgb3V0XCI+XG4gICAgICAgICAgICA8bHVjaWRlLWljb24gbmFtZT1cImxvZy1vdXRcIiBbc2l6ZV09XCIxNlwiPjwvbHVjaWRlLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1jb250ZW50XCI+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1zZW5kaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWJ1dHRvblwiPlxuICAgICAgICAgIDxsdWNpZGUtaWNvbiBuYW1lPVwicGx1c1wiIFtzaXplXT1cIjE2XCI+PC9sdWNpZGUtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgI21lc3NhZ2VJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0aGlzIGNoYXRcIlxuICAgICAgICAgIHJvd3M9XCIxXCJcbiAgICAgICAgICAoaW5wdXQpPVwiYWRqdXN0SGVpZ2h0KG1lc3NhZ2VJbnB1dClcIlxuICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRhbnkoJGV2ZW50KS5zaGlmdEtleSA/IG51bGwgOiBoYW5kbGVTZW5kKCRldmVudCwgbWVzc2FnZUlucHV0KVwiXG4gICAgICAgID48L3RleHRhcmVhPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzZW5kLWJ1dHRvblwiIChjbGljayk9XCJoYW5kbGVTZW5kKCRldmVudCwgbWVzc2FnZUlucHV0KVwiPlxuICAgICAgICAgIDxsdWNpZGUtaWNvbiBuYW1lPVwic2VuZC1ob3Jpem9udGFsXCIgW3NpemVdPVwiMThcIj48L2x1Y2lkZS1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2lkZWJhci1yaWdodFwiPjwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFubmVsU2VydmljZSB9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL2NoYW5uZWxzL2NoYW5uZWwuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTdGF0ZVNlcnZpY2UgfSBmcm9tICdAY29yZS9hdXRoL2F1dGgtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL2NoYXQvY2hhdC5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSwgc3dpdGNoTWFwLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXN5bmNQaXBlLCBUaXRsZUNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGFubmVsU3RhdGVTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvY2hhbm5lbHMvY2hhbm5lbC1zdGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItdXNlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtBc3luY1BpcGUsIFRpdGxlQ2FzZVBpcGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci11c2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NpZGViYXItdXNlci5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29udGFjdHNTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4oW10pO1xuICBjb250YWN0cyQgPSB0aGlzLmNvbnRhY3RzU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBhY3RpdmVDaGFubmVsSWQkOiBPYnNlcnZhYmxlPHN0cmluZyB8IG51bGw+O1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRVc2VySWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBzb2NrZXRTdWI/OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFubmVsU2VydmljZTogQ2hhbm5lbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFubmVsU3RhdGU6IENoYW5uZWxTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU3RhdGVTZXJ2aWNlOiBBdXRoU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIHRoaXMuYWN0aXZlQ2hhbm5lbElkJCA9IHRoaXMuY2hhbm5lbFN0YXRlLnNlbGVjdGVkQ2hhbm5lbCQ7XG4gICAgdGhpcy5jdXJyZW50VXNlcklkID0gdGhpcy5hdXRoU3RhdGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlKCk/LnVzZXJJRDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbm5lbFNlcnZpY2UuZ2V0Q2hhdHMoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIG1hcChyZXMgPT4gcmVzLmNoYW5uZWxzKSxcbiAgICAgIHN3aXRjaE1hcChjaGFubmVscyA9PiB7XG4gICAgICAgIGNvbnN0IGFsbFVzZXJJZHMgPSBbLi4ubmV3IFNldChjaGFubmVscy5mbGF0TWFwKGMgPT4gYy5tZW1iZXJzKSldO1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRNdWx0aXBsZVVzZXJzKGFsbFVzZXJJZHMpLnBpcGUoXG4gICAgICAgICAgbWFwKHVzZXJzID0+IHRoaXMubWFwQ2hhbm5lbHNUb0NvbnRhY3RzKGNoYW5uZWxzLCB1c2VycykpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkuc3Vic2NyaWJlKHByb2Nlc3NlZENvbnRhY3RzID0+IHtcbiAgICAgIHRoaXMuY29udGFjdHNTdWJqZWN0Lm5leHQodGhpcy5zb3J0Q29udGFjdHMocHJvY2Vzc2VkQ29udGFjdHMpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0U3ViID0gdGhpcy5jaGF0U2VydmljZS5uZXdNZXNzYWdlJC5zdWJzY3JpYmUobXNnID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlSW5jb21pbmdNZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG1hcENoYW5uZWxzVG9Db250YWN0cyhjaGFubmVsczogYW55W10sIHVzZXJzOiBhbnlbXSk6IGFueVtdIHtcbiAgICBjb25zdCB1c2VyTWFwID0gbmV3IE1hcCh1c2Vycy5tYXAodSA9PiBbdS51c2VySUQsIHVdKSk7XG4gICAgcmV0dXJuIGNoYW5uZWxzLm1hcChjaGFubmVsID0+IHtcbiAgICAgIGxldCBjb250YWN0ID0geyAuLi5jaGFubmVsIH07XG4gICAgICBjb250YWN0Lmxhc3RBY3RpdmUgPSBjaGFubmVsLmxhc3RNZXNzYWdlID8gbmV3IERhdGUoY2hhbm5lbC5sYXN0TWVzc2FnZS50aW1lc3RhbXApIDogbmV3IERhdGUoY2hhbm5lbC5jcmVhdGVkQXQgfHwgMCk7XG5cbiAgICAgIGlmIChjaGFubmVsLmNoYW5uZWxUeXBlID09PSAnRE0nKSB7XG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IGNoYW5uZWwubWVtYmVyc1xuICAgICAgICAgIC5tYXAoKGlkOiBhbnkpID0+IHVzZXJNYXAuZ2V0KGlkKSlcbiAgICAgICAgICAuZmluZCgodTogYW55KSA9PiB1Py51c2VySUQgIT09IHRoaXMuY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29udGFjdC5kaXNwbGF5TmFtZSA9IG90aGVyVXNlcj8uZGlzcGxheU5hbWUgfHwgJ1Vua25vd24gVXNlcic7XG4gICAgICAgIGNvbnRhY3QuZGlzcGxheUltYWdlID0gb3RoZXJVc2VyPy5wcm9maWxlUGljdHVyZSB8fCAnYXNzZXRzL2ltYWdlcy9wZnBfY2hyaXN0bWFzLnBuZyc7XG4gICAgICAgIGNvbnRhY3QucHJlc2VuY2UgPSBvdGhlclVzZXI/LnByZXNlbmNlIHx8ICdPRkZMSU5FJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhY3QuZGlzcGxheU5hbWUgPSBjaGFubmVsLm5hbWUgfHwgJ0dyb3VwJztcbiAgICAgICAgY29udGFjdC5kaXNwbGF5SW1hZ2UgPSBjaGFubmVsLmltYWdlIHx8ICdhc3NldHMvZGVmYXVsdC1ncm91cC1pY29uLnBuZyc7XG4gICAgICAgIGNvbnRhY3QucHJlc2VuY2UgPSAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbmNvbWluZ01lc3NhZ2UobXNnOiBhbnkpIHtcbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IHRoaXMuY29udGFjdHNTdWJqZWN0LnZhbHVlO1xuICAgIGNvbnN0IGNoYW5uZWxJZCA9IFN0cmluZyhtc2cuY2hhbm5lbElEIHx8IG1zZy5jaGFubmVsSWQpO1xuICAgIGNvbnN0IGNoYW5uZWxJbmRleCA9IGN1cnJlbnRMaXN0LmZpbmRJbmRleChjID0+IFN0cmluZyhjLmNoYW5uZWxJRCkgPT09IGNoYW5uZWxJZCk7XG5cbiAgICBpZiAoY2hhbm5lbEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlZENoYW5uZWwgPSB7IC4uLmN1cnJlbnRMaXN0W2NoYW5uZWxJbmRleF0sIGxhc3RBY3RpdmU6IG5ldyBEYXRlKG1zZy50aW1lc3RhbXApIH07XG4gICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLmN1cnJlbnRMaXN0XTtcbiAgICAgIG5ld0xpc3Quc3BsaWNlKGNoYW5uZWxJbmRleCwgMSk7XG4gICAgICBuZXdMaXN0LnVuc2hpZnQodXBkYXRlZENoYW5uZWwpO1xuICAgICAgdGhpcy5jb250YWN0c1N1YmplY3QubmV4dChuZXdMaXN0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb250YWN0cyhjb250YWN0czogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIFsuLi5jb250YWN0c10uc29ydCgoYSwgYikgPT4gYi5sYXN0QWN0aXZlLmdldFRpbWUoKSAtIGEubGFzdEFjdGl2ZS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgb25DaGFubmVsQ2xpY2soY2hhbm5lbElEOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IGNoYW5uZWxJRC50b1N0cmluZygpO1xuICAgIHRoaXMuY2hhbm5lbFN0YXRlLnNldEFjdGl2ZUNoYW5uZWwoaWQpO1xuICAgIHZvaWQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9jaGFubmVsJywgaWRdKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc29ja2V0U3ViPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpblwiPlxuICBAZm9yIChwZXJzb24gb2YgY29udGFjdHMkIHwgYXN5bmM7IHRyYWNrIHBlcnNvbi5jaGFubmVsSUQpIHtcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNvbnRhY3Qtcm93XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKGFjdGl2ZUNoYW5uZWxJZCQgfCBhc3luYykgPT0gcGVyc29uLmNoYW5uZWxJRFwiXG4gICAgICAoY2xpY2spPVwib25DaGFubmVsQ2xpY2socGVyc29uLmNoYW5uZWxJRClcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFjdGl2ZS1pbmRpY2F0b3JcIj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1jb250YWluZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiYXZhdGFyXCJcbiAgICAgICAgICBbc3JjXT1cInBlcnNvbi5kaXNwbGF5SW1hZ2UgfHwgJ2Fzc2V0cy9pbWFnZXMvcGZwX2NocmlzdG1hcy5wbmcnXCJcbiAgICAgICAgICBhbHQ9XCJhdmF0YXJcIj5cblxuICAgICAgICBAaWYgKHBlcnNvbi5jaGFubmVsVHlwZSA9PT0gJ0RNJykge1xuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtbWFza1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1kb3RcIiBbY2xhc3NOYW1lXT1cIidzdGF0dXMtZG90ICcgKyAocGVyc29uLnByZXNlbmNlIHx8ICdvZmZsaW5lJykudG9Mb3dlckNhc2UoKVwiPlxuICAgICAgICAgICAgICBAc3dpdGNoIChwZXJzb24ucHJlc2VuY2UpIHtcbiAgICAgICAgICAgICAgICBAY2FzZSAoJ0lETEUnKSB7XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9vblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAY2FzZSAoJ0RORCcpIHtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaW51c1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnt7IHBlcnNvbi5kaXNwbGF5TmFtZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLXRleHRcIj5cbiAgICAgICAgICBAaWYgKHBlcnNvbi5jaGFubmVsVHlwZSA9PT0gJ0RNJykge1xuICAgICAgICAgICAge3sgcGVyc29uLnByZXNlbmNlID09PSAnRE5EJyA/ICdETkQnIDogKHBlcnNvbi5wcmVzZW5jZSB8IHRpdGxlY2FzZSkgfX1cbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIHt7IHBlcnNvbi5tZW1iZXJzLmxlbmd0aCB9fSBtZW1iZXJzXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG48L2Rpdj5cbiIsImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hhbm5lbFJlc3BvbnNlLCBHZXRDaGFubmVsUmVzcG9uc2V9IGZyb20gXCIuL2NoYW5uZWwtcmVzcG9uc2UubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGFwfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBdXRoU3RhdGVTZXJ2aWNlfSBmcm9tICdAY29yZS9hdXRoL2F1dGgtc3RhdGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbnByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFubmVsU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2NoYW5uZWxzJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBhdXRoU3RhdGVTZXJ2aWNlOiBBdXRoU3RhdGVTZXJ2aWNlLFxuICApIHt9XG5cbiAgZ2V0Q2hhbm5lbChjaGFubmVsSUQ6IE51bWJlcik6IE9ic2VydmFibGU8Q2hhbm5lbFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2hhbm5lbFJlc3BvbnNlPihcbiAgICAgIGAke3RoaXMuYmFzZVVSTH0vZ2V0LyR7Y2hhbm5lbElEfWBcbiAgICApO1xuICB9XG5cbiAgZ2V0QWxsQ2hhbm5lbHMoKTogT2JzZXJ2YWJsZTxDaGFubmVsUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDaGFubmVsUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVSTH0vZ2V0QWxsYCkucGlwZShcbiAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIHJlY2VpdmVkOlwiLCBkYXRhKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENoYXRzKCk6IE9ic2VydmFibGU8R2V0Q2hhbm5lbFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8R2V0Q2hhbm5lbFJlc3BvbnNlPihgJHt0aGlzLmJhc2VVUkx9L2dldEFsbC9jaGF0c2ApLnBpcGUoXG4gICAgICB0YXAoZGF0YSA9PiBjb25zb2xlLmxvZyhcIkRhdGEgcmVjZWl2ZWQ6XCIsIGRhdGEpKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFubmVsU3RhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVDaGFubmVsSWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBzZWxlY3RlZENoYW5uZWwkID0gdGhpcy5hY3RpdmVDaGFubmVsSWQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldEFjdGl2ZUNoYW5uZWwoaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUNoYW5uZWxJZCQubmV4dChpZCk7XG4gIH1cblxuICBnZXRBY3RpdmVJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDaGFubmVsSWQkLmdldFZhbHVlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0YXAsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJ0BzaGFyZWQvbW9kZWxzL3VzZXItcHJvZmlsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMnO1xuXG4gIC8vIFRoZSBTb3VyY2Ugb2YgVHJ1dGggZm9yIHVzZXIgZGF0YSBhY3Jvc3MgdGhlIGFwcFxuICBwcml2YXRlIHVzZXJDYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBVc2VyUHJvZmlsZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgbXVsdGlwbGUgdXNlcnMgYW5kIHNhdmVzIHRoZW0gdG8gdGhlIGxvY2FsIGNhY2hlIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBnZXRNdWx0aXBsZVVzZXJzKHVzZXJJZHM6IChzdHJpbmcgfCBudW1iZXIpW10pOiBPYnNlcnZhYmxlPFVzZXJQcm9maWxlW10+IHtcbiAgICBjb25zdCBzdHJpbmdJZHMgPSB1c2VySWRzLm1hcChpZCA9PiBTdHJpbmcoaWQpKTtcbiAgICBjb25zdCBib2R5ID0geyB1c2Vyczogc3RyaW5nSWRzIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlclByb2ZpbGVbXT4oYCR7dGhpcy5iYXNlVVJMfS9nZXRgLCBib2R5KS5waXBlKFxuICAgICAgdGFwKHVzZXJzID0+IHtcbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAvLyBFbnN1cmUgd2Ugc3RvcmUgYnkgc3RyaW5nIElEIGZvciBjb25zaXN0ZW50IGxvb2t1cFxuICAgICAgICAgIHRoaXMudXNlckNhY2hlLnNldChTdHJpbmcodXNlci51c2VySUQpLCB1c2VyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU3luY2hyb25vdXMgbG9va3VwIGZvciB0aGUgVUkuXG4gICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZSB1c2VyIGlzbid0IGxvYWRlZCB5ZXQuXG4gICAqL1xuICBnZXRVc2VyQnlJZCh1c2VySWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCk6IFVzZXJQcm9maWxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy51c2VyQ2FjaGUuZ2V0KFN0cmluZyh1c2VySWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBhZGQgYSB1c2VyIHRvIHRoZSBjYWNoZSAoZS5nLiwgdGhlIGN1cnJlbnQgbG9nZ2VkLWluIHVzZXIpLlxuICAgKi9cbiAgYWRkVG9DYWNoZSh1c2VyOiBVc2VyUHJvZmlsZSk6IHZvaWQge1xuICAgIGlmICh1c2VyICYmIHVzZXIudXNlcklEKSB7XG4gICAgICB0aGlzLnVzZXJDYWNoZS5zZXQoU3RyaW5nKHVzZXIudXNlcklEKSwgdXNlcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUnhTdG9tcCwgUnhTdG9tcFN0YXRlIH0gZnJvbSAnQHN0b21wL3J4LXN0b21wJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTdGF0ZVNlcnZpY2UgfSBmcm9tICdAY29yZS9hdXRoL2F1dGgtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBjdXN0b21SeFN0b21wQ29uZmlnIH0gZnJvbSAnQGNvcmUvY29uZmlnL3dlYnNvY2tldC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENoYXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByeFN0b21wOiBSeFN0b21wO1xuICBwcml2YXRlIHJlYWRvbmx5IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9tZXNzYWdlcyc7XG5cbiAgLy8gTkVXOiBUaGUgXCJCdXNcIiB0aGF0IGFsbG93cyBjb21wb25lbnRzIHRvIGhlYXIgbGl2ZSBtZXNzYWdlc1xuICBwcml2YXRlIG5ld01lc3NhZ2VTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBuZXdNZXNzYWdlJCA9IHRoaXMubmV3TWVzc2FnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTdGF0ZTogQXV0aFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7XG4gICAgdGhpcy5yeFN0b21wID0gbmV3IFJ4U3RvbXAoKTtcblxuICAgIGlmICh0aGlzLmF1dGhTdGF0ZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgYW5ub3VuY2VOZXdNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHRoaXMubmV3TWVzc2FnZVNvdXJjZS5uZXh0KG1lc3NhZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25uZWN0KCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoU3RhdGUuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIHRoaXMucnhTdG9tcC5jb25maWd1cmUoe1xuICAgICAgLi4uY3VzdG9tUnhTdG9tcENvbmZpZyxcbiAgICAgIGNvbm5lY3RIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJ4U3RvbXAuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMucnhTdG9tcC5jb25uZWN0aW9uU3RhdGUkLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ2hhdCBXZWJTb2NrZXQgU3RhdGU6JywgUnhTdG9tcFN0YXRlW3N0YXRlXSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRNZXNzYWdlc0J5Q2hhbm5lbChjaGFubmVsSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4oYCR7dGhpcy5BUElfVVJMfS8ke2NoYW5uZWxJZH1gKTtcbiAgfVxuXG4gIHdhdGNoRE1zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucnhTdG9tcC53YXRjaCgnL3VzZXIvcXVldWUvbWVzc2FnZXMnKS5waXBlKFxuICAgICAgbWFwKG1lc3NhZ2UgPT4gSlNPTi5wYXJzZShtZXNzYWdlLmJvZHkpKVxuICAgICk7XG4gIH1cblxuICB3YXRjaEdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucnhTdG9tcC53YXRjaChgL3RvcGljL2dyb3VwLiR7Z3JvdXBJZH1gKS5waXBlKFxuICAgICAgbWFwKG1lc3NhZ2UgPT4gSlNPTi5wYXJzZShtZXNzYWdlLmJvZHkpKVxuICAgICk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShkZXN0aW5hdGlvbjogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICB0aGlzLnJ4U3RvbXAucHVibGlzaCh7XG4gICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuICAgIH0pO1xuICB9XG5cbiAgd2F0Y2hGZWVkYmFjaygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJ4U3RvbXAud2F0Y2goJy91c2VyL3F1ZXVlL3JlcGx5JykucGlwZShcbiAgICAgIG1hcChtZXNzYWdlID0+IEpTT04ucGFyc2UobWVzc2FnZS5ib2R5KSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSeFN0b21wQ29uZmlnIH0gZnJvbSAnQHN0b21wL3J4LXN0b21wJztcblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJ4U3RvbXBDb25maWc6IFJ4U3RvbXBDb25maWcgPSB7XG4gIGJyb2tlclVSTDogJ3dzOi8vbG9jYWxob3N0OjgwODAvd3MnLCAvLyBNYXRjaGVzIHlvdXIgU3ByaW5nIGJvb3QgZW5kcG9pbnRcbiAgaGVhcnRiZWF0SW5jb21pbmc6IDAsXG4gIGhlYXJ0YmVhdE91dGdvaW5nOiAyMDAwMCxcbiAgcmVjb25uZWN0RGVsYXk6IDUwMDAsXG4gIGRlYnVnOiAobXNnOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpLCAnLSBTVE9NUDonLCBtc2cpO1xuICB9LFxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvY2hhdC9jaGF0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICdAY29yZS9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuaW50ZXJmYWNlIE1lc3NhZ2VHcm91cCB7XG4gIGRhdGVMYWJlbDogc3RyaW5nO1xuICBtZXNzYWdlczogYW55W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGF0LW1lc3NhZ2VzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LW1lc3NhZ2VzLmh0bWwnLFxuICBzdHlsZVVybDogJy4vY2hhdC1tZXNzYWdlcy5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TWVzc2FnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbENvbnRhaW5lcicpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyITogRWxlbWVudFJlZjtcblxuICBjdXJyZW50Q2hhbm5lbElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgZ3JvdXBlZE1lc3NhZ2VzOiBNZXNzYWdlR3JvdXBbXSA9IFtdO1xuICBwcml2YXRlIHNob3VsZFNjcm9sbCA9IGZhbHNlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucm91dGUucGFyYW1NYXAucGlwZShcbiAgICAgICAgbWFwKHBhcmFtcyA9PiBwYXJhbXMuZ2V0KCdpZCcpKSxcbiAgICAgICAgZmlsdGVyKGlkID0+ICEhaWQpLFxuICAgICAgICB0YXAoaWQgPT4ge1xuICAgICAgICAgIHRoaXMuZ3JvdXBlZE1lc3NhZ2VzID0gW107XG4gICAgICAgICAgdGhpcy5jdXJyZW50Q2hhbm5lbElkID0gaWQ7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSxcbiAgICAgICAgc3dpdGNoTWFwKGlkID0+IHRoaXMuY2hhdFNlcnZpY2UuZ2V0TWVzc2FnZXNCeUNoYW5uZWwoaWQhKS5waXBlKFxuICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHRoaXMucHJvY2Vzc01lc3NhZ2VzKHJlcy5tZXNzYWdlcyB8fCBbXSkpXG4gICAgICAgICkpXG4gICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChncm91cHMpID0+IHtcbiAgICAgICAgICB0aGlzLmdyb3VwZWRNZXNzYWdlcyA9IGdyb3VwcztcbiAgICAgICAgICB0aGlzLnNob3VsZFNjcm9sbCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5jaGF0U2VydmljZS5uZXdNZXNzYWdlJC5zdWJzY3JpYmUoKG1zZykgPT4ge1xuICAgICAgICAvLyBJZiB0aGUgbWVzc2FnZSBoYXMgYSBzdGF0dXMgYWxyZWFkeSAobGlrZSAncGVuZGluZycpLCB0cmVhdCBpdCBhcyBvcHRpbWlzdGljXG4gICAgICAgIHRoaXMuYXBwZW5kTGl2ZU1lc3NhZ2UobXNnLCAhIW1zZy5zdGF0dXMpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuY2hhdFNlcnZpY2Uud2F0Y2hGZWVkYmFjaygpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZW5kaW5nIG1lc3NhZ2UgdG8gJ3NlbnQnXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2VTdGF0dXMocmVzcG9uc2UuZGF0YS50ZW1wSWQsICdzZW50JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93RXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB0cnlpbmcgdG8gd2F0Y2ggZmVlZGJhY2tcIik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2VTdGF0dXMocmVzcG9uc2UuZGF0YT8udGVtcElkLCAnZXJyb3InKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiBjb25zb2xlLmVycm9yKCdGZWVkYmFjayBlcnJvcjonLCBlcnIpXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2VTdGF0dXModGVtcElkOiBzdHJpbmcsIHN0YXR1czogJ3NlbnQnIHwgJ2Vycm9yJywgZmluYWxEYXRhPzogYW55KSB7XG4gICAgaWYgKCF0ZW1wSWQpIHJldHVybjtcblxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgdGhpcy5ncm91cGVkTWVzc2FnZXMpIHtcbiAgICAgIGNvbnN0IG1zZ0luZGV4ID0gZ3JvdXAubWVzc2FnZXMuZmluZEluZGV4KG0gPT4gbS51bmlxdWVJZCA9PT0gdGVtcElkKTtcbiAgICAgIGlmIChtc2dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAubWVzc2FnZXNbbXNnSW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgaWYgKGZpbmFsRGF0YT8ubWVzc2FnZUlEKSB7XG4gICAgICAgICAgZ3JvdXAubWVzc2FnZXNbbXNnSW5kZXhdLnVuaXF1ZUlkID0gU3RyaW5nKGZpbmFsRGF0YS5tZXNzYWdlSUQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZExpdmVNZXNzYWdlKG06IGFueSwgaXNPcHRpbWlzdGljID0gZmFsc2UpIHtcbiAgICBjb25zdCBhdXRob3JJZCA9IFN0cmluZyhtLmF1dGhvcklEIHx8IG0uYXV0aG9ySWQpO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKGF1dGhvcklkKTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShtLnRpbWVzdGFtcCk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gdGhpcy5nZXREYXRlTGFiZWwoZGF0ZSk7XG5cbiAgICBjb25zdCBub3JtYWxpemVkTXNnID0ge1xuICAgICAgLi4ubSxcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyID8gdXNlci5kaXNwbGF5TmFtZSA6IGBVc2VyICR7YXV0aG9ySWR9YCxcbiAgICAgIHByb2ZpbGVQaWN0dXJlOiB1c2VyPy5wcm9maWxlUGljdHVyZSB8fCAnYXNzZXRzL2ltYWdlcy9wZnBfY2hyaXN0bWFzLnBuZycsXG4gICAgICBkaXNwbGF5VGltZTogdGhpcy5mb3JtYXRNZXNzYWdlVGltZShkYXRlKSxcbiAgICAgIHVuaXF1ZUlkOiBTdHJpbmcobS5tZXNzYWdlSUQgfHwgbS50ZW1wSWQpLFxuICAgICAgc3RhdHVzOiBtLnN0YXR1cyB8fCAoaXNPcHRpbWlzdGljID8gJ3BlbmRpbmcnIDogJ3NlbnQnKVxuICAgIH07XG5cbiAgICBjb25zdCBsYXN0R3JvdXAgPSB0aGlzLmdyb3VwZWRNZXNzYWdlc1t0aGlzLmdyb3VwZWRNZXNzYWdlcy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChsYXN0R3JvdXAgJiYgbGFzdEdyb3VwLmRhdGVMYWJlbCA9PT0gZGF0ZUxhYmVsKSB7XG4gICAgICBsYXN0R3JvdXAubWVzc2FnZXMucHVzaChub3JtYWxpemVkTXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncm91cGVkTWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGRhdGVMYWJlbDogZGF0ZUxhYmVsLFxuICAgICAgICBtZXNzYWdlczogW25vcm1hbGl6ZWRNc2ddXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3VsZFNjcm9sbCA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzTWVzc2FnZXMocmF3OiBhbnlbXSk6IE1lc3NhZ2VHcm91cFtdIHtcbiAgICBjb25zdCBncm91cHM6IE1lc3NhZ2VHcm91cFtdID0gW107XG4gICAgcmF3LmZvckVhY2gobSA9PiB7XG4gICAgICBjb25zdCBhdXRob3JJZCA9IFN0cmluZyhtLmF1dGhvcklEIHx8IG0uYXV0aG9ySWQpO1xuICAgICAgY29uc3QgdXNlciA9IHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQoYXV0aG9ySWQpO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG0udGltZXN0YW1wKTtcbiAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IHRoaXMuZ2V0RGF0ZUxhYmVsKGRhdGUpO1xuXG4gICAgICBjb25zdCBub3JtYWxpemVkTXNnID0ge1xuICAgICAgICAuLi5tLFxuICAgICAgICBkaXNwbGF5TmFtZTogdXNlciA/IHVzZXIuZGlzcGxheU5hbWUgOiBgVXNlciAke2F1dGhvcklkfWAsXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiB1c2VyPy5wcm9maWxlUGljdHVyZSB8fCAnYXNzZXRzL2ltYWdlcy9wZnBfY2hyaXN0bWFzLnBuZycsXG4gICAgICAgIGRpc3BsYXlUaW1lOiB0aGlzLmZvcm1hdE1lc3NhZ2VUaW1lKGRhdGUpLFxuICAgICAgICB1bmlxdWVJZDogU3RyaW5nKG0ubWVzc2FnZUlEIHx8IG0uaWQpLFxuICAgICAgICBzdGF0dXM6ICdzZW50JyAvLyBMb2FkZWQgaGlzdG9yeSBpcyBhbHdheXMgJ3NlbnQnXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBsYXN0R3JvdXAgPSBncm91cHNbZ3JvdXBzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RHcm91cCAmJiBsYXN0R3JvdXAuZGF0ZUxhYmVsID09PSBkYXRlTGFiZWwpIHtcbiAgICAgICAgbGFzdEdyb3VwLm1lc3NhZ2VzLnB1c2gobm9ybWFsaXplZE1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cHMucHVzaCh7IGRhdGVMYWJlbCwgbWVzc2FnZXM6IFtub3JtYWxpemVkTXNnXSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRNZXNzYWdlVGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgeWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5LmdldERhdGUoKSAtIDEpO1xuICAgIGNvbnN0IG1zZ0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IHRpbWVTdHIgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyMTI6IGZhbHNlIH0pO1xuXG4gICAgaWYgKG1zZ0RhdGUuZ2V0VGltZSgpID09PSB0b2RheS5nZXRUaW1lKCkpIHJldHVybiB0aW1lU3RyO1xuICAgIGlmIChtc2dEYXRlLmdldFRpbWUoKSA9PT0geWVzdGVyZGF5LmdldFRpbWUoKSkgcmV0dXJuIGBZZXN0ZXJkYXkgYXQgJHt0aW1lU3RyfWA7XG4gICAgcmV0dXJuIGAke1N0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKX0vJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX0vJHtkYXRlLmdldEZ1bGxZZWFyKCl9ICR7dGltZVN0cn1gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlTGFiZWwoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSk7XG4gICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkpO1xuICAgIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSAxKTtcbiAgICBjb25zdCBtc2dEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcblxuICAgIGlmIChtc2dEYXRlLmdldFRpbWUoKSA9PT0gdG9kYXkuZ2V0VGltZSgpKSByZXR1cm4gJ1RvZGF5JztcbiAgICBpZiAobXNnRGF0ZS5nZXRUaW1lKCkgPT09IHllc3RlcmRheS5nZXRUaW1lKCkpIHJldHVybiAnWWVzdGVyZGF5JztcblxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHN1ZmZpeCA9IChkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChkID4gMyAmJiBkIDwgMjEpIHJldHVybiAndGgnO1xuICAgICAgc3dpdGNoIChkICUgMTApIHtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gXCJzdFwiOyBjYXNlIDI6IHJldHVybiBcIm5kXCI7IGNhc2UgMzogcmV0dXJuIFwicmRcIjsgZGVmYXVsdDogcmV0dXJuIFwidGhcIjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBgJHtkYXl9JHtzdWZmaXgoZGF5KX0gJHtkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ2xvbmcnIH0pfSAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLnNob3VsZFNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgdGhpcy5zaG91bGRTY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zY3JvbGxDb250YWluZXIpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGF0LXdyYXBwZXJcIiAjc2Nyb2xsQ29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZXMtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNoYW5uZWwtaW50cm9cIj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBzdGFydCBvZiB0aGUgY2hhbm5lbCE8L2gxPlxuICAgICAgPHA+VGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIHlvdXIgaGlzdG9yeSBpbiB0aGlzIGNoYXQuPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgQGZvciAoZ3JvdXAgb2YgZ3JvdXBlZE1lc3NhZ2VzOyB0cmFjayBncm91cC5kYXRlTGFiZWwpIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLWxpbmVcIj48c3Bhbj57eyBncm91cC5kYXRlTGFiZWwgfX08L3NwYW4+PC9kaXY+XG5cbiAgICAgIEBmb3IgKG1zZyBvZiBncm91cC5tZXNzYWdlczsgdHJhY2sgbXNnLnVuaXF1ZUlkKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWVudHJ5XCIgW25nQ2xhc3NdPVwibXNnLnN0YXR1c1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBbc3JjXT1cIm1zZy5wcm9maWxlUGljdHVyZVwiIGFsdD1cInBmcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFyZWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VybmFtZVwiPnt7IG1zZy5kaXNwbGF5TmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3sgbXNnLmRpc3BsYXlUaW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPnt7IG1zZy5jb250ZW50IH19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIH1cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb2x2ZUZuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERvY1NlcnZpY2V9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL2RvY3MvRG9jU2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBlbmRwb2ludFJlc29sdmVyOiBSZXNvbHZlRm48YW55PiA9IChyb3V0ZSkgPT4ge1xuICBjb25zdCBkb2NTZXJ2aWNlID0gaW5qZWN0KERvY1NlcnZpY2UpO1xuICBjb25zdCBpZCA9IHJvdXRlLnBhcmFtTWFwLmdldCgnZW5kcG9pbnRJZCcpO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gZG9jU2VydmljZS5nZXRDYXRlZ29yeVN0cnVjdHVyZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRvY1NlcnZpY2UuZ2V0RW5kcG9pbnRCeUlkKGlkKTtcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElfU1RSVUNUVVJFIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2RhdGEvZW5kcG9pbnRzLmNvbmZpZyc7XG5pbXBvcnQgeyBBcGlDYXRlZ29yeSwgQXBpRW5kcG9pbnQgfSBmcm9tICdAc2hhcmVkL21vZGVscy9hcGktZG9jcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERvY1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdHJ1Y3R1cmU6IEFwaUNhdGVnb3J5W10gPSBBUElfU1RSVUNUVVJFO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRDYXRlZ29yeVN0cnVjdHVyZSgpOiBBcGlDYXRlZ29yeVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc3RydWN0dXJlO1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcnlCeU5hbWUobmFtZTogc3RyaW5nKTogQXBpQ2F0ZWdvcnkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc3RydWN0dXJlLmZpbmQoXG4gICAgICBjYXQgPT4gY2F0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgKSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0RW5kcG9pbnRCeUlkKGlkOiBzdHJpbmcpOiAoQXBpRW5kcG9pbnQgJiB7IGZ1bGxVcmw6IHN0cmluZyB9KSB8IG51bGwge1xuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5fc3RydWN0dXJlKSB7XG4gICAgICBjb25zdCBmb3VuZCA9IGNhdGVnb3J5LmVuZHBvaW50cy5maW5kKGUgPT4gZS5pZCA9PT0gaWQpO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZm91bmQsXG4gICAgICAgICAgZnVsbFVybDogYCR7Y2F0ZWdvcnkuYmFzZVBhdGh9JHtmb3VuZC5wYXRofWBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGxFbmRwb2ludHMoKTogQXBpRW5kcG9pbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cnVjdHVyZS5mbGF0TWFwKGNhdCA9PiBjYXQuZW5kcG9pbnRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtBcGlIZWFkZXIsIEFwaVJlc3BvbnNlfSBmcm9tICdAc2hhcmVkL21vZGVscy9hcGktZG9jcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF9FWENFUFRJT046IEFwaVJlc3BvbnNlID0ge1xuICBjb2RlOiA0MDAsXG4gIHRpdGxlOiAnQmFkIFJlcXVlc3QnLFxuICBkZXNjcmlwdGlvbjogJ0JhZCBSZXF1ZXN0IEJvZHksIGV4YW1wbGUgdGhlIHdyb25nIHR5cGUgb2YgcmVxdWVzdCcsXG4gIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICcgICAgXCJlcnJvckNvZGVcIjogXCJCQURfUkVRVUVTVFwiLFxcbicgK1xuICAgICcgICAgXCJtZXNzYWdlXCI6IFwiWW91IGhhdmUgYWxyZWFkeSBoaXQgdGhlIG1heGltdW0gbnVtYmVyIG9mIG1lbWJlcnMuIFRoZSBtYXhpbXVtIGZvciB0aGlzIHR5cGUgb2YgY2hhbm5lbCBpcyAyXCIsXFxuJyArXG4gICAgJyAgICBcInN0YXR1c1wiOiA0MDAsXFxuJyArXG4gICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjE6NDg6NTUuNTgwNjY5MzAwWlwiXFxuJyArXG4gICAgJ30nXG59XG5cbmV4cG9ydCBjb25zdCBJTlZBTElEX0NSRURFTlRJQUxTX0VYQ0VQVElPTjogQXBpUmVzcG9uc2UgPSB7XG4gIGNvZGU6IDQwMSxcbiAgdGl0bGU6ICdJbnZhbGlkIENyZWRlbnRpYWxzJyxcbiAgZGVzY3JpcHRpb246ICdDcmVkZW50aWFscyBwcm92aWRlZCBhcmUgaW52YWxpZCwgdXN1YWxseSBhbiBlbWFpbCBvciBwYXNzd29yZCcsXG4gIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICcgICAgXCJlcnJvckNvZGVcIjogXCJVTkFVVEhPUklaRURcIixcXG4nICtcbiAgICAnICAgIFwibWVzc2FnZVwiOiBcIkVtYWlsIG9yIHBhc3N3b3JkIGludmFsaWQuXCIsXFxuJyArXG4gICAgJyAgICBcInN0YXR1c1wiOiA0MDEsXFxuJyArXG4gICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjE6NTg6MjYuMDYwOTUzMjAwWlwiXFxuJyArXG4gICAgJ30nXG59XG5cbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfRVhDRVBUSU9OOiBBcGlSZXNwb25zZSA9IHtcbiAgY29kZTogNDAxLFxuICB0aXRsZTogJ1VuYXV0aG9yaXplZCcsXG4gIGRlc2NyaXB0aW9uOiAnSGFwcGVucyB3aGVuIHlvdSBhdHRlbXB0IHRvIHZpZXcgZGF0YSwgYW5kIHlvdSBhcmUgbm90IGxvZ2dlZCBpbicsXG4gIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICcgICAgXCJlcnJvckNvZGVcIjogXCJVTkFVVEhPUklaRURcIixcXG4nICtcbiAgICAnICAgIFwibWVzc2FnZVwiOiBcIlBsZWFzZSBsb2dpbiBvciBzaWdudXAgYmVmb3JlIGF0dGVtcHRpbmcgdG8gdmlldyB0aGlzIGRhdGEuXCIsXFxuJyArXG4gICAgJyAgICBcInN0YXR1c1wiOiA0MDEsXFxuJyArXG4gICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjI6MDA6MzIuMDY0OTU0MTI0MFpcIlxcbicgK1xuICAgICd9J1xufVxuXG5leHBvcnQgY29uc3QgRk9SQklEREVOX0VYQ0VQVElPTjogQXBpUmVzcG9uc2UgPSB7XG4gIGNvZGU6IDQwMSxcbiAgdGl0bGU6ICdGb3JiaWRkZW4nLFxuICBkZXNjcmlwdGlvbjogJ0hhcHBlbnMgd2hlbiB5b3UgYXR0ZW1wdCB0byB2aWV3IGRhdGEgeW91IGFyZSBub3QgYWxsb3dlZCB0byBzZWUsIGJ1dCB5b3UgYXJlIGF1dGhlbnRpY2F0ZWQnLFxuICBleGFtcGxlSnNvbjogJ3tcXG4nICtcbiAgICAnICAgIFwiZXJyb3JDb2RlXCI6IFwiRk9SQklEREVOXCIsXFxuJyArXG4gICAgJyAgICBcIm1lc3NhZ2VcIjogXCJZb3UgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gc2VlIHRoaXMgY2hhbm5lbC5cIixcXG4nICtcbiAgICAnICAgIFwic3RhdHVzXCI6IDQwMSxcXG4nICtcbiAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0zMVQyMjowMTozOC4wNjM5MjU0MTIxMVpcIlxcbicgK1xuICAgICd9J1xufVxuXG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EX0VYQ0VQVElPTjogQXBpUmVzcG9uc2UgPSB7XG4gIGNvZGU6IDQwNCxcbiAgdGl0bGU6ICdOb3QgRm91bmQnLFxuICBkZXNjcmlwdGlvbjogXCJIYXBwZW5zIHdoZW4geW91IGF0dGVtcHQgdG8gZ2V0IGRhdGEgdGhhdCBpcyBub3QgZm91bmQsIG9yIGRvZXNuJ3QgZXhpc3RcIixcbiAgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgJyAgICBcImVycm9yQ29kZVwiOiBcIk5PVF9GT1VORFwiLFxcbicgK1xuICAgICcgICAgXCJtZXNzYWdlXCI6IFwiTm8gY2hhbm5lbCBmb3VuZCB3aXRoIHRoYXQgSWQuXCIsXFxuJyArXG4gICAgJyAgICBcInN0YXR1c1wiOiA0MDEsXFxuJyArXG4gICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjI6MDI6MTEuMzEyMjM0MzU2N1wiXFxuJyArXG4gICAgJ30nXG59XG5cbmV4cG9ydCBjb25zdCBFTUFJTF9JTl9VU0VfRVhDRVBUSU9OOiBBcGlSZXNwb25zZSA9IHtcbiAgY29kZTogNDA5LFxuICB0aXRsZTogJ0VtYWlsIGluIHVzZScsXG4gIGRlc2NyaXB0aW9uOiAnQW5vdGhlciB1c2VyIGlzIGFscmVhZHkgdXNpbmcgdGhhdCBlbWFpbCcsXG4gIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICcgICAgXCJlcnJvckNvZGVcIjogXCJDT05GTElDVFwiLFxcbicgK1xuICAgICcgICAgXCJtZXNzYWdlXCI6IFwiVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZS5cIixcXG4nICtcbiAgICAnICAgIFwic3RhdHVzXCI6IDQwOSxcXG4nICtcbiAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0zMVQyMjowODo1Ni42MTQ0OTU5MDBaXCJcXG4nICtcbiAgICAnfSdcbn1cblxuZXhwb3J0IGNvbnN0IFVTRVJOQU1FX0lOX1VTRV9FWENFUFRJT046IEFwaVJlc3BvbnNlID0ge1xuICBjb2RlOiA0MDksXG4gIHRpdGxlOiAnVXNlcm5hbWUgaW4gdXNlJyxcbiAgZGVzY3JpcHRpb246ICdBbm90aGVyIHVzZXIgaXMgYWxyZWFkeSB1c2luZyB0aGF0IHVzZXJuYW1lJyxcbiAgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgJyAgICBcImVycm9yQ29kZVwiOiBcIkNPTkZMSUNUXCIsXFxuJyArXG4gICAgJyAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlLlwiLFxcbicgK1xuICAgICcgICAgXCJzdGF0dXNcIjogNDA5LFxcbicgK1xuICAgICcgICAgXCJ0aW1lc3RhbXBcIjogXCIyMDI2LTAzLTMxVDIyOjEzOjE5LjkwMzQxOVpcIlxcbicgK1xuICAgICd9J1xufVxuXG5leHBvcnQgY29uc3QgUkFURUxJTUlUX0VYQ0VQVElPTjogQXBpUmVzcG9uc2UgPSB7XG4gIGNvZGU6IDQyOSxcbiAgdGl0bGU6ICdSYXRlIGxpbWl0JyxcbiAgZGVzY3JpcHRpb246IFwiRXJyb3Igc2hvd2luZyB0aGF0IHlvdSBoYXZlIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZXF1ZXN0cyBpbiBhIGdpdmVuIHRpbWVcIixcbiAgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgJyAgICBcImVycm9yQ29kZVwiOiBcIlRPT19NQU5ZX1JFUVVFU1RTXCIsXFxuJyArXG4gICAgJyAgICBcIm1lc3NhZ2VcIjogXCJUb28gTWFueSBSZXF1ZXN0cy4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcXG4nICtcbiAgICAnICAgIFwic3RhdHVzXCI6IDQyOSxcXG4nICtcbiAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0zMVQxMjoyMTozNi45ODY1MzEyMDBaXCJcXG4nICtcbiAgICAnfSdcbn1cblxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT046IEFwaVJlc3BvbnNlID0ge1xuICBjb2RlOiA1MDAsXG4gIHRpdGxlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHVzdWFsbHkgc29tZXRoaW5nIG91dCBvZiB5b3VyIGNvbnRyb2wsIHNvbWV0aGluZyBpcyB3cm9uZyB3aXRoIHRoZSBzZXJ2ZXIuJyxcbiAgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgJyAgICBcImVycm9yQ29kZVwiOiBcIklOVEVSTkFMX1NFUlZFUl9FUlJPUlwiLFxcbicgK1xuICAgICcgICAgXCJtZXNzYWdlXCI6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIixcXG4nICtcbiAgICAnICAgIFwic3RhdHVzXCI6IDUwMCxcXG4nICtcbiAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0zMVQyMjoxNToyNS4yOTc1MjU2MDBaXCJcXG4nICtcbiAgICAnfSdcbn1cblxuZXhwb3J0IGNvbnN0IFNUQU5EQVJEX0VYQ0VQVElPTlMgPSB7XG4gIEJBRF9SRVFVRVNUX0VYQ0VQVElPTixcbiAgVU5BVVRIT1JJWkVEX0VYQ0VQVElPTixcbiAgRk9SQklEREVOX0VYQ0VQVElPTixcbiAgUkFURUxJTUlUX0VYQ0VQVElPTixcbiAgSU5URVJOQUxfU0VSVkVSX0VYQ0VQVElPTixcbn1cblxuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSOiBBcGlIZWFkZXIgPSB7XG4gIG5hbWU6ICdBdXRob3JpemF0aW9uJyxcbiAgdHlwZTogJ3N0cmluZycsXG4gIGRlc2NyaXB0aW9uOiAnWW91ciBhY2Nlc3MgdG9rZW4sIHBhc3NlZCB2aWEgXCJCZWFyZXIgLi4uXCJcXG5cXG5TZWUgYXV0aGVudGljYXRpb24gZG9jcyBmb3IgbW9yZSBpbmZvJyxcbiAgZXhhbXBsZVZhbHVlOiAnQmVhcmVyIG5vdGhpbmd0b3NlZWhlcmVvZmZpY2VyJyxcbiAgcmVxdWlyZWQ6IHRydWVcbn1cbiIsImltcG9ydCB7IEFwaUNhdGVnb3J5IH0gZnJvbSAnQHNoYXJlZC9tb2RlbHMvYXBpLWRvY3MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQVVUSE9SSVpBVElPTl9IRUFERVIsXG4gIEJBRF9SRVFVRVNUX0VYQ0VQVElPTixcbiAgRU1BSUxfSU5fVVNFX0VYQ0VQVElPTixcbiAgRk9SQklEREVOX0VYQ0VQVElPTiwgSU5URVJOQUxfU0VSVkVSX0VYQ0VQVElPTiwgSU5WQUxJRF9DUkVERU5USUFMU19FWENFUFRJT04sIE5PVF9GT1VORF9FWENFUFRJT04sXG4gIFJBVEVMSU1JVF9FWENFUFRJT04sXG4gIFNUQU5EQVJEX0VYQ0VQVElPTlMsIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gIFVTRVJOQU1FX0lOX1VTRV9FWENFUFRJT05cbn0gZnJvbSAnLi9kZWZhdWx0LXJlc3BvbnNlcyc7XG5cbmV4cG9ydCBjb25zdCBBUElfU1RSVUNUVVJFOiBBcGlDYXRlZ29yeVtdID0gW1xuICAvLyBBdXRoXG4gIHtcbiAgICBuYW1lOiAnQXV0aCcsXG4gICAgYmFzZVBhdGg6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2F1dGgnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXV0aGVudGljYXRpb24gZW5kcG9pbnQnLFxuICAgIGVuZHBvaW50czogW1xuICAgICAge1xuICAgICAgICBpZDogJ2F1dGgtc2lnbnVwJyxcbiAgICAgICAgcGF0aDogJy9zaWdudXAnLFxuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBhY2NvdW50JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGEgbmV3IGFjY291bnQuIFxcblxcbiBZb3Ugd2lsbCBzdGlsbCBuZWVkIHRvIGxvZyBpbiBhZnRlciB0aGUgc2lnbnVwIHJlcXVlc3QnLFxuICAgICAgICBib2R5UGFyYW1zOiBbXG4gICAgICAgICAgeyBuYW1lOiAndXNlcm5hbWUnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdZb3VyIHVzZXJuYW1lJywgZXhhbXBsZVZhbHVlOiAnc3RhcjEyM2Jlc3RAZ21haWwuY29tJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICB7IG5hbWU6ICdwYXNzd29yZCcsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ1lvdXIgcGFzc3dvcmQnLCBleGFtcGxlVmFsdWU6ICcjIyMjIyMjIyMjJywgcmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICAgIHsgbmFtZTogJ2VtYWlsJywgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnWW91ciBlbWFpbCcsIGV4YW1wbGVWYWx1ZTogJ3N0YXIxMjNiZXN0QGdtYWlsLmNvbScsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZGlzcGxheU5hbWUnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdBIGRpc3BsYXkgbmFtZScsIGV4YW1wbGVWYWx1ZTogJ1N0YXInLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBsb2dpbicsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY3JlYXRlZEF0XCI6IDE3NzQ5OTYzODQsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJkaXNwbGF5TmFtZVwiOiBcIlN0YXJcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImVtYWlsXCI6IFwic3RhcjEyM2Jlc3RAZ21haWwuY29tXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ1c2VySURcIjogMjgzODgwNTg5Mjc5MjMyLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidXNlcm5hbWVcIjogXCJzdGFyMTIzYmVzdFwiXFxuJyArXG4gICAgICAgICAgICAgICd9JyB9LFxuICAgICAgICAgIEJBRF9SRVFVRVNUX0VYQ0VQVElPTixcbiAgICAgICAgICBFTUFJTF9JTl9VU0VfRVhDRVBUSU9OLFxuICAgICAgICAgIFVTRVJOQU1FX0lOX1VTRV9FWENFUFRJT04sXG4gICAgICAgICAgUkFURUxJTUlUX0VYQ0VQVElPTixcbiAgICAgICAgICBJTlRFUk5BTF9TRVJWRVJfRVhDRVBUSU9OXG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4gYS5jb2RlIC0gYi5jb2RlKSxcbiAgICAgICAgcmF0ZUxpbWl0OiAxMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnYXV0aC1sb2dpbicsXG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICB0aXRsZTogJ0xvZ2luJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXV0aGVudGljYXRlIGFuZCByZWNlaXZlIGEgSldULicsXG4gICAgICAgIGJvZHlQYXJhbXM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdlbWFpbCcsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ1lvdXIgZW1haWwnLCBleGFtcGxlVmFsdWU6ICdzdGFyMTIzYmVzdEBnbWFpbC5jb20nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3Bhc3N3b3JkJywgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnWW91ciBwYXNzd29yZCcsIGV4YW1wbGVWYWx1ZTogJyMjIyMjIyMjIyMnLCByZXF1aXJlZDogdHJ1ZX1cbiAgICAgICAgXSxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIHsgbmFtZTogJ1gtRGV2aWNlLUlkJywgdHlwZTogJ3V1aWQnLCBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBVVUlEIGZvciB5b3VyIGRldmljZSwgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyJywgZXhhbXBsZVZhbHVlOiAnMjg4NDQyYzYtM2YxOS00NjFjLWEwNTQtMmI1MTdkYmY2ODM3JywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBsb2dpbicsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiYWNjZXNzVG9rZW5cIjogXCJudWggdWggbm90IHNvIGZhc3RcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNyZWF0ZWRBdFwiOiAxNzcwNjc3NjEyLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdGFyXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJlbWFpbFwiOiBcInN0YXIxMjNiZXN0QGdtYWlsLmNvbVwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwicHJvZmlsZVBpY3R1cmVcIjogXCJodHRwczovL3NvbWV1cmwuY29tXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ1c2VySURcIjogMjY2MTkwODk5MTIyMTc2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidXNlcm5hbWVcIjogXCJzdGFyMTIzYmVzdFwiXFxuJyArXG4gICAgICAgICAgICAgICd9JyB9LFxuICAgICAgICAgIEJBRF9SRVFVRVNUX0VYQ0VQVElPTixcbiAgICAgICAgICBJTlZBTElEX0NSRURFTlRJQUxTX0VYQ0VQVElPTixcbiAgICAgICAgICBSQVRFTElNSVRfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT05cbiAgICAgICAgXSxcbiAgICAgICAgcmF0ZUxpbWl0OiAxMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnYXV0aC1sb2dvdXQnLFxuICAgICAgICBwYXRoOiAnL2xvZ291dCcsXG4gICAgICAgIHRpdGxlOiAnTG9nb3V0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9nIG91dCBvZiBhbiBhY2NvdW50IHZpYSBhIHNwZWNpZmljIGRldmljZS1pZC4nLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsIGxvZ291dCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiZGF0YVwiOiBudWxsLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVzc2FnZVwiOiBcIlN1Y2Nlc3NmdWwgTG9nb3V0XCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJzdGF0dXNcIjogMjAwLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0zMVQyMjo0MjoxOS4yNTI0NDAyMDBaXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgQkFEX1JFUVVFU1RfRVhDRVBUSU9OLFxuICAgICAgICAgIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gICAgICAgICAgSU5WQUxJRF9DUkVERU5USUFMU19FWENFUFRJT04sXG4gICAgICAgICAgTk9UX0ZPVU5EX0VYQ0VQVElPTixcbiAgICAgICAgICBSQVRFTElNSVRfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT05cbiAgICAgICAgXSxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICAgICAgICAgIHsgbmFtZTogJ1gtRGV2aWNlLUlkJywgdHlwZTogJ3V1aWQnLCBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBVVUlEIGZvciB5b3VyIGRldmljZSwgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyJywgZXhhbXBsZVZhbHVlOiAnMjg4NDQyYzYtM2YxOS00NjFjLWEwNTQtMmI1MTdkYmY2ODM3JywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0ZUxpbWl0OiAxMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhdXRoLWxvZ291dC1hbGwnLFxuICAgICAgICBwYXRoOiAnL2xvZ291dEFsbCcsXG4gICAgICAgIHRpdGxlOiAnTG9nb3V0IGFsbCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvZyBvdXQgb2YgYWxsIHNlc3Npb25zIG9mIGFuIGFjY291bnQgaXJyZXNwZWN0aXZlIG9mIGRldmljZS4nLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBsb2dvdXQnLCBleGFtcGxlSnNvbjogJ3tcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImRhdGFcIjogbnVsbCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcIm1lc3NhZ2VcIjogXCJTdWNjZXNzZnVsIExvZ291dFwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwic3RhdHVzXCI6IDIwMCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjI6NDI6MTkuMjUyNDQwMjAwWlwiXFxuJyArXG4gICAgICAgICAgICAgICd9JyB9LFxuICAgICAgICAgIEJBRF9SRVFVRVNUX0VYQ0VQVElPTixcbiAgICAgICAgICBVTkFVVEhPUklaRURfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVkFMSURfQ1JFREVOVElBTFNfRVhDRVBUSU9OLFxuICAgICAgICAgIE5PVF9GT1VORF9FWENFUFRJT04sXG4gICAgICAgICAgUkFURUxJTUlUX0VYQ0VQVElPTixcbiAgICAgICAgICBJTlRFUk5BTF9TRVJWRVJfRVhDRVBUSU9OXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMTAsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnYXV0aC1yZWZyZXNoLXRva2VuJyxcbiAgICAgICAgcGF0aDogJy9yZWZyZXNoJyxcbiAgICAgICAgdGl0bGU6ICdSZWZyZXNoIFRva2VuJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVmcmVzaGVzIHRoZSBhY2Nlc3MgdG9rZW4gdmlhIGEgcmVmcmVzaCB0b2tlbiAoc2VlIEF1dGhlbnRpY2F0aW9uIGhlbHAgdGFiIGZvciBtb3JlKS4nLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgeyBuYW1lOiAnQ29va2llJywgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnWW91ciByZWZyZXNoIHRva2VuLCBwYXNzZWQgdmlhIFwicmVmcmVzaFRva2VuPS4uLlwiJywgZXhhbXBsZVZhbHVlOiAncmVmcmVzaFRva2VuPW5vdHNvZmFzdHBhcnRuZXInLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsIGxvZ291dCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY3JlYXRlZEF0XCI6IDE3NzQ5OTc0MTUsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJleHBpcmVzQXRcIjogMTc3NDk5ODMxNSxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInRva2VuXCI6IFwid291bGRuXFwndCB5b3UgbGlrZSB0byBrbm93IHdlYXRoZXIgYm95XCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgQkFEX1JFUVVFU1RfRVhDRVBUSU9OLFxuICAgICAgICAgIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gICAgICAgICAgSU5WQUxJRF9DUkVERU5USUFMU19FWENFUFRJT04sXG4gICAgICAgICAgTk9UX0ZPVU5EX0VYQ0VQVElPTixcbiAgICAgICAgICBSQVRFTElNSVRfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT05cbiAgICAgICAgXSxcbiAgICAgICAgcmF0ZUxpbWl0OiAxMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhdXRoLWRlbGV0ZS1hY2NvdW50JyxcbiAgICAgICAgcGF0aDogJy86aWQnLFxuICAgICAgICB0aXRsZTogJ0RlbGV0ZSBBY2NvdW50JyxcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWxldGVzIGFuIGFjY291bnQsIG5vIHNlY29uZCBjaGFuY2VzIChzb3JyeSBsaXR0bGUgdGltbXkpJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdpZCcsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ1RoZSBpZCBvZiB0aGUgYWNjb3VudCcsIGV4YW1wbGVWYWx1ZTogJzI2NjE5MDg5OTEyMjE3NicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCBkZWxldGlvbicsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiZGF0YVwiOiBudWxsLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVzc2FnZVwiOiBcIkFjY291bnQgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInN0YXR1c1wiOiAyMDAsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ0aW1lc3RhbXBcIjogXCIyMDI2LTAzLTMxVDIyOjQyOjE5LjI1MjQ0MDIwMFpcIlxcbicgK1xuICAgICAgICAgICAgICAnfScgfSxcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OLFxuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMoU1RBTkRBUkRfRVhDRVBUSU9OUylcbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiBhLmNvZGUgLSBiLmNvZGUpLFxuICAgICAgICByYXRlTGltaXQ6IDEwLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBDaGFubmVsc1xuICB7XG4gICAgbmFtZTogJ0NoYW5uZWxzJyxcbiAgICBiYXNlUGF0aDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvY2hhbm5lbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbm5lbHMgRW5kcG9pbnQnLFxuICAgIGVuZHBvaW50cyA6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjaGFubmVsLWdldC1kYXRhJyxcbiAgICAgICAgcGF0aDogJy86aWQnLFxuICAgICAgICB0aXRsZTogJ0dldCBDaGFubmVsIERhdGEnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCB0aGUgZGF0YSBmb3IgYSBzcGVjaWZpYyBjaGFubmVsJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdpZCcsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ1RoZSBpZCBvZiB0aGUgY2hhbm5lbCcsIGV4YW1wbGVWYWx1ZTogJzI3OTI3MzY0MTI5MTc3NicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnQ2hhbm5lbCBkYXRhIHJldHJpZXZlZCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY2hhbm5lbElEXCI6IDI3OTI3MzY0MTI5MTc3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNoYW5uZWxUeXBlXCI6IFwiR1JPVVBcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjYtMDMtMThUMjI6MDc6MjEuMzMxODAwWlwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY3JlYXRvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zb21lVXJsLmNvbVwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVtYmVyc1wiOiBbXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgIDI2NjM3Mzc4ODAwMDI1NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgMjY2MTkwODk5MTIyMTc2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAyNjY3NzIwOTAyMDAwNjQsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgIDI3NjYzNTA1MjE3NTM2MFxcbicgK1xuICAgICAgICAgICAgICAnICAgIF0sXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJuYW1lXCI6IFwiR3JvdXBjaGF0XCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKSxcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OLFxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEuY29kZSAtIGIuY29kZSksXG4gICAgICAgIHJhdGVMaW1pdDogNTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NoYW5uZWwtY3JlYXRlJyxcbiAgICAgICAgcGF0aDogJy9jcmVhdGUnLFxuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBDaGFubmVsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGEgbmV3IGNoYW5uZWwnLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgYm9keVBhcmFtczogW1xuICAgICAgICAgIHsgbmFtZTogJ25hbWUnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCAoTm90IHRvIGJlIHVzZWQgaW4gRE1TKScsIGV4YW1wbGVWYWx1ZTogJ1JhbmRvbSBncm91cCBjaGF0JywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnY2hhbm5lbFR5cGUnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdDaGFubmVsVHlwZSBlbnVtJywgZXhhbXBsZVZhbHVlOiAnRE0nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgICAgeyBuYW1lOiAnbWVtYmVycycsIHR5cGU6ICdvYmplY3QnLCBkZXNjcmlwdGlvbjogJ0xpc3Qgb2YgbWVtYmVycyBpZHMnLCBleGFtcGxlVmFsdWU6ICdbMjY2MzczNzg4MDAwMjU2XScsIHJlcXVpcmVkOiBmYWxzZX1cbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnTmV3IENoYW5uZWwgQ3JlYXRlZCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY2hhbm5lbElEXCI6IDI4NDA0MzQ4OTQ4MDcwNCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNoYW5uZWxUeXBlXCI6IFwiRE1cIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjYtMDQtMDFUMDk6MzU6NTUuMDQ5NTA5NzAwWlwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY3JlYXRvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImltYWdlXCI6IG51bGwsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJtZW1iZXJzXCI6IFtcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgMjY2MzczNzg4MDAwMjU2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAyNjYxOTA4OTkxMjIxNzZcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBdLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibmFtZVwiOiBudWxsXFxuJyArXG4gICAgICAgICAgICAgICd9JyB9LFxuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMoU1RBTkRBUkRfRVhDRVBUSU9OUyksXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NoYW5uZWwtZGVsZXRlJyxcbiAgICAgICAgcGF0aDogXCIvOmlkXCIsXG4gICAgICAgIHRpdGxlOiAnRGVsZXRlIENoYW5uZWwnLFxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlbGV0ZSBhIGNoYW5uZWwnLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyczogW1xuICAgICAgICAgIHsgbmFtZTogJ2lkJywgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnVGhlIGlkIG9mIHRoZSBjaGFubmVsJywgZXhhbXBsZVZhbHVlOiAnMjc5MjczNjQxMjkxNzc2JyB9LFxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdDaGFubmVsIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJkYXRhXCI6IG51bGwsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJtZXNzYWdlXCI6IFwiQ2hhbm5lbCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwic3RhdHVzXCI6IDIwMCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInRpbWVzdGFtcFwiOiBcIjIwMjYtMDMtMzFUMjI6NDI6MTkuMjUyNDQwMjAwWlwiXFxuJyArXG4gICAgICAgICAgICAgICd9JyB9LFxuICAgICAgICAgIE5PVF9GT1VORF9FWENFUFRJT04sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKVxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEuY29kZSAtIGIuY29kZSksXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NoYW5uZWwtdXBkYXRlJyxcbiAgICAgICAgcGF0aDogXCIvOmlkXCIsXG4gICAgICAgIHRpdGxlOiAnVXBkYXRlIENoYW5uZWwnLFxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVXBkYXRlIGEgY2hhbm5lbCcsXG4gICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICBBVVRIT1JJWkFUSU9OX0hFQURFUlxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICAgICAgeyBuYW1lOiAnaWQnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdUaGUgaWQgb2YgdGhlIGNoYW5uZWwnLCBleGFtcGxlVmFsdWU6ICcyNzkyNzM2NDEyOTE3NzYnIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ0NoYW5uZWwgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCBleGFtcGxlSnNvbjogJ3tcInRva2VuXCI6IFwieHl6XCJ9JyB9LFxuICAgICAgICAgIE5PVF9GT1VORF9FWENFUFRJT04sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKVxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEuY29kZSAtIGIuY29kZSksXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NoYW5uZWwtYWRkLW1lbWJlcicsXG4gICAgICAgIHBhdGg6IFwiL2FkZFwiLFxuICAgICAgICB0aXRsZTogJ0FkZCBtZW1iZXJzJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWRkIG1lbWJlcnMgdG8gYSBzcGVjaWZpYyBjaGFubmVsJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIGJvZHlQYXJhbXM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdjaGFubmVsSWQnLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdUaGUgaWQgb2YgdGhlIGNoYW5uZWwnLCBleGFtcGxlVmFsdWU6ICcyNzkyNzM2NDEyOTE3NzYnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnbWVtYmVycycsIHR5cGU6ICdhcnJheScsIGRlc2NyaXB0aW9uOiAnTGlzdCBvZiBtZW1iZXJzIGlkcycsIGV4YW1wbGVWYWx1ZTogJ1syNjYzNzM3ODgwMDAyNTZdJyB9LFxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsbHkgYWRkZWQgdXNlcicsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiZGF0YVwiOiBudWxsLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVzc2FnZVwiOiBcIlN1Y2Nlc3NmdWxseSBhZGRlZCB1c2VyXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJzdGF0dXNcIjogMjAwLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wNC0wMVQwOTo0NTowMS41MTA0OTE3MDBaXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgTk9UX0ZPVU5EX0VYQ0VQVElPTixcbiAgICAgICAgICAuLi5PYmplY3QudmFsdWVzKFNUQU5EQVJEX0VYQ0VQVElPTlMpXG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4gYS5jb2RlIC0gYi5jb2RlKSxcbiAgICAgICAgcmF0ZUxpbWl0OiAyMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnY2hhbm5lbC1nZXQtYWxsJyxcbiAgICAgICAgcGF0aDogXCIvZ2V0QWxsXCIsXG4gICAgICAgIHRpdGxlOiAnR2V0IEFsbCBDb252ZXJzYXRpb25zJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgYWxsIGNvbnZlcnNhdGlvbnMgKGNoYXRzIGFuZCBjaGFubmVscyknLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBjb252ZXJzYXRpb25zJywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJjaGFubmVsc1wiOiBbXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgIHtcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY2hhbm5lbElEXCI6IDI4NDA0MzQ4OTQ4MDcwNCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY2hhbm5lbFR5cGVcIjogXCJETVwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI2LTA0LTAxVDA5OjM1OjU1LjA0OTUxMFpcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY3JlYXRvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiaW1hZ2VcIjogbnVsbCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgMjY2MzczNzg4MDAwMjU2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDI2NjE5MDg5OTEyMjE3NlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXSxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwibmFtZVwiOiBudWxsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgIH0nICtcbiAgICAgICAgICAgICAgJyAgICBdLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wNC0wMVQwOTo1MDoxNy4wMzIxMTUyMDBaXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nfSxcbiAgICAgICAgICBVTkFVVEhPUklaRURfRVhDRVBUSU9OLFxuICAgICAgICAgIFJBVEVMSU1JVF9FWENFUFRJT04sXG4gICAgICAgICAgSU5URVJOQUxfU0VSVkVSX0VYQ0VQVElPTlxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEuY29kZSAtIGIuY29kZSksXG4gICAgICAgIHJhdGVMaW1pdDogMTAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NoYW5uZWwtZ2V0LWNoYXRzJyxcbiAgICAgICAgcGF0aDogXCIvZ2V0QWxsL2NoYXRzXCIsXG4gICAgICAgIHRpdGxlOiAnR2V0IEFsbCBDaGF0cycsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGFsbCBjaGF0cyBmb3IgYSB1c2VyJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ1N1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgY2hhdHMnLCBleGFtcGxlSnNvbjogJ3tcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcImNoYW5uZWxzXCI6IFtcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAge1xcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJjaGFubmVsSURcIjogMjg0MDQzNDg5NDgwNzA0LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJjaGFubmVsVHlwZVwiOiBcIkRNXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjYtMDQtMDFUMDk6MzU6NTUuMDQ5NTEwWlwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJjcmVhdG9ySURcIjogMjY2MTkwODk5MTIyMTc2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJpbWFnZVwiOiBudWxsLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAyNjYzNzM3ODgwMDAyNTYsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgMjY2MTkwODk5MTIyMTc2XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBdLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJuYW1lXCI6IG51bGxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgfScgK1xuICAgICAgICAgICAgICAnICAgIF0sXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ0aW1lc3RhbXBcIjogXCIyMDI2LTA0LTAxVDA5OjUwOjE3LjAzMjExNTIwMFpcIlxcbicgK1xuICAgICAgICAgICAgICAnfSd9LFxuICAgICAgICAgIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gICAgICAgICAgUkFURUxJTUlUX0VYQ0VQVElPTixcbiAgICAgICAgICBJTlRFUk5BTF9TRVJWRVJfRVhDRVBUSU9OXG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4gYS5jb2RlIC0gYi5jb2RlKSxcbiAgICAgICAgcmF0ZUxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnY2hhbm5lbC1nZXQtY2hhbm5lbHMnLFxuICAgICAgICBwYXRoOiBcIi9nZXRBbGwvY2hhbm5lbHNcIixcbiAgICAgICAgdGl0bGU6ICdHZXQgQWxsIENoYW5uZWxzJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgYWxsIGNoYW5uZWxzIGZvciBhIHVzZXInLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBjaGFubmVscycsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY2hhbm5lbHNcIjogW1xcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICB7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBcImNoYW5uZWxJRFwiOiAyODQwNDM0ODk0ODA3MDQsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBcImNoYW5uZWxUeXBlXCI6IFwiQ0hBTk5FTFwiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI2LTA0LTAxVDA5OjM1OjU1LjA0OTUxMFpcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY3JlYXRvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwibmFtZVwiOiBudWxsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgIH0nICtcbiAgICAgICAgICAgICAgJyAgICBdLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wNC0wMVQwOTo1MDoxNy4wMzIxMTUyMDBaXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nfSxcbiAgICAgICAgICBVTkFVVEhPUklaRURfRVhDRVBUSU9OLFxuICAgICAgICAgIFJBVEVMSU1JVF9FWENFUFRJT04sXG4gICAgICAgICAgSU5URVJOQUxfU0VSVkVSX0VYQ0VQVElPTlxuICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEuY29kZSAtIGIuY29kZSksXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBNZXNzYWdlc1xuICB7XG4gICAgbmFtZTogJ01lc3NhZ2VzJyxcbiAgICBiYXNlUGF0aDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvbWVzc2FnZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWVzc2FnZXMgRW5kcG9pbnQnLFxuICAgIGVuZHBvaW50cyA6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdtZXNzYWdlLWdldCcsXG4gICAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgICAgdGl0bGU6ICdHZXQgTWVzc2FnZXMnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBtZXNzYWdlcyBpbiBhIHNwZWNpZmljIGNoYW5uZWwsIHdoZXJlIDppZCBpcyB0aGUgY2hhbm5lbCBJZFxcblxcbk5vdGU6IHRlbXBJZCBpcyBhIHZhbHVlIHVzZWQgZm9yIHRoZSBcInByZS1zZW5kaW5nXCIgZmVhdHVyZSwgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGF0IGlzIGluIHRoZSB3ZWItc29ja2V0cyBzZWN0aW9uLCBhbmQgc2hvdWxkIE5PVCBiZSB1c2VkIG91dHNpZGUgb2Ygd2ViIHNvY2tldHMnLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnTWVzc2FnZXMgcmV0cmlldmVkJywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJjaGFubmVsSURcIjogMjgwOTAzMDA3NDgxODU2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVzc2FnZXNcIjogW1xcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICB7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBcImF1dGhvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY2hhbm5lbElEXCI6IDI4MDkwMzAwNzQ4MTg1NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY29udGVudFwiOiBcImlmIHlvdVxcJ3JlIHJlYWRpbmcgdGhpcywgeW91XFwncmUgY29vbCBiZWFuc1wiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJtZXNzYWdlSURcIjogMjgxNjA5NjgzOTU5ODA4LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJ0ZW1wSWRcIjogbnVsbCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0yNVQxMjozMjo0NC4yNDg1MjlaXCJcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgfVxcbicgK1xuICAgICAgICAgICAgICAnICAgIF0sXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ0aW1lc3RhbXBcIjogMTc3NTAyOTE4OFxcbicgK1xuICAgICAgICAgICAgICAnfScgfSxcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OLFxuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMoU1RBTkRBUkRfRVhDRVBUSU9OUylcbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiBhLmNvZGUgLSBiLmNvZGUpLFxuICAgICAgICByYXRlTGltaXQ6IDEwMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnbWVzc2FnZS1nZXQtaGlzdG9yeScsXG4gICAgICAgIHBhdGg6ICcvaGlzdG9yeS86aWQnLFxuICAgICAgICB0aXRsZTogJ0dldCBNZXNzYWdlIEhpc3RvcnknLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dldCBtZXNzYWdlcyBpbiBhIHNwZWNpZmljIGNoYW5uZWwsIHdoZXJlIDppZCBpcyB0aGUgY2hhbm5lbCBJZCwgd2l0aCBzcGVjaWZpYyBwYXJhbWV0ZXJzXFxuXFxuTm90ZTogdGVtcElkIGlzIGEgdmFsdWUgdXNlZCBmb3IgdGhlIFwicHJlLXNlbmRpbmdcIiBmZWF0dXJlLCBtb3JlIGluZm9ybWF0aW9uIG9uIHRoYXQgaXMgaW4gdGhlIHdlYi1zb2NrZXRzIHNlY3Rpb24uIHRlbXBJZCBzaG91bGQgTk9UIGJlIHVzZWQgb3V0c2lkZSBvZiB3ZWIgc29ja2V0cycsXG4gICAgICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdpZCcsIHR5cGU6ICdudW1iZXInLCBkZXNjcmlwdGlvbjogJ1RoZSBjaGFubmVsIGlkIHRvIGdldCBoaXN0b3J5IGZvcicsIGV4YW1wbGVWYWx1ZTogMjgwOTAzMDA3NDgxODU2LCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3BhZ2UnLCB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICdRdWVyeSBwYXJhbWV0ZXIgZm9yIHRoZSBpbmRleCBvZiB0aGUgcGFnZSwgdXNlZCBmb3IgcGFnaW5hdGlvbiAoc3RhcnQgZnJvbSAwKScsIGV4YW1wbGVWYWx1ZTogMCB9LFxuICAgICAgICAgIHsgbmFtZTogJ3NpemUnLCB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICdRdWVyeSBwYXJhbWV0ZXIgZm9yIHRoZSBtYXhpbXVtIG51bWJlciBvZiBtZXNzYWdlcyB0aGF0IGNhbiBiZSByZXR1cm5lZCBpbiBvbmUgcGFnZScsIGV4YW1wbGVWYWx1ZTogMTAwIH0sXG4gICAgICAgICAgeyBuYW1lOiAnYXNjZW5kaW5nJywgdHlwZTogJ251bWJlcicsIGRlc2NyaXB0aW9uOiAnUXVlcnkgcGFyYW1ldGVyLCBzZXQgdG8gdHJ1ZSBpZiB0aGUgcmVzdWx0IHNob3VsZCBiZSBzb3J0ZWQgYXNjZW5kaW5nIChvbGQgLT4gbmV3KSwgYW5kIGZhbHNlIGlmIGRlc2NlbmRpbmcgKG5ldyAtPiBvbGQpJywgZXhhbXBsZVZhbHVlOiB0cnVlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnYWZ0ZXInLCB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICdRdWVyeSBwYXJhbWV0ZXIgZm9yIHRoZSB1bml4IHRpbWVzdGFtcCB0aGUgbWVzc2FnZXMgc2hvdWxkIGJlIHNlbnQgYWZ0ZXInLCBleGFtcGxlVmFsdWU6IDE3NzExNjIxNzcgfSxcbiAgICAgICAgICB7IG5hbWU6ICdiZWZvcmUnLCB0eXBlOiAnbnVtYmVyJywgZGVzY3JpcHRpb246ICdRdWVyeSBwYXJhbWV0ZXIgZm9yIHRoZSB1bml4IHRpbWVzdGFtcCB0aGUgbWVzc2FnZXMgc2hvdWxkIGJlIHNlbnQgYmVmb3JlJywgZXhhbXBsZVZhbHVlOiAxNzcxMjUyMTc3IH0sXG4gICAgICAgIF0sXG4gICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICBBVVRIT1JJWkFUSU9OX0hFQURFUlxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdNZXNzYWdlIGhpc3RvcnkgcmV0cmlldmVkJywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJjaGFubmVsSURcIjogMjgwOTAzMDA3NDgxODU2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwibWVzc2FnZXNcIjogW1xcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICB7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICBcImF1dGhvcklEXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY2hhbm5lbElEXCI6IDI4MDkwMzAwNzQ4MTg1NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwiY29udGVudFwiOiBcImlmIHlvdVxcJ3JlIHJlYWRpbmcgdGhpcywgeW91XFwncmUgZXh0cmEgY29vbCBiZWFuc1wiLFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJtZXNzYWdlSURcIjogMjgxNjA5NjgzOTU5ODA4LFxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgXCJ0ZW1wSWRcIjogbnVsbCxcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wMy0yNVQxMjozMjo0NC4yNDg1MjlaXCJcXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgfVxcbicgK1xuICAgICAgICAgICAgICAnICAgIF0sXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ0aW1lc3RhbXBcIjogMTc3NTAyOTE4OFxcbicgK1xuICAgICAgICAgICAgICAnfScgfSxcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OLFxuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMoU1RBTkRBUkRfRVhDRVBUSU9OUylcbiAgICAgICAgXS5zb3J0KChhLCBiKSA9PiBhLmNvZGUgLSBiLmNvZGUpLFxuICAgICAgICByYXRlTGltaXQ6IDEwMCxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICAvLyBVc2Vyc1xuICB7XG4gICAgbmFtZTogJ1VzZXJzJyxcbiAgICBiYXNlUGF0aDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlcnMgRW5kcG9pbnQnLFxuICAgIGVuZHBvaW50cyA6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdnZXQtdXNlcicsXG4gICAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgICAgdGl0bGU6ICdHZXQgVXNlcicsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgdXNlclxcJ3MgaW5mb3JtYXRpb24nLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyczogW1xuICAgICAgICAgIHsgbmFtZTogJ2lkJywgdHlwZTogJ251bWJlcicsIGRlc2NyaXB0aW9uOiAnVGhlIGlkIG9mIHRoZSB1c2VyIHlvdSB3aXNoIHRvIGdldCB0aGUgaW5mb3JtYXRpb24gZm9yJyB9LFxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdVc2VyIGluZm9ybWF0aW9uIHJldHJpZXZlZCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwiY3JlYXRlZEF0XCI6IDE3NzA2Nzc2MTIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJkaXNwbGF5TmFtZVwiOiBcIlN0YXJcIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInByZXNlbmNlXCI6IFwiT05MSU5FXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJwcm9maWxlUGljdHVyZVwiOiBcImh0dHBzOi8vc29tZUFwaS5jb21cIixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInVzZXJJRFwiOiAyNjYxOTA4OTkxMjIxNzYsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ1c2VybmFtZVwiOiBcInN0YXIxMjNiZXN0XCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgQkFEX1JFUVVFU1RfRVhDRVBUSU9OLFxuICAgICAgICAgIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gICAgICAgICAgTk9UX0ZPVU5EX0VYQ0VQVElPTixcbiAgICAgICAgICBSQVRFTElNSVRfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT04sXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogNTAsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2dldC1tdWx0aXBsZS11c2VycycsXG4gICAgICAgIHBhdGg6ICcvZ2V0JyxcbiAgICAgICAgdGl0bGU6ICdHZXQgTXVsdGlwbGUgVXNlcnMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgbXVsdGlwbGUgdXNlclxcJ3MgaW5mb3JtYXRpb24gXFxuXFxuTm90ZTogVGhlIHJlcXVlc3QgbWV0aG9kIGlzIHNldCB0byBQT1NUIHRvIGFsbG93IGEgcmVxdWVzdCBib2R5LCB0aGlzIGlzIHRoZSBvbmx5IHdheSBJIGNvdWxkIGhhdmUgZG9uZSBpdCcsXG4gICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICBBVVRIT1JJWkFUSU9OX0hFQURFUlxuICAgICAgICBdLFxuICAgICAgICBib2R5UGFyYW1zOiBbXG4gICAgICAgICAgeyBuYW1lOiAndXNlcnMnLCB0eXBlOiAnYXJyYXknLCBkZXNjcmlwdGlvbjogJ0EgbGlzdCBvZiB0aGUgaWRzIG9mIHRoZSB1c2VycyB5b3Ugd2lzaCB0byBnZXQgdGhlIHByZXNlbmNlIGZvcicsIGV4YW1wbGVWYWx1ZTogJ1syNjYxOTA4OTkxMjIxNzYsIDI2NjM3Mzc4ODAwMDI1NiwgMjY2NzcyMDkwMjAwMDY0XScsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ1VzZXIgcHJlc2VuY2UgcmV0cmlldmVkJywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJ1c2VySWRcIjogMjY2MTkwODk5MTIyMTc2LFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwicHJlc2VuY2VcIjogXCJPTkxJTkVcIlxcbicgK1xuICAgICAgICAgICAgICAnfScgfSxcbiAgICAgICAgICBCQURfUkVRVUVTVF9FWENFUFRJT04sXG4gICAgICAgICAgVU5BVVRIT1JJWkVEX0VYQ0VQVElPTixcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OLFxuICAgICAgICAgIFJBVEVMSU1JVF9FWENFUFRJT04sXG4gICAgICAgICAgSU5URVJOQUxfU0VSVkVSX0VYQ0VQVElPTixcbiAgICAgICAgXSxcbiAgICAgICAgcmF0ZUxpbWl0OiAzMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnZ2V0LXByZXNlbmNlJyxcbiAgICAgICAgcGF0aDogJy86aWQvcHJlc2VuY2UnLFxuICAgICAgICB0aXRsZTogJ0dldCBQcmVzZW5jZScsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgdXNlcnMgcHJlc2VuY2UnLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyczogW1xuICAgICAgICAgIHsgbmFtZTogJ2lkJywgdHlwZTogJ251bWJlcicsIGRlc2NyaXB0aW9uOiAnVGhlIGlkIG9mIHRoZSB1c2VyIHlvdSB3aXNoIHRvIGdldCB0aGUgcHJlc2VuY2UgZm9yJyB9LFxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7IGNvZGU6IDIwMCwgdGl0bGU6ICdTdWNjZXNzJywgZGVzY3JpcHRpb246ICdVc2VyIHByZXNlbmNlIHJldHJpZXZlZCcsIGV4YW1wbGVKc29uOiAne1xcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidXNlcklkXCI6IDI2NjE5MDg5OTEyMjE3NixcXG4nICtcbiAgICAgICAgICAgICAgJyAgICBcInByZXNlbmNlXCI6IFwiT05MSU5FXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgQkFEX1JFUVVFU1RfRVhDRVBUSU9OLFxuICAgICAgICAgIFVOQVVUSE9SSVpFRF9FWENFUFRJT04sXG4gICAgICAgICAgTk9UX0ZPVU5EX0VYQ0VQVElPTixcbiAgICAgICAgICBSQVRFTElNSVRfRVhDRVBUSU9OLFxuICAgICAgICAgIElOVEVSTkFMX1NFUlZFUl9FWENFUFRJT04sXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMzAsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3VwZGF0ZS1wcmVzZW5jZScsXG4gICAgICAgIHBhdGg6ICcvOmlkL3ByZXNlbmNlJyxcbiAgICAgICAgdGl0bGU6ICdVcGRhdGUgUHJlc2VuY2UnLFxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVXBkYXRlIHRoZSBwcmVzZW5jZSBmb3IgYSBzcGVjaWZpYyB1c2VyJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIGJvZHlQYXJhbXM6IFtcbiAgICAgICAgICB7IG5hbWU6ICdwcmVzZW5jZScsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ1RoZSBuZXcgcHJlc2VuY2UgZm9yIHRoZSB1c2VyIChPTkxJTkUsIElETEUsIERORCwgSU5WSVNJQkxFKScsICBleGFtcGxlVmFsdWU6IFwiT05MSU5FXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ1ByZXNlbmNlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgZXhhbXBsZUpzb246ICd7XFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJkYXRhXCI6IG51bGwsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJtZXNzYWdlXCI6IFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgcHJlc2VuY2UgdG8gT05MSU5FXCIsXFxuJyArXG4gICAgICAgICAgICAgICcgICAgXCJzdGF0dXNcIjogMjAwLFxcbicgK1xuICAgICAgICAgICAgICAnICAgIFwidGltZXN0YW1wXCI6IFwiMjAyNi0wNC0wMVQxMTowODo1Mi43OTExNTI1MDBaXCJcXG4nICtcbiAgICAgICAgICAgICAgJ30nIH0sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKSxcbiAgICAgICAgICBOT1RfRk9VTkRfRVhDRVBUSU9OXG4gICAgICAgIF0uc29ydCgoYSwgYikgPT4gYS5jb2RlIC0gYi5jb2RlKSxcbiAgICAgICAgcmF0ZUxpbWl0OiAzMCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICAvLyBXZWIgc29ja2V0c1xuICB7XG4gICAgbmFtZTogJ1dlYiBzb2NrZXRzJyxcbiAgICBiYXNlUGF0aDogJ3dzOi8vbG9jYWxob3N0OjgwODAnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWxsIHRoZSB3ZWJzb2NrZXRzIHVzZWQgaW4gU3RhcmNvcmQnLFxuICAgIGVuZHBvaW50cyA6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd3cy1jb25uZWN0JyxcbiAgICAgICAgcGF0aDogJy93cycsXG4gICAgICAgIHRpdGxlOiAnQ29ubmVjdCcsXG4gICAgICAgIG1ldGhvZDogJ1dTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDb25uZWN0IHRvIHRoZSB3ZWJzb2NrZXRcXG5cXG5Ob3RlOiB1c2VyLW5hbWUgaXMgYWN0dWFsbHkgeW91ciB1c2VyIGlkLCBkdWUgdG8gU3ByaW5nIHdlYnNvY2tldCBsaW1pdGF0aW9ucyBJIGhhZCB0byB1c2UgdGhpcyBjb252ZW50aW9uJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ0Nvbm5lY3RlZCBzdWNjZXNzZnVsbHknLCBleGFtcGxlSnNvbjogJzEwOjMyOjQ3IC0gU1RPTVA6IDw8PCBDT05ORUNURURcXG4nICtcbiAgICAgICAgICAgICAgJ3VzZXItbmFtZToyNjYxOTA4OTkxMjIxNzZcXG4nICtcbiAgICAgICAgICAgICAgJ2hlYXJ0LWJlYXQ6MCwwXFxuJyArXG4gICAgICAgICAgICAgICd2ZXJzaW9uOjEuMlxcbicgK1xuICAgICAgICAgICAgICAnY29udGVudC1sZW5ndGg6MCcgfSxcbiAgICAgICAgICAuLi5PYmplY3QudmFsdWVzKFNUQU5EQVJEX0VYQ0VQVElPTlMpXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3dzLXNlbmQtZ2MnLFxuICAgICAgICBwYXRoOiAnL2FwcC9ncm91cC86aWQnLFxuICAgICAgICB0aXRsZTogJ1NlbmQgdG8gR0MnLFxuICAgICAgICBtZXRob2Q6ICdXUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VuZCBhIG1lc3NhZ2UgdG8gYSBncm91cCBjaGF0JyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHsgY29kZTogMjAwLCB0aXRsZTogJ1N1Y2Nlc3MnLCBkZXNjcmlwdGlvbjogJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHknLCBleGFtcGxlSnNvbjogJzEwOjQzOjMyIC0gU1RPTVA6ID4+PiBTRU5EXFxuJyArXG4gICAgICAgICAgICAgICdkZXN0aW5hdGlvbjovYXBwL2dyb3VwLzI3OTI3MzY0MTI5MTc3NlxcbicgK1xuICAgICAgICAgICAgICAnY29udGVudC1sZW5ndGg6ODYnIH0sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKVxuICAgICAgICBdLFxuICAgICAgICByYXRlTGltaXQ6IDIwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd3cy1saXN0ZW4tZ2MnLFxuICAgICAgICBwYXRoOiAnL2FwcC9ncm91cC86aWQnLFxuICAgICAgICB0aXRsZTogJ0xpc3RlbiB0byBHQycsXG4gICAgICAgIG1ldGhvZDogJ1dTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMaXN0ZWQgdG8gbWVzc2FnZXMgZnJvbSBhIGdyb3VwIGNoYXQnLFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAgQVVUSE9SSVpBVElPTl9IRUFERVJcbiAgICAgICAgXSxcbiAgICAgICAgcmVzcG9uc2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAyMDAsIHRpdGxlOiAnU3VjY2VzcycsIGRlc2NyaXB0aW9uOiAnTGlzdGVuaW5nIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQnLCBleGFtcGxlSnNvbjogJzEwOjQ3OjM5IC0gU1RPTVA6ID4+PiBTVUJTQ1JJQkVcXG4nICtcbiAgICAgICAgICAgICAgJ2lkOnN1Yi0xXFxuJyArXG4gICAgICAgICAgICAgICdkZXN0aW5hdGlvbjovdG9waWMvZ3JvdXAuZ3JvdXBJZCcgfSxcbiAgICAgICAgICAuLi5PYmplY3QudmFsdWVzKFNUQU5EQVJEX0VYQ0VQVElPTlMpXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3dzLXNlbmQtZG0nLFxuICAgICAgICBwYXRoOiAnL2FwcC9jaGF0LnByaXZhdGUnLFxuICAgICAgICB0aXRsZTogJ1NlbmQgUHJpdmF0ZSBETScsXG4gICAgICAgIG1ldGhvZDogJ1dTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTZW5kIGEgcHJpdmF0ZSBtZXNzYWdlIHRvIGEgc3BlY2lmaWMgdXNlciB2aWEgYSBETSBjaGFubmVsJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01lc3NhZ2Ugc2VudCB0byB0aGUgbWVzc2FnZSBicm9rZXInLFxuICAgICAgICAgICAgZXhhbXBsZUpzb246ICcxMTowNToxMiAtIFNUT01QOiA+Pj4gU0VORFxcbicgK1xuICAgICAgICAgICAgICAnZGVzdGluYXRpb246L2FwcC9jaGF0LnByaXZhdGVcXG4nICtcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZTphcHBsaWNhdGlvbi9qc29uXFxuJyArXG4gICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgJ3tcImNoYW5uZWxJZFwiOiBcIjI4MDkwMzAwNzQ4MTg1NlwiLCBcImNvbnRlbnRcIjogXCJoaSBjb29sIHBlcnNvblwiLCBcInRlbXBJZFwiOiBcImRmYjczMzQ1LWQyYjctNGI5Zi04NDBjLWY0ZGEzNzZhODUwOFwifSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLk9iamVjdC52YWx1ZXMoU1RBTkRBUkRfRVhDRVBUSU9OUylcbiAgICAgICAgXSxcbiAgICAgICAgcmF0ZUxpbWl0OiAyMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnd3MtcmVjZWl2ZS1kbScsXG4gICAgICAgIHBhdGg6ICcvdXNlci9xdWV1ZS9tZXNzYWdlcycsXG4gICAgICAgIHRpdGxlOiAnUmVjZWl2ZSBQcml2YXRlIERNJyxcbiAgICAgICAgbWV0aG9kOiAnV1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBTVE9NUCBmcmFtZSByZWNlaXZlZCB3aGVuIGFub3RoZXIgdXNlciBzZW5kcyBhIG1lc3NhZ2UgdG8geW91ciBwcml2YXRlIHF1ZXVlJyxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIEFVVEhPUklaQVRJT05fSEVBREVSXG4gICAgICAgIF0sXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0luY29taW5nIG1lc3NhZ2UgcGF5bG9hZCcsXG4gICAgICAgICAgICBleGFtcGxlSnNvbjogJzExOjI5OjU2IC0gU1RPTVA6IDw8PCBNRVNTQUdFXFxuJyArXG4gICAgICAgICAgICAgICdjb250ZW50LWxlbmd0aDozNDFcXG4nICtcbiAgICAgICAgICAgICAgJ21lc3NhZ2UtaWQ6NjI4ZDExZTAtODg5YS0wZGQxLTFkMGEtZWE5ZTA0MmY4YWI2LTZcXG4nICtcbiAgICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbjpzdWItMVxcbicgK1xuICAgICAgICAgICAgICAnY29udGVudC10eXBlOmFwcGxpY2F0aW9uL2pzb25cXG4nICtcbiAgICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uOi91c2VyL3F1ZXVlL21lc3NhZ2VzXFxuJyArXG4gICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgJ3tcIm1lc3NhZ2VJRFwiOiAyODE2MDk2ODM5NTk4MDgsIFwiYXV0aG9ySURcIjogMjY2MTkwODk5MTIyMTc2LCBcImNvbnRlbnRcIjogXCJ3aHkgaGVsbG8gdGhlcmVcIiwgXCJjaGFubmVsSURcIjogNTU1LCBcInRpbWVzdGFtcFwiOiBcIjIwMjQtMDUtMjBUMTI6MDA6MDBaXCJ9J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhTVEFOREFSRF9FWENFUFRJT05TKVxuICAgICAgICBdLFxuICAgICAgICByYXRlTGltaXQ6IDIwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd3cy1yZWNlaXZlLWRtLXJlY2VpcHQnLFxuICAgICAgICBwYXRoOiAnL3VzZXIvcXVldWUvcmVwbHknLFxuICAgICAgICB0aXRsZTogJ1JlY2VpdmUgRE0gUmVjZWlwdCcsXG4gICAgICAgIG1ldGhvZDogJ1dTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgU1RPTVAgZnJhbWUgcmVjZWl2ZWQgYWZ0ZXIgeW91IHNlbmQgYSBETSwgY29uZmlybWluZyB0aGUgc2VydmVyIHByb2Nlc3NlZCBpdCcsXG4gICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICBBVVRIT1JJWkFUSU9OX0hFQURFUlxuICAgICAgICBdLFxuICAgICAgICByZXNwb25zZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdWNjZXNzUmVzcG9uc2UgcGF5bG9hZCcsXG4gICAgICAgICAgICBleGFtcGxlSnNvbjogJzExOjI5OjU2IC0gU1RPTVA6IDw8PCBNRVNTQUdFXFxuJyArXG4gICAgICAgICAgICAgICdjb250ZW50LWxlbmd0aDozNDFcXG4nICtcbiAgICAgICAgICAgICAgJ21lc3NhZ2UtaWQ6NjI4ZDExZTAtODg5YS0wZGQxLTFkMGEtZWE5ZTA0MmY4YWI2LTZcXG4nICtcbiAgICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbjpzdWItMVxcbicgK1xuICAgICAgICAgICAgICAnY29udGVudC10eXBlOmFwcGxpY2F0aW9uL2pzb25cXG4nICtcbiAgICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uOi91c2VyL3F1ZXVlL3JlcGx5XFxuJyArXG4gICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgJ3tcInN1Y2Nlc3NcIjogdHJ1ZSwgXCJtZXNzYWdlXCI6IFwiSEFMTE9PT09PXCIsIFwidGVtcElkXCI6IFwiZGZiNzMzNDUtZDJiNy00YjlmLTg0MGMtZjRkYTM3NmE4NTA4XCIsIFwibWVzc2FnZUlkXCI6IDI4MTYwOTY4Mzk1OTgwOH0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5PYmplY3QudmFsdWVzKFNUQU5EQVJEX0VYQ0VQVElPTlMpXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGVMaW1pdDogMjAsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJ0BmZWF0dXJlcy9vdGhlci9kb2NzL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kb2NzLWxheW91dCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtSb3V0ZXJPdXRsZXQsIFNpZGViYXJDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9jcy1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZG9jcy1sYXlvdXQuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgRG9jc0xheW91dENvbXBvbmVudCB7fVxuIiwiPGRpdiBjbGFzcz1cImRvY3Mtd3JhcHBlclwiPlxuICA8YXBwLXNpZGViYXIgY2xhc3M9XCJkb2NzLXNpZGViYXJcIj48L2FwcC1zaWRlYmFyPlxuXG4gIDxkaXYgY2xhc3M9XCJkb2NzLWNvbnRlbnRcIj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgUm91dGVyTGluaywgUm91dGVyTGlua0FjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0x1Y2lkZUFuZ3VsYXJNb2R1bGUsIENoZXZyb25SaWdodCwgQm9va09wZW4sIEtleSwgU2VhcmNoLCBMb2NrfSBmcm9tICdsdWNpZGUtYW5ndWxhcic7XG5pbXBvcnQgeyBEb2NTZXJ2aWNlIH0gZnJvbSAnQGNvcmUvc2VydmljZXMvZG9jcy9Eb2NTZXJ2aWNlJztcbmltcG9ydCB7IEFwaUNhdGVnb3J5IH0gZnJvbSAnQHNoYXJlZC9tb2RlbHMvYXBpLWRvY3MubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlckxpbmssIFJvdXRlckxpbmtBY3RpdmUsIEx1Y2lkZUFuZ3VsYXJNb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVudURhdGE6IEFwaUNhdGVnb3J5W10gPSBbXTtcbiAgZXhwYW5kZWRDYXRlZ29yaWVzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gIHJlYWRvbmx5IENoZXZyb25SaWdodCA9IENoZXZyb25SaWdodDtcbiAgcmVhZG9ubHkgQm9va09wZW4gPSBCb29rT3BlbjtcbiAgcmVhZG9ubHkgS2V5ID0gS2V5O1xuICByZWFkb25seSBTZWFyY2ggPSBTZWFyY2g7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2NTZXJ2aWNlOiBEb2NTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5tZW51RGF0YSA9IHRoaXMuZG9jU2VydmljZS5nZXRDYXRlZ29yeVN0cnVjdHVyZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGVja0FjdGl2ZVJvdXRlKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZVJvdXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlUm91dGUoKSB7XG4gICAgdGhpcy5tZW51RGF0YS5mb3JFYWNoKGNhdCA9PiB7XG4gICAgICBjb25zdCBpc0NoaWxkQWN0aXZlID0gY2F0LmVuZHBvaW50cy5zb21lKGVuZCA9PiB0aGlzLnJvdXRlci51cmwuaW5jbHVkZXMoZW5kLmlkKSk7XG4gICAgICBjb25zdCBpc0NhdGVnb3J5UGFnZUFjdGl2ZSA9IHRoaXMucm91dGVyLnVybC5pbmNsdWRlcyhgL2NhdGVnb3J5LyR7Y2F0Lm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgICAgaWYgKGlzQ2hpbGRBY3RpdmUgfHwgaXNDYXRlZ29yeVBhZ2VBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZENhdGVnb3JpZXNbY2F0Lm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUNhdGVnb3J5KG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZXhwYW5kZWRDYXRlZ29yaWVzW25hbWVdID0gIXRoaXMuZXhwYW5kZWRDYXRlZ29yaWVzW25hbWVdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IExvY2sgPSBMb2NrO1xufVxuIiwiPG5hdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiPlxuICA8ZGl2IGNsYXNzPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwianVtcC10b1wiPlxuICAgICAgPGx1Y2lkZS1pY29uIFtpbWddPVwiU2VhcmNoXCIgW3NpemVdPVwiMTRcIiBjbGFzcz1cImljb24tbXV0ZWRcIj48L2x1Y2lkZS1pY29uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJqdW1wLXRvLXRleHRcIj5KVU1QIFRPPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic3RhdGljLWxpbmtzXCI+XG4gICAgPGEgY2xhc3M9XCJuYXYtaXRlbVwiIHJvdXRlckxpbms9XCIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWRcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLXN0YXRpY1wiPlxuICAgICAgPGx1Y2lkZS1pY29uIFtpbWddPVwiQm9va09wZW5cIiBbc2l6ZV09XCIxNlwiIGNsYXNzPVwiaWNvbi1tYXJnaW5cIj48L2x1Y2lkZS1pY29uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtdGV4dFwiPkdldHRpbmcgU3RhcnRlZDwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJuYXYtaXRlbVwiIHJvdXRlckxpbms9XCIvZG9jcy9zZWN1cml0eVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtc3RhdGljXCI+XG4gICAgICA8bHVjaWRlLWljb24gW2ltZ109XCJMb2NrXCIgW3NpemVdPVwiMTZcIiBjbGFzcz1cImljb24tbWFyZ2luXCI+PC9sdWNpZGUtaWNvbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibmF2LXRleHRcIj5TZWN1cml0eTwvc3Bhbj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+QVBJIFJFRkVSRU5DRTwvZGl2PlxuXG4gIEBmb3IgKGNhdCBvZiBtZW51RGF0YTsgdHJhY2sgY2F0Lm5hbWUpIHtcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktZ3JvdXBcIiBbY2xhc3MuaXMtb3Blbl09XCJleHBhbmRlZENhdGVnb3JpZXNbY2F0Lm5hbWVdXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIiBbY2xhc3MuYWN0aXZlLWNhdGVnb3J5XT1cInJsYS5pc0FjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVDYXRlZ29yeShjYXQubmFtZSlcIiB0aXRsZT1cIlRvZ2dsZSBDYXRlZ29yeVwiPlxuICAgICAgICAgIDxsdWNpZGUtaWNvbiBbaW1nXT1cIkNoZXZyb25SaWdodFwiIFtzaXplXT1cIjE0XCIgY2xhc3M9XCJhcnJvdy1pY29uXCI+PC9sdWNpZGUtaWNvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZG9jcy9jYXRlZ29yeScsIGNhdC5uYW1lLnRvTG93ZXJDYXNlKCldXCJcbiAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1jYXRlZ29yeVwiXG4gICAgICAgICAgICNybGE9XCJyb3V0ZXJMaW5rQWN0aXZlXCJcbiAgICAgICAgICAgY2xhc3M9XCJjYXRlZ29yeS1saW5rXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+e3sgY2F0Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBAaWYgKGV4cGFuZGVkQ2F0ZWdvcmllc1tjYXQubmFtZV0pIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImVuZHBvaW50LWxpc3RcIj5cbiAgICAgICAgICBAZm9yIChlbmQgb2YgY2F0LmVuZHBvaW50czsgdHJhY2sgZW5kLmlkKSB7XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9kb2NzJywgZW5kLmlkXVwiXG4gICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLWxpbmtcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBlbmRwb2ludFwiXG4gICAgICAgICAgICAgICBbYXR0ci5kYXRhLW1ldGhvZF09XCJlbmQubWV0aG9kXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW5kcG9pbnQtbmFtZVwiPnt7IGVuZC50aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRob2QtYmFkZ2VcIj57eyBlbmQubWV0aG9kIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIH1cbjwvbmF2PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFwaUNhdGVnb3J5IH0gZnJvbSAnQHNoYXJlZC9tb2RlbHMvYXBpLWRvY3MubW9kZWwnO1xuaW1wb3J0IHsgRG9jU2VydmljZSB9IGZyb20gJ0Bjb3JlL3NlcnZpY2VzL2RvY3MvRG9jU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kb2NzLWluZGV4JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JvdXRlckxpbmssIENvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2NzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZG9jcy1saXN0LmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBEb2NzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhdGVnb3JpZXM6IEFwaUNhdGVnb3J5W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY1NlcnZpY2U6IERvY1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kb2NTZXJ2aWNlLmdldENhdGVnb3J5U3RydWN0dXJlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXRlZ29yeS12aWV3XCI+XG4gIDxkaXYgY2xhc3M9XCJpbmZvLXBhbmUgZnVsbC13aWR0aFwiPlxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPkFQSSBET0NVTUVOVEFUSU9OPC9kaXY+XG4gICAgICA8aDE+RGV2ZWxvcGVyIEh1YjwvaDE+XG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj5cbiAgICAgICAgRXhwbG9yZSB0aGUgU3RhcmNvcmQgQVBJIERvY3NcblxuICAgICAgICBZb3VyIGNvbXBsZXRlIGd1aWRlIHRvIHRoZSBTdGFyY29yZCBBUEkuIEV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gaGFuZGxlIGF1dGhlbnRpY2F0aW9uLCBwb3dlciB5b3VyIG1lc3NhZ2luZywgYW5kIG1hbmFnZSB1c2VycyBpcyByaWdodCBoZXJlIGF0IHlvdXIgZmluZ2VydGlwcy4gSGFwcHkgY29kaW5nIGFuZCB0cnkgbm90IHRvIHN3ZWFyIHRvbyBtdWNoIVxuICAgICAgPC9wPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgQGZvciAoY2F0IG9mIGNhdGVnb3JpZXM7IHRyYWNrIGNhdC5uYW1lKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktc2VjdGlvblwiIHN0eWxlPVwibWFyZ2luLXRvcDogODBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj57eyBjYXQubmFtZSB9fTwvZGl2PlxuICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogI2Y4ZmFmYzsgZm9udC1zaXplOiAyOHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4O1wiPnt7IGNhdC5uYW1lIH19IFJlZmVyZW5jZTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweDtcIj57eyBjYXQuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVuZHBvaW50LWdyaWRcIj5cbiAgICAgICAgICBAZm9yIChlbmQgb2YgY2F0LmVuZHBvaW50czsgdHJhY2sgZW5kLmlkKSB7XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9kb2NzJywgZW5kLmlkXVwiIGNsYXNzPVwiZW5kcG9pbnQtY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRob2QtdGFnXCIgW2F0dHIuZGF0YS1tZXRob2RdPVwiZW5kLm1ldGhvZFwiPnt7IGVuZC5tZXRob2QgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJwYXRoLXRpbnlcIj57eyBlbmQucGF0aCB9fTwvY29kZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMz57eyBlbmQudGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgICA8cD57eyBlbmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAvLyBSZXF1aXJlZCBmb3IgfCBqc29uIHBpcGVcbmltcG9ydCB7IEFwaUNhdGVnb3J5LCBBcGlFbmRwb2ludCB9IGZyb20gJ0BzaGFyZWQvbW9kZWxzL2FwaS1kb2NzLm1vZGVsJztcbmltcG9ydCB7IERvY1NlcnZpY2UgfSBmcm9tICdAY29yZS9zZXJ2aWNlcy9kb2NzL0RvY1NlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZG9jcy1kZXRhaWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTGluayxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3MtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2RvY3MtZGV0YWlsLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBEb2NzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW5kcG9pbnQ6IEFwaUVuZHBvaW50IHwgbnVsbCA9IG51bGw7XG4gIGNhdGVnb3J5OiBBcGlDYXRlZ29yeSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZG9jU2VydmljZTogRG9jU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBjb25zdCBpZCA9IHBhcmFtc1snZW5kcG9pbnRJZCddO1xuICAgICAgY29uc3QgY2F0TmFtZSA9IHBhcmFtc1snY2F0TmFtZSddO1xuXG4gICAgICBpZiAoY2F0TmFtZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy5kb2NTZXJ2aWNlLmdldENhdGVnb3J5QnlOYW1lKGNhdE5hbWUpO1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IHRoaXMuZG9jU2VydmljZS5nZXRFbmRwb2ludEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiQGlmIChlbmRwb2ludCkge1xuICA8ZGl2IGNsYXNzPVwiZnVsbC1zY3JlZW4tZGV0YWlsXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm8tcGFuZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLXJvd1wiPlxuICAgICAgICA8aDE+e3sgZW5kcG9pbnQudGl0bGUgfX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YWRhdGEtcGlsbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbCBhdXRoLXBpbGxcIiBbY2xhc3MuaXMtdW5hdXRoZW50aWNhdGVkXT1cImVuZHBvaW50LmF1dGhlbnRpY2F0ZWQgPT09IGZhbHNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICB7eyBlbmRwb2ludC5hdXRoZW50aWNhdGVkID09PSBmYWxzZSA/ICdQdWJsaWMnIDogJ0F1dGhlbnRpY2F0ZWQnIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwgcmF0ZS1waWxsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBpbGwtbGFiZWxcIj5SYXRlIExpbWl0PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaWxsLXZhbHVlXCI+e3sgZW5kcG9pbnQucmF0ZUxpbWl0IH19IHJlcXVlc3RzIHBlciBtaW51dGU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1cmwtYmFyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWV0aG9kLXRhZ1wiIFthdHRyLmRhdGEtbWV0aG9kXT1cImVuZHBvaW50Lm1ldGhvZFwiPnt7IGVuZHBvaW50Lm1ldGhvZCB9fTwvc3Bhbj5cbiAgICAgICAgPGNvZGUgY2xhc3M9XCJwYXRoXCI+e3sgZW5kcG9pbnQucGF0aCB9fTwvY29kZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzcz1cImRlc2NcIj57eyBlbmRwb2ludC5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgQGlmIChlbmRwb2ludC5wYXJhbWV0ZXJzICYmIGVuZHBvaW50LnBhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPlBBUkFNRVRFUlM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcmFtcy1jb250YWluZXJcIj5cbiAgICAgICAgICBAZm9yIChwYXJhbSBvZiBlbmRwb2ludC5wYXJhbWV0ZXJzOyB0cmFjayBwYXJhbS5uYW1lKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFyYW0tcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJhbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgcGFyYW0ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj57eyBwYXJhbS50eXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIEBpZiAocGFyYW0ucmVxdWlyZWQpIHsgPHNwYW4gY2xhc3M9XCJyZXFcIj5SRVFVSVJFRDwvc3Bhbj4gfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwLWRlc2NcIj57eyBwYXJhbS5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICBAaWYgKHBhcmFtLmV4YW1wbGVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4XCI+RXhhbXBsZTogPGNvZGU+e3sgcGFyYW0uZXhhbXBsZVZhbHVlIH19PC9jb2RlPjwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICBAaWYgKGVuZHBvaW50LmhlYWRlcnMgJiYgZW5kcG9pbnQuaGVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+SEVBREVSUzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFyYW1zLWNvbnRhaW5lclwiPlxuICAgICAgICAgIEBmb3IgKGhlYWRlciBvZiBlbmRwb2ludC5oZWFkZXJzOyB0cmFjayBoZWFkZXIubmFtZSkge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcmFtLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFyYW0tbGluZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7IGhlYWRlci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPnt7IGhlYWRlci50eXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIEBpZiAoaGVhZGVyLnJlcXVpcmVkKSB7IDxzcGFuIGNsYXNzPVwicmVxXCI+UkVRVUlSRUQ8L3NwYW4+IH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicC1kZXNjXCI+e3sgaGVhZGVyLmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgICAgICAgIEBpZiAoaGVhZGVyLmV4YW1wbGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleFwiPkV4YW1wbGU6IDxjb2RlPnt7IGhlYWRlci5leGFtcGxlVmFsdWUgfX08L2NvZGU+PC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIEBpZiAoZW5kcG9pbnQuYm9keVBhcmFtcyAmJiBlbmRwb2ludC5ib2R5UGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj5CT0RZIFBBUkFNRVRFUlM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcmFtcy1jb250YWluZXJcIj5cbiAgICAgICAgICBAZm9yIChwYXJhbSBvZiBlbmRwb2ludC5ib2R5UGFyYW1zOyB0cmFjayBwYXJhbS5uYW1lKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFyYW0tcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJhbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgcGFyYW0ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj57eyBwYXJhbS50eXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIEBpZiAocGFyYW0ucmVxdWlyZWQpIHsgPHNwYW4gY2xhc3M9XCJyZXFcIj5SRVFVSVJFRDwvc3Bhbj4gfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwLWRlc2NcIj57eyBwYXJhbS5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICBAaWYgKHBhcmFtLmV4YW1wbGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleFwiPkV4YW1wbGU6IDxjb2RlPnt7IHBhcmFtLmV4YW1wbGVWYWx1ZSB9fTwvY29kZT48L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zZS1wYW5lXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPlJFU1BPTlNFUzwvZGl2PlxuICAgICAgQGZvciAocmVzIG9mIGVuZHBvaW50LnJlc3BvbnNlczsgdHJhY2sgcmVzLnRpdGxlKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXMtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXMtaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3BvbnNlLXRpdGxlXCI+e3sgcmVzLnRpdGxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzLWRlc2NyaXB0aW9uXCI+e3sgcmVzLmRlc2NyaXB0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1jb2RlXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdjb2RlLXN1Y2Nlc3MnOiByZXMuY29kZSA8IDMwMCxcbiAgICAgICAgICAgICAgICAnY29kZS1lcnJvcic6IHJlcy5jb2RlID49IDQwMCAmJiByZXMuY29kZSA8IDUwMCxcbiAgICAgICAgICAgICAgICAnY29kZS1zZXJ2ZXInOiByZXMuY29kZSA+PSA1MDBcbiAgICAgICAgICAgICAgfVwiPnt7IHJlcy5jb2RlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvZGUtYm94XCI+XG4gICAgICAgICAgICA8cHJlPjxjb2RlPnt7IHJlcy5leGFtcGxlSnNvbiB9fTwvY29kZT48L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuXG5AZWxzZSBpZiAoY2F0ZWdvcnkpIHtcbiAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXZpZXdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mby1wYW5lIGZ1bGwtd2lkdGhcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+QVBJIFJFRkVSRU5DRTwvZGl2PlxuICAgICAgICA8aDE+e3sgY2F0ZWdvcnkubmFtZSB9fTwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY1wiPnt7IGNhdGVnb3J5LmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlLXVybC1ib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3BvbnNlLXRpdGxlXCI+QkFTRSBVUkw8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvZGUtYm94XCI+XG4gICAgICAgICAgICA8Y29kZT57eyBjYXRlZ29yeS5iYXNlUGF0aCB9fTwvY29kZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+RU5EUE9JTlRTPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW5kcG9pbnQtZ3JpZFwiPlxuICAgICAgICBAZm9yIChlbmQgb2YgY2F0ZWdvcnkuZW5kcG9pbnRzOyB0cmFjayBlbmQuaWQpIHtcbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9kb2NzJywgZW5kLmlkXVwiIGNsYXNzPVwiZW5kcG9pbnQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGhvZC10YWdcIiBbYXR0ci5kYXRhLW1ldGhvZF09XCJlbmQubWV0aG9kXCI+e3sgZW5kLm1ldGhvZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJwYXRoLXRpbnlcIj57eyBlbmQucGF0aCB9fTwvY29kZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzPnt7IGVuZC50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgICA8cD57eyBlbmQuZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWdldHRpbmctc3RhcnRlZCcsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQge1xuXG59XG4iLCI8cD5nZXR0aW5nLXN0YXJ0ZWQgd29ya3MhPC9wPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0x1Y2lkZUFuZ3VsYXJNb2R1bGUsIExpbmt9IGZyb20gJ2x1Y2lkZS1hbmd1bGFyJztcbmltcG9ydCB7IGNvcHlMaW5rIH0gZnJvbSAnLi4vaGVscGVyLW1ldGhvZHMnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VjdXJpdHktbGFuZGluZycsXG4gIGltcG9ydHM6IFtcbiAgICBMdWNpZGVBbmd1bGFyTW9kdWxlLFxuICAgIFJvdXRlckxpbmtcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3VyaXR5LWxhbmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vZ2VuZXJhbC1zdHlsZS5jc3MnLFxuICAgICdzZWN1cml0eS1sYW5kaW5nLmNvbXBvbmVudC5jc3MnXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5TGFuZGluZ0NvbXBvbmVudCB7XG4gIHJlYWRvbmx5IGNvcHlMaW5rID0gY29weUxpbms7XG5cbiAgcmVhZG9ubHkgTGluayA9IExpbms7XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlld1wiPlxuICA8ZGl2IGNsYXNzPVwiZG9jcy1sYXlvdXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mby1wYW5lIHdpZGUtbW9kZVwiPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJkb2NzLWFydGljbGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImFydGljbGUtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj48c3Bhbj5TZWN1cml0eSBEb2N1bWVudGF0aW9uPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxoMT5TdGFyY29yZCBTZWN1cml0eSBPdmVydmlldzwvaDE+XG4gICAgICAgICAgPHByZSBjbGFzcz1cImludHJvZHVjdGlvbi10ZXh0XCI+XG5IZWxsbyEgSWYgeW91IGFyZSByZWFkaW5nIHRoaXMuLiBvaCBib3kuIFlvdSBhcmUgaW4gZm9yIHF1aXRlIHRoZSByb2xsZXJjb2FzdGVyLlxuXG5UaHJvdWdob3V0IHRoaXMgZG9jdW1lbnQsIEkgd2lsbCA8c3Ryb25nPmF0dGVtcHQ8L3N0cm9uZz4sIHRvIHRoZSBiZXN0IG9mIG15IGFiaWxpdHksIHRvIGV4cGxhaW4gdG8geW91ciBwZWFudXQgYnJhaW4gaG93IFN0YXJjb3JkIG1ha2VzLCBhbmQgdXNlcyBpdCdzIHNlY3VyaXR5LlxuXG5cIlJpZ2h0IG5vdywgSSdtIHRoZSBvbmx5IG9uZSB0aGF0IGRvZXNuJ3QgdW5kZXJzdGFuZCBxdWFudHVtIG1lY2hhbmljcy4gSW4gYWJvdXQgNyBkYXlzLCBhbGwgb2YgeW91IHdpbCBiZSB1bmFibGUgdG8gdW5kZXJzdGFuZCBxdWFudHVtIG1lY2hhbmljcywgdGhlbiB5b3UgY2FuIGdvIGJhY2sgYW5kIHNwcmVhZCB5b3VyIGlnbm9yYW5jZSBldmVyeXdoZXJlIGVsc2UuXCIgLSBSaWNoYXJkIEZpbmVtYW5cblxuU28gZnJpZW5kLCBsZXQncyBzdGFydCB0aGUgZGVlcCBkaXZlIGludG8gdGhlIHdvcmxkIG9mIHNlY3VyaXR5IHNoYWxsIHdlP1xuXG5GdW4gZmFjdCwgdGhpcyBkb2Mgd2FzIG1hZGUgb24gQXByaWwgMXN0LCBjb21tb25seSBrbm93biBhcyBBcHJpbCBmb29scywgdG8gcmVwcmVzZW50IHRoZSBmb29sIEkgd2FzIHRvIHRha2Ugc28gbG9uZyB0byBsZWFybiBob3cgdG8gcHJvcGVybHkgZG8gc2VjdXJpdHksIGp1c3QgdG8gcHJvYmFibHkgaGF2ZSBhIHZ1bG5lcmFiaWxpdHkgYW55d2F5LjwvcHJlPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kcG9pbnQtZ3JpZFwiPlxuXG4gICAgICAgICAgQGRlZmVyIChvbiB2aWV3cG9ydCkge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuaW1hdGUtaW5cIj5cbiAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZG9jcy9zZWN1cml0eS9hdXRoLWZsb3cnXVwiIGNsYXNzPVwiZW5kcG9pbnQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWV0aG9kLXRhZ1wiIGRhdGEtbWV0aG9kPVwiUkVEXCI+T0FVVEg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cInBhdGgtdGlueVwiPkxhc3QgdXBkYXRlZDogMXN0IEFwcmlsLCAyMDI2PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5UaGUgQXV0aCBGbG93PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5PdXIgc3lzdGVtIGlzIGJ1aWx0IG9uIDxzdHJvbmc+T0F1dGggMi4wIHByaW5jaXBsZXM8L3N0cm9uZz4gdXNpbmcgSldUIHJvdGF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfSBAcGxhY2Vob2xkZXIgeyA8ZGl2IGNsYXNzPVwiY2FyZC1wbGFjZWhvbGRlclwiPjwvZGl2PiB9XG5cbiAgICAgICAgICBAZGVmZXIgKG9uIHZpZXdwb3J0KSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZS1pblwiPlxuICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9kb2NzL3NlY3VyaXR5L3JhdGVsaW1pdCddXCIgY2xhc3M9XCJlbmRwb2ludC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRob2QtdGFnXCIgZGF0YS1tZXRob2Q9XCJJTkRJR09cIj5SYXRlIExpbWl0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJwYXRoLXRpbnlcIj5MYXN0IHVwZGF0ZWQ6IDJuZCBBcHJpbCwgMjAyNjwvY29kZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+UmF0ZSBMaW1pdGluZzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+Q3VzdG9tIGFubm90YXRlZCByYXRlIGxpbWl0aW5nIGJ1aWx0IHJpZ2h0IGludG8gU3RhcmNvcmQuPC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9IEBwbGFjZWhvbGRlciB7IDxkaXYgY2xhc3M9XCJjYXJkLXBsYWNlaG9sZGVyXCI+PC9kaXY+IH1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zZWN0aW9uc1wiPlxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYXV0aC1mbG93XCIgY2xhc3M9XCJhcnRpY2xlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cInNlY3VyaXR5LWxldmVsc1wiIGNsYXNzPVwiYXJ0aWNsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuXG4gICAgPGFzaWRlIGNsYXNzPVwidG9jLXNpZGViYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2MtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9jLXRpdGxlXCI+T24gdGhpcyBwYWdlPC9zcGFuPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vJ11cIiBmcmFnbWVudD1cImF1dGgtZmxvd1wiPlRoZSBBdXRoIEZsb3c8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vJ11cIiBmcmFnbWVudD1cInJhdGUtbGltaXRpbmdcIj5SYXRlIExpbWl0aW5nPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvcHlMaW5rKGZyYWdtZW50OiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgZnVsbFVybCA9IGAke3VybH0jJHtmcmFnbWVudH1gO1xuXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZ1bGxVcmwpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQ6JywgZnVsbFVybCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEx1Y2lkZUFuZ3VsYXJNb2R1bGUgfSBmcm9tICdsdWNpZGUtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZWN1cml0eS1jb250ZW50JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0x1Y2lkZUFuZ3VsYXJNb2R1bGVdLCAvLyBNdXN0IGJlIGltcG9ydGVkIHRvIGF2b2lkIHRlbXBsYXRlIGVycm9yc1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS12aWV3XCIgKGNsaWNrKT1cImhhbmRsZUdsb2JhbENsaWNrKCRldmVudClcIj5cbiAgICAgIDxkaXYgW2lubmVySFRNTF09XCJzYWZlQ29udGVudFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlcy1zdHlsZXMuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gMS4gTWlzc2luZyBQcm9wZXJ0eSBEZWNsYXJhdGlvbnNcbiAgc2FmZUNvbnRlbnQ/OiBTYWZlSHRtbDtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgcHJlbG9hZGVkID0gZmFsc2U7XG5cbiAgLy8gMi4gUGF0aCBGaXg6IEJhc2VkIG9uIHlvdXIgZmlsZXMsIHRoZXkgYXJlIGluIGEgJ3BhZ2VzJyBmb2xkZXJcbiAgcHJpdmF0ZSByZWFkb25seSBwcmlvcml0eURvY3MgPSBbJ2F1dGgtZmxvdyddO1xuXG4gIC8vIDMuIE1pc3NpbmcgQ29uc3RydWN0b3IgSW5qZWN0aW9uXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wcmVsb2FkQ29tbW9uRG9jcygpO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBjb25zdCB0b3BpY0lkID0gcGFyYW1zWydpZCddO1xuICAgICAgaWYgKHRvcGljSWQpIHRoaXMubG9hZERvY3VtZW50YXRpb24odG9waWNJZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByZWxvYWRDb21tb25Eb2NzKCkge1xuICAgIGlmICh0aGlzLnByZWxvYWRlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wcmlvcml0eURvY3MuZm9yRWFjaChpZCA9PiB7XG4gICAgICAvLyBBZGp1c3RlZCBwYXRoIHRvIGluY2x1ZGUgL3BhZ2VzLyBwZXIgeW91ciBmaWxlIHRyZWVcbiAgICAgIHRoaXMuaHR0cC5nZXQoYGFzc2V0cy9kb2NzL3NlY3VyaXR5LyR7aWR9Lmh0bWxgLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoaHRtbCA9PiB0aGlzLmNhY2hlLnNldChpZCwgaHRtbCkpO1xuICAgIH0pO1xuICAgIHRoaXMucHJlbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZERvY3VtZW50YXRpb24odG9waWNJZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKHRvcGljSWQpKSB7XG4gICAgICB0aGlzLnJlbmRlcih0aGlzLmNhY2hlLmdldCh0b3BpY0lkKSEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaHR0cC5nZXQoYGFzc2V0cy9kb2NzL3NlY3VyaXR5LyR7dG9waWNJZH0uaHRtbGAsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoaHRtbCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KHRvcGljSWQsIGh0bWwpO1xuICAgICAgICAgIHRoaXMucmVuZGVyKGh0bWwpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RvY3MgZmV0Y2ggZmFpbGVkOicsIGVycik7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoJzxoMSBzdHlsZT1cInBhZGRpbmc6IDUwcHhcIj5Db250ZW50IG5vdCBmb3VuZC48L2gxPicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIDQuIE1pc3NpbmcgaGFuZGxlR2xvYmFsQ2xpY2sgbG9naWMgZm9yIHRoZSBbaW5uZXJIVE1MXSBjbGljayBldmVudHNcbiAgaGFuZGxlR2xvYmFsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5LXNlY3Rpb24tbGluaycpO1xuXG4gICAgaWYgKGJ0bikge1xuICAgICAgY29uc3QgZnJhZ21lbnQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWZyYWdtZW50Jyk7XG4gICAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgZnVsbFVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9IyR7ZnJhZ21lbnR9YDtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZnVsbFVybCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0xpbmsgY29waWVkOicsIGZ1bGxVcmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNhZmVDb250ZW50ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICdAZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnQGZlYXR1cmVzL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJ0BmZWF0dXJlcy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGF0TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJ0BzaGFyZWQvY29tcG9uZW50cy9jaGF0LW1lc3NhZ2VzL2NoYXQtbWVzc2FnZXMnO1xuaW1wb3J0IHtlbmRwb2ludFJlc29sdmVyfSBmcm9tICdAc2hhcmVkL3Jlc29sdmVycy9lbmRwb2ludC1yZXNvbHZlcic7XG5pbXBvcnQge0RvY3NMYXlvdXRDb21wb25lbnR9IGZyb20gJ0BmZWF0dXJlcy9vdGhlci9kb2NzL2RvY3MtbGF5b3V0L2RvY3MtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RvY3NMaXN0Q29tcG9uZW50fSBmcm9tICdAZmVhdHVyZXMvb3RoZXIvZG9jcy9kb2NzLWxpc3QvZG9jcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RvY3NEZXRhaWxDb21wb25lbnR9IGZyb20gJ0BmZWF0dXJlcy9vdGhlci9kb2NzL2RvY3MtZGV0YWlsL2RvY3MtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge0dldHRpbmdTdGFydGVkQ29tcG9uZW50fSBmcm9tICdAZmVhdHVyZXMvb3RoZXIvZG9jcy9wYWdlcy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBBdXRoZW50aWNhdGlvbkhlbHBDb21wb25lbnRcbn0gZnJvbSAnQGZlYXR1cmVzL290aGVyL2RvY3MvcGFnZXMvc2VjdXJpdHkvcGFnZXMvYXV0aGVudGljYXRpb24taGVscC9hdXRoZW50aWNhdGlvbi1oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlY3VyaXR5T3ZlcnZpZXdDb21wb25lbnR9IGZyb20gJ0BmZWF0dXJlcy9vdGhlci9kb2NzL3BhZ2VzL3NlY3VyaXR5L3NlY3VyaXR5LW92ZXJ2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBTZWN1cml0eUxhbmRpbmdDb21wb25lbnRcbn0gZnJvbSAnQGZlYXR1cmVzL290aGVyL2RvY3MvcGFnZXMvc2VjdXJpdHkvc2VjdXJpdHktbGFuZGluZy9zZWN1cml0eS1sYW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBTZWN1cml0eUNvbnRlbnRDb21wb25lbnRcbn0gZnJvbSAnQGZlYXR1cmVzL290aGVyL2RvY3MvcGFnZXMvc2VjdXJpdHkvc2VjdXJpdHktY29udGVudC9zZWN1cml0eS1jb250ZW50LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSwgLy8gQmV0dGVyIHRoYW4gcmVwZWF0aW5nIExvZ2luQ29tcG9uZW50IHR3aWNlXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICB7XG4gICAgcGF0aDogJ2hvbWUnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnY2hhbm5lbC86aWQnLCBjb21wb25lbnQ6IENoYXRNZXNzYWdlc0NvbXBvbmVudCB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2RvY3MnLFxuICAgIGNvbXBvbmVudDogRG9jc0xheW91dENvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBEb2NzTGlzdENvbXBvbmVudCxcbiAgICAgICAgcmVzb2x2ZTogeyBkb2NEYXRhOiBlbmRwb2ludFJlc29sdmVyIH1cbiAgICAgIH0sXG4gICAgICB7IHBhdGg6ICdnZXR0aW5nLXN0YXJ0ZWQnLCBjb21wb25lbnQ6IEdldHRpbmdTdGFydGVkQ29tcG9uZW50IH0sXG5cbiAgICAgIC8vIFNlY3VyaXR5IE1vZHVsZVxuICAgICAge1xuICAgICAgICBwYXRoOiAnc2VjdXJpdHknLFxuICAgICAgICAvLyBObyBuZWVkIGZvciBhIHNlcGFyYXRlIE92ZXJ2aWV3IGNvbXBvbmVudCB1bmxlc3MgaXQgaGFzIGl0cyBvd24gdW5pcXVlIGxheW91dFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogU2VjdXJpdHlMYW5kaW5nQ29tcG9uZW50IH0sIC8vIC9kb2NzL3NlY3VyaXR5XG4gICAgICAgICAgeyBwYXRoOiAnOmlkJywgY29tcG9uZW50OiBTZWN1cml0eUNvbnRlbnRDb21wb25lbnQgfSAvLyAvZG9jcy9zZWN1cml0eS9hdXRoLWZsb3dcbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAgLy8gU3RhdGljIGNhdGVnb3JpZXMgc2hvdWxkIGFsd2F5cyBiZSBBQk9WRSBkeW5hbWljIDppZHNcbiAgICAgIHsgcGF0aDogJ2NhdGVnb3J5LzpjYXROYW1lJywgY29tcG9uZW50OiBEb2NzRGV0YWlsQ29tcG9uZW50IH0sXG5cbiAgICAgIC8vIER5bmFtaWMgZW5kcG9pbnQgZGV0YWlsIChUaGUgQ2F0Y2gtYWxsIGZvciBldmVyeXRoaW5nIGVsc2UpXG4gICAgICB7IHBhdGg6ICc6ZW5kcG9pbnRJZCcsIGNvbXBvbmVudDogRG9jc0RldGFpbENvbXBvbmVudCB9LFxuICAgIF1cbiAgfVxuXTtcbiIsImltcG9ydCB7IEh0dHBIYW5kbGVyRm4sIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXN0YXRlLnNlcnZpY2UnO1xuXG5jb25zdCBBVVRIX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXV0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoSW50ZXJjZXB0b3IocmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXJGbikge1xuICBjb25zdCBhdXRoU3RhdGUgPSBpbmplY3QoQXV0aFN0YXRlU2VydmljZSk7XG4gIGNvbnN0IHRva2VuID0gYXV0aFN0YXRlLmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgaWYgKHJlcS51cmwuc3RhcnRzV2l0aChBVVRIX0JBU0VfVVJMKSkge1xuICAgIHJldHVybiBuZXh0KHJlcSk7XG4gIH1cblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIG5leHQocmVxKTtcbiAgfVxuXG4gIGNvbnN0IG5ld1JlcSA9IHJlcS5jbG9uZSh7XG4gICAgc2V0SGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG5leHQobmV3UmVxKTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIGltcG9ydHM6IFtSb3V0ZXJPdXRsZXRdLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxuICBzdHlsZVVybDogJy4vYXBwLmNzcydcbn0pXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRpdGxlID0gc2lnbmFsKCdmcm9udGVuZCcpO1xufVxuIiwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUEyQixxQkFBcUIsMENBQXlDO0FBQ3pGLFNBQVMsZUFBZSw2QkFBNkI7OztBQ0RyRCxTQUFTLGFBQUFBLFlBQVcsY0FBc0I7QUFDMUMsU0FDRSxhQUNBLFdBQ0EsYUFDQSxxQkFDQSxrQkFDSztBQUNQLFNBQVMsUUFBUSxrQkFBa0I7OztBRU43QixTQUFVLGlCQUFjO0FBQzVCLFNBQU8sQ0FBQyxZQUFxRDtBQUMzRCxVQUFNLFFBQVEsUUFBUTtBQUV0QixRQUFJLENBQUM7QUFBTyxhQUFPO0FBRW5CLFVBQU0sYUFBYTtBQUVuQixXQUFPLFdBQVcsS0FBSyxLQUFLLElBQ3hCLE9BQ0EsRUFBRSxjQUFjLEtBQUk7RUFDMUI7QUFDRjs7O0FDWk0sU0FBVSw0QkFBeUI7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LCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpbmplY3QiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIlZhbGlkYXRvcnMiLCJSb3V0ZXIiLCJSb3V0ZXJMaW5rIiwiZmlyc3RWYWx1ZUZyb20iLCJpbmplY3QiLCJSb3V0ZXIiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJmaXJzdFZhbHVlRnJvbSIsIlJvdXRlckxpbmsiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImk0IiwiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwibWFwIiwiQmVoYXZpb3JTdWJqZWN0IiwiQXN5bmNQaXBlIiwiVGl0bGVDYXNlUGlwZSIsIkluamVjdGFibGUiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJ0YXAiLCJJbmplY3RhYmxlIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsIm1hcCIsIkFzeW5jUGlwZSIsIlRpdGxlQ2FzZVBpcGUiLCJDb21wb25lbnQiLCJpMCIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImk0IiwiaTYiLCJDb21wb25lbnQiLCJzd2l0Y2hNYXAiLCJtYXAiLCJ0YXAiLCJDb21tb25Nb2R1bGUiLCJtYXAiLCJ0YXAiLCJzd2l0Y2hNYXAiLCJfZm9yVHJhY2swIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpNSIsImkxIiwiaW5qZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJpbmplY3QiLCJDb21wb25lbnQiLCJSb3V0ZXJPdXRsZXQiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJMaW5rIiwiZmlsdGVyIiwiTHVjaWRlQW5ndWxhck1vZHVsZSIsIl9mb3JUcmFjazEiLCJfYzAiLCJmaWx0ZXIiLCJfZm9yVHJhY2swIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTGluayIsIkx1Y2lkZUFuZ3VsYXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImk0IiwiaTIiLCJSb3V0ZXJPdXRsZXQiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsIlJvdXRlckxpbmsiLCJDb21tb25Nb2R1bGUiLCJfYzAiLCJfZm9yVHJhY2sxIiwiX2ZvclRyYWNrMCIsIlJvdXRlckxpbmsiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkyIiwiQ29tcG9uZW50IiwiUm91dGVyTGluayIsIkNvbW1vbk1vZHVsZSIsIl9mb3JUcmFjazEiLCJfYzAiLCJfZm9yVHJhY2swIiwiX2MxIiwiUm91dGVyTGluayIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJpMSIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiTHVjaWRlQW5ndWxhck1vZHVsZSIsIlJvdXRlckxpbmsiLCJfYzEiLCJfYzAiLCJMdWNpZGVBbmd1bGFyTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsIkNvbXBvbmVudCIsIkx1Y2lkZUFuZ3VsYXJNb2R1bGUiLCJpMCIsImk0IiwiaTEiLCJpMiIsImkzIiwiaW5qZWN0IiwiaW5qZWN0IiwiTGluayIsIkx1Y2lkZUFuZ3VsYXJNb2R1bGUiLCJDb21wb25lbnQiLCJSb3V0ZXJPdXRsZXQiLCJpMCJdfQ==
