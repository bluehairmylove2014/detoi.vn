import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { NavStatelessComponent } from "interfaces";
import Accordion from "components/Accordion";
import ClickableTag from "components/ClickableTag";
import {
  Button,
  ListItem,
  ListItemSwitch,
  SelectableListItem,
  SocialMedia,
  TabBarIcon,
  Tag,
  Text,
  TextButton,
  TextInput,
} from "components";
import StickersImage from "components/StickersImage";
import { t } from "utils";

import styles from "./BudgetScreen.styles";
import navigationOptions from "./BudgetScreen.navigationOptions";

const BudgetScreen: NavStatelessComponent = () => {
  const [clickableTag, setClickableTag] = useState(false);
  const props = {
    title: "France",
    value: true,
    onPress: () => {
      // do nothing.
    },
  };
  const props1 = {
    selected: true,
    title: "France",
    onPress: () => {
      // do nothing.
    },
  };
  const props2 = {
    text: "Transport",
    onPress: () => {
      // do nothing.
    },
  };

  const props3 = {
    onPress: () => {
      // do nothing.
    },
    text: "some text",
    iconLeft: "camera",
  };
  const foo = () => {
    // do nothing.
  };
  return (
    <ScrollView style={styles.container}>
      <Accordion>
        <Accordion.Item title="Test title 1">Test Description 1</Accordion.Item>

        <Accordion.Item title="Test title 2">Test Description 2</Accordion.Item>
      </Accordion>

      <Button.Primary
        icon={"checkmark"}
        fullWidth
        onPress={() => {
          console.log("Press");
        }}
        text={t("INTRO_SCREEN_I_AGREE")}
      />

      <ClickableTag
        isSelected={clickableTag}
        onPress={() => {
          setClickableTag(!clickableTag);
        }}
        text={"example"}
      />
      <ListItem showTopLine {...props} />
      <ListItemSwitch
        onChange={() => {
          console.log("Hello");
        }}
        showBottomLine
        showTopLine
        {...props}
      />
      <SelectableListItem selected={false} {...props1} />
      <SocialMedia />
      <StickersImage sticker="earth" />
      <TabBarIcon focused={true} name="ios-information-circle" />
      <Tag {...props2} icon="md-airplane" />

      <Text.Header>test</Text.Header>
      <Text.H1>test</Text.H1>
      <Text.H1 darkGray>test</Text.H1>
      <Text.H2 center>test</Text.H2>
      <Text.Primary red>test</Text.Primary>

      <TextButton {...props3} iconLeft={"repeat"} />

      <TextInput
        isOptional={false}
        placeholder={"placeholder"}
        title={"title"}
        onChangeText={foo}
        value={"value"}
      />
    </ScrollView>
  );
};

BudgetScreen.navigationOptions = navigationOptions();

export default BudgetScreen;
