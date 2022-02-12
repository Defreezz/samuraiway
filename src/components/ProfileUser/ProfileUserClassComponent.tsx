import React from "react";
import {ProfileUserComponentType} from "./ProfileUserContainer";
import {ProfileUser} from "./ProfileUser";


export class ProfileUserClassComponent extends React.Component<ProfileUserComponentType> {
    componentDidMount() {

        let userID = this.props.router.params.userID
        this.props.getUser(userID)
        //this.props.getStatus(userID) // забираем статус сразу в санке getUser
    }

    render() {
        return (
            <ProfileUser profile={this.props.profile}/>
        )
    }
}