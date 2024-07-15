// src/components/BeverageLogs.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BeverageLogs.css";

const BeverageLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get(
        "https://beverage-vending-machine.vercel.app/api/logs"
      );
      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  return (
    <div className="beverage-logs">
      <h2>Beverage Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index} className="log-item">
            <span className="log-type">{log.type}</span>
            <span className="log-date">
              {new Date(log.dispensedAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeverageLogs;
