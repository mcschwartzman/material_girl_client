import React, {Component} from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class MaterialsAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            materials: null
        }
    }

    componentDidMount() {
        this.fetchMaterials();
    }

    async fetchMaterials() {
        try {
            const materials = await axios.get("http://localhost:3030/server/api/v1/materials",
            {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                console.error(err);
                return [];
            });

            this.setState({materials})
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        console.log(this.state.materials);
        return (
            <div>

                <h2>Hello, Administrator</h2>

                <ListGroup>

                {this.state.materials?.map(material => {
                    return(
                        <div>
                            <ListGroup.Item>
                            <Row>
                                    <Col>{material._id}</Col>
                                    <Col><a href="#">{material.priority_name}</a></Col>
                                    <Col><Button variant="danger">Delete</Button>{' '}</Col>
                            </Row>
                            </ListGroup.Item>
                        </div>
                    )
                })}
                
                </ListGroup>

            </div>
        )
    }
}

export default MaterialsAdmin;