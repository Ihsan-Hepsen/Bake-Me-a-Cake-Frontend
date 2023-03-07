import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ChartLayout from "./ChartLayout";
import {useQuery} from "@tanstack/react-query";
import {getInBoundOrders} from "../../../../service/InBoundOrderDataService";
import {getOutBoundOrders} from "../../../../service/OutBoundOrderDataService";
import {Alert, CircularProgress} from "@mui/material";


export default function OrdersLineChart() {
    const {
        isLoading: isLoadingInBound,
        isError: isErrorInBound,
        data: inBoundOrders
    } = useQuery(['inBoundOrders'], getInBoundOrders)
    const {
        isLoading: isLoadingOutBound,
        isError: isErrorOutBound,
        data: outBoundOrders
    } = useQuery(['outBoundOrders'], getOutBoundOrders)

    const data = [
        {
            date: new Date().toLocaleDateString(),
            inBound: inBoundOrders?.length,
            outBound: outBoundOrders?.length
        },
        {
            date: new Date(2023, 0, 15).toLocaleDateString(),
            inBound: 2,
            outBound: 4
        },
        {
            date: new Date(2023, 0, 16).toLocaleDateString(),
            inBound: 5,
            outBound: 4
        },
        {
            date: new Date(2023, 0, 17).toLocaleDateString(),
            inBound: 7,
            outBound: 12
        }
    ]


    return (
        <ChartLayout>
            <h3>Orders Overview</h3>
            {(isLoadingInBound && isLoadingOutBound) && <CircularProgress/>}
            {(isErrorInBound && isErrorOutBound) &&
                <Alert severity="warning">Can't display graph. Please try again later.</Alert>}
            {(inBoundOrders && outBoundOrders) &&
                <LineChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="outBound" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="inBound" stroke="#82ca9d" />
                </LineChart>
            }
        </ChartLayout>
    )
}
