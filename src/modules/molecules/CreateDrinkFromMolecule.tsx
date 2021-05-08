import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface CreateDrinkFromMoleculeProps {}


const CreateDrinkFromMolecule: FC<CreateDrinkFromMoleculeProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>CreateDrinkFromMolecule</Text>

        </View>
    );
};

export default CreateDrinkFromMolecule;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
