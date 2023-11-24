import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    RFID: "ID1232",
    name: "ECG Monitor",
    status: "pending",
    location: {
      latitude: "23434",
      longitude: "234234",
    },
  },
  {
    RFID: "ID2342",
    name: "Kidney Monitor",
    status: "holt",
    location: {
      latitude: "23434",
      longitude: "234234",
    },
  },
  {
    RFID: "ID1232",
    name: "CT Scanner",
    status: "working",
    location: {
      latitude: "23434",
      longitude: "234234",
    },
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <h1>Team 5</h1>
      <br></br>
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Total Sensors"
            subtitle="Total Sensors"
            earning="3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Active Sensors"
            subtitle="Active Sensors"
            earning="1"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Halted Sensors"
            subtitle="Halted Sensors"
            earning="1"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Paused Sensors"
            subtitle="Paused Sensors"
            earning="1"
            icon="bi bi-basket3"
          />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col xxl="12">
          <Card>
          <CardBody>
            <CardTitle tag="h5">Sensor Details</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Summary 
            </CardSubtitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>RFID</th>
                  <th>Equipment Name</th>
                  <th>Status</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.RFID}</h6>
                        </div>
                      </div>
                    </td>
                    <td>{tdata.name}</td>
                    <td>
                      <div>
                        <p>Latitude: {tdata.location.latitude}</p>
                        <p>Longitude: {tdata.location.longitude}</p>
                      </div>
                    </td>
                    <td>
                      {tdata.status === "pending" ? (
                        <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                      ) : tdata.status === "holt" ? (
                        <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                      ) : (
                        <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                      )}
                    </td>
                    <td>
                      <button>View More</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col xxl="12">
          <SalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
