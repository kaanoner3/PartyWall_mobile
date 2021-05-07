import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface ItemListOrganismProps {}


const ItemListOrganism: FC<ItemListOrganismProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>ItemListOrganism</Text>
            
        </View>
    );
};

export default ItemListOrganism;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
