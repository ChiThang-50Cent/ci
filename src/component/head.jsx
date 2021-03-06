import React from 'react'
import UserInfo from './userInfo'
import { getUserInfo, searchUser } from '../ultis/ultis.js'
import '../assest/css/head.css'

export class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: null,
            userInfo: {},
            userList: [],
            searchKey: ''
        }
        this.logout = this.logout.bind(this)
        this.goToProfile = this.goToProfile.bind(this)
        this.performField = this.performField.bind(this)
        this.search = this.search.bind(this)
    }
    componentDidMount() {
        let uid = localStorage.getItem('uid')
        this.setState({
            uid: uid
        }, () => {
            getUserInfo(this.state.uid)
                .then(userInfo => this.setState({
                    userInfo: userInfo
                }))
        })

    }
    logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('uid')
        this.setState({
            uid: null
        })
        window.location.href = '/'
    }
    goToProfile = (e) => {
        e.preventDefault()
        let path = this.state.userInfo._id
        window.location.href = '/profile/' + path
    }
    performField() {
        let field = document.getElementsByClassName('search-field')
        field[0].style.display = 'block'
        document.getElementsByClassName('body')[0].addEventListener('click', () => {
            field[0].style.display = 'none'
        })
    }
    search() {
        let key = document.getElementById('input').value
        if (key !== '') {
            this.setState({
                searchKey: key
            }, () => {
                searchUser(this.state.searchKey)
                    .then((users) => {
                        this.setState({
                            userList: users
                        }, () => console.log(this.state.userList))
                    })
            })
        }
    }
    render() {
        let item
        if (this.state.uid != null) {
            item = <>
                <li><a href='#' onClick={this.logout}>Log Out</a></li>
                <li><a href='#' onClick={this.goToProfile}
                    style={{
                        width: 'auto',
                        padding: '0px 10px'
                    }}>
                    <UserInfo {...this.state.userInfo}
                        style={{ marginTop: '0px' }} />
                </a></li>
            </>
        } else {
            item = <li><a href="/login" >Log In</a></li>
        }

        const users = this.state.userList.map((user)=>{
            return <><a className='user-search' href={'/profile/'+ user.id}><UserInfo {...user} key={user.id} /></a><hr/></>
        })
        return (
            <div className='head'>
                <ul className='menu'>
                    <li><h2>Skote</h2></li>
                    <li className='search-bar'><input id='input' type="text"
                        placeholder='User Search'
                        onClick={this.performField} onChange={this.search} /></li>
                    <li><a href="/">New</a></li>
                    <li><a href="/favourQuote">Favour</a></li>
                    <>{
                        item
                    }</>
                </ul>
                <div className='search-field'>
                    {users}
                </div>
            </div>
        )
    }
}
