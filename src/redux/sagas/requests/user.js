import axios from 'axios';
import {getPosts} from "../../../constants";

export function reqestGetUser() {
    return axios.request({
        method: "GET",
        url: `${getPosts}todos/?_limit=20`,
    });
}
