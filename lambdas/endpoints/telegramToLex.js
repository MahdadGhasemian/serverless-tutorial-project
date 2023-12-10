const AWS = require("aws-sdk")
const Axios = require("axios")
const Responses = require("../common/API_Responses")

const lexruntime = new AWS.LexRuntime();

exports.hendler = async event => {
    try {
        const body = JSON.parse(event.body)
        console.log('body: ', body)
        const messageForLex = mapTelegramToLex(body);
        const lexResponse = await lexruntime.postText(messageForLex).promise();

        const messageForTelegram = mapLexToTelegram(lexResponse, body);
        await sendToTelegram(messageForTelegram)

        return Responses._200()
    } catch (error) {
        console.log('error in try catch', error);
        return Responses._400();
    }
}

const mapTelegramToLex = body => {
    const chatID = String(body.message.chat.id);
    const message = body.message.text;
    return {
        inputText: message,
        userId: chatID,
        botName: 'telegramBot',
        botAlias: 'dev',
        sessionAttributes: {}
    }
}

const mapLexToTelegram = (lexResponse, body) => {
    return {
        text: lexResponse.message,
        chat_id: body.message.chat.id
    }
}

const sendToTelegram = message => {
    const token = '6373162870:AAFM1XYEXwjXy7Sd1yKwUWUOn3eTelszGC8';
    const telegramURL = `https://api.telegram.org/bot${token}/sendMessage`

    return Axios.post(telegramURL, message)
}