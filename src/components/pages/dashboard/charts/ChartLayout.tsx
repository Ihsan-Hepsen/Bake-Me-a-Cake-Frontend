import React from "react";
import {Paper} from "@mui/material";

type ChartLayoutProps = {
    children: React.ReactNode
}

export default function ChartLayout({children}: ChartLayoutProps) {
    return (
        <Paper sx={{
            p: '1.6em',
            width: 800
        }} elevation={3}>
            {children}
        </Paper>
    )
}
