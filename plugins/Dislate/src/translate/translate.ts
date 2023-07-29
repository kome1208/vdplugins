import { LanguageType, TranslationData } from "../def"
import { settings } from "../common";

export default async function translate(text: string, { fromLanguage, toLanguage }: LanguageType) {
    const url = `https://api-free.deepl.com/v2/translate?target_lang=${toLanguage}&${fromLanguage == "AUTO" ? "" : `source_lang=${fromLanguage}&`}text=${encodeURIComponent(text)}`
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `DeepL-Auth-Key ${settings.DislateDeepLAPIKey}`
        }
    })
    if (!res.ok) throw new Error("Failed to translate")
    const { translations }: TranslationData = await res.json();
    return translations[0]
}