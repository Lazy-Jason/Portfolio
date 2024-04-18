import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CollumView, AlternativeView } from './Project'
import ProjectViewTabs from './ProjectViewTabs'

export default function ProjectField({Title, Projects = []})
{
    const navigate = useNavigate()
    const [currentViewIndex, setCurrentViewIndex] = React.useState(0)

    const HandleClicked = (Id) =>
    {
        navigate(`/ProjectView/${Projects[Id].ProjectTitle}`, {state: {ProjectInfo: Projects[Id]}})
    }

    const ProjectCollumView = () => 
    {
        console.log("ProjectCollumView")
        return Projects && Projects.map((Element, Id) =>
        {
            return (<CollumView Key={Id} ProjectInfo={Element} Id={Id} OnProjectClicked={HandleClicked}/>)
        })
    }

    const ProjectAlternativeView = () =>
    {
        console.log("ProjectAlternativeView")
        return Projects && Projects.map((Element, Id) =>
        {
            return (<AlternativeView key={Id} ProjectInfo={Element} Id={Id} OnProjectClicked={HandleClicked}/>)
        })
    }

    const ViewMapping = () =>
    {
        switch (currentViewIndex)
        {
            case 0:
                return ProjectCollumView();
            case 1:
                return ProjectAlternativeView();
            default:
                return null;
        }
    }

    const HandleViewTabSelected = (Index, ViewData) =>
    {
        setCurrentViewIndex(Index)
    }
    return (
        <div className='TextField'>
            <div className='Project_View_Tabs'>
                <h1>{Title && Title}</h1>
                <ProjectViewTabs onTabSelected={HandleViewTabSelected}/>
            </div>
            <div className='Project_Wrapper'>
                {ViewMapping()}
            </div>
        </div>
    )
}
