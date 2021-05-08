import React, { FC, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageAtom from '../atoms/ImageAtom';
import foodPng from '../../../assets/images/dish.png';
import drinkPng from '../../../assets/images/cocktail.png';
import TextAtom from '../atoms/TextAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { ItemContext } from '../../providers/ItemProvider';

interface ListProfileItemMoleculeProps {
  item: ItemType;
}

const ListProfileItemMolecule: FC<ListProfileItemMoleculeProps> = ({
  item,
}) => {
  const { setWillRemoveItemId } = useContext(ItemContext);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
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
          <View style={styles.infoView}>
            <TextAtom
              value={`${item.price} ($) per item, `}
              customStyles={styles.textPrice}
            />
            <TextAtom
              value={`${item.quantity} (qty)`}
              customStyles={styles.textQty}
            />
          </View>
        </View>
      </View>
      <ButtonAtom
        onPress={() => {
          showDialog();
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        compact={true}
        icon="delete"
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Are you sure you want to delete "{item.name}" item?
            </Paragraph>
          </Dialog.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setWillRemoveItemId(item.id);
                  hideDialog();
                }}
              >
                Yes
              </Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button onPress={hideDialog}>No</Button>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ListProfileItemMolecule;

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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textQty: { fontWeight: '300', marginTop: 3, marginLeft: 5 },
  textPrice: { fontWeight: '400' },
  textSeller: { fontWeight: '300', marginTop: 3, fontSize: 12 },
  textName: {},
});
