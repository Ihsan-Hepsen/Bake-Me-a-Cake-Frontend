import axios from "axios";
import { StockItem } from "../model/StockItem";


const URL: string = 'http://localhost:8080/bakery/api/warehouse'
// axios.defaults.baseURL = process.env.BACKEND_MAIN_URL

export async function getStockItems() {
    const stockItems = await axios.get<StockItem[]>(URL + '/stock-items')
    return stockItems.data
}
