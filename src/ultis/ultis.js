import { firebaseConfig } from '../config/config.firebase.js'
import 'firebase/firestore'
import firebase from 'firebase/app'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('install')
}

const db = firebase.firestore()

export async function SignUp(userInfo) {
    const { userName, passWord } = userInfo;
    try {
        return await db.collection('users')
            .where('uid', '==', userName)
            .get()
            .then(querySnapShot => {
                if (querySnapShot.empty) {
                    db.collection('users')
                        .add({
                            'uid': userName,
                            'pwd': passWord,
                            'url': 'https://cdn.pixabay.com/photo/2018/09/03/11/51/avocado-3651037_960_720.png',
                            'cover': 'https://i.pinimg.com/originals/a9/4c/97/a94c9773b740c9c6242cb4a5f108fc2b.jpg',
                            'postTime': ''
                        })
                        .then(doc => { return (doc.id) })
                        .then(async (id) => {
                            return await db.collection('users')
                                .doc(id)
                                .update({
                                    'id': id
                                })
                        })
                } else {
                    throw new Error('Username has already Exist')
                }
            })
    }
    catch (err) {
        alert(err)
    }
}

export async function getUserInfo(uid) {
    try {
        return await db.collection('users')
            .where('id', '==', uid)
            .get()
            .then(querySnapShot => {
                if (!querySnapShot.empty) {
                    let user = querySnapShot.docs[0].data()
                    user._id = querySnapShot.docs[0].id
                    delete user.pwd
                    return user
                }
            })
    } catch (err) {
        alert('Khong lay duoc data')
    }
}

export async function LoginUltis(userInfo) {
    const { userName, passWord } = userInfo
    try {
        return await db.collection('users')
            .where('uid', '==', userName)
            .where('pwd', '==', passWord)
            .get()
            .then(querySnapShot => {
                if (!querySnapShot.empty) {
                    return (querySnapShot.docs[0].id)
                } else {
                    throw new Error('Username or Password does not match')
                }
            })
    } catch (err) {
        alert(err)
    }



}

export async function getUserQuotes(uid) {
    return await db.collection('quotes')
        .where('uid', '==', uid)
        .get()
        .then(querySnapShot => {
            let quotes = []
            if (!querySnapShot.empty) {
                querySnapShot.forEach(doc => {
                    let quote = doc.data()
                    quote._id = doc.id
                    quotes.push(quote)
                })
            }
            return quotes
        })
}

export async function collectQuote(quote, uid) {
    const { quoteText, quoteAuthor, postTime, _id } = quote
    try {
        return await db.collection('quotes')
            .where('_id', '==', _id)
            .where('uid', '==', uid)
            .get()
            .then(async (querySnapShot) => {
                if (querySnapShot.empty) {
                    return await db.collection('quotes')
                        .add({
                            '_id': _id,
                            'quoteAuthor': quoteAuthor,
                            'quoteText': quoteText,
                            'uid': uid,
                            'postTime': postTime
                        })
                        .then(doc => {
                            return doc.id
                        })
                } else {
                    throw new Error('Quote has been collected')
                }
            })
    } catch (err) {
        alert(err)
    }
}

export async function removeQuote(quoteId) {
    try {
        return await db.collection('quotes')
            .doc(quoteId)
            .delete()
            .then(() => {
                console.log('SS')
            })
    } catch (err) {
        console.log(err)
    }
}

export async function searchUser(userName) {
    try {
        return await db.collection('users')
            .where('uid', '>=', userName)
            .get()
            .then(querySnapShot => {
                if (!querySnapShot.empty) {
                    let users = []
                    querySnapShot.forEach(doc => {
                        let user = doc.data()
                        delete user.pwd
                        users.push(user)
                    })
                    return users
                } else {
                    return []
                }
            })
    } catch (err) {
        alert(err)
    }
}