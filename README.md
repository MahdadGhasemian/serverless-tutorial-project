# serverless-tutorial-project
Some example to run serverless api (AWS)


# How to deploy:
    * npm i
    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser2
    * sls deploy

# Create new project:
    * npm init -y
    * npm i -g serverless
    * serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET --profile serverlessUser2
    * serverless create --template aws-nodejs --path new-serverless-project