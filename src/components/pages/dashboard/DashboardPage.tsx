import Box from "@mui/material/Box";
import * as React from "react";
import {Layout} from "../Layout";
import StockItemChart from "./charts/StockItemChart";
import OrdersLineChart from "./charts/OrdersLineChart";

export default function DashboardPage() {
    return (
        <Layout>
            <Box sx={{textAlign: 'center'}}>
                <h2>Dashboard</h2>
            </Box>
            <Box sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                gap: '2em',
                padding: '1rem'
            }}>
                <StockItemChart/>
                <OrdersLineChart/>
            </Box>
        </Layout>
    )
}
