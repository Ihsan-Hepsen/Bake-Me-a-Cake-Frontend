import {OrderItem} from "./OrderItem";

export type BoundOrder = {
    orderId: string,
    supplierId?: string,
    orderList: OrderItem[],
    orderDate: Date,
    orderStatus: string
}
