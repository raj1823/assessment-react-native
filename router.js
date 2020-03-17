import * as React from 'react';
import Home from './src/components/Home'
import Search from './src/components/Search'
import { NavigationContainer} from '@react-navigation/native';
import sectionlist from './src/components/sectionlist'
import  ApiFetching from './src/components/api-assignment'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab= createBottomTabNavigator();

function MyTab(){
    
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name= "Search" component={Search}/>
                <Tab.Screen name= "sectionlist" component={sectionlist}/>
                <Tab.Screen name="ApiFetch" component={ApiFetching}/>
            </Tab.Navigator>

        );
    }

export default function Tabs(){

        return (
           <NavigationContainer>
               <MyTab />
           </NavigationContainer>
        );
    }
