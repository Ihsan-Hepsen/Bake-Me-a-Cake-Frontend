import Box from "@mui/material/Box";
import {Alert, Container, Paper, Skeleton, List, ListItemText, ListItemButton, Divider} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import * as React from "react";

import {Layout} from "../Layout";
import {getStockItems} from "../../../service/StockItemDataService";
import StockItemDetail from "./StockItemDetail";
import {StockItem} from "../../../model/StockItem";


export default function StockPage() {
    const {isLoading, isError, data: stockItems} = useQuery(['stockItems'], getStockItems)
    const [selectedStockItem, setSelectedStockItem] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index)
        // @ts-ignore
        setSelectedStockItem(stockItems[index])
    }

    return (
        <Layout>
            <Box sx={{textAlign: 'center'}}>
                <h2>Stock Overview</h2>
            </Box>
            <Container sx={{
                display: 'flex',
                flexFlow: 'row',
                justifyContent: 'space-around',
                width: 'available',
                gap: '2em',
                padding: '.75em'
            }}>
                <Container>
                    <Paper sx={{
                        p: '1.6em',
                        gap: '10rem'
                    }} elevation={3}>
                        <Box sx={{textAlign: 'center'}}>
                            <h3>Stock List</h3>
                        </Box>
                        <Divider/>
                        {isLoading && <>
                            <Skeleton/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation={false}/>
                        </>}
                        {isError && <Alert severity="warning">Stock list couldn't load.</Alert>}
                        {stockItems &&
                            <List>
                                {stockItems.map((el: StockItem, idx: number) => {
                                    return (
                                        <ListItemButton
                                            key={idx}
                                            selected={selectedIndex === idx}
                                            onClick={(event) => handleListItemClick(event, idx)}
                                        >
                                            <ListItemText primary={el.ingredientType}/>

                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        }
                    </Paper>
                </Container>
                <Container>
                    {/* @ts-ignore*/}
                    <StockItemDetail stockItem={selectedStockItem} />
                </Container>
            </Container>
        </Layout>
    )
}
