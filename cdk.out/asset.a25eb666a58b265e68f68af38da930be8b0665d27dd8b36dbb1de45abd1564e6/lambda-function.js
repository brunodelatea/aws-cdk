"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const TableName = 'teste_table';
async function handler(event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello AWS witnesses'
        })
    };
}
exports.handler = handler;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHNEQUFzRDtBQUN0RCxtQ0FBbUM7QUFFNUIsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFzQixFQUFFLE9BQWdCLEVBQUUsUUFBa0I7SUFDdEYsT0FBTztRQUNILFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakIsT0FBTyxFQUFFLHFCQUFxQjtTQUNqQyxDQUFDO0tBQ0wsQ0FBQztBQUNOLENBQUM7QUFQRCwwQkFPQztBQUVELDZDQUE2QztBQUM3Qyx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBRXZDLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLFNBQVM7QUFFVCxZQUFZO0FBQ1osaURBQWlEO0FBQ2pELG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixRQUFRO0FBQ1IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IEFQSUdhdGV3YXlFdmVudCwgQ29udGV4dCwgQ2FsbGJhY2ssIEFQSUdhdGV3YXlQcm94eVJlc3VsdCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG4vLyBjb25zdCBkeW5hbW9kYiA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbi8vIGNvbnN0IFRhYmxlTmFtZSA9ICd0ZXN0ZV90YWJsZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBBUElHYXRld2F5RXZlbnQsIGNvbnRleHQ6IENvbnRleHQsIGNhbGxiYWNrOiBDYWxsYmFjayk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnSGVsbG8gQVdTIHdpdG5lc3NlcydcbiAgICAgICAgfSlcbiAgICB9O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gbmV3T3JkZXIocmVxOiBhbnkpIHtcbi8vICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4vLyAgICAgLy8gY29uc3QgeyBuYW1lLCBlbWFpbCB9ID0gYm9keTtcblxuLy8gICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4vLyAgICAgICAgIFRhYmxlTmFtZSxcbi8vICAgICAgICAgSXRlbTogeyAuLi5ib2R5IH1cbi8vICAgICB9O1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgYXdhaXQgZHluYW1vZGIucHV0KG5ld0l0ZW0pLnByb21pc2UoKTtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBzYXZlZCdcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH07XG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbi8vICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBzYXZlIGVycm9yJ1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG4vLyB9Il19