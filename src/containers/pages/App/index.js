import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboar from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import {store} from '../../../config/redux';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/register" element={<Register />}  />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboar />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}



export default App;
