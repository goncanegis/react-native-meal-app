import React from 'react';
import {Image, Text, View, Linking, ScrollView} from 'react-native';
import styles from './SingleMealCard.style';
import Button from '../Button/Button';

const SingleMealCard = ({meal, onPress}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: meal.strMealThumb}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLarge}>{meal.strMeal}</Text>
        <Text style={styles.titleSmall}>{meal.strArea}</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>
      <Button
        title="Watch on Youtube"
        onPress={() => {
          Linking.openURL(`${meal.strYoutube}`);
        }}
      />
    </ScrollView>
  );
};

export default SingleMealCard;
