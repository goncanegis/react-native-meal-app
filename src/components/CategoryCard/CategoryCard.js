import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
