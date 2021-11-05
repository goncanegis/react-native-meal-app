import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 2.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: '#F2F2F2',
    padding: 5,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 1,
  },
  titleLarge: {
    fontSize: 30,
    color: '#A52A2A',
    fontWeight: 'bold',
  },
  titleSmall: {
    fontSize: 22,
    color: '#A52A2A',
    fontWeight: 'bold',
  },
  instructionsContainer: {
    backgroundColor: '#F2F2F2',
    padding: 5,
  },
  instructions: {fontSize: 16},
  button: {
    backgroundColor: '#FF0000',
    margin: 20,
  },
});
