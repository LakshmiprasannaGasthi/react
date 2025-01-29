import React, { useState } from "react";
import "./Devices.css"; // Importing the CSS file

const Devices = () => {
  const [deviceList, setDeviceList] = useState([]);
  const [deviceName, setDeviceName] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [error, setError] = useState("");

  const validateDevice = () => {
    if (!deviceName || !deviceModel) {
      setError("Both device name and model are required.");
      return false;
    }

    if (deviceName.length < 3 || deviceModel.length < 3) {
      setError("Device name and model should be at least 3 characters long.");
      return false;
    }

    setError(""); // Clear any existing error
    return true;
  };

  const addDevice = (event) => {
    event.preventDefault();
    if (validateDevice()) {
      const newDevice = { name: deviceName, model: deviceModel };
      setDeviceList([...deviceList, newDevice]);
      setDeviceName(""); // Reset fields after adding device
      setDeviceModel("");
    }
  };

  const removeDevice = (index) => {
    setDeviceList(deviceList.filter((_, i) => i !== index));
  };

  return (
    <div className="devices-container">
      <h3>Manage Devices</h3>

      {/* Device Form */}
      <form onSubmit={addDevice}>
        <label>
          Device Name:
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Device Model:
          <input
            type="text"
            value={deviceModel}
            onChange={(e) => setDeviceModel(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Device</button>
      </form>

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Device List */}
      <ul>
        {deviceList.map((device, index) => (
          <li key={index}>
            <strong>{device.name}</strong> (Model: {device.model}){" "}
            <button onClick={() => removeDevice(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Devices;
