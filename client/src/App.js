import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BeverageList from "./components/BeverageList";
import InventoryManagement from "./components/InventoryManagement";
import BeverageLogs from "./components/BeverageLogs";
import OrderBeverage from "./components/OrderBeverage";
import { Layout, Menu } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./components/HomePage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/order">Order Beverage</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/inventory">Manage Inventory</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/logs">View Beverage Logs</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/order" element={<OrderBeverage />} />
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/logs" element={<BeverageLogs />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          Beverage Vending Machine ©2023 Yekaditya Devadi
        </Footer>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
