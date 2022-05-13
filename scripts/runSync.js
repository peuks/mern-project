require('dotenv').config();
const mongo = require('../config/mongo');
const Execution = require('../models/executions.model');
const SyncController = require('../controllers/sync.controller');

async function getLastestExecutionDate() {
    const execution = await Execution.findOne({}).sort({ date: 'desc' }).lean().exec();
    if (execution === null) {
        return console.log("Error getLastestExecutionDate");
    }
    return execution;
}


async function sync() {
    const execution = await getLastestExecutionDate();
    console.log(execution);
    await SyncController.syncOrder(null, null, null, 0, execution.date);
}

sync();
