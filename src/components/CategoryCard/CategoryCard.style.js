import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    borderColor: '#BCAAA4',
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 8,
    marginVertical: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
  },
});
