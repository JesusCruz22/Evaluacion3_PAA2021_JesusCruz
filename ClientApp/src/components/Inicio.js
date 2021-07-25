import React, {useEffect, useState} from 'react';
import {Button, Col, Row, Table} from "reactstrap";
import moment from "moment";
import axios from "axios"

const Inicio = () => {
    const [date, setDate] = useState(moment().format('DD-MM-YYYY HH:mm'))
    const [celdas, setCeldas] = useState([])

    useEffect(() => {
        const getDatosCeldas = async () => {
            let respuesta = await axios.get("https://localhost:5001/api/Celdas/GetDatosCeldas");
            setCeldas(respuesta.data)
        }

        getDatosCeldas().then(() => getDatosCeldas())
    }, [])

    const getDate = () => {
        setDate(moment().format('DD-MM-YYYY HH:mm')) 
    }
    
    return (
        <>
            <Row>
                <Col md={8} sm={12}>
                    <h2>Estado de celdas:</h2>
                </Col>
                <Col md={4} sm={12}>
                    <Button className='float-right' color="info" onClick={getDate}>
                        <i className="fas fa-sync-alt"/> Actualizar Datos
                    </Button>
                </Col>
            </Row>
            <br/>
            <Table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Id</th>
                    <th># Celda</th>
                    <th>Temperatura</th>
                    <th>Voltaje</th>
                    <th>Nivel</th>
                    <th>Flujo</th>
                </tr>
                </thead>
                <tbody>
                {celdas.map((celda, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{celda.id}</th>
                            <td>{celda.numero}</td>
                            <td>{celda.temperatura}</td>
                            <td>{celda.voltaje}</td>
                            <td>{celda.nivel}</td>
                            <td>{celda.flujo}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <hr />
            <Row>
                <Col>
                    <p className={'float-right'}>
                        Última actualización: {date}
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Inicio;

