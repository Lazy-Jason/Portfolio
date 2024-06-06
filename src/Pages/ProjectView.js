import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "@mui/material"
import { useLocation } from 'react-router-dom'
import { PiKeyReturnFill } from "react-icons/pi"
import TextField from '../Components/TextField'
import "../Styles/ProjectView.css"
import Carousel from '../Components/Carousel/Carousel'
import ExternalWidget from '../Components/ExternalWidget/ExternalWidget'

export default function ProjectView()
{
    const { state } = useLocation()
    const navigate = useNavigate()

    if (!state || !state.ProjectInfo)
    {
        return <div>Not Found</div>
    }

    const { ProjectInfo } = state
    
    const MetaData = ({title, Data}) =>
    {
        return(
            <div className='Meta_Container'>
                <div className='Meta-Left'>{title}</div>
                <div className='Meta-Right'>{Data}</div>
            </div>         
        )
    }

    return (
        <>
            <div className='ProjectInfo_Container'>
                <Tooltip title={"Return"} arrow> 
                    <div className='Return_Button' onClick={() => navigate('/')}>
                        <PiKeyReturnFill />
                    </div>
                </Tooltip>
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
                <div className='Project_Conatiner' >
                    <Carousel Images={ProjectInfo.ProjectCarouselImages} />
                    <div className='Project_Content'>
                        {ProjectInfo.EmbedLink &&
                        <>
                            <ExternalWidget title={ProjectInfo.ProjectTitle} src={ProjectInfo.EmbedLink}/>
                        </>
                        }
                    </div>
                </div>
                <div className='Project_MetaData'>
                    {ProjectInfo.ProjectMetaData.TeamCount && 
                    <MetaData title={"Team Size"} Data={ProjectInfo.ProjectMetaData.TeamCount}/>
                    }
                    {ProjectInfo.ProjectMetaData.Duration && 
                    <MetaData title={"Project Duration"} Data={ProjectInfo.ProjectMetaData.Duration}/>
                    }
                    {ProjectInfo.ProjectMetaData.TargetPlatform && 
                    <MetaData title={"Project Platform"} Data={ProjectInfo.ProjectMetaData.TargetPlatform}/>
                    }
                    {ProjectInfo.ProjectMetaData.Tools && 
                    <MetaData title={"Tools | Engine"} Data=
                    {
                        ProjectInfo.ProjectMetaData.Tools.map((Element) =>
                        {
                            return(
                                <>
                                    <span>{Element.title}</span>
                                    <span> | </span>
                                </>
                            )
                        })
                    }/>
                    }
                </div>
                <div className='ProjectInfo_Contents'>
                    {ProjectInfo.ProjectOverview &&
                        <TextField Title={"Project Overview"} Message={ProjectInfo.ProjectOverview.split("  ")}/>
                    }
                    <div className='Content_Box'>
                        {!ProjectInfo.ProjectShowcaseVideo?
                        (
                            <div className='Project-Showcase-Video-Skeleton'>
                                <p> No Showcase Video</p>
                            </div>
                        ) :
                        (
                            <iframe title="Project Showcase Video" src={ProjectInfo.ProjectShowcaseVideo} frameBorder="0" allowFullScreen/>
                        )}
                    </div>
                    {ProjectInfo.ProjectRole &&
                        <TextField Title={"My Role"} Message={ProjectInfo.ProjectRole}/>
                    }
                    {ProjectInfo.TechnicalDetails &&
                        <TextField Title={"Technical Details"} Message={ProjectInfo.TechnicalDetails.split("  ")}/>
                    }
                    {ProjectInfo.Collaboration &&
                        <TextField Title={"Collaboration"} Message={ProjectInfo.Collaboration}/>
                    }
                    {ProjectInfo.Learnings &&
                        <TextField Title={"Learnings"} Message={ProjectInfo.Learnings}/>
                    }
                    {ProjectInfo.FuturePlans &&
                        <TextField Title={"Future Plans"} Message={ProjectInfo.FuturePlans.split("  ")}/>
                    }
                </div>
            </div>
        </>
    )
}
