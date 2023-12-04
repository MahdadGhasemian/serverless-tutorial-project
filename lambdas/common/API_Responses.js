
const commonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*'
}

const Responses = {
    _200(data = {}) {
        return {
            headers: commonHeaders,
            statusCode: 200,
            body: JSON.stringify(data)
        };
    },

    _201(data = {}) {
        return {
            headers: commonHeaders,
            statusCode: 201,
            body: JSON.stringify(data)
        };
    },

    _400(data = {}) {
        return {
            headers: commonHeaders,
            statusCode: 400,
            body: JSON.stringify(data)
        };
    },

    _404(data = {}) {
        return {
            headers: commonHeaders,
            statusCode: 404,
            body: JSON.stringify(data)
        };
    },

    _500(data = {}) {
        return {
            headers: commonHeaders,
            statusCode: 500,
            body: JSON.stringify(data)
        };
    }
};

module.exports = Responses;