import {AppStateType} from "./reduxStore";

export const getUsersSelector = (state:AppStateType) =>{
    return state.usersPage.users
}
export const getPageSizeSelector = (state:AppStateType) =>{
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state:AppStateType) =>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state:AppStateType) =>{
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state:AppStateType) =>{
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state:AppStateType) =>{
    return state.usersPage.followingInProgress
}



// const adf = createSelector (getUsersSelector,(users:UserType[])=>{
//     return users
// })







