import {postApi} from "./helper";
const AuthApi = {
    async login(email, password) {
        return await postApi("auth/login", JSON.stringify({email, password}), false);
    },
    async register(email, password) {
        return await postApi("auth/register", JSON.stringify({email, password}), false);
    },
};

export {AuthApi}
