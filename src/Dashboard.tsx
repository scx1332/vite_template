import React, {useContext} from "react";
import "./Dashboard.css";
import { Routes, Route, Link } from "react-router-dom";
import {useConfigOrNull} from "./ConfigProvider";
import { BackendSettingsContext } from "./BackendSettingsProvider";
import BackendSettingsPage from "./BackendSettingsPage";

const Dashboard = () => {
    const config = useConfigOrNull();

    const { backendSettings } = useContext(BackendSettingsContext);

    if (config == null) {
        return <div>Loading...</div>;
    }
    if (typeof config === "string") {
        return (
            <div>
                <div>{config}</div>
                <BackendSettingsPage />
            </div>
        );
    }
    return (
        <div>
            <div>
                <div className="top-header">
                    <div className="top-header-title">Example page</div>
                    <div className="top-header-navigation">
                        <Link to="/">Main</Link>
                        <Link to="/page2">Page 2</Link>
                        <Link to="/page3">Page 3</Link>
                    </div>
                </div>
                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                   Main page
                                </div>
                            }
                        />
                        <Route path="page2" element={<div>Page 2</div>} />
                        <Route path="page3" element={<div>Page 3</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
