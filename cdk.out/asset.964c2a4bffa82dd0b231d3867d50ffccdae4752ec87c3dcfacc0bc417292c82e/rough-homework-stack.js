"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoughHomeworkStack = void 0;
const cdk = require("aws-cdk-lib");
const { ApiGateway } = require('aws-cdk-lib/aws-apigateway');
const lambda = require("aws-cdk-lib/aws-lambda");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class RoughHomeworkStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.RoughHomeworkStack = RoughHomeworkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91Z2gtaG9tZXdvcmstc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3VnaC1ob21ld29yay1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzdELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFFOUMsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUU3QyxtQkFBbUI7UUFDbkIsNERBQTREO1FBQzVELGlEQUFpRDtRQUNqRCxNQUFNO1FBR04sTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDM0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdkQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSwyQkFBMkI7U0FDckMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QyxXQUFXLEVBQUUsY0FBYztTQUM1QixDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUYsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWpHLG1EQUFtRDtRQUNuRCw2QkFBNkI7UUFDN0IsTUFBTTtRQUVOLG9EQUFvRDtRQUNwRCx1QkFBdUI7UUFDdkIsTUFBTTtJQUNSLENBQUM7Q0FFRjtBQXhDRCxnREF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5jb25zdCB7IEFwaUdhdGV3YXkgfSA9IHJlcXVpcmUoJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5Jyk7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBSb3VnaEhvbWV3b3JrU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcblxuICAgIC8vIGV4YW1wbGUgcmVzb3VyY2VcbiAgICAvLyBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ1JvdWdoSG9tZXdvcmtRdWV1ZScsIHtcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4gICAgLy8gfSk7XG5cblxuICAgIGNvbnN0IGhlbGxvTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSGVsbG9MYW1iZGEnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4gICAgICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLmhhbmRsZXInXG4gICAgfSk7XG5cbiAgICBjb25zdCBzYXZlT3JkZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdzYXZlT3JkZXInLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGliJyksXG4gICAgICBoYW5kbGVyOiAnbGFtYmRhLWZ1bmN0aW9uLnNhdmVPcmRlcidcbiAgICB9KTtcblxuICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlHYXRld2F5KHRoaXMsICdBcGlHYXRld2F5Jywge1xuICAgICAgcmVzdEFwaU5hbWU6ICdNeUFwaUdhdGV3YXknXG4gICAgfSk7XG5cbiAgICBhcGkucm9vdC5hZGRSZXNvdXJjZSgnaGVsbG8nKS5hZGRNZXRob2QoJ0dFVCcsIG5ldyBBcGlHYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGhlbGxvTGFtYmRhKSk7XG4gICAgYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3NhdmVPcmRlcicpLmFkZE1ldGhvZCgnUE9TVCcsIG5ldyBBcGlHYXRld2F5LkxhbWJkYUludGVncmF0aW9uKHNhdmVPcmRlcikpO1xuICAgIFxuICAgIC8vIG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0hlbGxvQXBpJywge1xuICAgIC8vICAgICBoYW5kbGVyOiBoZWxsb0xhbWJkYSwgXG4gICAgLy8gfSk7XG5cbiAgICAvLyBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsICdzYXZlT3JkZXInLCB7XG4gICAgLy8gICBoYW5kbGVyOiBzYXZlT3JkZXJcbiAgICAvLyB9KTtcbiAgfVxuXG59XG4iXX0=