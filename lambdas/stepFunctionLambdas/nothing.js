const Dynamo = require("../common/Dynamo")
const { v4: uuidv4 } = require('uuid');

const tableName = process.env.signupTableName;

exports.hander = async event => {
    console.log("event", event)

    const ok = true;

    return { ok }
}
