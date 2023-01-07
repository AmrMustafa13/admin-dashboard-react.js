import React, { useState } from "react";
import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

const Home = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div className="home">
      <Sidebar responsive={responsive} />
      <div className="home-container">
        <Navbar responsive={responsive} setResponsive={setResponsive} />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months ( Revenue )" aspect={2 / 1} />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
