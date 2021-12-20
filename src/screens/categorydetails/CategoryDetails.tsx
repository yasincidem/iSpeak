import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { GlobalRouteProp } from '../../../App.Router';
import { Category } from '../../types/Category';
import { CategoryDetailsOptionsDecider, generateTitle } from './CategoryDetails.ext';

const StyledScreenContainer = styled.View({
    flex: 1,
    backgroundColor: '#ffffff'
})

const CategoryDetail = () => {

    const route = useRoute<GlobalRouteProp>();

    const title = generateTitle(route.params)

    return (
        <StyledScreenContainer>
            <StatusBar />
            <Text>{title}</Text>
        </StyledScreenContainer>
    );
};


export const ROUTE_CATEGORY_DETAILS = "CategoryDetails"
export default CategoryDetail;