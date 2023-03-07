import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {useQuery} from "@tanstack/react-query";
import {getStockItems} from "../../../../service/StockItemDataService";
import {Alert, CircularProgress, Paper} from "@mui/material";
import ChartLayout from "./ChartLayout";


export default function StockItemChart() {
    const {isLoading, isError, data: stockItems} = useQuery(['stockItems'], getStockItems)

    return (
        <>
            <ChartLayout>
                <h3>Stock Overview</h3>
                {isLoading && <CircularProgress/>}
                {isError && <Alert severity="warning">Can't display graph. Please try again later.</Alert>}
                {stockItems &&
                    <BarChart
                        width={800}
                        height={400}
                        data={stockItems}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2"/>
                        <XAxis dataKey="ingredientType" />
                        <YAxis name="Total Amount"/>
                        <Tooltip />
                        <Legend/>
                        <Bar dataKey="amount" fill="#613F75"/>
                    </BarChart>
                }
            </ChartLayout>
        </>

    )
}