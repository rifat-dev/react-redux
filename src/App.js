import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { increment, decrement } from './action/action'

import './App.css';

function App({ increment, decrement,count }) {

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '40px',
          borderRadius: '6px',
          fontSize: '60px',

        }}
        >
          <p>{count}</p>
          <div>
            <Button
              className='mx-4'
              variant="contained"
              color="secondary"
              onClick={() => increment()}
              style={{ fontSize: '30px', outline: 'none' }}
            >
              +
            </Button>
            <Button
              className=''
              variant="contained"
              color="primary"
              style={{ fontSize: '30px', outline: 'none' }}
              onClick={() => decrement()}
            >
              -
            </Button>
          </div>
        </div>

      </header>
    </div>
  );
}

const mapProps = (state) => (
  {
    count: state.countReducer.count
  }
)

export default connect(mapProps, { increment, decrement })(App);
