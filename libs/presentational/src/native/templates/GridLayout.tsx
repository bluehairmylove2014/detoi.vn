import { FlatList } from 'react-native';
import { HorizontalSpacer } from '@present-native/atoms';

export const GridLayout = <T,>({
  numColumns,
  gap,
  data,
  renderItem,
}: {
  numColumns: number;
  gap: 'l' | 'm' | 's' | 'xs' | 'xl' | 'xxl' | 'xxxl';
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
}): JSX.Element => {
  return (
    <FlatList
      numColumns={numColumns}
      data={data}
      renderItem={(st) => (
        <>
          {renderItem(st)}
          {st.index === data.length - 1 ? null : (
            <HorizontalSpacer size={gap} />
          )}
        </>
      )}
    />
  );
};
