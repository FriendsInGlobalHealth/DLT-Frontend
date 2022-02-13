
import React from 'react';
import { View, ActivityIndicator} from 'react-native';
import DrawerNavigation from '../routes/DrawerNavigator';
import AuthNavigation from '../routes/AuthNavigator'
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const Routes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Auth" component={AuthNavigation} options={{headerShown:false}}/>
        <AppStack.Screen name="Main" component={DrawerNavigation} options={{headerShown:false}}/>
    </AppStack.Navigator>
);


export default Routes;