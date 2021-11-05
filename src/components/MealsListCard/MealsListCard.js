import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsListCard.style';

const MealsListCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{uri: meal.strMealThumb}}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {meal.strMeal}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsListCard;
