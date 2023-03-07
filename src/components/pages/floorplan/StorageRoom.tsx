import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import StockPreviewMenu from "./StockPreviewMenu";

type roomProps = {
    name: string
    bgColor?: string
    category: string
}
export default function StorageRoom({name, bgColor, category}: roomProps) {

    return (
        <Box className="room" sx={{
            background: `${bgColor}`
        }}>
            <h4>{name}</h4>
            <StockPreviewMenu category={category} />
        </Box>
    )
}
