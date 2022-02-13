import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../views/Profile";
import Refer from "../views/Refer";

const HomeStack = createStackNavigator();
const HomeNavigator: React.FC = () => (
    
    <HomeStack.Navigator initialRouteName="Profile">
        <HomeStack.Screen name="Profile" component={Profile} />
        <HomeStack.Screen name="Refer" component={Refer} />
    </HomeStack.Navigator>
);

export default HomeNavigator;