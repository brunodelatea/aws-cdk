import { APIGatewayEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { nanoid } from 'nanoid'

const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const ses = new AWS.SES({ region: 'sa-east-1' });
const sqs = new AWS.SQS({ region: 'us-east-1' });

export async function hello(event: APIGatewayEvent, context: Context, callback: Callback): Promise<APIGatewayProxyResult> {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Lambda'
        })
    };
}

export async function createUser(req: any) {
    const TABLE_NAME = process.env.TABLE_NAME!
    const EMAIL_PROCESSING_QUEUE_URL = process.env.EMAIL_PROCESSING_QUEUE_URL!;
    const body = JSON.parse(req.body);
    const { name, email, items } = body;
    const userId = nanoid();

    const newUser = {
        userId,
        name,
        email,
        items
    };

   try {
        const dbParams = {
            TableName: TABLE_NAME,
            Item: newUser
        };

        await dynamodb.put(dbParams).promise();

        const { MessageId } = await sqs.sendMessage({
            QueueUrl: EMAIL_PROCESSING_QUEUE_URL,
            MessageBody: JSON.stringify({ user: newUser })
        }).promise()

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User created'
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Fail to create user'
            })
        };
    }
}

export async function processUser(props: any) {
    const adminEmail = 'bruno_delatea@hotmail.com';
    const recordPromises = props.Records.map(async (record: any) => {
        const { body } = record;
        const { user } = JSON.parse(body);
        const { name, email, items } = user;

        const userMessage = `
            New user: ${name}
            Email: ${email}
            Items: ${JSON.stringify(items)}
        `;
        const sesParams = {
            Message: {
                Body: {
                    Text: {
                        Data: userMessage,
                        Charset: 'UTF-8'
                    }
                },
                Subject: {
                    Data: 'New user',
                    Charset: 'UTF-8'
                }
            },
            Source: adminEmail,
            Destination: {
                ToAddresses: [adminEmail]
            }
        };
        await ses.sendEmail(sesParams).promise();
    });
    await Promise.all(recordPromises);
}