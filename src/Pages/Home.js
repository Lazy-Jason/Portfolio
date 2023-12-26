import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiUnrealengine, SiUnity,
        SiHtml5, SiCss3, SiJavascript, SiReact, 
        SiNodedotjs, SiFirebase, SiGit, SiGithub, SiGitlab } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import ActionIcon from '../Components/ActionIcon';
import TextField from '../Components/TextField';
import SkillsTree from '../Components/SkillsTree';
import "../Styles/Home.css"

export default function Home()
{
    const AllSkills = () =>
    {
        return [
            {
                SkillIcon: SiUnrealengine,
                SkillName: "Unreal Engine",
                SkillDescription: "2+ Years Of Development Using Blueprints And C++",
                SkillAdditionalIcons:[SiCplusplus]
            },
            {
                SkillIcon: SiUnity,
                SkillName: "Unity",
                SkillDescription: "Developed Several University Project Games Using C#",
                SkillAdditionalIcons:[SiCsharp]
            },
            {
                SkillIcon: SiJavascript,
                SkillName: "Web_Development",
                SkillDescription: "Developed an anime ranking site using nodejs, react and firebase",
                SkillAdditionalIcons:[SiCss3, SiHtml5, SiReact, SiNodedotjs,SiFirebase]
            },
            {
                SkillIcon: SiGit,
                SkillName: "Agile Practitioner",
                SkillDescription: " Proficient in agile methodologies, ensuring streamlined workflows and effective collaboration",
                SkillAdditionalIcons:[SiGithub, SiGitlab]
            }
        ]
    }
    return (
        <>
            <div className='Wrapper'>
                <div className='Home_Hero'>
                    <div className='Introduction'>
                        <div className='IntroText'>
                            <h1>Hey there!</h1>
                            <p>I'm <b>job Omondiale</b>, a gameplay and UI programmer with a deep love for all things gaming. Join me as I bring code to life, creating immersive experiences for players.</p>
                        </div>
                        <img src='https://www.xtrafondos.com/wallpapers/goku-dragon-ball-super-ultra-instinct-10897.jpg' alt=''/>
                    </div>
                    <div className='Actions'>
                        <a target='blank' href='mailto:huntingj4@gmail.com?' subject='Hello'>
                            <ActionIcon Icon={MdEmail} Message={'Email'} />
                        </a>
                        <a target='blank' href='https://github.com/jasonG006'>
                            <ActionIcon Icon={FaGithub} Message={'GitHub'} />
                        </a>
                        <a target='blank' href='https://www.linkedin.com/in/your-linkedin-profile'>
                            <ActionIcon Icon={FaLinkedin} Message={'LinkedIn'} />
                        </a>
                        <a target='blank' href='https://lazy-studio.itch.io'>
                            <ActionIcon Icon={FaItchIo} Message={'Itch.io'} />
                        </a>
                    </div>
                </div>
                <TextField Title={"Background"} Message={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                <SkillsTree Title={"Skills"} AllSkills={AllSkills()} />
            </div>
        </>
  )
}
