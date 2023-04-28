import './App.css';

import {
  createBrowserRouter,
} from 'react-router-dom';
import Home from './slug/Home';
import Shipment from './slug/Shipment';
import Quote from './slug/Quote';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/trackShipment',
    element: <Shipment />
  },
  {
    path: '/quote',
    element: <Quote />
  }
])


export default App;
