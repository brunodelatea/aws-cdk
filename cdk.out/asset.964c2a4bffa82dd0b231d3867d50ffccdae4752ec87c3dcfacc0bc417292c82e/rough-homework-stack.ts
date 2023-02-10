import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
const { ApiGateway } = require('aws-cdk-lib/aws-apigateway');
import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RoughHomeworkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'RoughHomeworkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });


    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lib'),
      handler: 'lambda-function.handler'
    });

    const saveOrder = new lambda.Function(this, 'saveOrder', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lib'),
      handler: 'lambda-function.saveOrder'
    });

    const api = new ApiGateway(this, 'ApiGateway', {
      restApiName: 'MyApiGateway'
    });

    api.root.addResource('hello').addMethod('GET', new ApiGateway.LambdaIntegration(helloLambda));
    api.root.addResource('saveOrder').addMethod('POST', new ApiGateway.LambdaIntegration(saveOrder));
    
    // new apigateway.LambdaRestApi(this, 'HelloApi', {
    //     handler: helloLambda, 
    // });

    // new apigateway.LambdaRestApi(this, 'saveOrder', {
    //   handler: saveOrder
    // });
  }

}
