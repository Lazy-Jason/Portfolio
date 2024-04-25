import React from 'react'
import { FaCircleLeft,FaCircleRight } from "react-icons/fa6";
import "../../Styles/Carousel.css"

export default function Carousel({ Images = [null] })
{
    const  [ Index, setIndex ] = React.useState(0)
    
    const HandleNextImage = () =>
    {
        if(HandleImageChangeValidation())
        {
            setIndex( Index + 1 )
        }
    }

    const HandlePreviousImage = () =>
    {
        if(HandleImageChangeValidation())
        {
            setIndex( Index -1 < 0 ? Images.length -1 : Index - 1 )
        }
    }

    const HandleImageChangeValidation = () =>
    {
        const bAllowImageChange = Images.length > 1

        if( !bAllowImageChange ) return false

        if( Index === Images.length-1 )
        {
            setIndex(0)
            return false
        }
        return true
    }

    const HandleTransitionToIndex = (Index) =>
    {
        // if we exit the range of indexs
        if( Index < 0 || Index > Images.length -1 ) return 

        setIndex(Index)
    }

    console.log(Images)

  return (
    <>
        {Images.length > 0 &&
            <div className='Carousel-Container'>
                <div className='Carousel-Image-Container'>
                    {Images && Images.map((Element) =>
                    {
                        return (
                            <>
                                <img key={Element} className='Carousel-Image' src={Element} alt='Carousel-Element' style={{ translate: `${-100 * Index}%`}} />
                            </>
                        )
                    })}
                </div>
                <div className='Project_Overlay' />
                <div className='Carousel-SliderContainer'>
                    {Images && Images.map((Element, NewIndex) =>
                    {
                        return(
                            <div className={`Carousel-Slider ${NewIndex === Index ? "Open" : ""}`} onClick={() => HandleTransitionToIndex(NewIndex)}/>
                        )
                    })}
                </div>
                {Images.length > 1 &&
                <>
                    <FaCircleLeft onClick={HandlePreviousImage} className='Carousel-Button Left'/>
                    <FaCircleRight onClick={HandleNextImage} className='Carousel-Button Right' />
                </>
                }
            </div>
        }
    </>
  )
}
