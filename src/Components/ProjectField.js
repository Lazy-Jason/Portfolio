import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Project from './Project'

export default function ProjectField({Title, Projects = []})
{
    const navigate = useNavigate()

    const HandleClicked = (Id) =>
    {
        navigate(`/ProjectView/${Projects[Id].ProjectTitle}`, {state: {ProjectInfo: Projects[Id]}})
    }
    return (
        <div className='TextField'>
            <h1>{Title && Title}</h1>
            {Projects && Projects.map((Element, Id) =>
            {
                return (<Project ProjectInfo={Element} Id={Id} OnProjectClicked={HandleClicked}/>)
            })}
        </div>
    )
}
