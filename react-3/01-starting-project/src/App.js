import React, { useState } from 'react';
import InputItems from './component/form/InputItems';
import SubmitedField from './component/formsubmited/SubmitedFiels';


const predata = [{
  username: "meet",
  age: "18",
  id: "e1"
}]

function App() {

  const [datass, setdatass] = useState(predata)


  const getinputdata = (data) => {
    setdatass(prev_state => {
      return [data, ...prev_state]
    })
  }


  return (
    <>
      <InputItems getinputdata={getinputdata}></InputItems>
      {
        datass ? <SubmitedField datass={datass}></SubmitedField> : ""
      }

    </>
  );
}

export default App;
