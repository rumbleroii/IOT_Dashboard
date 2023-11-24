import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    RID: "101",
    ID: "1",
    Temperature: 40
  },
];

const Starter = () => {
  const [totalCount, setTotalCount] = useState(tableData.length);
  
  return (
    <div>
      {/***Top Cards***/}
      <h1>Team 3</h1>
      <br></br>
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Total Sensors"
            subtitle="Total Sensors"
            earning={totalCount}
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
                  <th>RID</th>
                  <th>ID</th>
                  <th>Temperature</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.RID}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                        <h6 className="mb-0">{tdata.ID}</h6>
                    </td>
                    <td>
                        <h6 className="mb-0">{tdata.Temperature}</h6>
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
