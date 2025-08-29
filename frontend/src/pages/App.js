import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Items from "./Items";
import ItemDetail from "./ItemDetail";
import { DataProvider } from "../state/DataContext";

const appContainerStyle = {
  minHeight: "100vh",
  backgroundColor: "#18181b",
  color: "#000000",
};

const navStyle = {
  padding: "16px",
  borderBottom: "1px solid #27272a",
  backgroundColor: "#27272a",
  borderColor: "#27272a",
};

const linkStyle = {
  color: "#1D4ED8",
  fontWeight: "bold",
  textDecoration: "none",
};

function App() {
  return (
    <DataProvider>
      <div style={appContainerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Items
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
