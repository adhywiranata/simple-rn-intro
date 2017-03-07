import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    height: deviceHeight * 0.2,
    width: deviceWidth,
    backgroundColor: '#26A65B',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    width: deviceWidth,
    backgroundColor: '#FFFFFF',
    height: '40%',
  },
  navLink: {
    padding: 10,
  },
  logoContainer: {
    height: '60%',
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  content: {
    height: deviceHeight * 0.8,
    backgroundColor: '#F5F5F5',
    width: deviceWidth,
  }
});
