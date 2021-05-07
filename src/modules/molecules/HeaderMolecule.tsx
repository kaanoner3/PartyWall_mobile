import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface HeaderMoleculeProps {}


const HeaderMolecule: FC<HeaderMoleculeProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>HeaderMolecule</Text>
            
        </View>
    );
};

export default HeaderMolecule;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
