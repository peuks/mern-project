const isOrderStateOk = (createOnlyNew = true, orderState) =>
    createOnlyNew === true &&
    (
        orderState !== "STAGING" &&
        orderState !== "WAITING_ACCEPTANCE"
    )

export default isOrderStateOk