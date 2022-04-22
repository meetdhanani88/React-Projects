import React, { useState, useEffect } from 'react'

function Textarea({ data, setReqObj }) {

    const [bindtextarea, setbindtextarea] = useState(data?.value ? data.value : "")


    useEffect(() => {
        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindtextarea,
            }
        })

    }, [bindtextarea])


    return (
        <>
            <label htmlFor={data.name} className="form-label">{data.label} </label>
            {data.isRequired == false ?
                <textarea id={data.name} name={data.name} value={bindtextarea}
                    disabled={!data.isEditable} onChange={(e) => setbindtextarea(e.target.value)} className="form-control" placeholder={`Enter ${data.placeholder || data.label}`} >
                </textarea> :
                <textarea required id={data.name} name={data.name} value={bindtextarea}
                    disabled={!data.isEditable} onChange={(e) => setbindtextarea(e.target.value)} className="form-control" placeholder={`Enter ${data.placeholder || data.label}`} >
                </textarea>}
        </>
    )
}

export default Textarea;