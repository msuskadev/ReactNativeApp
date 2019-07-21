import React from 'react';
import { Text, View } from 'react-native';

const style = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // shadow works only on iOS (state of React Native 0.6)
    shadowColor: '#000',
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'green'
  }
};

const Header = (props) => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
