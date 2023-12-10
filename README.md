# serverless-tutorial-project

Some example to run serverless api (AWS)

# How to deploy:

    * npm i
    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser
    * sls deploy

# Create new project:

    * npm init -y
    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser
    * serverless create --template aws-nodejs --path new-serverless-project

# Branches

## Basic

#### api keys:

- x-api-key-free: the api key where returned after `sls deploy`
- x-api-key-paid: the api key where returned after `sls deploy`

#### endpoints:

- GET - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-user/{ID}

```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-user/1234' \
    --header 'x-api-key: returned_api_key'
```

- GET - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-player-score/{ID}

```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-user/1234' \
    --header 'x-api-key: returned_api_key'
```

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/create-player-score/{ID}

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/create-player-score/4521545' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "Name": "Sarah",
        "Score": 15
    }'
```

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/create-file/{fileName}

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/create-file/car2.json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "color": "Red"
    }'
```

- GET - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-file/{fileName}

```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-file/car2.json'
```

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/send-email

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/send-email' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "to": "example@gmail.com",
        "from": "example@gmail.com",
        "subject": "Test Email",
        "text": "Hi there, this is a message sent through my API"
    }'
```

- ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/chuck-norris/{proxy+}

```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/chuck-norris/ANY'
```

## Websocket

#### endpoints:

- WSS - wss://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev

#### online tool for testing:

- https://websocketking.com/

#### example json data to send

```json
{ "message": "Hey this is a websocket message!", "action": "message" }
```

## SMS

#### endpoints:

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/send-sms

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/send-sms' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "phoneNumber": "+your-phone-number",
        "message": "This is a message from my serverless API!"
    }'
```

## Comprehend

#### endpoints:

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/analyse

```bash
curl --location --request POST 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/analyse' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "text": "This is a simple text to test the api"
    }'
```

## Cron

[Cron Format](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html)
[News API](https://newsapi.org/)

## ReactApp

## Hooks

- The 'createPlayerScore.js' and 'getPlayerScore.js' files have been changed to use hooks.

## Update Dynamodb

- PUT - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/update-player-score/{ID}
```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-player-score/1234'
```

## Query

#### endpoint:

- GET - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-game-scores/{game}
```bash
curl --location --request GET 'https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get-game-scores/gamename'
```

## Step Functions

#### Data for test execution
```json
{
  "signup": {
    "email": "devopsuser1988@gmail.com"
  }
}
```

![step-functions](https://github.com/MahdadGhasemian/serverless-tutorial-project/assets/48379992/6dedbdcd-0ced-4ca4-a453-f276f1263e37)


## Telegram Bot (Lex)

#### endpoint:

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/telegram-webhook

#### Telegram:
    Channel name to create a bot: "@botfather"
    botname format: yourBootNameBot
    username format: yourBootName_Bot
    api: xxxxx_your_telegram_api
    set-webhook:
```bash
    curl --request POST \
    --url https://api.telegram.org/botxxxxx_your_telegram_api/setWebhook \
    --header 'content-type: application/json' \
    --data '{"url": "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/telegram-webhook"}'
```

![image](https://github.com/MahdadGhasemian/serverless-tutorial-project/assets/48379992/b71417e1-acdf-4dbc-99ce-ebb8b7196689)

**Note:** If you encounter an error as follows, you can switch to the old console (**AWS Lex console 1**)
-  There is no alias named dev for the bot named botTelegram. Choose another alias

## Image upload

#### endpoint:

- POST - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/image-upload
