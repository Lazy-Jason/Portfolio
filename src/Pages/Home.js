import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiUnrealengine, SiUnity,
        SiHtml5, SiCss3, SiJavascript, SiReact, 
        SiNodedotjs, SiFirebase, SiGit, SiGithub, SiGitlab } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import ActionIcon from '../Components/ActionIcon';
import TextField from '../Components/TextField';
import SkillsTree from '../Components/SkillsTree';
import ProjectField from '../Components/ProjectField';
import Dialogue from '../Components/Dialogue/Dialogue';
import "../Styles/Home.css"

export default function Home()
{
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

    const AllProjects = () =>
    {
        return[
            {
                ProjectTitle: "MIQUELLA'S END",
                ProjectThumbnail: "https://img.itch.zone/aW1nLzE1MjA0MDMxLnBuZw==/original/agPKs6.png",
                ProjectTags: ["3d", "Souls-Like"],
                ProjectShortDescription: "Miquella's End draws inspiration from the 2022 Game of the Year, Elden Ring, particularly focusing on the challenging boss fight featuring Malenia, Blade of Miquella.",
                ProjectFullDescription: "",
                ProjectOverview: 'Miquella\'s End draws inspiration from the 2022 Game of the Year, Elden Ring, particularly focusing on the challenging boss fight featuring Malenia, Blade of Miquella. In this project,'
                +' I aimed to recreate the intricate dodging mechanics and diverse attack patterns of the boss, including her distinctive ability to regenerate health after successfully landing hits on the player.'
                +'Several elements were incorporated to emulate the intensity of a boss fight, such as an additional stage with unique spells wielded by the boss, the integration of mini cutscenes to depict the entrance'
                +' and transition to the second stage of the battle, the introduction of Ash of War for the player, a combat combo system, and a leveling system.'
                +'Despite the inclusion of these features, refining the boss further proved challenging, and I wasn\'t able to achieve the desired level of sophistication with additional attack animations and spell variations as much as I had envisioned.',
                TechnicalDetails: "",
                Learnings: "",
                FuturePlans: "",
                ProjectShowcaseVideo:"https://drive.google.com/file/d/1XJAyaX3MvbvMa8J6b7tPz6NUcPEgB7eW/preview",
                ProjectExternalLink: "https://lazy-studio.itch.io/miquellas-end",
            },
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

    const QuestionAnswersArray =
    [
        {
          question: "What is your name",
          answer: "My name is Job Omondiale."
        },
        {
          question: "When were you born",
          answer: "I was born in Benin City Nigeria, May 29th 2003."
        },
        {
          question: "What do you know about OPP",
          answer: "Object Oriented Programming, or better yet OPP, is a programming principle of limiting the interaction of various parts of a program to a defined set of interfaces, and employing the concept of encapsulation, inheritance, and polymorphism to enhance code reusability, maintainability, and scalability. It emphasizes the organization of code into manageable, self-contained objects that interact with each other to accomplish tasks. OPP enables developers to model real-world entities and their behaviors in a software system, making it easier to understand and maintain complex systems."
        },
        {
          question: "Where did you go to university",
          answer: "I didn't attend university as I am an artificial intelligence."
        },
        {
          question: "What is your favorite project",
          answer: "I don't have personal preferences as I am a machine learning model."
        },
        {
          question: "What is your most valuable skill",
          answer: "I'm proficient in understanding and generating human-like text."
        },
        {
          question: "What do you do for fun (Hobbies)",
          answer: "I enjoy helping users and learning new things!"
        }
    ]
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
            </header>
            <div className='Wrapper'>
                <section id='Home'>
                    <div className='Home_Hero'>
                        <div className='Introduction'>
                            <div className='IntroText'>
                                <h1>Hey there!</h1>
                                <p>My name is <b>job Omondiale</b>, a gameplay and UI programmer with a deep love for all things gaming. 
                                Join me as I bring code to life, creating immersive experiences for players.
                                </p>
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
                            <img src='https://www.xtrafondos.com/wallpapers/goku-dragon-ball-super-ultra-instinct-10897.jpg' alt=''/>
                        </div>
                    </div>
                </section>
                <section id='Background'>
                    <TextField Title={"Background"} Message={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    <Dialogue Options={QuestionAnswersArray} Speaker='Job Omondiale'/>
                </section>
                <section className='Skill' id='Skills'>
                    <SkillsTree Title={"Skills"} AllSkills={AllSkills()} />
                </section>
                <section id='Projects'>
                    <ProjectField Title={"Featured Projects"} Projects = {AllProjects()} />
                </section>
                <section id='Contact'>
                    
                </section>
            </div>
        </>
  )
}
