import { Platform } from "react-native";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

const platform = { isIOS, isAndroid };

export default platform;