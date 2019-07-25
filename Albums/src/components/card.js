import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        boarderRadius: 2,
        borderColoer: '#ddd',
        borderBottomWidth: 0,
        ShadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginLeft: 10,
        marginRigth: 10,
        marginTop: 10,
        elevation: 1
    }
}

export default Card;