import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Header, Content } from './components';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [
        { id: 1, name: 'Buku React Native', price: 500000 },
        { id: 2, name: 'Macbook Pro', price: 100000 },
        { id: 3, name: 'Asus Zenfone', price: 5000 },
        { id: 4, name: 'Pisang Goreng', price: 1000 },
      ],
    };
  }
  render() {
    return (
      <View>
        <Header />
        <Content products={this.state.products} />
      </View>
    );
  }
}

export default App;
