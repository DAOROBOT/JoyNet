import {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import {
    IconButton,
    Typography,
    Input,
    Box,
} from "@mui/material";
import {
    MessageOutlined,
    KeyboardDoubleArrowDown,
    KeyboardDoubleArrowUp,
    ImageOutlined,
    Send,
    ArrowBack,
} from "@mui/icons-material";
export default function() {
    const MESSAGE_BOX_ID = "messageBox";
    const MESSAGE_SUBMIT_BTN_ID = "messageSubmitBtnId";
    const MESSAGE_INPUT_ID = "messageInputId";
    const TOGGLE_BTN_ID = "toggleBtnId";

    let isExpanded = true;

    let messageBoxPrevHeight = 0;
    let root = null;

    useEffect(() => {
        root = createRoot(document.getElementById(TOGGLE_BTN_ID));
        let messageBox = document.getElementById(MESSAGE_BOX_ID);
        messageBoxPrevHeight = messageBox.style.height;
        setExpandState(isExpanded);
    }, []);

    const setExpandState = (isExpanded) => {
        let messageBox = document.getElementById(MESSAGE_BOX_ID);
        if (!isExpanded) {
            messageBoxPrevHeight = messageBox.style.height;
            messageBox.style.height = 0;
            messageBox.style.opacity = 1;
            messageBox.style.visibility = 'hidden';
        } else {
            messageBox.style.height = messageBoxPrevHeight;
            // messageBox.style.width = messageBoxPrevWidth;
            messageBox.style.opacity = 1;
            messageBox.style.visibility = 'visible';
        }
    };

    
    const keyboardDoubleArrowDownElement = (
        <KeyboardDoubleArrowDown className="fill-[rgb(255_255_255)]!"/>
    );
    const keyboardDoubleArrowUpElement = (
        <KeyboardDoubleArrowUp className="fill-[rgb(255_255_255)]!"/>
    );
    const handleExpandToggle = (e) => {
        isExpanded = !isExpanded;
        setExpandState(isExpanded);
        if (isExpanded) {
            root.render(keyboardDoubleArrowDownElement);
        } else {
            root.render(keyboardDoubleArrowUpElement);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(document.getElementById(MESSAGE_INPUT_ID).value)
        document.getElementById(MESSAGE_INPUT_ID).value = "";
    };
    const handleKeydown = (e) => {
        if (!e.repeat && !e.shiftKey && e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById(MESSAGE_SUBMIT_BTN_ID).click();
        }
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit}
                 noValidate
                 className="w-85 h-fit rounded-[inherit] place-self-end flex flex-col justify-end bg-black inset-shadow-[0px_0px_3px_3px_rgba(255,255,255,1)]">
                <div className="w-full h-fit grow-0 flex flex-col justify-center bg-transparent rounded-[inherit]">
                    <div className="w-auto grow-1 box-border flex flex-row justify-start m-2 bg-transparent rounded-[inherit]">
                        <IconButton className="w-fit h-fit grow-0">
                            <ArrowBack className="fill-[rgb(255_255_255)]!"/>
                        </IconButton>
                        <div className="grow-1 h-full">
                            <Typography className="text-white place-item-center align-middle font-bold h-fit" variant="span">Tuong</Typography>
                        </div>
                        <IconButton id={TOGGLE_BTN_ID} onClick={handleExpandToggle} className="w-fit h-fit grow-0">
                            <KeyboardDoubleArrowDown className="fill-[rgb(255_255_255)]!"/>
                        </IconButton>
                    </div>
                </div>
                <div className="grow-1 flex flex-col w-full h-100"
                     id={MESSAGE_BOX_ID}
                     style={{"transition": "visibility .3s linear, opacity .3s ease, margin-top .3s ease, height .3s ease, width .3s ease"}}>
                    <div className="w-full h-0.5 grow-0 bg-[rgba(255,255,255,0.5)]"></div>
                    <div className="w-full grow-1 flex flex-col justify-center bg-transparent rounded-[inherit]">
                        <div className="w-auto h-full box-border m-2 rounded-[inherit]"></div>
                    </div>
                    <div className="w-full min-h-[3.2em] max-h-[9.4em] h-fit flex flex-col justify-center bg-transparent rounded-[inherit]">
                        <div className="w-full h-0.5 grow-0 bg-[rgba(255,255,255,0.5)]"></div>
                        <div className="w-auto box-border grow-1 overflow-auto flex flex-row justify-start m-2 bg-[rgb(32,35,39)] rounded-[inherit]">
                            <IconButton>
                                <ImageOutlined className="fill-[rgb(29_155_240)]!"/>
                            </IconButton>
                            <Input
                              className="h-full text-white! grow-1 overflow-auto overflow-x-hidden custom-scrollbar"
                              disableUnderline
                              multiline
                              placeholder="Start a new message"
                              id={MESSAGE_INPUT_ID}
                              label="Message"
                              onKeyDown={handleKeydown}
                            />
                            <IconButton id={MESSAGE_SUBMIT_BTN_ID} type="submit">
                                <Send className="fill-[rgb(29_155_240)]!"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}
