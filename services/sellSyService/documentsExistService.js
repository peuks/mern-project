const documentsExists = async (nbtotal) => {
    if (data_sellsy.infos.nbtotal === '0') {
        // Create document
        console.log('document not existing');
        // if (req !== null && req.io) {
        //     req.io.emit('order_log', `-> document not found`);
        // }
        console.log(order.order_state);
        if (createOnlyNew === true && (order.order_state !== "STAGING" && order.order_state !== "WAITING_ACCEPTANCE")) return true
    }
}

export default documentsExists