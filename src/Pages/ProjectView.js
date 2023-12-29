import React from 'react'
import { useLocation } from 'react-router-dom'
import ActionButton from '../Components/ActionButton'
import "../Styles/ProjectView.css"

export default function ProjectView()
{
    const { state } = useLocation()

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
            <div className='ProjectInfo_Hero' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }}>
                <div className='Project_Overlay'>
                <div className='Project_Content'>
                    <div className='Project_Content_Info'>
                        <h1>{ProjectInfo && ProjectInfo.ProjectTitle}</h1>
                    </div>
                    {ProjectInfo.ProjectExternalLink && <ActionButton Message={"Check Out"} FontSize={1.2} OnClicked={OpenExternalLink} Link = {ProjectInfo.ProjectExternalLink}/>}
                </div>
                </div>
            </div>
            <div className='ProjectInfo_Contents'>
                {ProjectInfo.ProjectOverview &&
                    <div className='Content_Box'>
                        <h1>Project Overview</h1>
                        <p dangerouslySetInnerHTML={{ __html: ProjectInfo.ProjectOverview}} />
                        <span>{`For a hands-on experience, feel free to explore ${ProjectInfo.ProjectTitle} on `}<a href= {ProjectInfo.ProjectExternalLink && ProjectInfo.ProjectExternalLink} target='blank'>itch.io</a></span>
                    </div>
                }
                {ProjectInfo.ProjectRole &&
                    <div className='Content_Box'>
                        <h1>My Role</h1>
                        <p dangerouslySetInnerHTML={{ __html: ProjectInfo.ProjectRole}} />
                    </div>
                }
                {ProjectInfo.TechnicalDetails &&
                <div className='Content_Box'>
                    <h1>Technical Details</h1>
                    <p dangerouslySetInnerHTML={{ __html: ProjectInfo.TechnicalDetails }}/>
                </div>
                }
                {ProjectInfo.Collaboration &&
                <div className='Content_Box'>
                    <h1>Collaboration</h1>
                    <p dangerouslySetInnerHTML={{ __html: ProjectInfo.Collaboration}} />
                </div>
                }
                {ProjectInfo.Learnings &&
                    <div className='Content_Box'>
                        <h1>Learnings</h1>
                        <p dangerouslySetInnerHTML={{ __html: ProjectInfo.Learnings}} />
                    </div>
                }
                {ProjectInfo.FuturePlans &&
                    <div className='Content_Box'>
                        <h1>Future Plans</h1>
                        <p dangerouslySetInnerHTML={{ __html: ProjectInfo.FuturePlans}} />
                    </div>
                }
                {ProjectInfo.ProjectShowcaseVideo &&
                    <div className='Content_Box'>
                        <h1>Showcase</h1>
                        <iframe title="Project Showcase Video" src={ProjectInfo.ProjectShowcaseVideo} frameBorder="0" allowFullScreen/>
                    </div>
                }
                {ProjectInfo.ProjectTags &&
                    <div className='Content_Box'>
                        <h1>Tags</h1>
                        <div className='All_Tags'>{ProjectInfo.ProjectTags &&
                        ProjectInfo.ProjectTags.map((Element, Id) =>
                        {
                            return (<span className='Tags' id={Id}>{Element}</span>)
                        })}</div>
                    </div>
                }
            </div>
        </div>
    )
}
