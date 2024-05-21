import React from 'react'
import { Tooltip } from "@mui/material"

export default function Skill({SkillIcon, SkillName = "", SkillDescription = "", AdditonalIcons = [], Id})
{
    return (
        <div className='Skill_Slot' id={Id}>
            <div className='Skill_Slot_Wrapper'>
                {SkillIcon && <SkillIcon />}
                <div className='Skill_Slot_Content'>
                    <h2>
                        {SkillName && SkillName}
                    </h2>
                    <span>
                        {SkillDescription && SkillDescription}
                    </span>
                </div>
            </div>
            <div className='Skill_Slot_Additional_Icons'>
                {AdditonalIcons &&
                    AdditonalIcons.map((Icons) =>
                    {
                        return (
                        <Tooltip style={{backgroundColor: "red", fontSize: '20px'}} title={Icons.title} arrow> 
                            <div style={{width: "100%", height: "100%"}}>
                                <Icons.icon />
                            </div>
                        </Tooltip>)
                    })
                }
            </div>
        </div>
    )
}
