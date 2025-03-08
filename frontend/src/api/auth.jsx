const AuthApi = {
    async login(email, password) {
        // TODO: call api from backend
        return {
            success: true,
            status_code: 200,
            data: {
                api_key: "",
                expire: ""
            }
        };
    },
    async register(email, password) {
        // TODO: call api from backend
    },
};

export {AuthApi}
