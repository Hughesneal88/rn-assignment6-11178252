// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect } from 'react';

function CartScreen({ route, navigation }) {
  const { cart } = route.params;
  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('$', ''));
      return total + itemPrice;
    }, 0);
  };
  useEffect(() => {
    if (cart.length === 0) {
      navigation.navigate('Home');
    }
  }, [cart, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image style={{ top: 5, left: 160 }} source={require('./assets/Logo.png')} />
          <Pressable style={{ left: 350, top: -25 }}>
            <Ionicons name="search-outline" size={30} color="black" />
          </Pressable>
          <Text style={{ fontSize: 26, top: 10, left: 130, paddingBottom: 7 }}>CHECKOUT</Text>
        </View>
        <View>
        <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.checkout}>
            <View>
            <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.title}>{item.dressName}</Text>
            <Text style={styles.description}>{item.dressType}</Text>
            <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.deleteText}  onPress={() => {
            alert('delete button pressed')
          }}>
            <Ionicons name="close-circle-outline" size={20} color="red" style={{right: 60, top: 70}}/>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.index.toString()}
      />
      </View>
      </ScrollView>
      <View style={styles.totalSection}>
        <Text style={styles.estTotal}>Est. Total</Text>
        <Text style={styles.price}>${calculateTotalPrice(cart).toFixed(2)}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Pressable style={styles.button}>
          <Ionicons name="bag-handle-outline" size={45} color="white" style={{ top: 5, right: 85 }} />
          <Text style={{ color: 'white', fontSize: 26, top: -30, left: 20 , paddingBottom: 5}}>CHECKOUT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkout: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    elevation: 5
  },
  image: {
    width: 100,
    height: 100,
  },
  
  scroll: {
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: -5,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    top: 20,
    width: 450,
    left: 10,
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: 'contain'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  estTotal: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  price: {
    fontSize: 24,
    color: '#FF5733',
    fontWeight: 'bold'
  }
});


export default CartScreen;