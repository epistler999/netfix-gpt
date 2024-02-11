import {useRef, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {validateForm} from "../utils/validate";
import Header from "./Header";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice";
import {USER_AVATAR} from "../utils/constant";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const handleLoggIn = () => {
        setLoggedIn(!loggedIn);
    }
    const dispatch = useDispatch();

    const onFormSubmit = () => {
        let val = validateForm(email.current.value, password.current.value);
        setErrorMessage(val);
        if (val) return;

        if (!loggedIn) {
            // signUp logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            // sigIn logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "- " + errorMessage);
                });
        }
    }

    return (
        <div
            className="h-[800px] opacity-95 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg')]">
            <Header parentPage="login"/>
            <div className="flex justify-center my-16 items-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                }} className="opacity-85 px-4 py-8 flex flex-col items-center bg-gray-950 text-white w-1/3 h-[450px]">
                    <h1 className="font-bold text-2xl">{loggedIn ? "Sign In" : "Sign Up"}</h1>
                    {
                        !loggedIn &&
                        <input ref={name} className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg"
                               placeholder="Enter Name"></input>
                    }
                    <input ref={email} className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg"
                           placeholder="Enter Email"></input>
                    <input ref={password} className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg"
                           placeholder="Enter Password"></input>
                    <div>
                        <p className="text-red-500 font-extrabold">{errorMessage}</p>
                    </div>
                    <div className="w-3/4 my-4">
                        <button onClick={onFormSubmit}
                                className="bg-red-800 w-full h-10 rounded-lg">{loggedIn ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <div>
                        {loggedIn && "New To Netflix?"}
                        <button onClick={handleLoggIn}
                                className="font-bold cursor-pointer">{loggedIn ? "Sign Up Now" : "Sign In Now"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
