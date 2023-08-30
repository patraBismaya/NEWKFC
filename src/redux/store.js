import {legacy_createStore as createstore,combineReducers} from "redux"
import { cartReducer } from "./kfc/cartRedux/CartReducer"



const rootReducer = combineReducers({cartdata:cartReducer})

export const store = createstore(rootReducer)