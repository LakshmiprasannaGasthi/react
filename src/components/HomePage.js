import React, { useState } from "react";
import "../styles/HomePage.css";
import InputField from "./InputField";
import ListItem from "./ListItem";
import Navbar from "./Navbar";

const HomePage = () => {
  const [showForm, setShowForm] = useState("");
  const [homeDetails, setHomeDetails] = useState([]);
  const [ownerName, setOwnerName] = useState("");
  const [pincode, setPincode] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [address, setAddress] = useState("");
  const [deviceDetails, setDeviceDetails] = useState([]);
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [brand, setBrand] = useState("");
  const [deviceImage, setDeviceImage] = useState(null);

  const handleAddHome = (event) => {
    event.preventDefault();
    const newAddress = { ownerName, doorNo, address, pincode };
    setHomeDetails((prev) => [...prev, newAddress]);
    setShowForm("");
    setOwnerName("");
    setDoorNo("");
    setAddress("");
    setPincode("");
    alert("Home Address Added Successfully!");
  };

  const handleAddDevice = (event) => {
    event.preventDefault();
    if (!deviceImage) {
      alert("Please upload an image for the device.");
      return;
    }
    const newDevice = { deviceName, deviceType, brand, deviceImage };
    setDeviceDetails((prev) => [...prev, newDevice]);
    setShowForm("");
    setDeviceName("");
    setDeviceType("");
    setBrand("");
    setDeviceImage(null);
    alert("Device Added Successfully!");
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    } else {
      alert("Pincode must be a number.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      setDeviceImage(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image (JPG, PNG, GIF only).");
      setDeviceImage(null);
    }
  };

  return (
    <div className="home-page">
      <Navbar
        buttons={[
          { label: "Add Home Address", value: "addHome" },
          { label: "View Home Addresses", value: "viewHome" },
          { label: "Add Device Information", value: "addDevice" },
          { label: "View Device Details", value: "viewDevices" },
        ]}
        onButtonClick={setShowForm}
      />

      <div className="content">
        {showForm === "addHome" && (
          <form className="form" onSubmit={handleAddHome}>
            <h2>Add Home Address</h2>
            <InputField
              label="Owner Name"
              name="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
            <InputField
              label="Door No"
              name="doorNo"
              value={doorNo}
              onChange={(e) => setDoorNo(e.target.value)}
              required
            />
            <InputField
              label="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="textarea"
              required
            />
            <InputField
              label="Pincode"
              name="pincode"
              value={pincode}
              onChange={handlePincodeChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}

        {showForm === "viewHome" && (
          <div className="view-section">
            <h2>Home Address Details</h2>
            {homeDetails.length > 0 ? (
              <ul>
                {homeDetails.map((home, index) => (
                  <ListItem
                    key={index}
                    details={home}
                    onDelete={() => {
                      setHomeDetails((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                      alert("Home Address Removed!");
                    }}
                  />
                ))}
              </ul>
            ) : (
              <p>No Home Addresses Added Yet</p>
            )}
          </div>
        )}

        {showForm === "addDevice" && (
          <form className="form" onSubmit={handleAddDevice}>
            <h2>Add Device Information</h2>
            <InputField
              label="Device Name"
              name="deviceName"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              required
            />
            <InputField
              label="Device Type"
              name="deviceType"
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              type="select"
              options={[
                "Smartphone",
                "Laptop",
                "Tablet",
                "Smartwatch",
                "Television",
                "Other",
              ]}
              required
            />
            <InputField
              label="Brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
            <InputField
              label="Upload Device Image"
              name="deviceImage"
              onChange={handleImageChange}
              type="file"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}

        {showForm === "viewDevices" && (
          <div className="view-section">
            <h2>Device Details</h2>
            {deviceDetails.length > 0 ? (
              <ul>
                {deviceDetails.map((device, index) => (
                  <ListItem
                    key={index}
                    details={{
                      DeviceName: device.deviceName,
                      DeviceType: device.deviceType,
                      Brand: device.brand,
                    }}
                    image={device.deviceImage}
                    onDelete={() => {
                      setDeviceDetails((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                      alert("Device Removed!");
                    }}
                  />
                ))}
              </ul>
            ) : (
              <p>No Devices Added Yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;




