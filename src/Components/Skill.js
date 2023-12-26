import React from 'react'

export default function Skill({SkillIcon, SkillName, SkillDescription, AdditonalIcons = [], Id})
{
  return (
    <div className='Skill_Slot' id={Id}>
        {SkillIcon && <SkillIcon />}
        <div className='Skill_Slot_Content'>
            <h2>
                {SkillName && SkillName}
            </h2>
            <span>
                {SkillDescription && SkillDescription}
            </span>
            <div className='Skill_Slot_Additional_Icons'>
                {AdditonalIcons &&
                    AdditonalIcons.map((Icon) =>
                    {
                        return <>{<Icon/>}</>
                    })
                }
            </div>
        </div>
    </div>
  )
}
