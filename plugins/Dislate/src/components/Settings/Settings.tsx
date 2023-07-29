import { getAssetIDByName } from "@vendetta/ui/assets"
import { React, ReactNative, stylesheet, constants, NavigationNative, url } from "@vendetta/metro/common"
import { semanticColors } from "@vendetta/ui"
import { Forms } from "@vendetta/ui/components"
import { manifest } from "@vendetta/plugin"
import { settings } from "../../common"

import ToLang from "./ToLang"
import { useProxy } from "@vendetta/storage"

const { ScrollView, Text } = ReactNative
const { FormRow, FormInput, FormSwitchRow } = Forms

const styles = stylesheet.createThemedStyleSheet({
    subheaderText: {
        color: semanticColors.HEADER_SECONDARY,
        textAlign: 'center',
        margin: 10,
        marginBottom: 50,
        letterSpacing: 0.25,
        fontFamily: constants.Fonts.PRIMARY_BOLD,
        fontSize: 14
    }
})

export default () => {
    const navigation = NavigationNative.useNavigation()
    useProxy(settings);
    return (
        <ScrollView>
            {/* work in progress
            <Text>
                {"long press button to set translate from"}
            </Text>
            */}
            <FormRow
                label={"Translate to"}
                subLabel={settings.DislateDeepLLangTo}
                leading={<FormRow.Icon source={getAssetIDByName("ic_activity_24px")} />}
                trailing={() => <FormRow.Arrow />}
                onPress={() => navigation.push("VendettaCustomPage", {
                    title: "Translate to",
                    render: ToLang,
                })}
            />
            <FormSwitchRow
                label="Hide target language"
                subLabel="If enabled, messages will no longer display the target language"
                leading={<FormRow.Icon source={getAssetIDByName("ic_block")} />}
                value={settings.DislateDeepLHideLangTo}
                onValueChange={(value: boolean) => settings.DislateDeepLHideLangTo = value}
            />
            <FormInput
                value={settings.DislateDeepLAPIKey}
                onChange={(value) => settings.DislateDeepLAPIKey = value || undefined}
                title="API Key"
                placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx"
            />

            <Text style={styles.subheaderText} onPress={() => url.openURL("https://github.com/aeongdesu/vdplugins")}>
                {`Build: (${manifest.hash.substring(0, 7)})`}
            </Text>
        </ScrollView>
    )
}