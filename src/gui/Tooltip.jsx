import {useState} from 'react'
import {Span} from "./basic"

export const Tooltip = ({desc, text, ...props}) => {

  const [isShown, setIsShown] = useState(false)
  
  const toggleHandler = () => setIsShown(p => !p)

  return (
    <Span display='inline-block' onMouseEnter={toggleHandler} onMouseLeave={toggleHandler} {...props} fw='bold' style={{textTransform: 'uppercase'}} tooltip>
        {text}
        <Span display={isShown ? 'inline' : 'none'} color='white' bgcolor='black' br='0 0.5rem 0 0.5rem' pos='absolute' top='95%' left='0%'>
        {desc}
        </Span>
    </Span>
  )
}


