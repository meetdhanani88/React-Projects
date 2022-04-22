import { Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import "./inputform.css"

function InputForm(props) {

    const [fname, setFname] = useState("");
    const [lname, setlname] = useState();

    function submitdata(e) {
        const Standard = e.target.value;
        const inputs = {
            firstname: fname,
            lastname: lname,
            standard: Standard
        }

        props.inputdatahandler(inputs);
    }


    return (
        <Container >
            <h2 className='inputH1'> Enter Your Details</h2>
            <Form onSubmit={submitdata} className='containers'  >
                <Form.Group className="mb-3" controlId="formBasicEmail"  >
                    <Form.Label >First Name</Form.Label>
                    <Form.Control className='w-50' type="text" placeholder="Enter Fname" onChange={(e) => setFname(e.target.value)} />
                    <Form.Text className="text-muted">
                        Your First Name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className='w-50' type="text" placeholder="Enter Lname" onChange={(e) => setlname(e.target.value)} />
                    <Form.Text className="text-muted">
                        Your Last Name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Standard</Form.Label>
                    <Form.Select className='w-50' aria-label="Default select example" onChange={(e) => { submitdata(e) }}  >
                        <option value="Select Standard">Select Standard</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Your Standard
                    </Form.Text>
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
            </Form>
        </Container>
    )
}

export default InputForm