import React, { useState, useEffect } from 'react'

function Textpass({ data, setReqObj }) {
    const [bindtextpass, setbindtextpass] = useState(data?.value ? data.value : "")
    const [error, showerror] = useState(false);

    useEffect(() => {

        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindtextpass,
            }

        })

    }, [bindtextpass])

    return (
        <>
            <label className="form-label" htmlFor={data.name}>{data.label} </label>

            {data.isRequired == false ?
                <input className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextpass(e.target.value)} value={bindtextpass}
                    placeholder={`Enter ${data.placeholder || data.label}`} autoComplete={data.autoComplete || "off"}
                    minLength={data.length || 8}

                />
                :
                <input className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextpass(e.target.value)} value={bindtextpass} required
                    placeholder={`Enter ${data.placeholder || data.label}`} autoComplete={data.autoComplete || "off"}
                    minLength={data.minLength || 8}
                />}
            {error && <p>invalid</p>}

        </>
    )
}

export default Textpass;