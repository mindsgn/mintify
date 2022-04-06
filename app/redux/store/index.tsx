import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    applyMiddleware, 
    combineReducers,
    createStore 
} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers';

const persistConfig = {
    key: '@orbyt',
    storage: AsyncStorage,
    whitelist: ['wallet']
};

export type State = { readonly authReducer: any };;

const rootReducer: any = combineReducers({
    authReducer: persistReducer(persistConfig, authReducer)
});

export const store = createStore<State, any, any, any>(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)