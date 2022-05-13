import DocumentExistsResult from "../models/DocumentExistsResult.js";
import Result from "../models/resultModel.js";
import { getDates } from "../services/dateService.js";
import { getOrdersList } from "../services/miraklService.js";
import { getDocumentList } from "../services/sellsyService.js";
import { miraklOrderListError } from "../utils/errorsUtils.js";
import checkRunningTask from "../utils/runningTask.js";
import isOrderStateOk from "../services/sellSyService/checkOrderStateService.js"
import to from "../utils/to.js"
import createDocument from "../services/sellSyService/createDocumentService.js";
import updateDocument from "../services/sellSyService/updateDocumentService.js";
export const syncOrders = async (req, res) => {
  let alreadyRunning = true
  let orderDone = 0
  let createOnlyNew = req?.body?.onlyNew || true

  const result = new Result(0, 0, 0, 0)

  checkRunningTask(result.offset, alreadyRunning)

  const [startDate, endDate] = getDates(req?.body?.startDate, req?.body?.endDate)

  const [orderListMiraklErr, orderListMiraklResp] = await getOrdersList(startDate, endDate, result.offset)

  if (orderListMiraklErr) {
    miraklOrderListError(orderListMiraklErr)
    return res.status(400).json({ error: { message: orderListMiraklErr.response.data.message } })
  }

  for (const order of orderListMiraklResp.orders) {

    const { order_id: orderId, order_state: orderState } = order



    const [documentsOrderError, documentsOrderResp] = await getDocumentList(orderId)

    if (documentsOrderError) {
      console.log("ERROR WHILE FETCHING DOCUMENT FROM ", orderId)
      return
    }


    const documentExists = DocumentExistsResult[documentsOrderResp?.response?.infos?.nbtotal]

    if (documentExists === false) return await createDocument(req, order, result)

    // if (documentExists === true) return await updateDocument(req, documentsOrderResp, order, result)

    orderDone++
  }

  return res.json({ message: "ok" })
};