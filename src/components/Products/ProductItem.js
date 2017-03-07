import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const ProductItem = props => (
  <View style={styles.productItem}>
    <Image
      source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/7e/33/a6/7e33a6a9699c51b7d013fdbcdcadeea9.jpg'}}
      style={{ width: 100, height: 100}} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>
        {props.name}
      </Text>
      <Text style={styles.productPrice}>
        Rp. {props.price}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  productItem: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productInfo: {
    width: '60%'
  },
  productName: {
    fontSize: 20,
  },
  productPrice: {
    color: '#E87E04',
    // marginTop: 5,
  }
});

export default ProductItem;
