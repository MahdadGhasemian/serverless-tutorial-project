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

- GET - https://returned-amazon-base-url/dev/get-user/{ID}

```bash
curl --location --request GET 'https://returned-amazon-base-url/dev/get-user/1234' \
    --header 'x-api-key: returned_api_key'
```

- GET - https://returned-amazon-base-url/dev/get-player-score/{ID}

```bash
curl --location --request GET 'https://returned-amazon-base-url/dev/get-user/1234' \
    --header 'x-api-key: returned_api_key'
```

- POST - https://returned-amazon-base-url/dev/create-player-score/{ID}

```bash
curl --location --request POST 'https://returned-amazon-base-url/dev/create-player-score/4521545' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "Name": "Sarah",
        "Score": 15
    }'
```

- POST - https://returned-amazon-base-url/dev/create-file/{fileName}

```bash
curl --location --request POST 'https://returned-amazon-base-url/dev/create-file/car2.json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "color": "Red"
    }'
```

- GET - https://returned-amazon-base-url/dev/get-file/{fileName}

```bash
curl --location --request GET 'https://returned-amazon-base-url/dev/get-file/car2.json'
```

- POST - https://returned-amazon-base-url/dev/send-email

```bash
curl --location --request POST 'https://returned-amazon-base-url/dev/send-email' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "to": "example@gmail.com",
        "from": "example@gmail.com",
        "subject": "Test Email",
        "text": "Hi there, this is a message sent through my API"
    }'
```

- ANY - https://returned-amazon-base-url/dev/chuck-norris/{proxy+}

```bash
curl --location --request GET 'https://returned-amazon-base-url/dev/chuck-norris/ANY'
```

## Websocket

#### endpoints:

- WSS - wss://returned-amazon-base-url/dev

#### online tool for testing:

- https://websocketking.com/

#### example json data to send

```json
{ "message": "Hey this is a websocket message!", "action": "message" }
```

## SMS

#### endpoints:

- POST - https://returned-amazon-base-url/dev/send-sms

```bash
curl --location --request POST 'https://returned-amazon-base-url/dev/send-sms' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "phoneNumber": "+your-phone-number",
        "message": "This is a message from my serverless API!"
    }'
```

## Comprehend

#### endpoints:

- POST - https://returned-amazon-base-url/dev/analyse

```bash
curl --location --request POST 'https://returned-amazon-base-url/dev/analyse' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "text": "This is a simple text to test the api"
    }'
```

## Cron

[Cron Format](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html)
