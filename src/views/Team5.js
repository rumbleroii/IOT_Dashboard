import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import React, { useState, useEffect } from 'react';
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
  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5124/api/team5');
        const result = await response.json();
        setData(result);
        setTotalCount(result.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial fetch
    fetchData();

    // Set up an interval to fetch data every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
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
                  <th>Equipment ID</th>
                  <th>Status</th>
                  <th>Location</th>
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
                      <td>{tdata.Readings.Equipment_ID}</td>
                    <td>
                      <div>
                        <p>Latitude: {tdata.Readings.latitude}</p>
                        <p>Longitude: {tdata.Readings.longitude}</p>
                      </div>
                    </td>
                    <td>
                      {tdata.Readings.Power === 0 ? (
                        <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                      ) : tdata.status === 1 ? (
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
      {/* <Row>
        <Col xxl="12">
          <SalesChart />
        </Col>
      </Row> */}
    </div>
  );
};

export default Starter;
