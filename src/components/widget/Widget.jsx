import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BreakfastDiningOutlined } from '@mui/icons-material';
const Widget = ({type}) => {

    let data;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlineOutlinedIcon className='icon'/>
                )
            };
        break;
        case "order":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:(
                <PersonOutlineOutlinedIcon className='icon'/>
            )
        }
        break;
        case "user":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:(
                <PersonOutlineOutlinedIcon className='icon'/>
            )
        }
        break;
        case "user":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:(
                <PersonOutlineOutlinedIcon className='icon'/>
            )
        }
        break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="couter">123132</span>
            <span className="link">See all users</span>


        </div>
        <div className="right">
            <div className="percentage negative">
                <KeyboardArrowUpOutlinedIcon/>
                20%
            </div>
            <PersonOutlineOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget