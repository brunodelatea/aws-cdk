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
// import { Lambda } from 'aws-cdk-lib/aws-lambda';
const apigateway = require("aws-cdk-lib/aws-apigateway");
// import { ApiGateway } from 'aws-cdk-lib/aws-apigateway';
class RoughHomeworkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const helloLambda = new lambda.Function(this, 'HelloLambda', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lib'),
            handler: 'lambda-function.handler'
        });
        // const goodbyeLambda = new lambda.Function(this, 'GoodbyeLambda', {
        //   runtime: Lambda.Runtime.NODEJS_10_X,
        //   code: Lambda.Code.fromAsset('lambda'),
        //   handler: 'goodbye.handler'
        // });
        const api = new apigateway.RestApi(this, 'example-api', {
            restApiName: 'Example API'
        });
        // new apigateway.LambdaRestApi(this, 'HelloApi', {
        //   handler: helloLambda, 
        // });
        api.root.addResource('hello').addMethod('GET', new apigateway.LambdaIntegration(helloLambda, {
            proxy: false
        }));
        //api.root.addResource('goodbye').addMethod('GET', new ApiGateway.LambdaIntegration(goodbyeLambda));
    }
}
exports.RoughHomeworkStack = RoughHomeworkStack;
// const app = new cdk.App();
// new LambdaStack(app, 'LambdaStack');
// app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91Z2gtaG9tZXdvcmstc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3VnaC1ob21ld29yay1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELGlEQUFpRDs7O0FBRWpELHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDeEUsK0JBQStCO0FBRS9CLG9EQUFvRDtBQUVwRCwwQkFBMEI7QUFDMUIsbUVBQW1FO0FBQ25FLHdEQUF3RDtBQUN4RCxhQUFhO0FBR2IscUVBQXFFO0FBQ3JFLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLFVBQVU7QUFFVixpRUFBaUU7QUFDakUsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsVUFBVTtBQUVWLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsYUFBYTtBQUViLHVEQUF1RDtBQUN2RCwrQkFBK0I7QUFDL0IsVUFBVTtBQUVWLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLE1BQU07QUFFTixJQUFJO0FBR0osbUNBQW1DO0FBRW5DLGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQseURBQXlEO0FBRXpELDJEQUEyRDtBQUUzRCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQy9DLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDM0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7U0FDbkMsQ0FBQyxDQUFDO1FBRUgscUVBQXFFO1FBQ3JFLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsK0JBQStCO1FBQy9CLE1BQU07UUFFTixNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN0RCxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFFSCxtREFBbUQ7UUFDbkQsMkJBQTJCO1FBQzNCLE1BQU07UUFHTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRTtZQUMzRixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0osb0dBQW9HO0lBQ3RHLENBQUM7Q0FDRjtBQTlCRCxnREE4QkM7QUFFRCw2QkFBNkI7QUFDN0IsdUNBQXVDO0FBQ3ZDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuLy8gaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5Jztcbi8vIGltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbi8vIC8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3FzJztcblxuLy8gZXhwb3J0IGNsYXNzIFJvdWdoSG9tZXdvcmtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4vLyAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbi8vICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuLy8gICAgIC8vIFRoZSBjb2RlIHRoYXQgZGVmaW5lcyB5b3VyIHN0YWNrIGdvZXMgaGVyZVxuXG4vLyAgICAgLy8gZXhhbXBsZSByZXNvdXJjZVxuLy8gICAgIC8vIGNvbnN0IHF1ZXVlID0gbmV3IHNxcy5RdWV1ZSh0aGlzLCAnUm91Z2hIb21ld29ya1F1ZXVlJywge1xuLy8gICAgIC8vICAgdmlzaWJpbGl0eVRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDMwMClcbi8vICAgICAvLyB9KTtcblxuXG4vLyAgICAgY29uc3QgaGVsbG9MYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0xhbWJkYScsIHtcbi8vICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuLy8gICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbi8vICAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uaGFuZGxlcidcbi8vICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHNhdmVPcmRlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ3NhdmVPcmRlcicsIHtcbi8vICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuLy8gICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbi8vICAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uc2F2ZU9yZGVyJ1xuLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkodGhpcywgJ0FwaUdhdGV3YXknLCB7XG4vLyAgICAgLy8gICByZXN0QXBpTmFtZTogJ015QXBpR2F0ZXdheSdcbi8vICAgICAvLyB9KTtcbiAgICBcbi8vICAgICBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsICdIZWxsb0FwaScsIHtcbi8vICAgICAgIGhhbmRsZXI6IGhlbGxvTGFtYmRhLCBcbi8vICAgICB9KTtcblxuLy8gICAgIG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ3NhdmVPcmRlcicsIHtcbi8vICAgICAgIGhhbmRsZXI6IHNhdmVPcmRlclxuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vIH1cblxuXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG4vLyBpbXBvcnQgeyBMYW1iZGEgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuaW1wb3J0IHsgQXBpR2F0ZXdheSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1ldmVudHMtdGFyZ2V0cyc7XG4vLyBpbXBvcnQgeyBBcGlHYXRld2F5IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgUm91Z2hIb21ld29ya1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaGVsbG9MYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0xhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbiAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uaGFuZGxlcidcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IGdvb2RieWVMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdHb29kYnllTGFtYmRhJywge1xuICAgIC8vICAgcnVudGltZTogTGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4gICAgLy8gICBjb2RlOiBMYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxuICAgIC8vICAgaGFuZGxlcjogJ2dvb2RieWUuaGFuZGxlcidcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ2V4YW1wbGUtYXBpJywge1xuICAgICAgcmVzdEFwaU5hbWU6ICdFeGFtcGxlIEFQSSdcbiAgICB9KTtcblxuICAgIC8vIG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0hlbGxvQXBpJywge1xuICAgIC8vICAgaGFuZGxlcjogaGVsbG9MYW1iZGEsIFxuICAgIC8vIH0pO1xuXG5cbiAgICBhcGkucm9vdC5hZGRSZXNvdXJjZSgnaGVsbG8nKS5hZGRNZXRob2QoJ0dFVCcsIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGhlbGxvTGFtYmRhLCB7XG4gICAgICBwcm94eTogZmFsc2VcbiAgICB9KSk7XG4gICAgLy9hcGkucm9vdC5hZGRSZXNvdXJjZSgnZ29vZGJ5ZScpLmFkZE1ldGhvZCgnR0VUJywgbmV3IEFwaUdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ29vZGJ5ZUxhbWJkYSkpO1xuICB9XG59XG5cbi8vIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4vLyBuZXcgTGFtYmRhU3RhY2soYXBwLCAnTGFtYmRhU3RhY2snKTtcbi8vIGFwcC5zeW50aCgpO1xuIl19