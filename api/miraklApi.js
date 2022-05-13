import axios from "axios"
import to from "../utils/to.js"

const header = {
    headers: {
        Authorization: process.env.MKL_API_KEY,
        Accept: 'application/json'
    }
}

const baseUrl = process.env.MKL_FRONT_URL || "https://pandacola.mirakl.net/api"

const ordersUrl = `${baseUrl}/orders`
const test = process.env.MKL_API_KEY

const getOrders = async (startDate, endDate, offset) => {
    const start_date = startDate
    const end_date = endDate
    const [err, result] = await to(axios.get(`${process.env.MKL_FRONT_URL}/api/orders`, {
        params: {
            start_date,
            end_date,
            offset
        },
        headers: {
            Authorization: process.env.MKL_API_KEY,
            Accept: 'application/json'
        }
    }))
    return err ? [err.result.data.message] : [null, result.data]

}


export { getOrders }
