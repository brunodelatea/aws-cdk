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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHNEQUFzRDtBQUN0RCxtQ0FBbUM7QUFFNUIsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFzQixFQUFFLE9BQWdCLEVBQUUsUUFBa0I7SUFDdEYsT0FBTztRQUNILFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakIsT0FBTyxFQUFFLHFCQUFxQjtTQUNqQyxDQUFDO0tBQ0wsQ0FBQztBQUNOLENBQUM7QUFQRCwwQkFPQztBQUVELDZDQUE2QztBQUM3Qyx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBRXZDLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLFNBQVM7QUFFVCxZQUFZO0FBQ1osaURBQWlEO0FBQ2pELG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUN4QyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFDN0MsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixRQUFRO0FBQ1IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgQVBJR2F0ZXdheUV2ZW50LCBDb250ZXh0LCBDYWxsYmFjaywgQVBJR2F0ZXdheVByb3h5UmVzdWx0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbi8vIGNvbnN0IGR5bmFtb2RiID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuLy8gY29uc3QgVGFibGVOYW1lID0gJ3Rlc3RlX3RhYmxlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IEFQSUdhdGV3YXlFdmVudCwgY29udGV4dDogQ29udGV4dCwgY2FsbGJhY2s6IENhbGxiYWNrKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIZWxsbyBBV1Mgd2l0bmVzc2VzJ1xuICAgICAgICB9KVxuICAgIH07XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBuZXdPcmRlcihyZXE6IGFueSkge1xuLy8gICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbi8vICAgICAvLyBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBib2R5O1xuXG4vLyAgICAgY29uc3QgbmV3SXRlbSA9IHtcbi8vICAgICAgICAgVGFibGVOYW1lLFxuLy8gICAgICAgICBJdGVtOiB7IC4uLmJvZHkgfVxuLy8gICAgIH07XG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgICBhd2FpdCBkeW5hbW9kYi5wdXQobmV3SXRlbSkucHJvbWlzZSgpO1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIHNhdmVkJ1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogNTAwLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIHNhdmUgZXJyb3InXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9O1xuLy8gICAgIH1cbi8vIH0iXX0=