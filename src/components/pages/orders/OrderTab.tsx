import {useQuery} from "@tanstack/react-query"
import {useState} from "react"
import * as React from "react"
import {
    Alert, Box, Chip, Container,
    Divider, List, ListItemButton, ListItemText,
    Paper, Skeleton
} from "@mui/material"
import {BoundOrder} from "../../../model/BoundOrder"
import OrderDetail from "./OrderDetail"

interface OrderTabProps {
    title: string
    queryKey: string
    dataService: () => Promise<BoundOrder[]>
}

const statusMapping = {
    PENDING: '🟠',
    FULFILLED: '🟢'
}

export default function OrderTab({title, queryKey, dataService}: OrderTabProps) {
    const {isLoading, isError, data: orders} = useQuery([queryKey], dataService)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index)
        // @ts-ignore
        setSelectedOrder(orders[index])
    }

    if (orders?.length === 0) return <Alert severity="info">No orders at the moment.</Alert>


    return (
        <>
            <Box sx={{textAlign: "center"}}>
                <h2>{title}</h2>
            </Box>
            <Container sx={{
                display: "flex",
                flexFlow: "row",
                width: "available",
                gap: "2em",
                padding: ".75em",
                textAlign: "center"
            }}>
                <Container sx={{height: 800, overflow: "auto"}} maxWidth='xl'>
                    <Paper sx={{
                        p: "1.6em",
                        margin: ".2rem",
                        gap: "5rem"
                    }} elevation={3}>
                        <Box sx={{textAlign: "center"}}>
                            <h3>Orders</h3>
                        </Box>
                        <Divider/>
                        {isLoading && <>
                            <Skeleton/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation={false}/>
                            <Skeleton animation="wave"/>
                            <Skeleton/>
                            <Skeleton animation={false}/>
                        </>}
                        {isError && <Alert severity="warning">Orders couldn't load.</Alert>}
                        {orders &&
                            <List>
                                {orders.map((el: BoundOrder, idx: number) => {
                                    return (
                                        <ListItemButton
                                            key={idx}
                                            selected={selectedIndex === idx}
                                            onClick={(event) => handleListItemClick(event, idx)}
                                        >
                                            <ListItemText primary={
                                                <p>
                                                    <span role="img"
                                                        // @ts-ignore
                                                          aria-label="status">{statusMapping[el.orderStatus]}</span>
                                                    ORDER: {el.orderId}
                                                </p>

                                            }/>
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        }
                    </Paper>
                </Container>
                <Container>
                    {/* @ts-ignore*/}
                    {orders?.length > 0 && <OrderDetail order={selectedOrder}/>}
                </Container>
            </Container>
        </>
    )
}
