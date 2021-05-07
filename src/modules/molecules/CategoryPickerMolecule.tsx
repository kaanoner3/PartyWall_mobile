import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface CategoryPickerMoleculeProps {}


const CategoryPickerMolecule: FC<CategoryPickerMoleculeProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>CategoryPickerMolecule</Text>
            
        </View>
    );
};

export default CategoryPickerMolecule;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
