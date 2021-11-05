import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Categories = ({navigation}) => {
  const [categoryLoading, setCategoryLoading] = useState(false);
  const {loading, data, error} = useFetch(
    `${Config.BASE_URL}/${Config.API_KEY}/categories.php`,
  );

  const handleCategorySelect = async strCategory => {
    setCategoryLoading(true);
    try {
      const responseData = await axios.get(
        `${Config.BASE_URL}/${Config.API_KEY}/filter.php?c=${strCategory}`,
      );
      setCategoryLoading(false);
      navigation.navigate('MealsListPage', {
        strCategory,
        data: responseData.data,
      });
    } catch (err) {
      setCategoryLoading(false);
    }
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
      {categoryLoading && (
        <>
          <LottieView
            source={require('../../assets/9844-loading-40-paperplane.json')}
            autoPlay
            style={{position: 'absolute', zIndex: 1000}}
          />
          <LottieView
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              zIndex: 900,
              opacity: 0.4,
            }}
          />
        </>
      )}
      <FlatList data={data.categories} renderItem={renderCategory} />
    </SafeAreaView>
  );
};

export default Categories;
