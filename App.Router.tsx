import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import CategoryDetail, { ROUTE_CATEGORY_DETAILS } from "./src/screens/categorydetails/CategoryDetails";
import { CategoryDetailsOptionsDecider } from "./src/screens/categorydetails/CategoryDetails.ext";
import CategoryList, { ROUTE_CATEGORY_LIST } from "./src/screens/categorylist/CategoryList";
import { Category } from "./src/types/Category";

export type AppRouteParams = {
    [ROUTE_CATEGORY_LIST]: undefined,
    [ROUTE_CATEGORY_DETAILS]: Category
}

export type GlobalStackRouteParam = StackNavigationProp<AppRouteParams>

export type GlobalRouteProp = RouteProp<AppRouteParams>

const Stack = createNativeStackNavigator();

const Router =
    <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTE_CATEGORY_LIST}>
            <Stack.Screen name={ROUTE_CATEGORY_LIST} component={CategoryList} />
            <Stack.Screen name={ROUTE_CATEGORY_DETAILS} component={CategoryDetail} options={CategoryDetailsOptionsDecider} />
        </Stack.Navigator>
    </NavigationContainer>


export default Router;



