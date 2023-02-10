# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


AWS cli config
    - aws configure set default.region us-east-1
    - aws configure
        - To use locakstack, use fake credentials:
            - AWS_ACCESS_KEY_ID='123'
            - AWS_SECRET_KEY='xyz'
            - AWS_BUCKET_NAME='demo-bucket'

Start localstack
    docker run -p 4566:4566 localstack/localstack

DynamoDb
    - List tables: 
        aws --endpoint-url=http://localhost:4566 dynamodb list-tables

    - Create Table: 
        aws --endpoint-url=http://localhost:4566 dynamodb create-table --table-name test_table  --attribute-definitions AttributeName=first,AttributeType=S AttributeName=second,AttributeType=N --key-schema AttributeName=first,KeyType=HASH AttributeName=second,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

aws dynamodb put-item \
  --table-name my-table \
  --item '{ "id": {"S": "123"}, "name": {"S": "John Doe"} }' \
  --endpoint-url http://localhost:4566


Run CDK Localstack
    - npm run build
    - cdklocal destroy
    - cdklocal bootstrap
    - cdklocal deploy