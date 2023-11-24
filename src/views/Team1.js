import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const Starter = () => {
  const [data, setData] = useState([{
    RID: 1,
    SID: 2,
    Readings: {
      Temperature: 10,
      Humidity: 10,
      AirQuality: 10,
      Light: 45
    }
  }]);
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
      <h1>Environmental Monitoring</h1>
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
                  <th>SID</th>
                  <th>Temperature</th>
                  <th>Light</th>
                  <th>Air Quality</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tdata, index) => (
                  <tr key={index} className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{tdata.RID}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.SID}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.Readings.Temperature}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.Readings.Light}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.Readings.AirQuality}</h6>
                    </td>
                    <td>
                      <h6 className="mb-0">{tdata.Readings.Humidity}</h6>
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
