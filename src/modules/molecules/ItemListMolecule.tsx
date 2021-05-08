import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderMolecule from './HeaderMolecule';
import ListItemMolecule from './ListItemMolecule';
import ListProfileItemMolecule from './ListProfileItemMolecule';
import TextAtom from '../atoms/TextAtom';
import Animated from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet';

interface ItemListMoleculeProps {
  listData: ItemType[];
  listType: 'allItems' | 'userItems';
}

const ItemListMolecule: FC<ItemListMoleculeProps> = ({
  listData = [],
  listType,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [-20, '40%'], []);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const renderItem = ({ item, index }: { item: ItemType; index: number }) => {
    if (listType === 'allItems') {
      return (
        <ListItemMolecule
          onPress={() => {
            if (bottomSheetRef.current !== null) {
              bottomSheetRef.current.snapTo(1);
              setSelectedIndex(index);
            }
          }}
          item={item}
        />
      );
    }
    return (
      <ListProfileItemMolecule
        onPress={() => {
          if (bottomSheetRef.current !== null) {
            bottomSheetRef.current.snapTo(1);
            setSelectedIndex(index);
          }
        }}
        item={item}
      />
    );
  };
  const renderEmptyScreen = () => {
    return (
      <TextAtom
        customStyles={{ textAlign: 'center', marginTop: 20 }}
        value={'There is no item to display'}
      />
    );
  };

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainerStyle}
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item: ItemType) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} />
        )}
        ListEmptyComponent={renderEmptyScreen}
      />
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        {listData.length > 0 && (
          <View style={styles.contentContainer}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>
              {listData[selectedIndex].name}
            </Text>
            <Text style={styles.bottomSheetTextStyle}>
              Owner: {listData[selectedIndex].userName.toUpperCase()}
            </Text>
            <Text style={styles.bottomSheetTextStyle}>
              Type: {listData[selectedIndex].categoryName}
            </Text>
            <Text style={styles.bottomSheetTextStyle}>
              Price: {listData[selectedIndex].price} $
            </Text>
            <Text style={styles.bottomSheetTextStyle}>
              Quantity: {listData[selectedIndex].quantity} $
            </Text>
            {listData[selectedIndex].categoryName === 'Food' ? (
              <>
                <Text style={styles.bottomSheetTextStyle}>
                  Weight: {listData[selectedIndex].attributes.weight}
                </Text>
                <Text style={styles.bottomSheetTextStyle}>
                  Description: {listData[selectedIndex].attributes.description}
                </Text>
              </>
            ) : (
              <Text style={styles.bottomSheetTextStyle}>
                Volume: {listData[selectedIndex].attributes.volume}
              </Text>
            )}
          </View>
        )}
      </BottomSheet>
    </>
  );
};

export default ItemListMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  contentContainerStyle: {
    paddingBottom: 50,
    justifyContent: 'center',
  },
  bottomSheetTextStyle: { marginTop: 5, fontSize: 18, textAlign: 'left' },
});
