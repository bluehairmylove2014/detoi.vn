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
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};
