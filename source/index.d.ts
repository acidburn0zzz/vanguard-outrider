/// <reference path="../node_modules/playfab-web-sdk/src/Typings/PlayFab/PlayFabClientApi.d.ts" />
/// <reference path="../node_modules/playfab-web-sdk/src/Typings/PlayFab/PlayFabAdminApi.d.ts" />
declare module "*.png";
declare module "*.jpg";
declare module "*.ico";
declare var appInsights: {
    trackEvent(name: string, details?: any): void;
};

// https://www.1eswiki.com/wiki/WCP_Cookie_Consent_API#How_to_use_wcp-consent_library_in_TypeScript_projects
declare namespace WcpConsent {
    /**
     * Library initilization method
     * @param culture - culture to be used for text resources (e.g.: `en-us`, `en-gb`, `en`, `fr-ca`)
     * @param placeholderIdOrElement - element ID or HTMLElement where banner will be placed
     * @param initCallback - function to be called when the library initialization is done
     * @param onConsentChanged - function to be called when user changes consent state
     * @param theme - theme that will be applied to the banner(available themes - dark, light, highcontrast)
     */
    function init(culture: string, placeholderIdOrElement: string | HTMLElement, initCallback?: (err?: Error, siteConsent?: SiteConsent) => void, onConsentChanged?: (newConsent: Record<consentCategories, boolean>) => void, theme?: Themes): void;
    
    /**
     * Registers the callback methods that will be called when consent is changed by user.
     * @param callbackMethod Callback function
     */
    function onConsentChanged(callbackMethod: (newConsent: Record<consentCategories, boolean>) => void): void;

    export class SiteConsent {
        /**
         * `true` if consent is required for current user
         */
        readonly isConsentRequired: boolean;

        /**
         * Returns consent state for all categories
         */
        getConsent(): Record<consentCategories, boolean>;

        /**
         * Returns consent state for a category.
         * @param consentCategory one of `consentCategories` values to get the consent state for
         * @returns `true` if consent was given, `false` otherwise
         */
        getConsentFor(consentCategory: consentCategories): boolean;

        /**
         * Shows the preferences dialog box
         */
        manageConsent(): void;

        /**
         * Registers the callback methods that will be called when consent is changed by user.
         * @param callbackMethod Callback function
         */
        onConsentChanged(callbackMethod: (newConsent: Record<consentCategories, boolean>) => void);
    }

    export enum consentCategories {
        /**
         * Cookies to perform essential website functions (sign-in, language settings,...)
         */
        Required = "Required",
        /**
         * Cookies to understand how website is used, may be also used on 3rd party websites that are not owned or operated by Microsoft
         */
        Analytics = "Analytics",
        /**
         * Cookies to show ads and content based on user social media profiles and activity on Microsoft websites
         */
        SocialMedia = "SocialMedia",
        /**
         * Cookies to record which ads are already seen, clicked, or purchased
         */
        Advertising = "Advertising"
    }

    export enum Themes {
        light = "light",
        dark = "dark",
        highContrast = "high-contrast"
    }
}
