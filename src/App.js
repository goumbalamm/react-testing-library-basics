import { useState } from 'react';
import './App.css';
import RadioInput from './components/RadioInput';
import Select from './components/Select';


function App() {
  const selectOptionsArray1 = [
    'tata',
    'toto',
    'titi'
  ];

  const selectOptionsArray2 = [
    'atat',
    'otot',
    'itit'
  ];

  const radioOptionsArray = [
    'correct',
    'reversed'
  ];

  const [selectedItem, setSelectedItem] = useState();

  const [selectedRadio, setSelectedRadio] = useState();

  const [selectOptions, setSelectOptions] = useState([]);

  const selectOnChangeHandler = (e) => {
    setSelectedItem(e.target.value);
  };

  const radioInputOnChangeHandler = (e) => {
    setSelectedRadio(e.target.value);
    if (e.target.value === 'correct') {
      setSelectOptions(selectOptionsArray1);
      setSelectedItem(selectOptionsArray1[0]);
    } else if (e.target.value === 'reversed') {
      setSelectOptions(selectOptionsArray2);
      setSelectedItem(selectOptionsArray2[0]);
    }
  };

  return (
    <div className="App">
      <h3>Please chose an option</h3>
      <RadioInput
        optionsArray={radioOptionsArray}
        onChange={radioInputOnChangeHandler} />
        <br />
      {selectedRadio &&
        (<div>
          <Select 
            optionsArray={selectOptions}
            onChange={selectOnChangeHandler}
            value={selectedItem} />
          <p>You have selected: {selectedItem}</p>
        </div>)}
    </div>
  );
}

export default App;
