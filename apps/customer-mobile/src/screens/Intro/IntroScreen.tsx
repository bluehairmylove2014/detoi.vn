import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";


import { Text, Button, StickersImage } from "@presentational-mobile/atoms";
// import { userPreferences } from "ducks";

import styles from "./IntroScreen.styles";


const IntroScreen: React.FC = () => {
  const onPress = () => {
    // dispatch(userPreferences.actions.acceptTermsOfUse(Preferences.currentTermsOfUseVersion));
    console.log("onPress");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <StickersImage sticker="bike" />
      </View>
      <View style={styles.termsOfUseView}>
        <Text.H3 style={styles.text}>INTRO_SCREEN_WELCOME</Text.H3>
        <Text.Tertiary style={styles.text}>
          INTRO_SCREEN_CONTINUE_AND_ACCEPT_TERMS_OF_USE
        </Text.Tertiary>
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf")}
        >
          <Text.Tertiary green>INTRO_SCREEN_TERMS_OF_USE</Text.Tertiary>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button.Primary
            icon={"checkmark"}
            fullWidth
            onPress={onPress}
            text="INTRO_SCREEN_I_AGREE"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
