import React from "react";
import { AppRegistry, View } from "react-native";
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const AlbumsApp = () => (
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent("Albums", () => AlbumsApp);
