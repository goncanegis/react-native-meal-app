import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import MealsList from './pages/MealsList/MealsList';
import SingleMeal from './pages/SingleMeal/SingleMeal';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerTintColor: '#FFB938',
          headerTitleStyle: {
            fontSize: 24,
            textAlign: 'center',
          },
        }}>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name="MealsListPage"
          component={MealsList}
          options={({route}) => ({title: route.params.strCategory})}
        />
        <Stack.Screen
          name="SingleMealPage"
          component={SingleMeal}
          options={({route}) => ({title: 'Recipe'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
