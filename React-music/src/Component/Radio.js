import React, { useState, useEffect } from 'react'

function Radio({ data, setReqObj }) {
    const [radioval, setradioedval] = useState(data?.value ? data.value : "");


    useEffect(() => {

        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: radioval,
            }
        })
    }, [radioval])

    function handelChange(e, label) {

        if (e.target.checked == true) {
            setradioedval(label)
        }
        else if (e.target.checked == false) {
            setradioedval("");
        }


    }


    return (
        <>
            <label className="form-label">{data.label}</label>
            {data["option"].map((item, i) =>


                <div className="form-check" key={i}>
                    {data.value === item ? <input className="form-check-input" type={data.type} name={data.name} id={item} onChange={(e) => handelChange(e, item)}
                        defaultChecked /> : <input className="form-check-input" type={data.type} name={data.name} id={item} onChange={(e) => handelChange(e, item)}
                    />}

                    <label className="form-check-label" htmlFor={data.name}>
                        {item}
                    </label>
                </div>)}
        </>
    )
}

export default Radio;