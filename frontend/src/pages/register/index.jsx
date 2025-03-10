import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthApi } from "../../api/auth"
import logo from "../../assets/logo.png";
import {
    FormLabel,
    Switch,
    Button,
    Typography,
    Link,
    TextField,
    Box,
} from "@mui/material";
export default function RegisterPage() {
    const EMAIL_INPUT_ID = "email";
    const PASSWORD_INPUT_ID = "password";
    const CONFIRM_PASSWORD_INPUT_ID = "confirm-password";
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setEmailIsValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault()
        if (!isEmailValid || !isConfirmPasswordValid) return;

        setIsLoading(true);

        const email = document.getElementById(EMAIL_INPUT_ID).value;
        const password = document.getElementById(PASSWORD_INPUT_ID).value;
        if (password.trim() === "") return;

        try {
            const response = await AuthApi.register(email, password);
            setIsLoading(false);
            if (response.success) {
                navigate("/login");
            } else {
                // TODO: handle error better
                alert(response.data);
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }

        return;
    };
    const validateConfirmPassword = (e) => {
        const password = document.getElementById(PASSWORD_INPUT_ID).value;
        if (password === "") return setIsConfirmPasswordValid(true);
        const confirmPassword = document.getElementById(CONFIRM_PASSWORD_INPUT_ID).value;
        return setIsConfirmPasswordValid(password === confirmPassword);
    }
    const onEmailChange = (e) => {
        const newEmail = e.target.value.trim();
        const isNewEmailValid = newEmail === "" || (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(newEmail);
        setEmailIsValid(isNewEmailValid);
    };
    return (
        <div className="flex w-screen h-screen overflow-hidden">
            <div className="flex-1 w-full h-full bg-blue-200">
                <img className="m-0 p-0 w-screen h-screen" src={logo}/>
            </div>
            <div className="flex-1 w-full h-full bg-blue-200 p-5 flex flex-col justify-center items-center">
                <Box component="form" onSubmit={handleSubmit} className="bg-white p-5 rounded-md flex flex-col gap-2">
                    <div className="text-center">
                        Sign up
                    </div>
                    <div>
                        <TextField
                          error={!isEmailValid}
                          required
                          id={EMAIL_INPUT_ID}
                          label="Email"
                          onChange={onEmailChange}
                        />
                    </div>
                    <div>
                        <TextField
                          required
                          id={PASSWORD_INPUT_ID}
                          onChange={validateConfirmPassword}
                          label="Password"
                          type="password"
                        />
                    </div>
                    <div>
                        <TextField
                          required
                          error={!isConfirmPasswordValid}
                          id={CONFIRM_PASSWORD_INPUT_ID}
                          label="Confirm password"
                          onChange={validateConfirmPassword}
                          type="password"
                        />
                    </div>
                    <Button loading={isLoading} type="submit" variant="contained">
                        Sign up
                    </Button>
                    <div className="text-center mt-4">
                        <Typography variant="body2">
                            Already had an account? &nbsp;
                            <Link
                                href="#"
                                onClick={() => navigate("/login")}
                                underline="hover"
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </div>
                </Box>
            </div>
        </div>
    );
}

