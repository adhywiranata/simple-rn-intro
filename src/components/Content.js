import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Products from './Products';

import { styles } from '../styles';

const Content = props => (
  <View style={styles.content}>
    <Products products={props.products} />
  </View>
);

export default Content;
