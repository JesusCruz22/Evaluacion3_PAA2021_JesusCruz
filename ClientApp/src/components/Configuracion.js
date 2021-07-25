import React from 'react';
import {Button, Col, Form, FormGroup, Input, InputGroupAddon, InputGroupText, Label, Row} from "reactstrap";

const Configuracion = () => {
    return (
        <>
            <h2>Configurar alertas para Celdas:</h2>
            <Form>
                <Row>
                    <Col sm={12} md={6}>
                        <FormGroup>
                            <Label for="temperaturaMinima">Temperatura Minima:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-temperature-low"/></InputGroupText>
                                <Input type="text" name="temperaturaMinima" id="temperaturaMinima" placeholder="0"/>
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="voltajeMinimo">Voltaje Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-bolt"/></InputGroupText>
                                <Input type="text" name="voltajeMinimo" id="voltajeMinimo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelMinimo">Nivel Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-level-down-alt"/></InputGroupText>
                                <Input type="text" name="nivelMinimo" id="nivelMinimo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="flujoMinimo">Flujo Minimo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-angle-double-down"/></InputGroupText>
                                <Input type="text" name="flujoMinimo" id="flujoMinimo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                    </Col>
                    <Col sm={12} md={6}>
                        <FormGroup>
                            <Label for="temperaturaMaxima">Temperatura Maxima:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-temperature-high"/></InputGroupText>
                                <Input type="text" name="temperaturaMaxima" id="temperaturaMaxima" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="voltajeMaximo">Voltaje Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-bolt"/></InputGroupText>
                                <Input type="text" name="voltajeMaximo" id="voltajeMaximo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelMaximo">Nivel Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-level-up-alt"/></InputGroupText>
                                <Input type="text" name="nivelMaximo" id="nivelMaximo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <Label for="flujoMaximo">Flujo Maximo:</Label>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-angle-double-up"/></InputGroupText>
                                <Input type="text" name="flujoMaximo" id="flujoMaximo" placeholder="0" />
                            </InputGroupAddon>
                        </FormGroup>
                    </Col>
                </Row>

                <Button className='float-right' color="primary">
                    <i className="fas fa-save"/> Guardar
                </Button>
            </Form>
        </>
    );
}

export default Configuracion;
