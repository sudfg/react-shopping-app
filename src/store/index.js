import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from '../reducers/cartReducer';
import App from '../App';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export { ReduxProvider };
