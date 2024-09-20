import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Header from '../../../components/header';
import useMenuToggle from '../../../hooks/useMenuToggle';
import Sidebar from '../../../components/sideBar';
import GridItems from '../../../components/gridItems';
import { tintColorBackGround } from '../../../constants/colors';

const HomeScreen: React.FC = () => {
  const { isOpen, animatedValue, toggleMenu, expandedItem, handleItemPress } = useMenuToggle();
  const backgroundImage = require('../../../../assets/backGround.png'); 

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Sidebar
          animatedValue={animatedValue}
          isOpen={isOpen}
          handleItemPress={handleItemPress}
          expandedItem={expandedItem}
        />

        <Header toggleMenu={toggleMenu} />
        <GridItems />
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
    marginTop: 30,
    gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
    position: 'relative',
  },
});

export default HomeScreen;
