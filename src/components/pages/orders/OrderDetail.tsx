import {BoundOrder} from "../../../model/BoundOrder";
import Box from "@mui/material/Box";
import {Alert, Button, Card, Chip, Divider, Paper, Typography} from "@mui/material";
import * as React from "react";
import FulfillButton from "../../util/FulfillButton";

type OrderDetailProps = {
    order: BoundOrder | null
}


export default function OrderDetail({order}: OrderDetailProps) {

    if (order === null) {
        return (
            <Paper sx={{
                p: '1.6em',
                gap: '10rem'
            }} elevation={3}>
                <Box sx={{textAlign: 'center'}}>
                    <h3>Order Detail</h3>
                    <Alert severity="info">Click on an order to display details here.</Alert>
                </Box>
            </Paper>
        )
    }

    return (
        <Paper sx={{
            padding: '1.6em',
            gap: '3rem'
        }} elevation={3}>
            <Box sx={{textAlign: 'center'}}>
                <h3>Details</h3>
            </Box>
            <Divider/>
            {order.orderStatus === "FULFILLED" && <Alert severity="success">This order is fulfilled.</Alert>}
            <Card variant="outlined" sx={{
                display: 'flex',
                flexFlow: 'column',
                gap: '1.5em',
                textAlign: 'left',
                padding: '.8rem',
                margin: '1rem'
            }}>
                <Typography variant="body1">
                    <b>Order ID:</b> {order.orderId}
                </Typography>
                <Typography variant="body1">
                    <b>Date:</b> {`${order.orderDate}`}
                </Typography>
                {order.supplierId && <>
                    <Typography variant="body1">
                        <b>Supplier ID:</b> {order.supplierId}
                    </Typography>
                </>
                }
                <Typography variant="body1">
                    <b>Status:</b> <Chip label={order.orderStatus}
                                         color={order.orderStatus === "FULFILLED" ? "success" : "warning"}/>
                </Typography>
                <Typography variant="body1">
                    <b>Order List:</b> {order.orderList.map((item) => {
                    return (
                        <>
                            <p>{item.stockItemId}
                                <Chip label={item.amount} color="primary" variant="outlined"/>
                                <Chip label={item.status} variant="outlined"
                                      color={item.status === 'PENDING' ? 'warning' : 'success'}/>
                            </p>
                            <Divider/>
                        </>
                    )
                })}
                </Typography>
            </Card>
            {order.orderStatus === "PENDING" ? <FulfillButton btnName="Fulfill" uuid={order.orderId}/> : <></>}
        </Paper>
    )
}
