import firebaseConfig from '../config/config.js'
import 'firebase/firestore'
import firebase from 'firebase/app'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('install')
}

const db = firebase.firestore()

export function signUp(userName, passWord) {
    return new Promise((resolve, reject) => {
        db.collection("users")
        .where('userName', '==', userName)
        .get()
        .then(querySnapshot => {
            if (!querySnapshot.empty) {
                throw new Error('Exist')
            }
        })
        .then(() => {
            db.collection('users').add({
                userName: userName,
                passWord: passWord
            }).then(doc => {
                resolve(doc.id)
            })
            }
        )
        .catch((error) => {
            console.log("Error adding document: ", error);
        });
    })
}

export function signIn(userName, passWord) {
    return new Promise((resolve, reject) => {
        db.collection('users')
        .where('userName', '==', userName )
        .where('passWord', '==', passWord)
        .get()
        .then(querySnapshot => {
            if (querySnapshot.empty){
                throw new Error('Uid or Pass wrong')
            }
            let user = querySnapshot.docs[0].data();
            return user
        })
        .then(user => {
            console.log(user.userName)
        })
        .catch(err => {
            console.log(err)
        })
    })
}
