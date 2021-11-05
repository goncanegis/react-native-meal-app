import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './SingleMeal.style';
import SingleMealCard from '../../components/SingleMealCard/SingleMealCard';

const SingleMeal = ({route}) => {
  const {idMeal, strMeal} = route.params;

  const {loading, data, error} = useFetch(
    `${Config.BASE_URL}/${Config.API_KEY}/lookup.php?i=${idMeal}`,
  );

  // TODO //
  const handleGoToRecipe = () => null;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <SingleMealCard meal={data.meals[0]} onSelect={handleGoToRecipe} />;
};

export default SingleMeal;
