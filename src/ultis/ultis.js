import { firebaseConfig } from '../config/config.firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import User from '../component/User'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.error(e.stack)
}

const db = firebase.firestore()

export function getUserInfo(userId) {
    return db.collection('users')
        .doc(userId)
        .get()
        .then(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
}

export function getConversations(userId) {
    return db.collection('conversation')
        .where('uids', 'array-contains', userId)
        .get()
        .then(querySnapShot => {
            let users = []
            querySnapShot.forEach(id => {
                let user = id.data().uids
                let conversationId = id.id
                user.forEach(id => {
                    if (id !== userId) {
                        users.push({
                            conversationId: conversationId,
                            participant: id
                        })
                    }
                })
            })
            return users
        })
        .then(users => {
            const convers = users.map(val => {
                return new Promise((resolve, reject) => {
                    getUserInfo(val.participant)
                        .then(user => {
                            resolve({
                                conversationId: val.conversationId,
                                participant: user
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

            })
            Promise.all(convers)
                .then(data => console.log(data))
        })
}


