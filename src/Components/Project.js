import React from 'react'
import { FaEye } from "react-icons/fa";
import ActionButton from './ActionButton'

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

    const IsOdd = Id % 2;

    console.log(ProjectInfo)
    return(
        <div className='Alternate_Wrapper'>
            {IsOdd?
            (
            <>
                <div className='Alternate_Thumbnail' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }} />
                <div className='Alternate_Content'>
                    <h1>{ProjectInfo.ProjectTitle}</h1>
                    <p>{ProjectInfo.ProjectShortDescription}</p>
                    <ActionButton Icon={<FaEye />} Message = {"View"} FontSize={1.5} OnClicked={HandleClicked}/>
                </div>
            </>
            ) : (
            <>
                <div className='Alternate_Content'>
                    <h1>{ProjectInfo.ProjectTitle}</h1>
                    <p>{ProjectInfo.ProjectShortDescription}</p>
                    <ActionButton Icon={<FaEye />} Message = {"View"} FontSize={1.5} OnClicked={HandleClicked}/>
                </div>
                <div className='Alternate_Thumbnail' style ={{ backgroundImage: `url("${ProjectInfo.ProjectThumbnail}")` }} />
            </>
            )}
        </div>
    )
}

export
{
    CollumView,
    AlternativeView
}