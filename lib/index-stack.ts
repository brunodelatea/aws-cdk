import { Construct } from 'constructs';
import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambdaEventSource from 'aws-cdk-lib/aws-lambda-event-sources';

export interface NewCdkProps {
  // Define construct properties here
}

export class NewCdk extends Stack{
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create the SQS queue
    const emailQueue = new sqs.Queue(this, 'EmailQueue', {
      visibilityTimeout: Duration.seconds(45),
      queueName: 'user-email-queue',
    });

    // create an sqs event source
    const lambdaSqsEventSource = new lambdaEventSource.SqsEventSource(emailQueue, {
      batchSize: 10,
      enabled: true,
    });

    // create the lambda responsible for processing users
    const processUser = new lambda.Function(this, 'ProcessUserLambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'lambdas.processUser',
      runtime: lambda.Runtime.NODEJS_16_X,
    });

    // provision the DynamoDB user table
    const userTable = new dynamodb.Table(this, 'UserTable', {
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryption: dynamodb.TableEncryption.DEFAULT,
      pointInTimeRecovery: false
    });

    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'lambdas.hello',
      runtime: lambda.Runtime.NODEJS_16_X,
      memorySize: 256,
      timeout: Duration.seconds(10)
    });
    
    // attach the event source to the userProcessing lambda, so that Lambda can poll the queue and invoke the UserProcessing Lambda
    processUser.addEventSource(lambdaSqsEventSource);
    // grant the user process lambda permission to invoke SES
    processUser.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['ses:SendRawEmail', 'ses:SendTemplatedEmail', 'ses:SendEmail'],
      resources: ['*'],
      sid: 'SendEmailPolicySid',
    }));

    const createUser = new lambda.Function(this, 'CreateUserLambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'lambdas.createUser',
      runtime: lambda.Runtime.NODEJS_16_X,
      memorySize: 256,
      timeout: Duration.seconds(10),
      environment: {
        TABLE_NAME: userTable.tableName,
        EMAIL_PROCESSING_QUEUE_URL: emailQueue.queueUrl,
      }
    });

    userTable.grantWriteData(createUser);
    emailQueue.grantSendMessages(createUser);

    // Configure API and Routes
    const restApi = new apigateway.RestApi(this, 'EmailServiceApi', {
      restApiName: 'EmailService',
    });

    const hello = restApi.root.addResource('hello');
    const newUsers = restApi.root.addResource('user').addResource('new');
    
    hello.addMethod('GET', new apigateway.LambdaIntegration(helloLambda), {
      authorizationType: apigateway.AuthorizationType.NONE,
    });

    newUsers.addMethod('POST', new apigateway.LambdaIntegration(createUser), {
      authorizationType: apigateway.AuthorizationType.NONE,
    });

  }
}
