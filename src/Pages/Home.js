import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa';
import { SiCsharp, SiCplusplus, SiUnrealengine, SiUnity,
        SiHtml5, SiCss3, SiJavascript, SiReact, 
        SiNodedotjs, SiFirebase, SiGit, SiGithub, SiGitlab } from "react-icons/si";
import { MdDownloadForOffline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import ActionIcon from '../Components/ActionIcon';
import TextField from '../Components/TextField';
import SkillsTree from '../Components/SkillsTree';
import ProjectField from '../Components/ProjectField';
import Dialogue from '../Components/Dialogue/Dialogue';
import ExternalWidget from '../Components/ExternalWidget/ExternalWidget';
import ActionButton from '../Components/ActionButton';
import ContactField from '../Components/ContactField';
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
                ProjectCarouselImages:
                ["https://img.itch.zone/aW1nLzE1MjA0MDMxLnBuZw==/original/agPKs6.png",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzY1Ny5wbmc=/original/NWuqgo.png",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzY3Ny5wbmc=/original/el1BA1.png",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzY4MS5wbmc=/original/%2BYEy0B.png",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzY4Ni5wbmc=/original/Wl4l9T.png",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzcxMi5wbmc=/original/ShHH8S.png"
                ],
                ProjectMetaData:
                {
                    TeamCount: 1,
                    Duration: "3 Months",
                    TargetPlatform: "PC",
                    Tools: 
                    [{
                        title: "Unreal Engine",
                        // icon: SiUnrealengine
                    },
                    {
                        title: "CPlus-Plus",
                        // icon: SiCplusplus
                    },]
                },
                ProjectTags: ["3d", "Souls-Like"],
                ProjectShortDescription: "Miquella's End draws inspiration from the 2022 Game of the Year, Elden Ring, particularly focusing on the challenging boss fight featuring Malenia, Blade of Miquella.",
                ProjectFullDescription: "",
                ProjectOverview: 'Miquella\'s End draws inspiration from the 2022 Game of the Year, Elden Ring, particularly focusing on the challenging boss fight featuring Malenia, Blade of Miquella. In this project,'
                +' I aimed to recreate the intricate dodging mechanics and diverse attack patterns of the boss, including her distinctive ability to regenerate health after successfully landing hits on the player.'
                +'Several elements were incorporated to emulate the intensity of a boss fight, such as an additional stage with unique spells wielded by the boss, the integration of mini cutscenes to depict the entrance'
                +' and transition to the second stage of the battle, the introduction of Ash of War for the player, a combat combo system, and a leveling system.'
                +
                'Despite the inclusion of these features, refining the boss further proved challenging, and I wasn\'t able to achieve the desired level of sophistication with additional attack animations and spell variations as much as I had envisioned.',
                ProjectRole: ['In my role within the project, I took charge of the entire development process, focusing on functionalities such as a modular AI system. This system was designed to facilitate the seamless integration of additional AI' +
                'elements to enhance the overall gameplay experience. While I wasn\'t able to implement multiple AI agents, the foundational framework was established for future utilization. ',
                'Leveraging my expertise, I successfully introduced a basic modular ability (skill) system. This system proved instrumental in realizing the diverse character progression within the game, including both player characters and boss entities ' +
                'for various stages. Notable skills encompassed the boss\'s abilities such as single ice stalagmites, multiple ice stalagmites, tornadoes, lightning strikes, among others. Importantly, these skills were designed for easy addition and removal without disrupting the underlying code structure.',
                'I also ventured into optimization within Unreal Engine, as it was crucial to maintain a steady frame rate of 60fps, or around 35-40fps on the computers at the Game Academy within the university. Employing cost-effective techniques, such as ' +
                'disabling contact shadows on numerous lights and meticulously removing assets unseen by the player along their intended path to the boss, became essential. ' +
                'Additionally, I implemented strategies like generating LOD (Level of Detail) for all meshes used in the level to enhance performance. Among the most impactful solutions was minimizing the number of lights present in the scene and reducing ' +
                'their attenuation radius to prevent overlapping light sources. Furthermore, including a settings menu proved pivotal, recognizing that not all players could achieve optimal performance. This feature allowed users to customize various video ' +
                'and other settings to align with their system requirements.'],
                TechnicalDetails: "",
                Learnings: ['During my involvement in this project, I have significantly enhanced my comprehension of AI agents and the creation of intricate, agnostic behavioral patterns applicable to various enemies. These patterns range from simple, individual ' +
                'tasks, effectively segmented to manage project complexity (e.g., roaming, attacking, navigation, dying, adjusting movement speed, target prioritization, etc.), to modular attribute states that impart common traits to diverse enemies/entities (e.g., ' +
                'health, damage, skills, stages, etc.).',
                'Moreover, I have deepened my understanding of optimization techniques to enrich the user experience. While numerous approaches exist, incorporating a settings menu is indispensable, empowering users to personalize their experience to align with their preferences.'],
                FuturePlans: "",
                ProjectShowcaseVideo:"https://www.youtube.com/embed/C7oMlhuw_5E?si=rG8DGHBIn-7joV3I",
                ProjectExternalLink: "https://lazy-studio.itch.io/miquellas-end",
                EmbedLink: "https://itch.io/embed/2554990?border_width=0&amp;bg_color=15161b&amp;fg_color=9d9aaa&amp;link_color=eb4848&amp;border_color=363636",
            },
            {
                ProjectTitle: "Into The Gaol",
                ProjectThumbnail: "https://img.itch.zone/aW1hZ2UvMjA0OTQ4OS8xMjIzMDE2Ni5qcGc=/original/vFBSmT.jpg",
                ProjectCarouselImages:
                ["https://img.itch.zone/aW1hZ2UvMjA0OTQ4OS8xMjIzMDE2Ni5qcGc=/original/vFBSmT.jpg",
                "https://img.itch.zone/aW1hZ2UvMjU1NDk5MC8xNTIwMzY1Ny5wbmc=/original/NWuqgo.png",
                ],
                ProjectMetaData:
                {
                    TeamCount: 7,
                    Duration: "6 Months",
                    TargetPlatform: "PC",
                    Tools: 
                    [{
                        title: "Unity Engine",
                        // icon: SiUnity,
                    },
                    {
                        title: "CSharp",
                        // icon: SiCsharp,
                    }]
                },
                ProjectTags: ["2d", "Co-op", "Creepy", "Indie", "Pixel Art", "Puzzle", "Unity"],
                ProjectShortDescription: "For my final project in the first year of university, 'Into the Gaol,' I assumed the lead programmer role, taking charge as the sole active programmer. My primary responsibilities included crafting movement controls, managing interactions, facilitating transitions between different time periods, and providing tools for designers to implement screen fading when the player encounters obstructive structures.",
                ProjectFullDescription: "",
                ProjectOverview: "Into The Gaol is an eerie 2-player co-op puzzle mystery based in Bodmin Jail. Together, uncover the past of the mysterious jail by jumping through time and talking to spirits to avoid a deadly fate",
                ProjectRole: ['As the lead programmer, I held a pivotal role in guiding the project toward success. With sole responsibility as the active programmer, I focused on crafting essential components integral to the gameplay experience. ' +
                'This involved designing intricate movement controls tailored for a 2D isometric game, managing interactive elements, and orchestrating seamless transitions between different in-game time periods. Furthermore, I played a critical ' +
                'part in equipping the design team with tools necessary for integrating quest mechanics, player layering, and screen fading, all of which enhanced the overall player experience.',
                'Navigating technical challenges proved enlightening throughout the project. Learning Unity C# amidst the complexity of a sizable project, devoid of additional programmers, posed an initial obstacle. I delved into co-op ' +
                'mechanics, strategizing the optimal structure for controls and individual character roles to contribute meaningfully to the overarching narrative, thereby ensuring a smooth and engaging multiplayer experience. Additionally, ' +
                'devising a method to track player progress between levels presented a significant challenge, leading to a deeper understanding of singletons ( GameState/Game Manager ) and their optimal utilization in making critical systems ' +
                'aware of vital data spanning multiple levels/scenes.'],
                TechnicalDetails: '',
                Collaboration: ['The success of our project was contingent upon effective communication and collaboration, foundational pillars we consistently prioritized throughout our engagement. Our close partnership with designers and ' +
                'team members played a pivotal role in fostering a cohesive development environment. To facilitate this, we embraced agile methodology, conducting both in-person standup meetings and digital standups via Discord when physical ' +
                'attendance was impractical. GitHub served as our central repository, streamlining the organization and storage of project-related assets, underscoring our dedication to leveraging industry-standard tools',
                'Our workflow adhered to structured two-week sprints, during which we immersed ourselves in production activities. Following each sprint, we engaged in thorough discussions to evaluate our progress and pinpoint areas for ' +
                'enhancement. This iterative process enabled us to continually refine our approach and adapt to evolving project requirements.',
                'Regular peer reviews were integral to our collaborative framework, offering a platform for constructive criticism aimed at refining both our individual and team-based skills. This practice fostered an environment of ' +
                'continuous improvement, ensuring that our collective expertise and capabilities evolved in tandem with the project\'s evolving demands.'],
                Learnings: "",
                FuturePlans: "",
                ProjectShowcaseVideo:"",
                ProjectExternalLink: "https://intothegaol.itch.io/into-the-gaol",
                EmbedLink: "https://itch.io/embed/2049489?border_width=0&amp;bg_color=15161b&amp;fg_color=9d9aaa&amp;link_color=eb4848&amp;border_color=363636",
            },
            {
                ProjectTitle: "The Halloween Shooter",
                ProjectThumbnail: "https://img.itch.zone/aW1hZ2UvMTc3NTY4MS8xMDUxMzI5Ni5wbmc=/original/BtPNwf.png",
                ProjectMetaData:
                {
                    TeamCount: 1,
                    Duration: "1 Months",
                    TargetPlatform: "PC",
                    Tools: 
                    [{
                        title: "Unreal Engine",
                        // icon: SiUnrealengine
                    }]
                },
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
                                <p>My name is <b>job Omondiale</b>, a game programmer with a deep love for all things gaming. 
                                </p>
                                <div className='Actions'>
                                    <a target='blank' href='mailto:huntingj4@gmail.com?' subject='Hello'>
                                        <ActionIcon Icon={MdEmail} Message={'Email'} />
                                    </a>
                                    <a target='blank' href='https://github.com/jasonG006'>
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
                                    <ActionButton Icon={<MdDownloadForOffline />} Message={"CV"} />
                                    <a href='#Contact'>Contact</a>
                                </div>
                            </div>
                            <img src='Hero_Profile_2.jpg' alt=''/>
                        </div>
                    </div>
                </section>
                <section id='Background'>
                    <TextField Title={"Background"} Message=
                    {'I am a game programmer based in the UK, with a foundation in game development cultivated during my ' +
                    'time at college ( Colchester Institute ). Currently, I am pursuing my bachelor\'s degree ( BA ) in game ' +
                    'development programming at Falmouth University. Proficient in both Unreal Engine ( Blueprint and C++ ) ' +
                    'and Unity Game Engine ( C# ), I have actively contributed my skills to numerous projects over the years ' +
                    'of study. These experiences have equipped me with a diverse skill set and invaluable insights, ' +
                    'ultimately enhancing my capabilities as a developer. I firmly believe that my knowledge and dedication ' +
                    'make me an ideal candidate for any opportunity in the field.'} />
                    <Dialogue Options={QuestionAnswersArray} Speaker='Job Omondiale'/>
                </section>
                <section className='Skill' id='Skills'>
                    <SkillsTree Title={"Skills"} AllSkills={AllSkills()} />
                </section>
                <section id='Projects'>
                    <ProjectField Title={"Featured Projects"} Projects = {AllProjects()} />
                </section>
                <section id='Contact'>
                    <ContactField />
                </section>
            </div>
        </>
  )
}
