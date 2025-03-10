import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { AuthApi } from "../../api/auth"
import {AuthContext} from "../../context";
import {
    Button,
    Typography,
    Link,
    TextField,
    Box,
} from "@mui/material";
export default function LoginPage() {
    const EMAIL_INPUT_ID = "email"
    const PASSWORD_INPUT_ID = "password"
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setEmailIsValid] = useState(true);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault()
        if (!isEmailValid) return false;

        setIsLoading(true);

        const email = document.getElementById(EMAIL_INPUT_ID).value;
        const password = document.getElementById(PASSWORD_INPUT_ID).value;
        try {
            const response = await AuthApi.login(email, password);
            setIsLoading(false);
            if (response.success) {
                const {token, user: {email, userId: id}, expiresIn} = response.data;
                AuthContext.setContext({token, email, id, expiresIn});
                navigate("/home");
            } else {
                // TODO: handle error better
                alert(response.data);
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }

        return false;
    };
    const onEmailChange = (e) => {
        const newEmail = e.target.value.trim();
        const isNewEmailValid = newEmail === "" || (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(newEmail);
        setEmailIsValid(isNewEmailValid);
    };
    return (
        <div className="flex w-screen h-screen overflow-hidden">
            <div className="flex-1 w-full h-full bg-blue-200 hidden sm:block">
                <img className="m-0 p-0 w-screen h-screen" src={logo}/>
            </div>
            <div className="flex-1 w-full h-full bg-blue-200 p-5 flex flex-col justify-center items-center">
                <Box onSubmit={handleSubmit} noValidate component="form" className="bg-white p-5 rounded-md flex flex-col gap-2">
                    <div className="text-center">
                        Sign in
                    </div>
                    <div>
                        <TextField
                          required
                          error={!isEmailValid}
                          id={EMAIL_INPUT_ID}
                          label="Email"
                          onChange={onEmailChange}
                        />
                    </div>
                    <div>
                        <TextField
                          required
                          id={PASSWORD_INPUT_ID}
                          label="Password"
                          type="password"
                        />
                    </div>
                    <Button type="submit" loading={isLoading} variant="contained">
                        Log in
                    </Button>
                    <div className="text-center mt-4">
                        <Typography variant="body2">
                            Don't have an account? &nbsp;
                            <Link
                                href="#"
                                onClick={() => navigate("/register")}
                                underline="hover"
                            >
                                Register
                            </Link>
                        </Typography>
                    </div>
                </Box>
            </div>
        </div>
    );
}
