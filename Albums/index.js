import React from "react";
import { AppRegistry } from "react-native";
import Header from './src/components/header';

const AlbumsApp = () => (
    <Header />
);

AppRegistry.registerComponent("Albums", () => AlbumsApp);
