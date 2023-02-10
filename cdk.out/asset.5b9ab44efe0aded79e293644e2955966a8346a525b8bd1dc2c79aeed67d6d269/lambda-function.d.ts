import { APIGatewayEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';
export declare function handler(event: APIGatewayEvent, context: Context, callback: Callback): Promise<APIGatewayProxyResult>;
export declare function newOrder(req: any): Promise<{
    statusCode: number;
    body: string;
}>;
