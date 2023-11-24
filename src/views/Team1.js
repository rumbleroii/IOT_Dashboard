import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    RFID: "ID1232",
    name: "ECG Monitor",
    latitude: "23434",
    longitude: "234234",   
    status: "pending",
  },
  {
    RFID: "ID1232",
    name: "Kidney Stone Monitor",
    latitude: "23434",
    longitude: "234234",   
    status: "pending",
  },
  {
    RFID: "ID1232",
    name: "Kidney Stone Monitor",
    latitude: "23434",
    longitude: "234234",   
    status: "pending",
  },
];

const Starter = () => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5124/api/team1');
        const result = await response.json();
        setData(result);
        setTotalCount(result.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/***Top Cards***/}
      <h1>RFID Tags</h1>
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
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.RFID}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.name}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.latitude}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.longitude}</h6>
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
