import { DateTime } from "luxon";

const getCurrentDate = () => DateTime.now().toJSDate()


const getDatexDaysAgo = (days = 7) => DateTime.now().minus({ days: days }).toJSDate()


const getDates = (startDate, endDate) => {
    let fromDate = null
    let toDate = null

    if (startDate === endDate == null) {
        fromDate = getCurrentDate()
        toDate = getDatexDaysAgo()
    }
    if ((startDate !== null) && (endDate == null)) {
        fromDate = startDate
        toDate = getCurrentDate()
    }
    if ((startDate == null) && (endDate !== null)) {
        fromDate = getDatexDaysAgo(7)
        toDate = getCurrentDate()
    }

    return [fromDate, toDate]
}

export { getCurrentDate, getDatexDaysAgo, getDates }