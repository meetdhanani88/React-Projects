import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

function Textbox({ data, setReqObj }) {
    const [bindtext, setbindtext] = useState(data?.value ? data.value : "")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {

        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindtext,
            }

        })

    }, [bindtext])


    return (
        <>
            <label className="form-label" htmlFor={data.name}>{data.label} </label>

            {data.isRequired == false ?

                <input className="form-control" type={data.type} id={data.name} name={data.name}

                    disabled={!data.isEditable}
                    onChange={(e) => setbindtext(e.target.value)} value={bindtext} placeholder={`Enter ${data.placeholder || data.label}`}
                />


                :

                <input required className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtext(e.target.value)} value={bindtext} placeholder={`Enter ${data.placeholder || data.label}`}

                />
            }


        </>
    )
}

export default Textbox;