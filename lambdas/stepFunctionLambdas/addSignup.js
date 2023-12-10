const Dynamo = require("../common/Dynamo")
const { v4: uuidv4 } = require('uuid');

const tableName = process.env.signupTableName;

exports.hander = async event => {
    console.log("event", event)

    const email = event.Input.signup.email;

    const ID = uuidv4();

    await Dynamo.write({ email, ID, played: 'false' }, tableName)

    return { ID }
}
