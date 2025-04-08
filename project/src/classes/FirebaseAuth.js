import {auth} from './FirebaseConfig';
import {
    signInWithEmailAndPassword,
} from 'firebase/auth';

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            return userCredential.user
        }).catch(e => {
            switch (e.code) {
                case 'auth/invalid-credential':
                    return {error: 401}
                case 'auth/wrong-password':
                    return {error: 402}
                case 'auth/user-not-found':
                    return {error: 403}
                case 'auth/too-many-requests':
                    return {error: 429}
                default:
                    return {error: 400}
            }
        })
}