import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import DrawerItems from './DrawerItems';
import ReferScreen from '../views/Refer';
import ProfileScreen from '../views/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => (
    <Drawer.Navigator
    >
         <Drawer.Screen name="Home" component={HomeNavigator} />
       
    </Drawer.Navigator>
);

export default DrawerNavigation;