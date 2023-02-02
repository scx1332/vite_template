import React, { useContext } from "react";
import "./Dashboard.css";
import { Routes, Route, Link } from "react-router-dom";
import { useConfigResult } from "./ConfigProvider";
import { BackendSettingsContext } from "./BackendSettingsProvider";
import BackendSettingsPage from "./BackendSettingsPage";

const Dashboard = () => {
    const configResult = useConfigResult();

    const { backendSettings } = useContext(BackendSettingsContext);

    if (configResult.error) {
        return (
            <div>
                <div>{configResult.error}</div>
                <BackendSettingsPage />
            </div>
        );
    }
    if (configResult.config == null) {
        return <div>Loading... {configResult.progress}</div>;
    }
    return (
        <div>
            <div>
                <div className="top-header">
                    <div className="top-header-title">Example page</div>
                    <div className="top-header-navigation">
                        <Link to="/">Main {backendSettings.backendUrl}</Link>
                        <Link to="/page2">Page 2</Link>
                        <Link to="/page3">Page 3</Link>
                    </div>
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<div>Main page</div>} />
                        <Route path="page2" element={<div>Page 2</div>} />
                        <Route path="page3" element={<div>Page 3</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
