import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Lyrics from '../lyrics';

export default function Modal() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 return (
    <>
         <Modal 
                        show={show}
                         onHide={handleClose}  
                        backdrop="false"
                        backdropClassName="modal-backdrop"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Lyrics</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!
                                {/* <Lyrics />  */}
                                </Modal.Body>
                            <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                            </Modal.Footer>
                        </Modal>                
    </>
  );
}


