import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        usgsHeaderRendered: false,
        introSectionRendered: false,
        isUserAtEndOfMonitoringSection: false,
        isUserAtEndOfSankeySection: false,
        windowWidth: 0,
        windowHeight: 0,
        uswdsBannerHeight: 0,
        warningHeight: 0
    }),
    actions: {
        markUSGSHeaderRendered() {
            this.usgsHeaderRendered = true;
        },
        markIntroSectionRendered() {
            this.introSectionRendered = true;
        },
        setIsUserAtEndOfMonitoringSection(payload) {
            this.isUserAtEndOfMonitoringSection = payload;
        },
        setIsUserAtEndOfSankeySection(payload) {
            this.isUserAtEndOfSankeySection = payload;
        },
        recordWindowWidth(width) {
            this.windowWidth = width;
        },
        recordWindowHeight(height) {
            this.windowHeight = height;
        },
        recordUSWDSBannerHeight(height) {
            this.uswdsBannerHeight = height;
        },
        recordWarningHeight(height) {
            this.warningHeight = height;
        }
    }
});
