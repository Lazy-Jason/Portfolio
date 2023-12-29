import React from 'react'
import ActionButton from './ActionButton'

export default function Project({ProjectInfo = {}, Id, OnProjectClicked})
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
