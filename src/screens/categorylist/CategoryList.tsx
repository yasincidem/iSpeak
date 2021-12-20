import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button, StatusBar, FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import categories from '../../../api/question_categories.json';
import { useNavigation } from '@react-navigation/native';
import { AppRouteParams, GlobalStackRouteParam } from '../../../App.Router';
import { ROUTE_CATEGORY_DETAILS } from '../categorydetails/CategoryDetails';
import { ANDROID_DEFAULT_RIPPLE_CONFIG } from '../../platformspec/AndroidSpec';
import { Category } from '../../types/Category';
import CategoryItem from './CategoryItem';

const StyledScreenContainer = styled.View({
    flex: 1,
    backgroundColor: '#ffffff'
})

const CategoryList = () => {

    const navigation = useNavigation<GlobalStackRouteParam>();

    const navigateCategoryDetails = (category: Category) => {
        navigation.navigate(ROUTE_CATEGORY_DETAILS, category)
    }

    const onCategoryClicked = (category: Category) => {
        navigateCategoryDetails(category)
    }

    const renderCategoryItem = ({ item }: { item: Category }) => (
        <CategoryItem title={item.name} onItemClicked={() => onCategoryClicked(item)} />
    );

    return (
        <StyledScreenContainer>
            <StatusBar />
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => `category::${item.id}`}
                initialNumToRender={15}
            />
        </StyledScreenContainer>
    );
};

export const ROUTE_CATEGORY_LIST = "CategoryList"
export default CategoryList;
