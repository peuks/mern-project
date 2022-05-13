import { findClientrByAnyWay } from "./findCustomerService.js";

const createDocument = async (req, order, result) => {
    let client = await findClientrByAnyWay(order);
    console.log("je crée des docuements")
    console.log(client)
}
export default createDocument