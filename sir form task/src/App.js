//                   Form Task                            //

import { useState } from "react";
import InputForm from "./Form Task/Input form/InputForm";
import OutputForm from "./Form Task/Input form/outputform";
import Example from "./Form Task/output Datas/finalPage";


function App() {
    const [persondetail, setpersondetail] = useState()
    const [standard, setstandard] = useState()
    const [finaldata, setfinaldata] = useState()

    const [showinputform, setshowinputform] = useState(true)
    const [showoutput, setisshowputput] = useState(false)
    const [showfinal, setshowfinal] = useState(false)


    function inputdatahandler(data) {
        setpersondetail(data)
        setstandard(data.standard);
        setshowinputform(true)
        setisshowputput(true)
    }

    function getinputdata(data) {
        setfinaldata(data)
    }

    return (
        <>
            {showinputform && <InputForm inputdatahandler={inputdatahandler}></InputForm>}
            {showoutput && <OutputForm std={standard} setshowfinal={setshowfinal} getinputdata={getinputdata}> </OutputForm>}
            {showfinal && <Example setshowfinal={setshowfinal} finaldata={finaldata} persondetail={persondetail} setshowinputform={setshowinputform} setisshowputput={setisshowputput}></Example>}
        </>
    )
}
export default App;



//               Custom Hook                         //

// import React from 'react'
// import useFetch from './CustomHook/useFetch'

// function App() {
//     const data = useFetch("https://jsonplaceholder.typicode.com/todos")
//     return (
//         <>
//             {data &&
//                 data.map((item) => {
//                     return <p key={item.id}>{item.title}</p>;
//                 })}
//         </>
//     );
// }

// export default App;
