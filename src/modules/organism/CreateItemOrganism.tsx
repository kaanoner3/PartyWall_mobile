import React, {FC} from 'react';
import {View, Text, StyleSheet} from "react-native"

interface CreateItemOrganismProps {

}


const CreateItemOrganism: FC<CreateItemOrganismProps> = ({}) => {

    return (
        <View style={styles.container}>
            <Text>CreateItemOrganism</Text>
            
        </View>
    );
};

export default CreateItemOrganism;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
