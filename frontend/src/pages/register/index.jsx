import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setEmailIsValid] = useState(true);
    const handleClick = () => {
        setIsLoading(!isLoading);
    };
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
                <Box component="form" className="bg-white p-5 rounded-md flex flex-col gap-2">
                    <div className="text-center">
                        Sign up
                    </div>
                    <div>
                        <TextField
                          error={!isEmailValid}
                          required
                          id="outlined-required"
                          label="Email"
                          onChange={onEmailChange}
                        />
                    </div>
                    <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Password"
                          type="password"
                        />
                    </div>
                    <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Confirm password"
                          type="password"
                        />
                    </div>
                    <Button loading={isLoading} onClick={handleClick} variant="contained">
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

