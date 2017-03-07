import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import ProductItem from './ProductItem';

const Products = props => (
  <ScrollView style={styles.productContainer}>
    {
      props.products.map(product =>
        <ProductItem key={product.id} {...product} />
    )}
  </ScrollView>
);

const styles = StyleSheet.create({
  productContainer: {

  },
  productItem: {
    padding: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, .1)',
  }
});

export default Products;
