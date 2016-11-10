
import { createRouter } from '@exponent/ex-navigation';

/*
* Pages
*/
import Home from './pages/Home';

const Router = createRouter(() => ({
   home: () => Home
}));

export default Router;