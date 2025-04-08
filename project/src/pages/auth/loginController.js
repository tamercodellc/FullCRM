import {deepSignal} from "deepsignal/react";
import {getFromSessionStore, updateSessionStore} from "@/util/sessionManager.js";

const LoginController = deepSignal({
    otp: "",
    count: 0,

    toast: null,

    handleVerificationCodeSubmit: (e) => {
        e.preventDefault();
        let code = getFromSessionStore('code');
        if (LoginController.otp === code) {
            alert("Email verified successfully!");
            return window.location.href = "/dashboard";
        } else {
            LoginController.count += 1;
            if (LoginController.count === 3)  {
                alert("Verification failed. Please try again later.");
                updateSessionStore('access_token', '');
                updateSessionStore('code', '');

                return window.location.href = "/";
            }
            alert("Invalid verification code. Please try again.");
        }
    }
});

export default LoginController;