const Responses = require("../common/API_Responses")
const AWS = require('aws-sdk')

const SES = new AWS.SES();

exports.handler = async event => {
    console.log('event', event)

    const email = event.Input.Payload.email;

    const message = `Hi, We saw that you signed up for our gaming platform but haven't palyed yet.
    We hope you play soon`

    const params = {
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Body: {
                Text: { Data: message }
            },
            Subject: { Data: 'Remember to use the gaming platform' }
        },
        Source: 'devopsuser1988@gmail.com'
    }

    try {

        await SES.sendEmail(params).promise()
        return;
    } catch (error) {
        console.log('error sending email ', error)
        throw error;
    }
}

