//import * as AWS from 'aws-sdk';
import { APIGatewayEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';

// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const TableName = 'teste_table';

export async function handler(event: APIGatewayEvent, context: Context, callback: Callback): Promise<APIGatewayProxyResult> {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello AWS witnesses'
        })
    };
}

// export async function newOrder(req: any) {
//     const body = JSON.parse(req.body);
//     // const { name, email } = body;

//     const newItem = {
//         TableName,
//         Item: { ...body }
//     };

//     try {
//         await dynamodb.put(newItem).promise();
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 message: 'User saved'
//             })
//         };
//     } catch (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({
//                 message: 'User save error'
//             })
//         };
//     }
// }