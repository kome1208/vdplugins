export type LanguageType = {
    fromLanguage: string
    toLanguage: string
}

export type SettingsType = {
    DislateDeepLLangFrom: string
    DislateDeepLLangTo: string
    DislateDeepLLangAbbr: boolean
    DislateDeepLHideLangTo: boolean
    DislateDeepLAPIKey: string
}

export interface TranslationData {
    translations: [
        {
            detected_source_language: string,
            text: string
        }
    ]
}