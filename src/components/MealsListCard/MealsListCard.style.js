import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    right: 10,
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'right',
    fontSize: 26,
    fontWeight: 'bold',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
