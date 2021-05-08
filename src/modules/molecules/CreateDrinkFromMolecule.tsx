import React, { FC, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import InputAtom from '../atoms/InputAtom';
import { ItemContext } from '../../providers/ItemProvider';

interface CreateDrinkFromMoleculeProps {}

const CreateDrinkFromMolecule: FC<CreateDrinkFromMoleculeProps> = ({}) => {
  const { setItemMutationInput, itemMutationInput } = useContext(ItemContext);

  return (
    <View style={styles.container}>
      <InputAtom
        label={'name'}
        onChangeText={(text: string) =>
          setItemMutationInput({ ...itemMutationInput, name: text as string })
        }
        value={itemMutationInput.name}
      />
      <InputAtom
        label={'price'}
        keyboardType="numeric"
        onChangeText={(text: string) =>
          setItemMutationInput({ ...itemMutationInput, price: parseInt(text) })
        }
        value={itemMutationInput.price as any}
      />
      <InputAtom
        label={'quantity'}
        keyboardType="numeric"
        onChangeText={(text: string) =>
          setItemMutationInput({
            ...itemMutationInput,
            quantity: parseInt(text),
          })
        }
        value={itemMutationInput.quantity as any}
      />
      <InputAtom
        label={'volume'}
        keyboardType="numeric"
        onChangeText={(text: string) =>
          setItemMutationInput({ ...itemMutationInput, volume: parseInt(text) })
        }
        value={itemMutationInput.volume as any}
      />
    </View>
  );
};

export default CreateDrinkFromMolecule;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
  },
});
