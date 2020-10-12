import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";   
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';


const LoginPages = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history =useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
   
    if(firebase.apps.length === 0){   
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(email, credential)
          });
   }
      return (
           <div>
       <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}> google sign in</button>
        </div>
       );
 };

export default LoginPages;