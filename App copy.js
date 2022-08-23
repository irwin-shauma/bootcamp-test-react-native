
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const array = ["Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", , "Serem", "Serem", "Serem", "Serem", , "Serem", "Serem", "Serem", "Serem",]

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then((res) => {
        if (res.data.length != 0) {
          setData([...data, ...res.data])
        } else {
          setFlag(false)
        }
      })

  }, [page])

  const onChangeText = (text) => {
    console.log(text)
  }

  const onPress = () => {
    console.log("pressed");
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 150, height: 150 }}
        />
        <Text style={{ alignSelf: 'center' }}>{item.first_name} {item.last_name}</Text>
        <Text style={{ alignSelf: 'center' }}>{item.email}</Text>
      </View>
    )
  }

  const onLoadMore = () => {
    setPage(page + 1)
  }

  const Footer = () => {
    return (
      <View>
        {
          flag == true &&
          <Button onPress={onLoadMore} title='load'></Button>
        }
      </View>
    )
  }

  return (
    //Ini kalau array
    // <ScrollView style={[styles.container,]}>
    <View style={styles.container}>
      <Image source={{ uri: 'https://images.genpi.co/uploads/kaltim/arsip/normal/2022/08/06/marcel-radhival-alias-pesulap-merah-bisa-mendapatkan-kekayaa-cd4r.jpg' }}
        style={{ alignSelf: 'stretch', height: 400 }} />
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200, alignSelf: 'center' }} />
      {/* {
        array.map((data, index) => <Text key={index} style={{ alignSelf: 'center' }}>{data}</Text>)
      }
      {
        data.map((d, index) => (
          <View key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <Image source={{ uri: d.avatar }}
              style={{ width: 150, height: 150 }} />
            <Text style={{ alignSelf: 'center' }}>{d.email}</Text>
          </View>
        )
        )
      } */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<Footer />}
        horizontal={true}
      />
      <Text style={{ marginTop: 15 }}>
        Hell O World!
      </Text>
      <TextInput placeholder='Type here' onChangeText={onChangeText} />
      <Button onPress={onPress} title='Button' color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  item: {
    marginVertical: 10
  }
})

export default App;
