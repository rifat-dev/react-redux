import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {

  const [count, countState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
            backgroundColor:'white',
            color:'black',
            padding:'40px',
            borderRadius:'6px',
            fontSize:'60px',
           
          }}
        >
          <p>{count}</p>
          <div>
            <Button
              className='mx-4'
              variant="contained"
               color="secondary"
               onClick={()=>countState(count+1)}
               style={{fontSize:'30px', outline:'none'}}
               >
              +
            </Button>
            <Button 
            className=''
             variant="contained" 
             color="primary"
             style={{fontSize:'30px', outline:'none'}}
             onClick={()=>countState(count-1)}
             >
             -
            </Button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
