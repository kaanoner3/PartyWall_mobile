import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageAtom from '../atoms/ImageAtom';
import foodPng from '../../../assets/images/dish.png';
import drinkPng from '../../../assets/images/cocktail.png';
import TextAtom from '../atoms/TextAtom';

interface ListItemMoleculeProps {

  item: ItemType;
}

const ListItemMolecule: FC<ListItemMoleculeProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.itemIconView}>
          <ImageAtom
            source={item.categoryName === 'Food' ? foodPng : drinkPng}
          />
        </View>
        <View style={styles.itemBodyView}>
          <TextAtom value={item.name} customStyles={styles.textName} />
          <TextAtom
            value={`${item.userName.toUpperCase()}'s ${item.categoryName}`}
            customStyles={styles.textSeller}
          />
        </View>
      </View>

      <View style={styles.infoView}>
        <TextAtom
          value={`${item.price * item.quantity} $ (total)`}
          customStyles={styles.textPrice}
        />
        <TextAtom
          value={`${item.quantity} (qty)`}
          customStyles={styles.textQty}
        />
      </View>
    </View>
  );
};

export default ListItemMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemBodyView: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  itemIconView: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8bfcfb',
  },
  infoView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textQty: { fontWeight: '300', marginTop: 3 },
  textPrice: { fontWeight: '400' },
  textSeller: { fontWeight: '300', marginTop: 3, fontSize: 12 },
  textName: {},
});
