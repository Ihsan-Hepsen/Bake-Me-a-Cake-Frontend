import {StockItem} from "../../../model/StockItem";
import {Alert, Card, Divider, Paper, Typography} from "@mui/material"
import * as React from "react"
import Box from "@mui/material/Box"
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'


type itemDetailProps = {
    stockItem: StockItem | null
}
export default function StockItemDetail({stockItem}: itemDetailProps) {

    if (stockItem === null) return <Alert severity="info">Click on an item to display details here.</Alert>

    return (
        <Paper sx={{
            p: '1.6em',
            gap: '10rem'
        }} elevation={3}>
            <Box sx={{textAlign: 'center'}}>
                <h3>{stockItem.ingredientType}</h3>
            </Box>
            <Divider/>
            <Card variant="outlined" sx={{
                display: 'flex',
                flexFlow: 'column',
                gap: '1em',
                textAlign: 'left',
                padding: '.8rem',
                margin: '1rem'
            }}>
                <Typography variant="body1">
                    <b>ID</b>: {stockItem.stockItemUuid.uuid}
                </Typography>
                <Typography variant="body1">
                    <b>Type</b>: {stockItem.ingredientType}
                </Typography>
                <Typography variant="body1">
                    <b>Category</b>: {stockItem.category}
                </Typography>
                <Typography variant="body1">
                    <b>Unit</b>: {stockItem.unit}
                </Typography>
                <Typography variant="body1">
                    <b>In Stock</b>: {stockItem.amount} {stockItem.unit.toLowerCase()}
                </Typography>
                {/*@ts-ignore*/}
                <Typography variant="body1">
                    <b>Expiration Date</b>: {stockItem.expirationDate} {}
                </Typography>
            </Card>
        </Paper>
    )
}
