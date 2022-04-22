import React, { useState, useEffect } from 'react'

function Textemail({ data, setReqObj }) {
    const [bindtextemail, setbindtextemail] = useState(data?.value ? data.value : "")
    // const [error, showerror] = useState(false);
    // function validateEmail(email) {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    // }

    useEffect(() => {

        // if (validateEmail(bindtextemail)) {
        //     showerror(false);
        // }

        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindtextemail,
            }

        })



    }, [bindtextemail])



    // function validation() {

    //     if (!validateEmail(bindtextemail)) {
    //         showerror(true);
    //     }

    // }

    return (
        <>
            <label className="form-label" htmlFor={data.name}>{data.label} </label>

            {data.isRequired == false ?
                <input
                    className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextemail(e.target.value)} value={bindtextemail}
                    placeholder={`Enter ${data.placeholder || data.label}`} /> :

                <input
                    className="form-control" type={data.type} id={data.name} name={data.name} disabled={!data.isEditable}
                    onChange={(e) => setbindtextemail(e.target.value)} value={bindtextemail} required
                    placeholder={`Enter ${data.placeholder || data.label}`} />
            }
            {/* {error && <p className='text-danger fs-6'>Enter valid Email</p>} */}
        </>
    )
}

export default Textemail;