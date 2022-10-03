import{combineReducers} from "redux"
import LangReducer from "./lang";
import LoaderReducer from "./loader";
import ProductsReducer from "./productReducer";
import UserReducer from './userReducer';
import SongReducer from './songReducer';
import productsReducerAPI from './productReducerAPI';

export default combineReducers({
lang:LangReducer,
user:UserReducer,
products:ProductsReducer,
loader:LoaderReducer,
song:SongReducer,
proAPI:productsReducerAPI
})