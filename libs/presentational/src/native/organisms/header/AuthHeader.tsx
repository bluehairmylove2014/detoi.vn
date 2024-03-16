import { SafeAreaView } from 'react-native';
import { BackButton } from '@present-native/atoms';
import { authHeaderStyle } from './styles';

type childOptionType = 'BACK_BUTTON' | 'CIRCLE_BACK_BUTTON' | 'LANGUAGE_SELECT';

function childRender(childName: childOptionType): JSX.Element {
  switch (childName) {
    case 'BACK_BUTTON': {
      return <BackButton />;
    }
    case 'CIRCLE_BACK_BUTTON': {
      return <BackButton theme="background" />;
    }
    case 'LANGUAGE_SELECT': {
      return <></>;
    }
    default: {
      return <></>;
    }
  }
}

export const AuthHeader = ({ childs }: { childs: childOptionType[] }) => {
  return (
    <SafeAreaView
      style={[
        authHeaderStyle.container,
        {
          justifyContent: childs.length === 1 ? 'flex-start' : 'space-between',
        },
      ]}
    >
      {childs.map((c) => childRender(c))}
    </SafeAreaView>
  );
};
