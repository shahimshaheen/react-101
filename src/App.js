import './App.css';
import {useState} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {AddCircle, Send, RemoveCircle} from '@mui/icons-material';




const App = () => {



const [count,setCount] = useState(0);

function countAdd(){
  return setCount(count+1)
}
function countSubtract(){
  return setCount(count-1)
}

return(
    <div className="App">
      <h1>Hello</h1>
      <h1>{count}</h1>
<ButtonGroup variant="contained" aria-label='outlined primary'>
      <Button variant='contained' size="large" onClick={countAdd} startIcon={<AddCircle />}>Add</Button>
      <Button variant='contained' size="large" onClick={countSubtract} startIcon={<RemoveCircle />}>Subtract </Button>
      </ButtonGroup>

    </div>
)

}//EOF App()


export default App;
