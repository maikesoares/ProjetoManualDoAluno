import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import useMenuToggle from '../../../hooks/useMenuToggle';
import Sidebar from '../../../components/sideBar';
import GridItems from '../../../components/gridItems';
import { tintColorBackGround } from '../../../constants/colors';


const HomeScreen: React.FC = () => {
  const { isOpen, animatedValue, toggleMenu, expandedItem, handleItemPress } = useMenuToggle();

  return (
    <View style={styles.container}>
      <Sidebar
        animatedValue={animatedValue}
        isOpen={isOpen}
        handleItemPress={handleItemPress}
        expandedItem={expandedItem}
      />

      <Header toggleMenu={toggleMenu} />
      <GridItems />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
    padding: 20,
    marginTop: 30,
    gap: 10,
    position: 'relative',
  },
});

export default HomeScreen;
