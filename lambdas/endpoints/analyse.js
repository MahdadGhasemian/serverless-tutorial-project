const Responses = require("../common/API_Responses")
const AWS = require('aws-sdk')

const Comprehend = new AWS.Comprehend()

exports.handler = async event => {
    console.log('event', event)

    const body = JSON.parse(event.body);

    if (!body || !body.text) {
        return Responses._400({ messsage: 'no text field on the body' })
    }

    const text = body.text;

    const params = {
        LanguageCode: 'en',
        TextList: [text]
    };

    try {
        const entityResults = await Comprehend.batchDetectEntities(params).promise();
        const entities = entityResults.ResultList[0];

        const sentimentResult = await Comprehend.batchDetectSentiment(params).promise();
        const sentiment = sentimentResult.ResultList[0];

        const responseData = {
            entities,
            sentiment
        }
        console.log(responseData)

        return Responses._200(responseData)
    } catch (error) {
        console.log('error', error)
        return Responses._400({ messsage: 'failed to work with comprehend' })
    }
}