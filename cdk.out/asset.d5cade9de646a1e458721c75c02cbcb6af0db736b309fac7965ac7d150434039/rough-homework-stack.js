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
        // const saveOrder = new lambda.Function(this, 'saveOrder', {
        //   runtime: lambda.Runtime.NODEJS_10_X,
        //   code: lambda.Code.fromAsset('lib'),
        //   handler: 'lambda-function.saveOrder'
        // });
        const api = new apigateway.RestApi(this, 'example-api', {
            restApiName: 'Example API'
        });
        api.root.addResource('').addMethod('GET', new apigateway.LambdaIntegration(helloLambda, {
            proxy: false
        }));
        // api.root.addResource('/save-order').addMethod('POST', new apigateway.LambdaIntegration(saveOrder, {
        //   proxy: false
        // }));
    }
}
exports.RoughHomeworkStack = RoughHomeworkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91Z2gtaG9tZXdvcmstc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3VnaC1ob21ld29yay1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELGlEQUFpRDs7O0FBRWpELHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDeEUsK0JBQStCO0FBRS9CLG9EQUFvRDtBQUVwRCwwQkFBMEI7QUFDMUIsbUVBQW1FO0FBQ25FLHdEQUF3RDtBQUN4RCxhQUFhO0FBR2IscUVBQXFFO0FBQ3JFLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLFVBQVU7QUFFVixpRUFBaUU7QUFDakUsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsVUFBVTtBQUVWLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsYUFBYTtBQUViLHVEQUF1RDtBQUN2RCwrQkFBK0I7QUFDL0IsVUFBVTtBQUVWLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLE1BQU07QUFFTixJQUFJO0FBR0osbUNBQW1DO0FBRW5DLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFFekQsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUseUJBQXlCO1NBQ25DLENBQUMsQ0FBQztRQUVILDZEQUE2RDtRQUM3RCx5Q0FBeUM7UUFDekMsd0NBQXdDO1FBQ3hDLHlDQUF5QztRQUN6QyxNQUFNO1FBRU4sTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdEQsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7WUFDdEYsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUMsQ0FBQztRQUVKLHNHQUFzRztRQUN0RyxpQkFBaUI7UUFDakIsT0FBTztJQUNULENBQUM7Q0FDRjtBQTVCRCxnREE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuLy8gaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBpbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5Jztcbi8vIGltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbi8vIC8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3FzJztcblxuLy8gZXhwb3J0IGNsYXNzIFJvdWdoSG9tZXdvcmtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4vLyAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbi8vICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuLy8gICAgIC8vIFRoZSBjb2RlIHRoYXQgZGVmaW5lcyB5b3VyIHN0YWNrIGdvZXMgaGVyZVxuXG4vLyAgICAgLy8gZXhhbXBsZSByZXNvdXJjZVxuLy8gICAgIC8vIGNvbnN0IHF1ZXVlID0gbmV3IHNxcy5RdWV1ZSh0aGlzLCAnUm91Z2hIb21ld29ya1F1ZXVlJywge1xuLy8gICAgIC8vICAgdmlzaWJpbGl0eVRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDMwMClcbi8vICAgICAvLyB9KTtcblxuXG4vLyAgICAgY29uc3QgaGVsbG9MYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0xhbWJkYScsIHtcbi8vICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuLy8gICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbi8vICAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uaGFuZGxlcidcbi8vICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHNhdmVPcmRlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ3NhdmVPcmRlcicsIHtcbi8vICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuLy8gICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsaWInKSxcbi8vICAgICAgIGhhbmRsZXI6ICdsYW1iZGEtZnVuY3Rpb24uc2F2ZU9yZGVyJ1xuLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkodGhpcywgJ0FwaUdhdGV3YXknLCB7XG4vLyAgICAgLy8gICByZXN0QXBpTmFtZTogJ015QXBpR2F0ZXdheSdcbi8vICAgICAvLyB9KTtcbiAgICBcbi8vICAgICBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsICdIZWxsb0FwaScsIHtcbi8vICAgICAgIGhhbmRsZXI6IGhlbGxvTGFtYmRhLCBcbi8vICAgICB9KTtcblxuLy8gICAgIG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ3NhdmVPcmRlcicsIHtcbi8vICAgICAgIGhhbmRsZXI6IHNhdmVPcmRlclxuLy8gICAgIH0pO1xuLy8gICB9XG5cbi8vIH1cblxuXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcblxuZXhwb3J0IGNsYXNzIFJvdWdoSG9tZXdvcmtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGhlbGxvTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9MYW1iZGEnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4gICAgICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLmhhbmRsZXInXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBzYXZlT3JkZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdzYXZlT3JkZXInLCB7XG4gICAgLy8gICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbiAgICAvLyAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4gICAgLy8gICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLnNhdmVPcmRlcidcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ2V4YW1wbGUtYXBpJywge1xuICAgICAgcmVzdEFwaU5hbWU6ICdFeGFtcGxlIEFQSSdcbiAgICB9KTtcblxuICAgIGFwaS5yb290LmFkZFJlc291cmNlKCcnKS5hZGRNZXRob2QoJ0dFVCcsIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGhlbGxvTGFtYmRhLCB7XG4gICAgICBwcm94eTogZmFsc2VcbiAgICB9KSk7XG5cbiAgICAvLyBhcGkucm9vdC5hZGRSZXNvdXJjZSgnL3NhdmUtb3JkZXInKS5hZGRNZXRob2QoJ1BPU1QnLCBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihzYXZlT3JkZXIsIHtcbiAgICAvLyAgIHByb3h5OiBmYWxzZVxuICAgIC8vIH0pKTtcbiAgfVxufVxuIl19