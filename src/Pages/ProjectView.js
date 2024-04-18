import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "@mui/material"
import { FaBinoculars } from "react-icons/fa6"
import { useLocation } from 'react-router-dom'
import { PiKeyReturnFill } from "react-icons/pi"
import ActionButton from '../Components/ActionButton'
import TextField from '../Components/TextField'
import "../Styles/ProjectView.css"

export default function ProjectView()
{
    const { state } = useLocation()
    const navigate = useNavigate()

    if (!state || !state.ProjectInfo)
    {
        return <div>Not Found</div>
    }

    const { ProjectInfo } = state

    const OpenExternalLink = () =>
    {
        window.open(ProjectInfo.ProjectExternalLink, 'blank')
    }

    return (
        <div className='ProjectInfo_Container'>
            <Tooltip title={"Return"} arrow> 
                <div className='Return_Button' onClick={() => navigate('/')}>
                    <PiKeyReturnFill />
                </div>
            </Tooltip>
            <div className='Project_Conatiner' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }}>
                <div className='Project_Overlay'>
                <div className='Project_Content'>
                    <div className='Project_Content_Info'>
                        <h2>{ProjectInfo && ProjectInfo.ProjectTitle}</h2>
                        {ProjectInfo.ProjectTags &&
                            <div className='All_Tags'>
                                {ProjectInfo.ProjectTags && ProjectInfo.ProjectTags.map((Element, Id) =>
                                {
                                    return (<span className='Tag' id={Id}>{Element}</span>)
                                })}
                            </div>
                        }
                    </div>
                    {ProjectInfo.ProjectExternalLink && <ActionButton Icon={<FaBinoculars />} Message={"Check Out"} FontSize={1.2} OnClicked={OpenExternalLink} Link = {ProjectInfo.ProjectExternalLink}/>}
                </div>
                </div>
            </div>
            <div className='ProjectInfo_Contents'>
                {ProjectInfo.ProjectShowcaseVideo &&
                    <div className='Content_Box'>
                        <h1>Showcase Video</h1>
                        <iframe title="Project Showcase Video" src={ProjectInfo.ProjectShowcaseVideo} frameBorder="0" allowFullScreen/>
                    </div>
                }
                {ProjectInfo.ProjectOverview &&
                    <TextField Title={"Project Overview"} Message={ProjectInfo.ProjectOverview}/>
                }
                {ProjectInfo.ProjectRole &&
                    <TextField Title={"My Role"} Message={ProjectInfo.ProjectRole}/>
                }
                {ProjectInfo.TechnicalDetails &&
                    <TextField Title={"Technical Details"} Message={ProjectInfo.TechnicalDetails}/>
                }
                {ProjectInfo.Collaboration &&
                    <TextField Title={"Collaboration"} Message={ProjectInfo.Collaboration}/>
                }
                {ProjectInfo.Learnings &&
                    <TextField Title={"Learnings"} Message={ProjectInfo.Learnings}/>
                }
                {ProjectInfo.FuturePlans &&
                    <TextField Title={"Future Plans"} Message={ProjectInfo.FuturePlans}/>
                }
            </div>
        </div>
    )
}
