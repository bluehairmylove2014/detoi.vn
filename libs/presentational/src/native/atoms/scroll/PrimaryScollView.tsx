import { ScrollView, ScrollViewProps } from 'react-native';

type orientationType = {
  horizontal?: boolean;
  vertical?: boolean;
};

export const PrimaryScrollView = ({
  direction,
  children,
}: {
  direction: 'horizontal' | 'vertical';
  children: React.ReactNode;
}) => {
  const directionProps: Record<'horizontal' | 'vertical', orientationType> = {
    horizontal: { horizontal: true },
    vertical: { vertical: true },
  };

  return (
    <ScrollView
      {...directionProps[direction]}
      // Config some general prop for ScrollView for all Apolication in here
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};
