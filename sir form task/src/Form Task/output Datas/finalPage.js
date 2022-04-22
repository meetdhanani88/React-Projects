import { Modal, Button, Container } from 'react-bootstrap';
import "./finalPage.css"


function Example(props) {
    console.log(props.finaldata);

    const outputdata = props.finaldata;
    const persondetail = props.persondetail;
    console.log(outputdata, persondetail);

    const bodymodaldata = outputdata ? outputdata.map((item, i) =>
        <div key={i}>
            <Container className={`${"Modal-Body"} ${"text-center"}`}>
                <h4 className={["Modal-Body", "text-success"].join(' ')}>Standard : {i + 1}</h4>
                <p className="Modal-Body">Percentage : {item.per}%</p>
                <p className="Modal-Body">Remark : {item.remark}</p>
                <hr></hr>
            </Container>
        </div>
    )
        : null
    function closewindow() {
        props.setshowfinal(false);
        props.setisshowputput(false);
        props.setshowinputform(true);
    }
    return (
        <>
            <Modal show={true} onHide={() => { closewindow() }} className="Modal">
                <Modal.Header className="Modal-Header" closeButton>
                    <Modal.Title className="Modal-Title">Hey! {persondetail.firstname} {persondetail.lastname}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="Modal-Body">{bodymodaldata}</Modal.Body>
                <Modal.Footer className="Modal-Footer">
                    <Button variant="primary" onClick={() => closewindow()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => closewindow()}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;