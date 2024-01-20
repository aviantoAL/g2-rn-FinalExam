import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Favorites = () => {
  const [data, setData] = useState([]);
  const url = "https://345d-103-36-10-102.ngrok-free.app/shibes";

  const getDataFav = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    getDataFav();
  }, []);

  const handleDelete = (id) => {

  const deletedItem = data.find(item => item.id === id);

  if (deletedItem) {
    console.log(`Deleted item with id ${id}: `, deletedItem);
  } else {
    console.log(`Item with id ${id} not found.`);
  }
    
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDelete(item.id)}>
      <View style={styles.item}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <Text style={styles.deleteText}>Tap to delete</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 150,
    width: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 8,
  },
  deleteText: {
    color: 'red',
    marginTop: 8,
  },
});

export default Favorites;




