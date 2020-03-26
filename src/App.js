import React from 'react';
import './App.css';
import TextField from './TextField/TextField';
import Switch from './Switch/Switch';
import Checkbox from './Checkbox/Checkbox';
import Header from './Header/Header';
import RadioButton from './RadioButton/RadioButton';

function App() {
  return (
    <div className="App">
      <Header />
      <TextField />
      <Checkbox />
      <Switch />
      <RadioButton />
    </div>
  );
}

export default App;
