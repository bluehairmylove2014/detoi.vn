import { TransitionPresets } from "@react-navigation/stack";

import platform from "@utils/helpers/Platform";

const transitions = {
  transitionBetweenScreenPresets: platform.isAndroid
    ? TransitionPresets.FadeFromBottomAndroid
    : null,
};

export default transitions;
