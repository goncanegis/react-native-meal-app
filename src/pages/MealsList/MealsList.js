import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './MealsList.style';
import MealsListCard from '../../components/MealsListCard/MealsListCard';

const MealsList = ({navigation, route}) => {
  const {data} = route.params;

  const handleMealSelect = idMeal => {
    return navigation.navigate('SingleMealPage', {idMeal});
  };

  const renderMeals = ({item}) => {
    return (
      <MealsListCard meal={item} onSelect={() => handleMealSelect(item.idMeal)}>
        {item.idMeal}
      </MealsListCard>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </SafeAreaView>
  );
};

export default MealsList;
