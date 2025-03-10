const AuthContext = {
    isLogin: () => {
        return AuthContext.getToken() !== null;
    },

    getContext: () => {
        const authContextRaw = localStorage.getItem("authContext");
        if (authContextRaw === undefined || authContextRaw === null) return null;

        const authContext = JSON.parse(authContextRaw);
        if (Date.now() >= Number(authContext.expiresIn || Number.POSITIVE_INFINITY)) return null;
        return authContext;
    },

    // return null or string
    getToken: () => {
        return AuthContext.getContext()?.token;
    },

    getId: () => {
        return AuthContext.getContext()?.id;
    },

    getEmail: () => {
        return AuthContext.getContext()?.email;
    },

    setContext: ({token, email, id, expiresIn}) => {
        localStorage.setItem("authContext", JSON.stringify({
            token,
            email,
            id,
            expiresIn
        }));
    }
};

export {AuthContext};
