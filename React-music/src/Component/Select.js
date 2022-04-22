import React, { useEffect, useState } from 'react'

function Select({ data, setReqObj }) {
    const [bindselectoption, setbindselectoption] = useState(data?.value ? data.value : "")




    useEffect(() => {
        if (bindselectoption == "Select one") {
            setbindselectoption("")
        }
        setReqObj((pre) => {
            return {
                ...pre,
                [data.label]: bindselectoption,
            }

        })

    }, [bindselectoption])



    return (
        <>
            <label className="form-label">{data.label}</label>
            {data.isRequired == false ?
                (<select className="form-select" aria-label="Default select example" onChange={(e) => setbindselectoption(e.target.value)} defaultValue={data.value} >
                    <option value="" >Select one</option>
                    {data["option"].map((item, i) => <option key={i} value={item} >{item}</option>
                    )}

                </select>) :

                (<select required className="form-select" aria-label="Default select example" onChange={(e) => setbindselectoption(e.target.value)} defaultValue={data.value} >
                    <option value="" >Select one</option>
                    {data["option"].map((item, i) => <option key={i} value={item} >{item}</option>
                    )}

                </select>)
            }
        </>
    )
}

export default Select;