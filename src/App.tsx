import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextField id="Name" label="Ваше имя" />
      <div>
        <TextField id="Sourname" label="Фамилия" />
      </div>
      <div>
        <TextField id="Tel" label="Телефон" />
      </div>
      <div>
        <TextField id="About" label="О вас" />
      </div>
      <div>
        <Button color="primary">Отправить</Button>
      </div>

    </div>
  );
}

export default App;
