import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface ButtonAtomProps {}


const ButtonAtom: FC<ButtonAtomProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>ButtonAtom</Text>

        </View>
    );
};

export default ButtonAtom;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
