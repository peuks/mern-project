import { getDocuments } from "../api/sellsyApi.js"
import to from "../utils/to.js"


const getDocumentList = async (orderId) => {
    const [error, result] = await to(getDocuments(orderId))

    return error ? error : result
}
export { getDocumentList }