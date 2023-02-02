import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const FRONTEND_BASE = "/erc20/frontend/";

const rootEl = document.getElementById("root");
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);

    root.render(
        <React.StrictMode>
            <BrowserRouter basename={FRONTEND_BASE}>
                <Routes>
                    <Route path="/*" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>,
    );
}
