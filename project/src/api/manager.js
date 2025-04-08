import axios from "axios";
import {getFromSessionStore, updateSessionStore} from "@/util/sessionManager.js";

const baseUrl = "http://localhost:8000/api/";

const post = async (url) => {
    let {data} = await axios.post(baseUrl + url, {}, {
        headers: {
            "Content-Type": "application/json",
            'x-access-token': getFromSessionStore('access_token')
        },
    });

    debugger

    if (data.status === 200) {
        if (data?.auth?.login) {
            updateSessionStore('access_token', data.data.user_token);
            updateSessionStore('code', data.data.user_code);
            return;
        }

        if (!data.auth) {
            alert("Session expired. Please log in again.");
            return window.location.href = "/";
        }

    } else {
        alert(data.data.message || "Failed to create account.");
    }
}

export default {
    post
}