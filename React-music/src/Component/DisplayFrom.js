import React, { useState, useEffect } from 'react'
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';
import Textbox from './Textbox';
import Textemail from './Textemail';
import Textnum from './Textnum';
import Textpass from './Textpass';
import { useForm } from "react-hook-form";





function DisplayFrom({ fields }) {


    const [Finalval, setFinalval] = useState({});
    const [reqObj, setReqObj] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fields.map(field => {
            setReqObj((pre) => {
                return {
                    ...pre,
                    [field.label]: field.value || '',
                }
            })
        });
    }, []);













    function renderSwitch(param, item) {


        switch (param) {
            case "text":
                return (
                    <>
                        <Textbox data={item} setReqObj={setReqObj} ></Textbox>
                    </>
                );
            case "textarea":
                return (
                    <>
                        <Textarea data={item} setReqObj={setReqObj} ></Textarea>
                    </>
                )
            case "email":
                return (
                    <>
                        <Textemail data={item} setReqObj={setReqObj} ></Textemail>
                    </>
                )
            case "password":
                return (
                    <>
                        <Textpass data={item} setReqObj={setReqObj}  ></Textpass>
                    </>
                )
            case "number":
                return (
                    <>
                        <Textnum data={item} setReqObj={setReqObj} ></Textnum>
                    </>
                )
            case "checkbox":
                return (
                    <>
                        <Checkbox data={item} setReqObj={setReqObj} ></Checkbox>
                    </>
                )
            case "radio":
                return (
                    <>
                        <Radio data={item} setReqObj={setReqObj} ></Radio>
                    </>
                )
            case "select":
                return (
                    <>
                        <Select data={item} setReqObj={setReqObj} ></Select>
                    </>
                )

            default:
                return (<p>Given field not Valid</p>);
        }

    }

    function formsubmit() {


        const submitdata = {

            ...reqObj

        }

        setFinalval(submitdata);

        console.log("submitdata", submitdata);



    }

    return (
        <div className='container shadow-lg p-4 mb-5 bg-body rounded '>
            <h1 className='mb-3'>React Form</h1>
            <form onSubmit={e => { e.preventDefault(); formsubmit(); }} className="row g-3 " autoComplete='off'>

                {
                    fields.map((item) => {

                        let classess = item?.className ? item.className : "col-md-4";

                        { classess = Array.isArray(classess) ? classess.join(' ') : classess }

                        return (
                            <div key={item.label} className={classess} >
                                {renderSwitch(item.inputType, item)}
                            </div>
                        )
                    })
                }

                <div className='col-12'>
                    <button type='submit' className="btn btn-outline-primary">Submit</button>
                </div>

            </form>



        </div>



    )
}

export default DisplayFrom


