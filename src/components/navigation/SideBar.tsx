import React from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import WarehouseIcon from '@mui/icons-material/Warehouse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link} from "react-router-dom";


export default function SideBar() {

    return (
        <div style={{width: '100%'}}>
            <Paper sx={{
                display: 'flex',
                height: '80vh',
                flexFlow: 'column',
                justifyContent: 'flex-start',
                p: '2em',
                gap: '1.25rem'
            }} elevation={3}>
                <h2 style={{alignSelf: 'center', marginTop: '0em', display: 'inherit'}}>Options</h2>
                <Divider/>
                <List>
                    {[
                        { label: 'Dashboard', link: '/dashboard', icon: <DashboardIcon /> },
                        { label: 'Warehouse', link: '/warehouse', icon: <WarehouseIcon /> },
                        { label: 'Stock Overview', link: '/stock', icon: <EqualizerIcon /> },
                        { label: 'Orders & Deliveries', link: '/orders', icon: <LocalShippingIcon /> },
                    ].map((menuItem) => (
                        <ListItem disableGutters key={menuItem.link}>
                            <ListItemButton component={Link} to={menuItem.link}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
}