import { Avatar } from '@material-ui/core'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactTimeago from "react-timeago"
import "./Chat.css"
import { selectImage } from './features/appSlice'
import { db } from './firebase';
function Chat({ id, username, timestamp, read , imageUrl, profilePic}) {
     const dispatch = useDispatch();
     const history =  useHistory();
    const open = ()=>{
        if(!read){
            dispatch(selectImage(imageUrl));
            db.collection("posts").doc(id).set({read: true,},{merge: true,});
            history.push('/chats/view');
        }
       
    }

    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>{!read && "Tap To View -"} {" "}<ReactTimeago date = {new Date(timestamp?.toDate()).toUTCString()} /> </p>
            </div>
            {!read && <StopRoundedIcon className="chat__redIcon" />}
        </div>
    )
}

export default Chat