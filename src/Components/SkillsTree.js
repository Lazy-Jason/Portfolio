import React from 'react'
import Skill from './Skill'

export default function SkillsTree({Title, AllSkills = [{}]})
{
  return (
    <div className='TextField'>
        <h1>{Title}</h1>
        <div className='Skills_Container'>
            {AllSkills && 
                AllSkills.map((Element, Index) =>
                {
                    return <Skill SkillIcon={Element.SkillIcon && Element.SkillIcon} SkillName={Element.SkillName && Element.SkillName} SkillDescription={Element.SkillDescription && Element.SkillDescription} AdditonalIcons = {Element.SkillAdditionalIcons && Element.SkillAdditionalIcons} Id = {Index}/>
                })
            }
        </div>
    </div>
  )
}
