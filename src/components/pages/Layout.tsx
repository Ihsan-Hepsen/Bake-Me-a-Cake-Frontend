import React from 'react'
import SideBar from "../navigation/SideBar"
import Navbar from "../navigation/Navbar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"


type LayoutProps = {
    children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <Navbar/>
            <Box sx={{flexGrow: 1, margin: 1}}>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <SideBar/>
                    </Grid>
                    <Grid item md={10}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
