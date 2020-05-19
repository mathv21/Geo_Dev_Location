import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title:'GeoRadar',
            },
        },

        Profile:{
            screen: Profile,
            navigationOptions:{
                title:'GitFeed',
            },
        },
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerBackTitleVisible:false,
            headerStyle:{
                backgroundColor:'#27ca6b',
            },
        },
    })
);

export default Routes;