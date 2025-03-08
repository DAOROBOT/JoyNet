const AuthContext = {
    isLogin: () => {
        return AuthContext.getToken() !== null;
    },

    // return null or string
    getToken: () => {
        const authContextRaw = localStorage.getItem("authContext");
        if (authContextRaw === undefined || authContextRaw === null) return null;

        const authContext = JSON.parse(authContext);
        if (Date.now() >= Number(authContext.expiresIn || Number.POSITIVE_INFINITY)) return null;
        return authContext.token;
    },

    setToken: (token, expiresIn) => {
        localStorage.setItem("authContext", JSON.stringify({
            token,
            expiresIn
        }));
    }
};

export {AuthContext};
