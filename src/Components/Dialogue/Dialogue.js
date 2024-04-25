import React from 'react'
import { ReactTyped } from "react-typed";
import ActionButton from '../ActionButton'
import { DropDown } from '../DropDown/Dropdown'
import "../../Styles/Dialogue.css"

export default function Dialogue({Options = [{}], Speaker =""})
{
  const [Answer, setAnswer] = React.useState('')
  const [Question, setQuestion] = React.useState('')
  const typeWriterRef = React.useRef()

  const Questions = Options.map((option, index) =>
  (
    option?.question
  ))

  const UpdateAnswerByQuestion = (NewQuestion = "") =>
  {
    if(NewQuestion === '') return
    Options.forEach(element =>
    {
      if(element.question === NewQuestion)
      {
        setAnswer(element.answer)
        return
      }
    })
  }

  const HandleOptionSelected = (data) =>
  {
    if(data === "")
    {
      setAnswer("")
      return
    }

    UpdateAnswerByQuestion(data[0])
  }

  const HandleSubmittion = (e) =>
  {
    e.preventDefault()

    if(!Question) return

    // submit the info to get an aswer
    UpdateAnswerByQuestion(Question)
  }
  
  return (
    <div className='Conversation-Wrapper'>
        <img className='Avatar' src='/Dialogue-Template-Image.png' alt='dialogue Avatar' />
        <div className='Dialogue-Box'>
          <h1 className='Dialogue-Speaker'>{Speaker || "No Speaker"}</h1>
          <div className='Dialogue-Content_Area'>
            <ReactTyped ref={typeWriterRef} strings={[Answer || "Pick a question to ask..."]} typeSpeed={10} backSpeed={30} loop={false}/>
            <form  onSubmit={HandleSubmittion} className='Dialogue-Pesponse-Box'>
              <DropDown getInputValue={(e) => setQuestion(e)} title={"Pick a queston"} children={Questions.length> 0 ? Questions : ["This is the default message if Options are not avaliable"]}/>
              <ActionButton Message={"Ask"} />
            </form>
          </div>
        </div>
    </div>
  )
}
