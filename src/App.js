import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { Header } from './components/';
import { Cart, Home } from './pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch(setPizzas);

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
