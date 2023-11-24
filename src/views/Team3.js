import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";

import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

// const tableData = [
//   {
//     RID: "101",
//     ID: "1",
//     Temperature: 40
//     Team
//     Time
//   },
// ];

const Starter = () => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/team2');
        const result = await response.json();
        setData(result);
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
      <h1>Hypothermic Sensor</h1>
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
                  <th>RID</th>
                  <th>ID</th>
                  <th>Temperature</th>
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
                        <h6 className="mb-0">{tdata.ID}</h6>
                    </td>
                    <td>
                        <h6 className="mb-0">{tdata.Temperature}</h6>
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
