import React, { useContext } from "react";
import "./WelcomePage.css";
import { BackendSettingsContext } from "./BackendSettingsProvider";
import { useBackendConfig } from "./ConfigProvider";
import Plot from 'react-plotly.js';

class PlotData {
    x: number[] = [];
    y: number[] = [];
}

const WelcomePage = () => {
    const { backendSettings } = useContext(BackendSettingsContext);
    const config = useBackendConfig();

    const [plotData, setPlotData] = React.useState<PlotData>({x: [], y: []});

    React.useEffect(() => {
        (async () => {
            const response = await fetch(backendSettings.backendUrl + "/time_hist.csv");
            const response_csv = await response.text();
            const lines = response_csv.split("\n");
            const plotData = new PlotData();
            for (const line_idx in lines) {
                const tokens = lines[line_idx].split(",");
                plotData.x.push(parseInt(line_idx));
                plotData.y.push(parseInt(tokens[1]));
            }
            setPlotData(plotData);
        })();
    }, [setPlotData]);

    return (
        <div className="welcome-page">
            <h1>Vite template</h1>
            <p>Connected to the endpoint {backendSettings.backendUrl}</p>
            <p>Frontend version {APP_VERSION}</p>
            <p>Backend version {config.version}</p>

            <Plot

                data={[
                    {
                        x: plotData.x,
                        y: plotData.y,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 1600, height: 500, title: 'A Fancy Plot'} }
            />
        </div>
    );
};

export default WelcomePage;
