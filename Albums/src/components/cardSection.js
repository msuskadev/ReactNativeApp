import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        padding: 5,
        borderWidth: 1,
        boarderRadius: 2,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        justyfyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        position: 'relative'
    }
}

export default CardSection;