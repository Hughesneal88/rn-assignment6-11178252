import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, FlatList, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

 export default function HomeScreen ({navigation}) {
  
  const [itemList, setItemList] = useState([]);
  const [cart, setCart] = useState([]);
  const paw =[
    { index:1,
   image: require ('./assets/dress1.png'),
   dressName:'Office wear',
   dressType:'Reversible angorra cardigan',
   price:'$120'
    },
    { index:2,
      image: require('./assets/dress2.png'),
      dressName:'Black',
   dressType:'Reversible angorra cardigan',
   price:'$120'
       },
  ];

  const wap=[
    {
    index:3,
    image: require ('./assets/dress3.png'),
    dressName:'Church wear',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:4,
       image: require('./assets/dress4.png'),
       dressName:'Lamerei',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];

  const awp=[
    {
    index:5,
    image: require ('./assets/dress5.png'),
    dressName:'21WN',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:6,
       image: require('./assets/dress6.png'),
       dressName:'Lopo',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];
  const apw=[
    {
    index:7,
    image: require ('./assets/dress7.png'),
    dressName:'21WN',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:8,
       image: require('./assets/dress3.png'),
       dressName:'Lamerei',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (

    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>
      <View style={styles.positioning}>
      <Image style={{top:25, left: -5}}source={require('./assets/Logo.png')}/>
     <Pressable style={{right: 150}} ><Ionicons name="menu-outline" size={40} color="black"/></Pressable>
     <Pressable style={{left: 110, top: -35}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
     <Pressable style={{left: 150, top: -67}} onPress={() => navigation.navigate('Checkout', { cart })}>  
      <View>
      <Text style={{ position: 'absolute', top: -8, right: -8, backgroundColor: 'red', color: 'white', borderRadius: 10, paddingHorizontal: 6, fontSize: 12 }}>
        {cart.length}
      </Text>
    <Ionicons name="bag-outline" size={30} color="black" />
  </View></Pressable>
     <Text style={{fontSize: 40,right:100, top: -20}}> Our Story</Text>
     <Pressable style={styles.filter}><Ionicons name="filter-outline" size={25} color="orange"/></Pressable>
     <Pressable style={styles.list}><Ionicons name="list-outline" size={25} color="black"/></Pressable>
      <StatusBar style="auto" />
      </View>
      <FlatList
      horizontal={true}
      data={paw}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
     <Pressable style={{top:-30, left: 150}}   onPress={() => {
      handleAddToCart(item)
        }}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={wap}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}   onPress={() => {
        handleAddToCart(item)
        }}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={awp}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}   onPress={() => {
        handleAddToCart(item)
        }}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={apw}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}   onPress={() => {
        handleAddToCart(item)
        }}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    ScrollView:{
 backgroundColor: '#fff'
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:-40
  },
  positioning: {
    alignItems:'center',
    top: 40
  },
  filter: {
    left: 150,
    top: -57,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
   list: {
    left: 100,
    top: -78,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginTop: -20
  },
  dresses:{
    left: 10,
    marginHorizontal:10
  },
  flatlistcontainer:{
    fontSize: 16,
    left: 20,
    top:-20
  },
  flatlistdescription:{
    fontSize: 11,
    left: 20,
    color: 'grey',
    top:-20
  },
  flatlistprice:{
    left: 20,
    fontSize: 20,
    color:'orange',
    top:-20
  }
});