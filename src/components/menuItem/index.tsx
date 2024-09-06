import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MenuItem, SubItem } from '../../types/types';

interface MenuItemProps {
  item: MenuItem;
  handleItemPress: (id: string) => void;
  expandedItem: string | null;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, handleItemPress, expandedItem }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleItemPress(item.id)}
        style={styles.menuItem}
        accessibilityLabel={item.title}
        accessibilityHint="Pressione para expandir ou recolher."
      >
        <Text style={styles.menuText}>{item.title}</Text>
      </TouchableOpacity>
      {expandedItem === item.id && (
        <FlatList
          data={item.subItems}
          renderItem={({ item }: { item: SubItem }) => (
            <TouchableOpacity
              style={styles.subItem}
              onPress={item.onPress}
              accessibilityLabel={item.title}
              accessibilityHint="Pressione para ver mais detalhes."
            >
              <Text style={styles.subItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(subItem) => subItem.id}
          style={styles.subItemsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  menuItem: {
    paddingVertical: 10,
    justifyContent: 'center',
  },

  menuText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#004d40',
    padding: 10,
    borderRadius: 10,
  },

  subItemsContainer: {
    marginTop: 10,
  },

  subItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  subItemText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#004d40d3',
    padding: 6,
    borderRadius: 10,
    textAlign: 'center',
  },
})

export default MenuItemComponent;
