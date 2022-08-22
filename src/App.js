import './App.css';
import {useState, useEffect} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {AddCircle, Send, RemoveCircle} from '@mui/icons-material';
import {motion} from 'framer-motion'




const App = () => {



const [count,setCount] = useState(0);
const [animate,setAnimate] =useState('');
const [transition,setTransition] =useState('');
// const [initial, setInitial] = useState('')

function countAdd(){
          // setInitial({opacity:0.4})
          setAnimate({y:0 })
          setTransition({from:-30, duration:0.5, type:'spring', bounce:0.5})

          setTimeout(()=>{
            // setInitial('')
            setAnimate('')
            setTransition('')
          },500)

  return setCount(count+1)
}
function countSubtract(){
          // setInitial({opacity:1})
          setAnimate({y:0})
          setTransition({from:30, duration:0.5, type:'spring', bounce:0.5})

          setTimeout(()=>{
            // setInitial('')
            setAnimate('')
            setTransition('')
          },500)

  return setCount(count-1)
}


useEffect( () => {

  console.log('Value Changed!😂😂🤣')
 

},[count])



return(
    <div className="App">
      <h1>Hello</h1>
      <motion.h1  animate={animate} transition={transition} >{count}</motion.h1>
<ButtonGroup variant="contained" aria-label='outlined primary'>
      <Button variant='contained' size="large" onClick={countAdd} startIcon={<AddCircle />}>Add</Button>
      <Button variant='contained' size="large" onClick={countSubtract} startIcon={<RemoveCircle />}>Subtract </Button>
      </ButtonGroup>

    </div>
)

}//EOF App()


export default App;
