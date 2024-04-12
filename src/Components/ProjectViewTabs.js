import React, { useEffect, useState } from 'react'
import { Tooltip } from "@mui/material"
import { IoGrid } from "react-icons/io5";
import { MdOutlineShuffleOn } from "react-icons/md";
import { PiRowsFill } from "react-icons/pi";

export default function ProjectViewTabs({onTabSelected})
{
    const [currentViewIndex, setCurrentViewIndex] = useState(0)

    const ProjectViews = () =>
    {
        return(
        [{
            Title: "Grid View",
            Icon: <IoGrid />,
        },
        {
            Title: "Collum View",
            Icon: <PiRowsFill />,
        },
        {
            Title: "Alternating View",
            Icon: <MdOutlineShuffleOn />,
        }])
    }

    const GetView = (ViewIndex) =>
    {
        return ProjectViews()[ViewIndex]
    }

    const HandleClick = (index) =>
    {
        setCurrentViewIndex(index)
        onTabSelected&& onTabSelected(index, GetView(index))
    }

  return (
    <div className='Project_View_Formats'>
    {ProjectViews().map((view, index) =>
    (
        <Tooltip key={index} title={view.Title} arrow >
            <div onClick={() => HandleClick(index)} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
                {React.cloneElement(view.Icon, { className: currentViewIndex === index ? 'selected' : '' })}
            </div>
        </Tooltip>
    ))}
    </div>
  )
}
