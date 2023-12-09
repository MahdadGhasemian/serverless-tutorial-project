const Responses = require("../common/API_Responses")

exports.handler = async event => {
    console.log('event', event)

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' })
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // return the data
        return Responses._200(data[ID])
    }

    // failed as ID not in the data
    return Responses._400({ message: 'no ID in data' })
}

const data = {
    1234: { name: 'Anna Jones', age: 25, job: 'journalist' },
    5678: { name: 'John Smith', age: 30, job: 'engineer' },
    9012: { name: 'Emily Davis', age: 28, job: 'teacher' },
}