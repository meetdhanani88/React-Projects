import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import "./outputform.css"

function OutputForm(props) {

    const stdlength = +props.std ? +props.std - 1 : 0;
    const [array, setarray] = useState([])

    function submithandler(e) {
        console.log(e);
        e.preventDefault();
        const output = array;
        console.log("output", output);
        props.getinputdata(output)

    }

    // function stdhandler(e) {
    //     const value = e.target.value
    //     const index = +e.target.name

    //     setarray(_ => {
    //         const newarray = [...array]
    //         newarray[index] = {
    //             ...newarray[index],
    //             std: value
    //         }
    //         return newarray
    //     })
    // }

    function perhandler(e) {
        const value = e.target.value
        const index = +e.target.name

        setarray(_ => {
            const newarray = [...array]
            newarray[index] = {
                ...newarray[index],
                per: value,
            }
            return newarray
        })

    }
    function remarkhandler(e) {
        const value = e.target.value;
        const index = +e.target.name;

        setarray(_ => {
            const newarray = [...array]
            newarray[index] = {
                ...newarray[index],
                remark: value
            }
            return newarray
        })
    }

    const arr = Array.from(Array(stdlength).keys())
    const showndata = arr.map((item, i) =>
        <div key={i} className="outputform" >

            <h1> Standard {item + 1} Details</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label >Standard</Form.Label>
                <Form.Control className={['w-50', "std"].join(' ')} type="number" placeholder="Enter Standard" name={i} value={item + 1} disabled />
                <Form.Text className="text-muted">
                    Your Standard
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Percentage(%)</Form.Label>
                <Form.Control type="number" className={['w-50']} placeholder="Enter Percentage" onChange={perhandler} name={i} />
                <Form.Text className="text-muted">
                    Your Percentage
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Remark</Form.Label>
                <Form.Control className='w-50' as="textarea" rows={3} onChange={remarkhandler} name={i} />
            </Form.Group>

        </div>
    )

    return (
        <div>
            <Form onSubmit={submithandler} className="mainform">
                {showndata}
                <div className='btndiv-mainform'>
                    <Button variant="outline-success" size="lg" type="submit" onClick={() => props.setshowfinal(true)}  >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}
export default OutputForm;
