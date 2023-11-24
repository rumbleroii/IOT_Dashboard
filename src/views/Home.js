import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
  } from "reactstrap";

import { Link } from "react-router-dom";

const Cards = () => {
    return (
      <div>
        <Row>
          <h5 className="mb-3 mt-3">Sensor Groups</h5>
          <Col md="6" lg="4">
            <Card body className="text-center">
              <CardTitle tag="h5">RFID Tags</CardTitle>
              <CardText>
                RFID Tags that track Medical Equipments
              </CardText>
              <div>
                <Link to="/1">
                    <Button color="light-danger">Visit</Button>
                </Link>
              </div>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  };
  
  export default Cards;
  