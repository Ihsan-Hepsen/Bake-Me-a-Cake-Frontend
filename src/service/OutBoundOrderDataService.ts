import axios from 'axios'
import { BoundOrder } from '../model/BoundOrder'


const URL: string = 'http://localhost:8080/bakery/api/warehouse/orders/outbound'

export async function getOutBoundOrders() {
    const outBoundOrders = await axios.get<BoundOrder[]>(URL)
    return outBoundOrders.data
}

export function fulfillOutBoundOrderService(orderUuid: string) {
    return axios.post(URL + '/' + orderUuid)
}
