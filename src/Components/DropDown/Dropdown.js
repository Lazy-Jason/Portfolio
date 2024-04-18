import { useEffect, useState, useRef } from "react";
import { FaChevronUp, FaChevronDown, FaCheck } from "react-icons/fa6"
import "../../Styles/Dropdown.css"

const DropDown = ({title, children=[], maxShowTag = 1, allowMultpleSelection = false, onDataSelected, getInputValue}) =>
{
    const [open, setOpen] = useState(false)
    const [inputFocus, setinputFocus] = useState(false)
    const [filteredChildren, setfilteredChildren] = useState([])
    const [selectedChildren, setselectedChildren] = useState([])
    const [inputValue, setInputValue] = useState('')
  
    const dropdownRef = useRef()
    const buttonRef = useRef()
    const contentRef = useRef()

    const handleInputChange = (event) =>
    {
        let value = event.target.value
        if(!allowMultpleSelection) 
        {
            if(value === '')
            {
                onDataSelected && onDataSelected([])
            }
            setselectedChildren([])
        }
        setInputValue(value)
        filterChildrenByValue(value)
        getInputValue && getInputValue(value)
    }
    
    const filterChildrenByValue = (value) =>
    {
        if (!value)
        {
            // Reset to original children if value is empty
            setfilteredChildren([])
            return;
        }

        const newChildren = children.filter((element) =>
        {
            // Convert both value and element to lowercase for case-insensitive comparison
            return element.toLowerCase().includes(value.toLowerCase())
        })

        setfilteredChildren(newChildren)
    }
  
    const handleOptionClick = (option) =>
    {
        // If the option is already selected, remove it
        if (selectedChildren.includes(option))
        {
            setselectedChildren(selectedChildren.filter((child) => child !== option))
            onDataSelected && onDataSelected(selectedChildren.filter((child) => child !== option))
            setInputValue("")
            getInputValue && getInputValue("")
            setOpen(false)
            return
        }
        
        if(!allowMultpleSelection)
        {
            setInputValue(option)
            getInputValue && getInputValue(option)
            setselectedChildren([option])
            onDataSelected && onDataSelected([option])
            setOpen(false)
            return
        }
        // Set the input value to the selected option
        getInputValue && getInputValue("")
        setInputValue("")
        // Add the option to the selectedChildren array
        setselectedChildren((selectedChildren) => [...selectedChildren, option])
        // Close the dropdown

        onDataSelected && onDataSelected((selectedChildren) => [...selectedChildren, option])
    }

    const handleInputFocus = (e) =>
    {
        setOpen(true)
        setinputFocus(true)
    }

    const handleBlurInput = (e) =>
    {
        setinputFocus(false)
    }
    
    const getChildren = () =>
    {
        return open && filteredChildren.length > 0 ? filteredChildren : children;
    }

    useEffect(() =>
    {
      const handler = (event) =>
      {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        {
          setOpen(false)
        }
      }
  
      document.addEventListener("click", handler)
  
      return () =>
      {
        document.removeEventListener("click", handler)
      }
    }, [dropdownRef])
  
    return (
      <div ref={dropdownRef} className="dropdown">
        {/* Display selected children as tags */}
        {allowMultpleSelection && !inputFocus && selectedChildren.slice(0, maxShowTag).map((child, index) =>
        (
            <span key={index} className="tag">
                {child}
            </span>
        ))}
        {/* Display a "+" tag if there are more selected children */}
        {!inputFocus && selectedChildren.length > maxShowTag && <span className="tag">+{selectedChildren.length - maxShowTag}</span>}
        <input ref={buttonRef}
          type="search"
          autoComplete="off"
          placeholder={selectedChildren.length > 0? "" : title}
          className="search"
          onFocus={handleInputFocus}
          onBlur={handleBlurInput}
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className={`dropdown-menu ${open ? "open" : ""}`} ref={contentRef}>
        <p>{title}</p>
        {open &&
            getChildren().map((child) =>
            (
                <span key={child} onClick={() => handleOptionClick(child)}>
                    {child}
                    {selectedChildren.includes(child) && <FaCheck />}
                </span>
            ))}
        </div>
        {open? <FaChevronUp /> : <FaChevronDown />}
      </div>
    )
}

export
{
    DropDown
}