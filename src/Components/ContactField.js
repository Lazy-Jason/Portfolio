import React from 'react'
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa'
import { IoSend } from "react-icons/io5"
import { AiFillInstagram } from "react-icons/ai"
import { IoMail } from "react-icons/io5"
import emailjs from '@emailjs/browser';
import ActionButton from '../Components/ActionButton'

export default function ContactField()
{
    const [ form, setForm ] = React.useState
    ({
        Name: '',
        Email: '',
        Message: '',
    })

    const AllContactInformation =
    [{
        ContactIcon: <FaPhoneAlt />,
        ContactData: '+442943059393',
        type: 'Normal'
    },
    {
        ContactIcon: <IoMail />,
        DisplayText: 'huntingj4@gmail.com',
        ContactData: 'huntingj4@gmail.com',
        type: 'Mail'
    },
    {
        ContactIcon: <AiFillInstagram />,
        DisplayText: 'not_Jasonx',
        ContactData: 'https://www.instagram.com/not_Jasonx',
        type: 'Link'
    },
    {
        ContactIcon: <FaLinkedin />,
        DisplayText: 'Job Omondiale',
        ContactData: 'https://www.linkedin.com/in/job-omondiale-2a04b4278/',
        type: 'Link'
    }]

    const ExtractContactInformationByType = ( Information ) =>
    {
        if(!Information) return

        switch (Information.type)
        {
            case 'Normal':
                return <p>{Information.ContactData}</p>
            case 'Mail':
                return <a href={`mailtomailto:${Information.ContactData}`}>{Information.DisplayText}</a>
            case 'Link':
                return <a href={Information.ContactData}>{Information.DisplayText}</a>
            default:
            return null
        }

    }

    const HandleSend = async (e) => 
    {
        if (!e) return;
        e.preventDefault()

        // if one of these fields isn't recorded then return
        if (!form.Name || !form.Message || !form.Email) return;
        try 
        {
            const templateParams =
            {
                from_name: form.Name,
                from_email: form.Email,
                message: form.Message,
                to_email: 'huntingj4@gmail.com',
            };

            const response = await emailjs.send
            (
                'service_o4lxsyf',
                'template_yyu2boj',
                templateParams,
                'ub57aHG4fCo2R1-YZ'
            );

            if (response.status === 200) 
            {
                setForm
                ({
                    Name: '',
                    Email: '',
                    Message: '',
                });
                alert('Message sent successfully!');
            }
        } 
        catch (error) 
        {
            alert('Failed to send message. Please try again.');
        }
    }

    return (
        <div className='TextField'>
            <h1>Contact</h1>
            <div className='Contact-Container'>
                <div className='Contact-Container-Hero' style={{backgroundImage: `URL("Hero_Profile.jpg")`}}>
                    <div className='Project_Overlay'>
                        <div className='All-Con., tact-Method'>
                            {AllContactInformation.map((element, index) =>
                            (
                                <div className='Contact-Method' key={index} id={index}>
                                    {element.ContactIcon}
                                    {ExtractContactInformationByType(element)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <form className='Contact-Input-Container' onSubmit={HandleSend}>
                    <input placeholder='your name' required type='name' value={form.Name} onChange={(e) => setForm({...form, Name: e.target.value})} />
                    <input placeholder='your email' required type='email' value={form.Email} onChange={(e) => setForm({...form, Email: e.target.value})} />
                    <textarea placeholder='your message' required value={form.Message} onChange={(e) => setForm({...form, Message: e.target.value})} />
                    <ActionButton Icon={<IoSend />} Message={"send"} OnClicked={HandleSend}/>
                </form>
            </div>
        </div>
    )
}
