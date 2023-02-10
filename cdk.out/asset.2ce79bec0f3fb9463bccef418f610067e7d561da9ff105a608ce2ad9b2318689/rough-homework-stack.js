"use strict";
// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as apigateway from 'aws-cdk-lib/aws-apigateway';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
// // import * as sqs from 'aws-cdk-lib/aws-sqs';
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoughHomeworkStack = void 0;
// export class RoughHomeworkStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);
//     // The code that defines your stack goes here
//     // example resource
//     // const queue = new sqs.Queue(this, 'RoughHomeworkQueue', {
//     //   visibilityTimeout: cdk.Duration.seconds(300)
//     // });
//     const helloLambda = new lambda.Function(this, 'HelloLambda', {
//       runtime: lambda.Runtime.NODEJS_10_X,
//       code: lambda.Code.fromAsset('lib'),
//       handler: 'lambda-function.handler'
//     });
//     const saveOrder = new lambda.Function(this, 'saveOrder', {
//       runtime: lambda.Runtime.NODEJS_10_X,
//       code: lambda.Code.fromAsset('lib'),
//       handler: 'lambda-function.saveOrder'
//     });
//     // const api = new apigateway(this, 'ApiGateway', {
//     //   restApiName: 'MyApiGateway'
//     // });
//     new apigateway.LambdaRestApi(this, 'HelloApi', {
//       handler: helloLambda, 
//     });
//     new apigateway.LambdaRestApi(this, 'saveOrder', {
//       handler: saveOrder
//     });
//   }
// }
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class RoughHomeworkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
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
        const api = new apigateway.RestApi(this, 'example-api', {
            restApiName: 'Example API'
        });
        api.root.addResource('/').addMethod('GET', new apigateway.LambdaIntegration(helloLambda, {
            proxy: false
        }));
        api.root.addResource('/save-order').addMethod('POST', new apigateway.LambdaIntegration(saveOrder, {
            proxy: false
        }));
    }
}
exports.RoughHomeworkStack = RoughHomeworkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91Z2gtaG9tZXdvcmstc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3VnaC1ob21ld29yay1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELGlEQUFpRDs7O0FBRWpELHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDeEUsK0JBQStCO0FBRS9CLG9EQUFvRDtBQUVwRCwwQkFBMEI7QUFDMUIsbUVBQW1FO0FBQ25FLHdEQUF3RDtBQUN4RCxhQUFhO0FBR2IscUVBQXFFO0FBQ3JFLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLFVBQVU7QUFFVixpRUFBaUU7QUFDakUsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsVUFBVTtBQUVWLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsYUFBYTtBQUViLHVEQUF1RDtBQUN2RCwrQkFBK0I7QUFDL0IsVUFBVTtBQUVWLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLE1BQU07QUFFTixJQUFJO0FBR0osbUNBQW1DO0FBRW5DLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFFekQsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUseUJBQXlCO1NBQ25DLENBQUMsQ0FBQztRQUVILE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3ZELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUsMkJBQTJCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3RELFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1lBQ3ZGLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFSixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtZQUNoRyxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNGO0FBNUJELGdEQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG4vLyBpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbi8vIGltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuLy8gaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuLy8gLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuXG4vLyBleHBvcnQgY2xhc3MgUm91Z2hIb21ld29ya1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbi8vICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuLy8gICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4vLyAgICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG5cbi8vICAgICAvLyBleGFtcGxlIHJlc291cmNlXG4vLyAgICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdSb3VnaEhvbWV3b3JrUXVldWUnLCB7XG4vLyAgICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuLy8gICAgIC8vIH0pO1xuXG5cbi8vICAgICBjb25zdCBoZWxsb0xhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvTGFtYmRhJywge1xuLy8gICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4vLyAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xpYicpLFxuLy8gICAgICAgaGFuZGxlcjogJ2xhbWJkYS1mdW5jdGlvbi5oYW5kbGVyJ1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3Qgc2F2ZU9yZGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnc2F2ZU9yZGVyJywge1xuLy8gICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4vLyAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xpYicpLFxuLy8gICAgICAgaGFuZGxlcjogJ2xhbWJkYS1mdW5jdGlvbi5zYXZlT3JkZXInXG4vLyAgICAgfSk7XG5cbi8vICAgICAvLyBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheSh0aGlzLCAnQXBpR2F0ZXdheScsIHtcbi8vICAgICAvLyAgIHJlc3RBcGlOYW1lOiAnTXlBcGlHYXRld2F5J1xuLy8gICAgIC8vIH0pO1xuICAgIFxuLy8gICAgIG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0hlbGxvQXBpJywge1xuLy8gICAgICAgaGFuZGxlcjogaGVsbG9MYW1iZGEsIFxuLy8gICAgIH0pO1xuXG4vLyAgICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhUmVzdEFwaSh0aGlzLCAnc2F2ZU9yZGVyJywge1xuLy8gICAgICAgaGFuZGxlcjogc2F2ZU9yZGVyXG4vLyAgICAgfSk7XG4vLyAgIH1cblxuLy8gfVxuXG5cbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgUm91Z2hIb21ld29ya1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaGVsbG9MYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0xhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbiAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uaGFuZGxlcidcbiAgICB9KTtcblxuICAgIGNvbnN0IHNhdmVPcmRlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ3NhdmVPcmRlcicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbiAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uc2F2ZU9yZGVyJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnZXhhbXBsZS1hcGknLCB7XG4gICAgICByZXN0QXBpTmFtZTogJ0V4YW1wbGUgQVBJJ1xuICAgIH0pO1xuXG4gICAgYXBpLnJvb3QuYWRkUmVzb3VyY2UoJy8nKS5hZGRNZXRob2QoJ0dFVCcsIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGhlbGxvTGFtYmRhLCB7XG4gICAgICBwcm94eTogZmFsc2VcbiAgICB9KSk7XG5cbiAgICBhcGkucm9vdC5hZGRSZXNvdXJjZSgnL3NhdmUtb3JkZXInKS5hZGRNZXRob2QoJ1BPU1QnLCBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihzYXZlT3JkZXIsIHtcbiAgICAgIHByb3h5OiBmYWxzZVxuICAgIH0pKTtcbiAgfVxufVxuIl19