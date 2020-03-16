/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/components/sectionlist';

import Tabs from './router';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Tabs);
