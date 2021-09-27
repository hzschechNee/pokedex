import React, {useState} from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";


export const NewPokemon = (prop) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return(
            <>
                <button onClick={handleShow} className="floating-btn">+</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Pokemon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="newPokemonForm">
                                <Form.Label className="formLabel">Pokemon Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Pokemon Name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="statisticForm">
                                <Form.Label className="formLabel">Statistics</Form.Label>
                                <Form>
                                    <Form.Group controlId="hpForm">
                                        <Row>
                                            <Col>
                                                <Form.Label>Hp</Form.Label><Form.Control type="number" min="1"/>
                                                <Form.Label>Attack</Form.Label><Form.Control type="number" min="1"/>
                                                <Form.Label>Defense</Form.Label><Form.Control type="number" min="1"/>
                                            </Col>
                                            <Col>
                                                <Form.Label>Special-Attack</Form.Label><Form.Control type="number" min="1"/>
                                                <Form.Label>Special-Defense</Form.Label><Form.Control type="number" min="1"/>
                                                <Form.Label>Speed</Form.Label><Form.Control type="number" min="1"/>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="typesForm">
                                <Form.Label className="formLabel">Types</Form.Label>
                                <Form.Select aria-label="Default select">
                                    <option>Select Type of Pokemon</option>
                                    <option value="1">Fire</option>
                                    <option value="2">Water</option>
                                    <option value="3">Rock</option>
                                    <option value="4">Grass</option>
                                    <option value="5">Electric</option>
                                    <option value="6">Ice</option>
                                    <option value="7">Poison</option>
                                    <option value="8">Flying</option>
                                    <option value="9">Psychic</option>
                                    <option value="10">Ghost</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="danger" type="submit">Submit</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        
    )
};