import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png"
import google from "../assets/google.png"
import apple from "../assets/apple.png"
import { theme } from "@/config/config";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { googleLogin } from "@/store/authSlice";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showNotice, setShowNotice] = useState(true);

    useEffect(() => {
        const hasShownDialog = sessionStorage.getItem("renderNoticeShown");
        if (hasShownDialog) {
            setShowNotice(false);
        }else{
            setShowNotice(true);
            sessionStorage.setItem("renderNoticeShown", "true");
        }
    }, []);

    const handleNotice = () => {
        console.log('ssdc')
        sessionStorage.setItem("renderNoticeShown", "true");
        setShowNotice(false)
    }

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const formData = {
                firebaseUid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
            };

            const response = await dispatch(googleLogin(formData)).unwrap();
            toast.success("Successfully Logged In!");
            console.log("Backend User:", response);
            navigate("/lead");
        } catch (error) {
            console.error("Google Signup Error:", error);
            toast.error("Google login failed");
        }
    };

    const handleAppleLogin = async () => {
        toast.success('Successfully toasted!')
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

            {showNotice && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center animate-fade-in">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            ⚠️ Initial Load Notice
                        </h3>
                        <p className="text-gray-600 mb-4">
                            This project is deployed on{" "}
                            <span className="font-semibold">Render</span>, so the
                            first load might take a few seconds. Please be patient
                            while the server wakes up.
                        </p>
                        <button
                            onClick={() => handleNotice()}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            <div style={{ backgroundColor: theme.primary }} className="flex flex-1 justify-center items-center bg-green-600 p-6">
                <div className="text-center text-white">
                    <img src={banner} alt="Wellvantage Logo" className="w-30 h-34 mx-auto mb-4" />
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center p-8 bg-white">
                <div className="w-full max-w-md text-center">
                    <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
                    <p className="text-gray-600 mb-6">
                        Welcome! Manage, Track and Grow your Gym with Wellvantage.
                    </p>

                    <button onClick={handleGoogleSignup} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-50 cursor-pointer" >
                        <img src={google} alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    <button onClick={handleAppleLogin} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-50 cursor-pointer">
                        <img src={apple} alt="Apple" className="w-9 h-5" />
                        Continue with Apple
                    </button>

                    <div className="text-gray-400 my-4">OR</div>

                    <button className="w-full bg-black text-white rounded-lg py-2 hover:bg-gray-800 cursor-pointer">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
