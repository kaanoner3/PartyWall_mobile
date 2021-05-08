import React, { FC, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import InputAtom from '../atoms/InputAtom';
import { ItemContext } from '../../providers/ItemProvider';

interface CreateFoodFormMoleculeProps {}

const CreateFoodFormMolecule: FC<CreateFoodFormMoleculeProps> = ({}) => {
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
        label={'weight'}
        keyboardType="numeric"
        onChangeText={(text: string) =>
          setItemMutationInput({ ...itemMutationInput, weight: parseInt(text) })
        }
        value={itemMutationInput.weight as any}
      />
      <InputAtom
        label={'description'}
        onChangeText={(text: string) =>
          setItemMutationInput({
            ...itemMutationInput,
            description: text,
          })
        }
        value={itemMutationInput.description as any}
      />
    </View>
  );
};

export default CreateFoodFormMolecule;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
  },
});
