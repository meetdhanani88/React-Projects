import React, { useState, useEffect } from 'react';

function Textnum({ setReqObj, data }) {
    const [bindtextnum, setbindtextnum] = useState(data?.value ? data.value : "")

    useEffect(() => {

        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindtextnum,
            }

        })

    }, [bindtextnum])


    return (
        <>
            <label className="form-label" htmlFor={data.name}>{data.label} </label>

            {data.isRequired == false ?
                <input className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextnum(e.target.value)} value={bindtextnum} placeholder={`Enter ${data.placeholder || data.label}`}
                    max={data.max || 9999999999} min={data.min || 0}
                />
                :
                <input className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextnum(e.target.value)} value={bindtextnum} placeholder={`Enter ${data.placeholder || data.label}`}
                    max={data.max || 9999999999} min={data.min || 0}
                    required
                />
            }
        </>
    )
}

export default Textnum;