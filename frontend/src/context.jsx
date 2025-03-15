const storageKey = "authContext";
const AuthContext = {
    isLogin: () => {
        const context = AuthContext.getContext();
        if (context === null) return false;
        return context.expiresIn > Date.now();
    },

    getContext: () => {
        const authContextRaw = localStorage.getItem(storageKey);
        if (authContextRaw === undefined || authContextRaw === null) return null;

        const authContext = JSON.parse(authContextRaw);
        if (Date.now() >= Number(authContext.expiresIn || Number.POSITIVE_INFINITY)) return null;
        return authContext;
    },

    // return null or string
    getToken: () => {
        const token = AuthContext.getContext()?.token;
        if (token === undefined) return null;
        return token;
    },

    getId: () => {
        const id = AuthContext.getContext()?.id;
        if (id === undefined) return null;
        return id;
    },

    getEmail: () => {
        const email = AuthContext.getContext()?.email;
        if (email === undefined) return null;
        return email;
    },

    setContext: ({token, email, id, expiresIn}) => {
        localStorage.setItem(storageKey, JSON.stringify({
            token,
            email,
            id,
            expiresIn
        }));
    }
};

export {AuthContext};
