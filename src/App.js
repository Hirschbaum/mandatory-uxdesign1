import React from 'react';
import './App.css';
import TextField from './TextField';
import Switch from './Switch';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';

function App() {
  return (
    <div className="App">
      <TextField />
      <Checkbox />
      <Switch />
      <RadioButton />
    </div>
  );
}

export default App;
