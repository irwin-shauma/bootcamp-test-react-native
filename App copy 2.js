
/**
 * This copy file contains old project. Just for reference
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

import { Button, Searchbar } from 'react-native-paper'


const App = () => {
  const array = ["Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", "Serem", , "Serem", "Serem", "Serem", "Serem", , "Serem", "Serem", "Serem", "Serem",]

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [flag, setFlag] = useState(true)
  const [pressed, setPressed] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')

  const getData = () => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then((res) => {
        if (res.data.length != 0) {
          if (refresh) {
            setData([...res.data])

          } else {
            setData([...data, ...res.data])
          }
          setPressed(false)
          setRefresh(false)
        } else {
          setFlag(false)
          setPressed(false)
        }
      })
  }

  useEffect(() => {
    getData()
  }, [page])

  useEffect(() => {
    if (refresh) {
      getData()
    }
  }, [refresh])


  const onChangeText = (text) => {
    console.log(text)
  }

  const onPress = () => {
    console.log("pressed");
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container_item}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 100, height: 100, marginBottom: 10 }}
          borderRadius={50}
        />
        <View style={styles.container_desc}>
          <Text>{item.first_name} {item.last_name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    )
  }

  const onLoadMore = () => {
    setTimeout(() => {
      setPage(page + 1)
    }, 500)
    setPressed(true)
  }

  const Footer = () => {
    return (
      <View>
        {
          flag == true &&
          <Button onPress={onLoadMore} title='load'></Button>
        }
        {
          pressed == true &&
          <ActivityIndicator size="large" />
        }
      </View>
    )
  }

  const onRefresh = () => {
    // setData(() => {
    //   return []
    // })
    setPage(() => {
      return 1
    })
    setRefresh(() => {
      return true
    })
    setFlag(() => {
      return true
    })
    setPressed(() => {
      return false
    })
    setRefresh(false)
  }

  const DividerComponent = () => {
    return (
      <View style={styles.divider} />
    )
  }

  const onChangeSearch = query => setSearchQuery(query)

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          // title="Go to Details"
          icon="account-circle"
          mode="elevated"
          labelStyle={{fontSize: 30}}
          onPress={() => navigation.navigate('Details')}
          buttonColor="red"
          textColor='white'
        >
          <Text style={{fontSize: 18}}>Pergi ke halaman Detail</Text>
        </Button>

      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      </View>
    );
  }



  const Stack = createNativeStackNavigator();


  function DetailsScreen(props) {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Details Screen</Text>

      // </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={<Footer />}
          refreshing={refresh}
          onRefresh={onRefresh}
          ItemSeparatorComponent={DividerComponent}
        />
      </View>
    );
  }

  return (

    <NavigationContainer>
      {/* <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={<Footer />}
          refreshing={refresh}
          onRefresh={onRefresh}
          ItemSeparatorComponent={DividerComponent}
        />
      </View> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  item: {
    marginVertical: 10
  },
  container_item: {
    flexDirection: 'row',
    marginBottom: 10,
    // borderBottomWidth : 1
  },
  container_desc: {
    justifyContent: 'center',
    marginStart: 10
  },
  divider: {
    height: 1,
    color: 'black',
    backgroundColor: 'black',
    margin: 10
  }
})

export default App;
