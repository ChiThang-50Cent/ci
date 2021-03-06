import React from 'react'
import { getUserInfo, getUserQuotes } from '../ultis/ultis.js'
import ProfileUserInfo from './profileUserInfo.jsx'
import Main from './main'
import AddQuote from './addQuote.jsx'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
            userQuote: []
        }
    }
    componentDidMount() {
        let path = window.location.pathname
        path = path.split('/')
        let uid = path[2]
        if (uid != null) {
            getUserInfo(uid)
                .then(userInfo => {
                    this.setState({
                        userInfo: userInfo
                    })
                })
            getUserQuotes(uid)
                .then(quotes => {
                    this.setState({
                        userQuote: quotes
                    })
                })
        } else {
            window.location.href = '/'
        }
    }
    render() {
        return (
            <div>
                <ProfileUserInfo {...this.state.userInfo} />
                <AddQuote {...this.state.userInfo} />
                <Main quotes={this.state.userQuote} user={this.state.userInfo} />
            </div>
        )
    }
}
