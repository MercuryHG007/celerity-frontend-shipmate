import './App.css';

import {
  createBrowserRouter,
} from 'react-router-dom';
import Home from './slug/Home';
import Shipment from './slug/Shipment';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/shipment',
    element: <Shipment />
  }
])


export default App;
