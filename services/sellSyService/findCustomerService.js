import { geClientrById, getClientByIdAndCfid } from "../../api/sellsyApi.js"
import to from "../../utils/to.js"
import sleep from "../../utils/sleep.js"
const findClientrByOrder = async (order) => {

}
const findClientrByMail = async (order) => {

}
const findClientrById = async (order, client, hasBeenFound) => {
    const [error, result] = await to(geClientrById(order?.customer?.customer_id))
    const clients = result?.response?.result

    if (error) {
        console.log("\nClient was not found by his Id...\n")
        return
    }

    console.log("\nClient was not found by his Id...\n")
    console.log("Response From findClientrById :\n", result)

    if (error) client, hasBeenFound

    if (result?.response?.result.length > 0) client = result?.response?.result ? result?.response?.result[0] : null
    if (client) hasBeenFound === true
    return client, hasBeenFound
}

const findClientrByIdAndCFID = async (order, client, hasBeenFound) => {
    const [error, result] = await to(getClientByIdAndCfid(order?.customer?.customer_id))
    const clients = result?.response?.result

    if (error) {
        console.log("\nClient was not found by his Id...\n")
        return error
    }

    if (clients?.length > 0) client = clients[0]

    console.log("\nClient was not found by his Id...\n")
    console.log("Response From findClientrById :\n", result)

    return error, client, hasBeenFound
}

const findClientrByProspect = async (order) => {
}

const findClientrByAnyWay = async (order) => {
    let hasBeenFound = false
    let error, client = null

    // !hasBeenFound && findClientrById(order?.customer?.customer_id, client, hasBeenFound)

    !hasBeenFound && findClientrByIdAndCFID(order?.customer?.customer_id, client, hasBeenFound)

    // !hasBeenFound && findClientrByIdAndCFID(order?.customer?.customer_id, client,hasBeenFound)

    // !hasBeenFound && findClientrByMail(order?.customer?.customer_id, client)

    // !hasBeenFound && findClientrByProspect(order?.customer?.customer_id, client)

    // return client
}

export {
    findClientrByAnyWay,
    findClientrById,
    findClientrByIdAndCFID,
    findClientrByMail,
    findClientrByOrder,
    findClientrByProspect,

}