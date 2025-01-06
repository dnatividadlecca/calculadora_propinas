import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        //console.log(item)
        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if(itemExists){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem
            )
            setOrder(updatedOrder)
        }else{
            const newOrder = {...item, quantity: 1}
            setOrder([...order, newOrder])
        }
        
    }

    console.log(order)

    return {
        order,
        addItem
    }
}