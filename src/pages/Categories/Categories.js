import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(
    `${Config.BASE_URL}/${Config.API_KEY}/categories.php`,
  );

  const handleCategorySelect = strCategory => {
    return navigation.navigate('MealsListPage', {strCategory});
  };

  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}>
        {item.strCategory}
      </CategoryCard>
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
      <FlatList data={data.categories} renderItem={renderCategory} />
    </SafeAreaView>
  );
};

export default Categories;
