import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_PbyYAl1RKybX9t4wh7tavVJSZZ2sY7Q",
  authDomain: "ez-crm-react.firebaseapp.com",
  projectId: "ez-crm-react",
  storageBucket: "ez-crm-react.firebasestorage.app",
  messagingSenderId: "373206092520",
  appId: "1:373206092520:web:7c86609c75444679acd75d"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)