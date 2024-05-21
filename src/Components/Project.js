import React from 'react'
import { FaEye } from "react-icons/fa";
import ActionButton from './ActionButton'
import Skill from './Skill';
import { Tooltip } from "@mui/material"

const CollumView = ({ProjectInfo = {}, Id, OnProjectClicked}) =>
{
    const HandleClicked = () =>
    {
        OnProjectClicked && OnProjectClicked(Id)
        console.log(Id)
    }
    return (
        <div className='Project_Conatiner' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }} id={Id}>
            <div className='Project_Overlay'>
                <div className='Project_Content'>
                    <div className='Project_Content_Info'>
                        <h2>{ProjectInfo && ProjectInfo.ProjectTitle}</h2>
                        <p>{ProjectInfo && ProjectInfo.ProjectShortDescription}</p>
                    </div>
                    <ActionButton Message = {"View"} FontSize={1.5} OnClicked={HandleClicked}/>
                </div>
            </div>
        </div>
    )
}

const AlternativeView = ({ProjectInfo = {}, Id, OnProjectClicked}) =>
{
    const HandleClicked = () =>
    {
        OnProjectClicked && OnProjectClicked(Id)
    }


    return(
        <div className='Alternate_Wrapper'>
            <>
                <div className='Alternate_Thumbnail' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }} />
                <div className='Alternate_Content'>
                    <h1>{ProjectInfo.ProjectTitle}</h1>
                    <p>{ProjectInfo.ProjectShortDescription}</p>
                    <>
                    <div className='Skill_Slot_Additional_Icons'>
                        {ProjectInfo.ProjectMetaData?.Tools?.map((Element) =>
                            {
                                return (
                                    
                                <Tooltip style={{backgroundColor: "red", fontSize: '20px'}} title={Element.title} arrow> 
                                    <div style={{width: "100%", height: "100%"}}>
                                        {Element.icon && <Element.icon />}
                                    </div>
                                </Tooltip>)
                            })
                        }
                    </div>
                    </>
                    <ActionButton Icon={<FaEye />} Message = {"View"} FontSize={1.5} OnClicked={HandleClicked}/>
                </div>
            </>
        </div>
    )
}

export
{
    CollumView,
    AlternativeView
}