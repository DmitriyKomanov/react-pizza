import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { Header } from './components/';
import { Cart, Home } from './pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch(setPizzas);

  const state = useSelector(({ pizzas, filters }) => {
    return { items: pizzas.items, sortBy: filters.sortBy };
  });

  console.log(state);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' render={() => <Home items={[]} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios
//       .get('http://localhost:3000/db.json')
//       .then(({ data }) => this.props.setPizzas(data.pizzas));
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div className='wrapper'>
//         <Header />
//         <div className='content'>
//           <Route
//             path='/'
//             render={() => <Home items={this.props.items} />}
//             exact
//           />
//           <Route path='/cart' component={Cart} exact />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { setPizzas: (items) => dispatch(setPizzasAction(items)) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
