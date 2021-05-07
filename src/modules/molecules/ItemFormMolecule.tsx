import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface ItemFormMoleculeProps {}


const ItemFormMolecule: FC<ItemFormMoleculeProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>ItemFormMolecule</Text>
            
        </View>
    );
};

export default ItemFormMolecule;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
