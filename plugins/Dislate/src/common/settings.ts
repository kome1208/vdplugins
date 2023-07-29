import { SettingsType } from "../def"
import { storage } from "@vendetta/plugin"

// default settings
storage.DislateDeepLLangFrom ??= "Detect"
storage.DislateDeepLLangTo ??= "English"
storage.DislateDeepLLangAbbr ??= false
storage.DislateDeepLHideLangTo ??= false
storage.DislateDeepLAPIKey ??= undefined

export let settings = storage as SettingsType