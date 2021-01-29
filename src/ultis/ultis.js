import { firebaseConfig } from '../config/config.firebase.js'
import 'firebase/firestore'
import firebase from 'firebase/app'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('install')
}

const db = firebase.firestore()

export function SignUp(userInfo) {
    
    return new Promise((resolve, reject) => {
        const { userName, passWord } = userInfo;
        db.collection('users')
            .where('uid', '==', userName)
            .get()
            .then(querySnapShot => {
                if (querySnapShot.empty) {
                    db.collection('users')
                        .add({
                            'uid': userName,
                            'pwd': passWord
                        })
                        .then(doc => {resolve(doc.id)})
                } else {
                    throw new Error('Username has already Exist')
                }
            })
            .catch(err => {
                alert(err)
            })

    })
}

export function LoginUltis(userInfo) {
    return new Promise((resolve, reject) => {
        const {userName, passWord} = userInfo
        db.collection('users')
        .where('uid', '==', userName)
        .where('pwd', '==', passWord)
        .get()
        .then(querySnapShot => {
            if(!querySnapShot.empty) {
                resolve(querySnapShot.docs[0].id)
            } else {
                throw new Error('Username or Password does not match')
            }
        })
        .catch(err => {
            alert(err)
        })
    })
}

