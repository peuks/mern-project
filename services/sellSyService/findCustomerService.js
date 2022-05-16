import {
    geClientrById,
    getClientByIdAndCfid,
    getClientByProspectId,
    getClientrByMail,
    getProspectByMail
} from "../../api/sellsyApi.js"
import to from "../../utils/to.js"
import sleep from "../../utils/sleep.js"
const findClientrByOrder = async (order) => {

}
const findClientrByMail = async (order) => {

    const [error, result] = await to(getClientrByMail(order?.customer?.email))

    if (error) {
        console.log("\nClient was not found by his Mail...\n")
        return [error, null, null]
    }


    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his Mail...\n")
        console.log("Response Error from findClientrByMail :\n", result, "\n")
    }
    console.log("Response from findClientrByMail :\n", result?.response?.result, "\n")
    return [null, Object.values(result?.response?.result)[0], true]

}
const findContact = async (order, client, hasBeenFound) => {
    const [error, result] = await to(getContact(order?.customer?.customer_id))
    const clientResult = result?.response?.result

    console.log("clientResult", clientResult)
    if (error) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
        return [error, null, null]
    }

    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
    }

    return (clientResult.length === 0) ?
        [null, null, false]
        :
        [null, clientResult[0], true]

}
const findClientrById = async (order, client, hasBeenFound) => {
    const [error, result] = await to(geClientrById(order?.customer?.customer_id))
    const clientResult = result?.response?.result

    console.log("clientResult", clientResult)
    if (error) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
        return [error, null, null]
    }

    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
    }

    return (clientResult.length === 0) ?
        [null, null, false]
        :
        [null, clientResult[0], true]

}

const findClientrByIdAndCFID = async (order) => {
    const [error, result] = await to(getClientByIdAndCfid(order?.customer?.customer_id))

    if (error) console.log("\nClient was not found by his findClientrByIdAndCFID...😫😫😫\n")

    const clientResult = result?.response?.result

    if (error) {
        console.log("\nClient was not found by his ID with CFID...\n")
        console.log("Response Error from findClientrByIdAndCFID :\n", result, "\n")
        return [error, null, null]
    }

    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Client was not found :\n", result, "\n")
    }

    return (clientResult.length === 0) ?
        [null, null, false]
        :
        [null, clientResult[0], true]
}

const findClientrByProspect = async (order,) => {
    const [error, result] = await to(getClientByProspectId(order?.customer?.customer_id))
    const clientResult = result?.response?.result

    console.log("clientResult", clientResult)
    if (error) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
        return [error, null, null]
    }

    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
    }

    return (clientResult.length === 0) ?
        [null, null, false]
        :
        [null, clientResult[0], true]
}
const findProspectByMail = async (order,) => {
    const [error, result] = await to(getProspectByMail(order?.customer?.customer_id))
    const clientResult = result?.response?.result

    console.log("clientResult", clientResult)
    if (error) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
        return [error, null, null]
    }

    if (result?.response?.result.length === 0) {
        console.log("\nClient was not found by his ID...\n")
        console.log("Response Error from findClientrById :\n", result, "\n")
    }

    return (clientResult.length === 0) ?
        [null, null, false]
        :
        [null, clientResult[0], true]
}

const findClientrByAnyWay = async (order) => {
    let client, error = null
    let hasBeenFound = true

    if (!hasBeenFound) console.log("\n--------------------BYID--------------------------------------\n")

    if (!hasBeenFound) [error, client, hasBeenFound] = await findClientrById(order)
    if (!hasBeenFound) console.log("\n--------------------BY CFID-----------------------------------\n")

    if (!hasBeenFound) [error, client, hasBeenFound] = await findClientrByIdAndCFID(order)

    if (!hasBeenFound) console.log("\n--------------------BY MAIL-----------------------------------\n")

    if (!hasBeenFound) [error, client, hasBeenFound] = await findClientrByMail(order)

    if (!hasBeenFound) console.log("\n--------------------BY PROSPECT-----------------------------------\n")
    if (!hasBeenFound) [error, client, hasBeenFound] = await findClientrByProspect(order)

    if (!hasBeenFound) console.log("\n--------------------BY PROSPECT Mail-----------------------------------\n")
    if (!hasBeenFound) [error, client, hasBeenFound] = await findProspectByMail(order)

    if (!hasBeenFound) console.log("\n--------------------BY CONTACT-----------------------------------\n")
    if (!hasBeenFound) [error, client, hasBeenFound] = await findContact(order)

    console.log("\n----------------------END-----------------------------------------\n")

    return client
}

export {
    findClientrByAnyWay,
    findClientrById,
    findClientrByIdAndCFID,
    findClientrByMail,
    findClientrByOrder,
    findClientrByProspect,
    findProspectByMail,
    findContact

}