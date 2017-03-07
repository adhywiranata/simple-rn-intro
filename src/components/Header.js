import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { styles } from '../styles';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>
        RNPedia
      </Text>
    </View>
    <ScrollView horizontal={true} style={styles.navigation}>
      <View style={styles.navLink}><Text>Popular</Text></View>
      <View style={styles.navLink}><Text>Trending</Text></View>
      <View style={styles.navLink}><Text>Hit</Text></View>
      <View style={styles.navLink}><Text>Hot</Text></View>
    </ScrollView>
  </View>
);

export default Header;
