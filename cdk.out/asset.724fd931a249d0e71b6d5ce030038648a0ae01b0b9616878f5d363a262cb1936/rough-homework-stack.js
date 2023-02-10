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
        api.root.addResource('').addMethod('GET', new apigateway.LambdaIntegration(helloLambda, {
            proxy: false
        }));
        // api.root.addResource('/save-order').addMethod('POST', new apigateway.LambdaIntegration(saveOrder, {
        //   proxy: false
        // }));
    }
}
exports.RoughHomeworkStack = RoughHomeworkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91Z2gtaG9tZXdvcmstc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3VnaC1ob21ld29yay1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsb0RBQW9EO0FBQ3BELGlEQUFpRDs7O0FBRWpELHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDeEUsK0JBQStCO0FBRS9CLG9EQUFvRDtBQUVwRCwwQkFBMEI7QUFDMUIsbUVBQW1FO0FBQ25FLHdEQUF3RDtBQUN4RCxhQUFhO0FBR2IscUVBQXFFO0FBQ3JFLDZDQUE2QztBQUM3Qyw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBQzNDLFVBQVU7QUFFVixpRUFBaUU7QUFDakUsNkNBQTZDO0FBQzdDLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsVUFBVTtBQUVWLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsYUFBYTtBQUViLHVEQUF1RDtBQUN2RCwrQkFBK0I7QUFDL0IsVUFBVTtBQUVWLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLE1BQU07QUFFTixJQUFJO0FBR0osbUNBQW1DO0FBRW5DLGlEQUFpRDtBQUNqRCx5REFBeUQ7QUFFekQsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUseUJBQXlCO1NBQ25DLENBQUMsQ0FBQztRQUVILE1BQU0sU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3ZELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNsQyxPQUFPLEVBQUUsMkJBQTJCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3RELFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO1lBQ3RGLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFSixzR0FBc0c7UUFDdEcsaUJBQWlCO1FBQ2pCLE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUE1QkQsZ0RBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbi8vIGltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuLy8gaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG4vLyBpbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG4vLyAvLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbi8vIGV4cG9ydCBjbGFzcyBSb3VnaEhvbWV3b3JrU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuLy8gICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4vLyAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbi8vICAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcblxuLy8gICAgIC8vIGV4YW1wbGUgcmVzb3VyY2Vcbi8vICAgICAvLyBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ1JvdWdoSG9tZXdvcmtRdWV1ZScsIHtcbi8vICAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4vLyAgICAgLy8gfSk7XG5cblxuLy8gICAgIGNvbnN0IGhlbGxvTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9MYW1iZGEnLCB7XG4vLyAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbi8vICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4vLyAgICAgICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLmhhbmRsZXInXG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCBzYXZlT3JkZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdzYXZlT3JkZXInLCB7XG4vLyAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbi8vICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4vLyAgICAgICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLnNhdmVPcmRlcidcbi8vICAgICB9KTtcblxuLy8gICAgIC8vIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5KHRoaXMsICdBcGlHYXRld2F5Jywge1xuLy8gICAgIC8vICAgcmVzdEFwaU5hbWU6ICdNeUFwaUdhdGV3YXknXG4vLyAgICAgLy8gfSk7XG4gICAgXG4vLyAgICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhUmVzdEFwaSh0aGlzLCAnSGVsbG9BcGknLCB7XG4vLyAgICAgICBoYW5kbGVyOiBoZWxsb0xhbWJkYSwgXG4vLyAgICAgfSk7XG5cbi8vICAgICBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsICdzYXZlT3JkZXInLCB7XG4vLyAgICAgICBoYW5kbGVyOiBzYXZlT3JkZXJcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyB9XG5cblxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5cbmV4cG9ydCBjbGFzcyBSb3VnaEhvbWV3b3JrU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBoZWxsb0xhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hlbGxvTGFtYmRhJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xpYicpLFxuICAgICAgaGFuZGxlcjogJ2xhbWJkYS1mdW5jdGlvbi5oYW5kbGVyJ1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2F2ZU9yZGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnc2F2ZU9yZGVyJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xpYicpLFxuICAgICAgaGFuZGxlcjogJ2xhbWJkYS1mdW5jdGlvbi5zYXZlT3JkZXInXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsICdleGFtcGxlLWFwaScsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiAnRXhhbXBsZSBBUEknXG4gICAgfSk7XG5cbiAgICBhcGkucm9vdC5hZGRSZXNvdXJjZSgnJykuYWRkTWV0aG9kKCdHRVQnLCBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihoZWxsb0xhbWJkYSwge1xuICAgICAgcHJveHk6IGZhbHNlXG4gICAgfSkpO1xuXG4gICAgLy8gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJy9zYXZlLW9yZGVyJykuYWRkTWV0aG9kKCdQT1NUJywgbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oc2F2ZU9yZGVyLCB7XG4gICAgLy8gICBwcm94eTogZmFsc2VcbiAgICAvLyB9KSk7XG4gIH1cbn1cbiJdfQ==