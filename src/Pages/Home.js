import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiUnrealengine, SiUnity,
        SiHtml5, SiCss3, SiJavascript, SiReact, 
        SiNodedotjs, SiFirebase, SiGit, SiGithub, SiGitlab } from "react-icons/si";
import { MdDownloadForOffline } from "react-icons/md";
import { MdEmail, MdOutlineDensityMedium } from "react-icons/md";
import ActionIcon from '../Components/ActionIcon';
import TextField from '../Components/TextField';
import SkillsTree from '../Components/SkillsTree';
import ProjectField from '../Components/ProjectField';
import Dialogue from '../Components/Dialogue/Dialogue';
import ActionButton from '../Components/ActionButton';
import ContactField from '../Components/ContactField';

// start of documents 
import UserBackground from "../Documents/Background.txt";
import BackgroundQuestionAndAnswers from "../Documents/BackgroundQuestionsnAnswers.json";
import AllProjectData from "../Documents/AllProject.json";
// end of documents 

import "../Styles/Home.css"

export default function Home()
{
    const [background, setBackground] = React.useState('');
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

    React.useEffect(() =>
    {
        const GetDocumentData = async () =>
        {
            fetch(UserBackground)
            .then(response => response.text())
            .then(data => setBackground(data))
            .catch(error => console.error('Error fetching the user background information:', error));
        }

        GetDocumentData()
    }, []);

    const AllSkills = () =>
    {
        return [
            {
                SkillIcon: SiUnrealengine,
                SkillName: "Unreal Engine",
                SkillDescription: `${new Date().getFullYear() - 2022}+ Years Of Development Using Blueprints And C++`,
                SkillAdditionalIcons:
                [{
                    title: "CPlus-Plus",
                    icon: SiCplusplus
                }]
            },
            {
                SkillIcon: SiUnity,
                SkillName: "Unity",
                SkillDescription: "Developed Several University Project Games Using C#",
                SkillAdditionalIcons:
                [{
                    title: "CSharp",
                    icon: SiCsharp
                }]
            },
            {
                SkillIcon: SiJavascript,
                SkillName: "Web_Development",
                SkillDescription: "Developed an anime ranking site using nodejs, react and firebase",
                SkillAdditionalIcons:
                [
                    {
                        title: "CSS3",
                        icon: SiCss3
                    },
                    {
                        title: "HTML5",
                        icon: SiHtml5
                    },
                    {
                        title: "React",
                        icon: SiReact
                    },
                    {
                        title: "Node.js",
                        icon: SiNodedotjs
                    },
                    {
                        title: "Firebase",
                        icon: SiFirebase
                    }
                ]                
            },
            {
                SkillIcon: SiGit,
                SkillName: "Agile Practitioner",
                SkillDescription: " Proficient in agile methodologies, ensuring streamlined workflows and effective collaboration",
                SkillAdditionalIcons:
                [
                    {
                        title: "GitHub",
                        icon: SiGithub
                    },
                    {
                        title: "GitLab",
                        icon: SiGitlab
                    }
                ]                
            }
        ]
    }

    return (
        <>
            <header>
                <nav className="NavBar">
                    <a href="#Home">Home</a>
                    <a href="#Background">Background</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </nav>
                <MdOutlineDensityMedium onClick={() => setOpenMobileMenu((prev) => !prev)} className='Mobile-Nav-Button' fontSize={"2rem"}/>
            </header>
            {openMobileMenu &&
            <div className='Mobile-NavBar-Backdrop'>
                <nav className='Mobile-NavBar'>
                    <a href="#Home">Home</a>
                    <a href="#Background">Background</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                    <MdOutlineDensityMedium onClick={() => setOpenMobileMenu((prev) => !prev)} className='Mobile-Nav-Button' fontSize={"2rem"}/>
                </nav>
            </div>
            }
            <div className='Wrapper'>
                <section id='Home'>
                    <div className='Home_Hero'>
                        <div className='Introduction'>
                            <div className='IntroText'>
                                <h1>Hey there!</h1>
                                <p>My name is <b>job Omondiale</b>, a Gameplay | Tools programmer with a deep love for all things gaming.
                                </p>
                                <div className='Actions'>
                                    <a target='blank' href='mailto:huntingj4@gmail.com?'>
                                        <ActionIcon Icon={MdEmail} Message={'Email'} />
                                    </a>
                                    <a target='blank' href='https://github.com/Lazy-Jason'>
                                        <ActionIcon Icon={FaGithub} Message={'GitHub'} />
                                    </a>
                                    <a target='blank' href='https://www.linkedin.com/in/job-omondiale-2a04b4278/'>
                                        <ActionIcon Icon={FaLinkedin} Message={'LinkedIn'} />
                                    </a>
                                    <a target='blank' href='https://lazy-studio.itch.io'>
                                        <ActionIcon Icon={FaItchIo} Message={'Itch.io'} />
                                    </a>
                                </div>
                                <div className='Call-Actions'>
                                    <a href="/JobOmondiale(Game Dev)Resume.pdf" target="_blank">
                                        <ActionButton Icon={<MdDownloadForOffline />} Message={"CV"}/>
                                    </a>
                                    <a href='#Contact'>Contact</a>
                                </div>
                            </div>
                            <img src='Hero_Profile_2.jpg' alt=''/>
                        </div>
                    </div>
                </section>
                <section id='Background'>
                    <TextField Title={"Background"} Message={background.split('  ')
                    } />
                    <Dialogue Options={BackgroundQuestionAndAnswers.Document} Speaker='Job Omondiale'/>
                </section>
                <section className='Skill' id='Skills'>
                    <SkillsTree Title={"Skills"} AllSkills={AllSkills()} />
                </section>
                <section id='Projects'>
                    <ProjectField Title={"Featured Projects"} Projects = {AllProjectData.Document} />
                </section>
                <section id='Contact'>
                    <ContactField />
                </section>
            </div>
        </>
  )
}
