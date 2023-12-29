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
import ProjectField from '../Components/ProjectField';

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

    const AllProjects = () =>
    {
        return[
            {
                ProjectTitle: "Into The Gaol",
                ProjectThumbnail: "https://img.itch.zone/aW1hZ2UvMjA0OTQ4OS8xMjIzMDE2Ni5qcGc=/original/vFBSmT.jpg",
                ProjectTags: ["2d", "Co-op", "Creepy", "Indie", "Pixel Art", "Puzzle", "Unity"],
                ProjectShortDescription: "For my final project in the first year of university, 'Into the Gaol,' I assumed the lead programmer role, taking charge as the sole active programmer. My primary responsibilities included crafting movement controls, managing interactions, facilitating transitions between different time periods, and providing tools for designers to implement screen fading when the player encounters obstructive structures.",
                ProjectFullDescription: "",
                ProjectOverview: "Into The Gaol is an eerie 2-player co-op puzzle mystery based in Bodmin Jail. Together, uncover the past of the mysterious jail by jumping through time and talking to spirits to avoid a deadly fate",
                ProjectRole: "As the lead programmer, I assumed a pivotal role in steering the project to success. Being the sole active programmer, my responsibilities encompassed crafting essential components that defined the gameplay. This included developing intricate movement controls, managing interactive elements, and orchestrating seamless transitions between different in-game time periods. Additionally, I played a crucial role in providing tools to the design team, enabling the Integrating dialogue systems, quest mechanics, and screen fading mechanisms to elevate the player's overall experience.",
                TechnicalDetails: `The technical aspects of the project involved leveraging Unity, C#, and pixel art techniques to bring the game to life. I delved into the complexities of co-op mechanics, ensuring a smooth and engaging multiplayer experience. Overcoming challenges, I implemented innovative solutions to enhance user interaction and maintain optimal`,
                Collaboration: `The success of the project hinged on effective communication and collaboration, foundational elements that we prioritized throughout our engagement. Our close collaboration with designers and team members played a pivotal role in maintaining a cohesive development environment. To achieve this, we implemented agile methodology, conducting both in-person standup meetings and digital standups via Discord when physical attendance was impractical. GitHub served as our central repository, enabling us to efficiently organize and store project-related assets, reinforcing our commitment to utilizing industry-standard tools.
                <br><br>Our workflow was structured around two-week sprints, during which we immersed ourselves in production activities. Subsequently, we conducted comprehensive discussions to assess our achievements and identify areas for improvement. This iterative process allowed us to continually refine our approach and adapt to evolving project requirements.
                <br><br>Regular peer reviews were integral to our collaborative framework, providing a platform for constructive criticism aimed at enhancing both our personal and team-based skills. This practice fostered an environment of continuous improvement, ensuring that our collective expertise and capabilities evolved in tandem with the demands of the project.`,
                Learnings: "",
                FuturePlans: "",
                ProjectShowcaseVideo:"",
                ProjectExternalLink: "https://intothegaol.itch.io/into-the-gaol",
            },
            {
                ProjectTitle: "The Halloween Shooter",
                ProjectThumbnail: "https://img.itch.zone/aW1hZ2UvMTc3NTY4MS8xMDUxMzI5Ni5wbmc=/original/BtPNwf.png",
                ProjectTags: ["3d", "Halloween", "Creepy", "Indie", "Zombies", "UnrealEngine"],
                ProjectShortDescription: "Crafting The Halloween Shooter as a personal challenge during the Halloween of 2022, I delved into unfamiliar territory, learning concepts such as Inheritance, AI, Progression Saving, Infinite Waves, and Menu Systems. The skills gained have since enriched my future projects.",
                ProjectFullDescription: "",
                ProjectOverview: "",
                ProjectRole: "",
                TechnicalDetails: "",
                Collaboration: "",
                Learnings: "",
                FuturePlans: "",
                ProjectShowcaseVideo:"https://www.youtube.com/embed/wwkMhxL67G8?si=htL2-qDtVtrKNNBN",
                ProjectExternalLink: "https://lazy-studio.itch.io/the-halloween-shooter",
            },
        ]
    }
    return (
        <>
            <div className='Wrapper'>
                <section id='Home'>
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
                </section>
                <section id='Background'>
                    <TextField Title={"Background"} Message={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </section>
                <section id='Skills'>
                    <SkillsTree Title={"Skills"} AllSkills={AllSkills()} />
                </section>
                <section id='Projects'>
                    <ProjectField Title={"Featured Projects"} Projects = {AllProjects()} />
                </section>
            </div>
        </>
  )
}
