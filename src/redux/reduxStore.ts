import {applyMiddleware, combineReducers, createStore} from "redux";
import {myProfileReducer, MyProfileReducerAction} from "./myProfileReducer";
import {dialogsReducer, DialogsReducerAction} from "./dialogsReducer";
import {usersReducer, UsersReducerAction} from "./usersReducer";
import {authReducer, AuthReducerAction} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {profileReducer, ProfileReducerAction} from "./profileReducer";
import {FormAction, reducer as formReducer} from "redux-form";


export type ThunkType = ThunkAction<void, AppStateType, unknown, AllActionsType>
//экшены всего апп
type AllActionsType =
    | UsersReducerAction
    | AuthReducerAction
    | DialogsReducerAction
    | MyProfileReducerAction
    | ProfileReducerAction
    | FormAction

type  rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType> //возвращает тип стейта всего приложения

let rootReducer = combineReducers({
    myProfilePage: myProfileReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    form: formReducer,
})
export let store: any = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
