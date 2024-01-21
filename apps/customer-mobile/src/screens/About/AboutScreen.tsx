import React from "react";
import { ScrollView, View } from "react-native";

import { Text, StickersImage } from "@presentational-mobile/atoms";

import styles from "./AboutScreen.styles";
import navigationOptions from "./AboutScreen.navigationOptions";

const AboutScreen = () => (
  <ScrollView style={styles.container}>
    <StickersImage sticker="earth" />
    <Text.Primary style={styles.header}>ABOUT_SCREEN_INTRO</Text.Primary>
    <Text.H2 style={styles.header}>ABOUT_SCREEN_CARE_HEADER</Text.H2>
    <Text.H3 style={styles.subHeader}>ABOUT_SCREEN_PRIVACY</Text.H3>
    <Text.Primary>ABOUT_SCREEN_PRIVACY_BODY</Text.Primary>
    <Text.H3 style={styles.subHeader}>ABOUT_SCREEN_ETHIC</Text.H3>
    <Text.Primary>ABOUT_SCREEN_ETHIC_BODY</Text.Primary>
    <Text.H3 style={styles.subHeader}>ABOUT_SCREEN_OPEN_SOURCE</Text.H3>
    <Text.Primary>ABOUT_SCREEN_OPEN_SOURCE_BODY</Text.Primary>
    <Text.H2 style={styles.header}>ABOUT_SCREEN_LIBRARIES_AND_CONTRIBUTORS</Text.H2>
    <View style={styles.githubView}>
      <Text.Primary>ABOUT_SCREEN_CAN_BE_FOUND</Text.Primary>
      <Text.Link url="https://github.com">ABOUT_SCREEN_GITHUB</Text.Link>
    </View>
    <View style={styles.separator} />
  </ScrollView>
);

AboutScreen.navigationOptions = navigationOptions();

export default AboutScreen;
