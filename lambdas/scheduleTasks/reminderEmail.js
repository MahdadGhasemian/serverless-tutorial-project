const AWS = require("aws-sdk")
const Responses = require("../common/API_Responses")

const SES = new AWS.SES();

exports.handler = async event => {
    console.log('event', event)

    const message = `Hey, Don't forget to drink a coffee.`

    const params = {
        Destination: {
            ToAddresses: ['devopsuser1988@gmail.com']
        },
        Message: {
            Body: {
                Text: { Data: message }
            },
            Subject: { Data: "reminder email" }
        },
        Source: 'devopsuser1988@gmail.com'
    }

    try {
        await SES.sendEmail(params).promise()
        return Responses._200({ message: 'email sent' })
    } catch (error) {
        console.log(error)
        return Responses._400({ message: 'faild to send the email' })
    }
}