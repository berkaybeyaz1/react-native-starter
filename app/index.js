import React from 'react';
import { StatusBar } from 'react-native';
import {
    NavigationProvider,
    StackNavigation,
} from '@exponent/ex-navigation';
import Router from './router';
class App extends React.Component {
    render() {
        return (
            <NavigationProvider router={Router}>
                <StackNavigation initialRoute={Router.getRoute('home')} />
                <StatusBar barStyle="light-content" />
            </NavigationProvider>
        );
    }
}
export default App;
