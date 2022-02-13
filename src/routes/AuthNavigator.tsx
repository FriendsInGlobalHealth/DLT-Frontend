import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../views/Login";


const AppStack = createStackNavigator();

const Routes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    </AppStack.Navigator>
);


export default Routes;