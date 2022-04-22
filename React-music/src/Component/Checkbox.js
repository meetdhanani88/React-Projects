import React, { useState, useEffect } from 'react'

function Checkbox({ data, setReqObj }) {
    const [checkedval, setcheckedval] = useState([]);
    useEffect(() => {
        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: checkedval,
            }
        })
    }, [checkedval])


    function handelChange(e, lablename) {

        if (e.target.checked == true) {

            setcheckedval((pre) => { return [...pre, lablename] })

        }
        else if (e.target.checked == false) {

            setcheckedval((pre) => {
                const newarr = checkedval.filter((hobbyname) => hobbyname != lablename)
                return newarr;
            })

        }

    }

    return (
        <>
            <label className="form-label">{data.label}</label>

            {data["option"].map((item, i) =>
                <div className="form-check" key={i}>
                    <input className="form-check-input" type={data.type} value={""} id={item} name={data.name}
                        onChange={(e) => handelChange(e, item)} required={data.isRequired[i] || false} />

                    <label className="form-check-label" htmlFor={data.name}>
                        {item}
                    </label>
                </div>)}
        </>
    )
}

export default Checkbox;