import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './MealsList.style';
import MealsListCard from '../../components/MealsListCard/MealsListCard';

const MealsList = ({navigation, route}) => {
  const {strCategory} = route.params;

  const {loading, data, error} = useFetch(
    `${Config.BASE_URL}/${Config.API_KEY}/filter.php?c=${strCategory}`,
  );

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </SafeAreaView>
  );
};

export default MealsList;
