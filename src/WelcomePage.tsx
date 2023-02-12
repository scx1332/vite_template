import React, { useContext } from "react";
import "./WelcomePage.css";
import { BackendSettingsContext } from "./BackendSettingsProvider";
import { useBackendConfig } from "./ConfigProvider";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const WelcomePage = () => {
    const { backendSettings } = useContext(BackendSettingsContext);
    const config = useBackendConfig();

    return (
        <Item>
            <Stack spacing={2}>
                <Item>Vite template</Item>
                <Item>Connected to the endpoint {backendSettings.backendUrl}</Item>
                <Item>Frontend version {APP_VERSION}</Item>
                <Item>Backend version {config.version}</Item>
            </Stack>
        </Item>
    );
};

export default WelcomePage;
