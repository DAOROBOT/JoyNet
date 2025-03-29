import { useState, useEffect } from "react";
import { ArrowBack, CalendarMonth } from '@mui/icons-material';
import { UserApi } from "#/api/user"
import FloatOverlay from "#/components/FloatOverlay";
import InputForm from "#/components/InputForm";
import {
  Link,
  TextField,
  Box,
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

const TextWithSubText = ({mainText, subText}) => (
  <div className="flex flex-col justify-start text-start w-fit">
    <span className="align-center text-lg font-bold"> {mainText} </span>
    <span className="align-center text-gray-500 text-[0.75em]">{subText}</span>
  </div>
)

const SwitchItem = ({label, isSelected, onClick}) => (
  <div onClick={onClick}>
    <Button className={"normal-case! text-gray-500! hover:bg-gray-700! border-[0px] font-bold! " + (isSelected ? "text-white!" : "")}>
      {label}
    </Button>
    <div className={isSelected ? "w-full rounded h-[4px] bg-blue-400!" : "hidden"}></div>
  </div>
)

function stringOrDefault(value, defaultValue = "") {
  if (value === undefined || value === null) return defaultValue;
  return value.toString();
}

function UpdateProfileComponent({currentUserInfo, hidden = true}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
  };
  const formInfo = {
    Email: {
      defaultValue: currentUserInfo?.email,
      readonly: true,
    },
    Fullname: {
      defaultValue: currentUserInfo?.fullname || "",
      required: true,
    }
  };
  return (
    <FloatOverlay hidden={hidden}>
      <InputForm formTitle="Update profile" formInfo={formInfo} onSubmit={handleSubmit} isSubmitting={false}/>
    </FloatOverlay>
  );
}

export default function() {

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    UserApi.getUserInfo().then(res => {
      setUserInfo(res);
      console.log(res);
    }).catch(err => {
      alert(err);
    });
  }, [])

  const [switchCurrentItem, setSwitchCurrentItem] = useState(0);
  const switchItemClicked = (index) => {
    setSwitchCurrentItem(index);
  };
  const switches = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map((label, i) => <SwitchItem key={i}  index={i} label={label} isSelected={switchCurrentItem === i} onClick={() => switchItemClicked(i)} />);
  return (
    <div>
      <UpdateProfileComponent currentUserInfo={userInfo} hidden={false}/>
      <div className="flex justify-start gap-3 ps-3 pt-1 pb-1">
        <IconButton className="text-white bg-transparent">
          <ArrowBack fontSize="small" className="w-4! fill-[rgb(255_255_255)]!"/>
        </IconButton>
        <TextWithSubText mainText={stringOrDefault(userInfo?.fullname)} subText={`${userInfo?.posts} posts`}/>
      </div>
      <div className="w-full flex flex-col justify-end h-[200px] bg-gray-700!">
        <Avatar className="relative! w-26! h-26! border-3 border-black! ms-2 inset-y-13!"/>
      </div>
      <div className="w-full h-fit relative flex justify-end place-content-top">
        <Button variant="outlined" className="normal-case! border-1! border-[rgb(83,100,113)]! rounded-[20px]! h-fit p-2 place-self-top text-top! text-white! mt-2! me-2!">
          Set up profile
        </Button>
      </div>
      <div className="w-full mt-4 flex flex-col ps-4 gap-3">
        <TextWithSubText mainText={userInfo?.fullname} subText={userInfo?.email}/>
        <div className="flex text-gray-500! gap-2 text-center">
          <CalendarMonth fontSize="small"/>
          <span>{`Joined ${userInfo?.createdAt}`}</span>
        </div>
        <div className="flex text-gray-500! gap-10 text-center">
          <span className="flex gap-1 items-center">
            <span className="text-sm font-bold text-white!">16</span>
            <span className="text-sm">Following</span>
          </span>
          <span className="flex gap-1 align-middle items-center">
            <span className="text-sm font-bold text-white">16</span>
            <span className="text-sm">Followers</span>
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-evenly border-b-1 border-b-gray-500!">
          {switches}
        </div>
      </div>
    </div>
  );
}

