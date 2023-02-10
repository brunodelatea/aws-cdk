import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class RoughHomeworkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lib'),
      handler: 'lambda-function.handler'
    });

    const newOrder = new lambda.Function(this, 'newOrder', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lib'),
      handler: 'lambda-function.newOrder'
    });

    const api = new apigateway.RestApi(this, 'example-api', {
      restApiName: 'Example API'
    });

    api.root.addResource('hello').addMethod('GET', new apigateway.LambdaIntegration(helloLambda, {
      proxy: false
    }));

    api.root.addResource('new-order').addMethod('GET', new apigateway.LambdaIntegration(newOrder, {
      proxy: false
    }));
    
  }
}

// const app = new cdk.App();
// new LambdaStack(app, 'LambdaStack');
// app.synth();


// @aws-cdk/aws-dynamodb