import { findClientrByAnyWay } from "./findCustomerService.js";

const createDocument = async (req, order, result) => {
    let client = await findClientrByAnyWay(order);
    console.log("\nMON CLIENT A ETE TROUVE \n")
    console.log(client)
    return
}
export default createDocument