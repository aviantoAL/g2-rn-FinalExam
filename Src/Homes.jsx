

import React, { useEffect, useState } from "react";
import { Alert, Button, FlatList, Image, View } from "react-native";

export default function Homes() {
  const [data, setData] = useState([]);
  const url = "https://345d-103-36-10-102.ngrok-free.app/shibes"; 

  const addToFav = (item) => {
    let exist = false;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res.map((favorite) => {
          if (item == favorite.image) {
            exist = true;
          }
        });
        if (exist) {
          // Jika datanya sudah ada di favorit
          Alert.alert("Sudah Ada Gambar Tersebut di Favorit");
        } else {
          // Jika datanya belum ditemukan di favorit
          saveToFav(item);
        }
      }).catch((err)=>{console.log(err,"saat mencocokkan")});
      
  };

  const saveToFav = (item) => {
    let payload = {
      image: item,
    };
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        Alert.alert("Simpan ke Favorit Berhasil!");
        console.log(res);
      });
  };

  const getDataShibe = () => {
    fetch("http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    getDataShibe();
  }, []);

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: item }}
            />
            <Button
              title="Simpan ke Favorit"
              onPress={() => addToFav(item)}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Generate"
        onPress={() => {
          getDataShibe();
        }}
      />
    </View>
  );
}





