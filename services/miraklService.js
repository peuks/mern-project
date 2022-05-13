import { getOrders } from "../api/miraklApi.js"
import to from "../utils/to.js"


const getOrdersList = async (startDate, endDate, offset) => {

    const [error, result] = await to(getOrders(startDate, endDate, offset))

    return error ? error : result
}

export { getOrdersList }