import axios from "axios";
import {BoundOrder} from "../model/BoundOrder";

const URL: string = 'http://localhost:8080/bakery/api/warehouse/orders/inbound'

export async function getInBoundOrders() {
    const outBoundOrders = await axios.get<BoundOrder[]>(URL)
    console.log(outBoundOrders.data)
    return outBoundOrders.data
}
