import {AppStateType} from "../../redux/reduxStore";


import {connect} from "react-redux";
import {HeaderClassComponent} from "./HeaderClassComponent";
import {InitialStateType, logout} from "../../redux/authReducer";


type MapDispatchToProps = {
    // setUserData:(userData: InitialStateType) => void
    // setAuthFetching:(isFetching: boolean)=>void
    // setAuthStatus:(isAuthStatus:boolean)=>void
    logout:()=>void

}
export type HeaderComponentType = InitialStateType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):InitialStateType => {
    return{
        id:state.userAuth.id,
        email:state.userAuth.email,
        login:state.userAuth.login,
        //isFetching:state.userAuth.isFetching,
        isAuth:state.userAuth.isAuth,
    }
}
// const mapDispatchToProps = ():MapDispatchToProps => {
//   return
// }
 const HeaderContainer = connect(mapStateToProps,{
    logout,
})(HeaderClassComponent)

export default HeaderContainer


