"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOrder = exports.handler = void 0;
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
async function newOrder(event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Rota 2'
        })
    };
}
exports.newOrder = newOrder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHNEQUFzRDtBQUN0RCxtQ0FBbUM7QUFFNUIsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFzQixFQUFFLE9BQWdCLEVBQUUsUUFBa0I7SUFDdEYsT0FBTztRQUNILFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakIsT0FBTyxFQUFFLHFCQUFxQjtTQUNqQyxDQUFDO0tBQ0wsQ0FBQztBQUNOLENBQUM7QUFQRCwwQkFPQztBQUVNLEtBQUssVUFBVSxRQUFRLENBQUMsS0FBc0IsRUFBRSxPQUFnQixFQUFFLFFBQWtCO0lBQ3ZGLE9BQU87UUFDSCxVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7S0FDTCxDQUFDO0FBQ04sQ0FBQztBQVBELDRCQU9DO0FBRUQsNkNBQTZDO0FBQzdDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFFdkMsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsU0FBUztBQUVULFlBQVk7QUFDWixpREFBaUQ7QUFDakQsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLDZDQUE2QztBQUM3QyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFFBQVE7QUFDUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgeyBBUElHYXRld2F5RXZlbnQsIENvbnRleHQsIENhbGxiYWNrLCBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuLy8gY29uc3QgZHluYW1vZGIgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG4vLyBjb25zdCBUYWJsZU5hbWUgPSAndGVzdGVfdGFibGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudDogQVBJR2F0ZXdheUV2ZW50LCBjb250ZXh0OiBDb250ZXh0LCBjYWxsYmFjazogQ2FsbGJhY2spOiBQcm9taXNlPEFQSUdhdGV3YXlQcm94eVJlc3VsdD4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0hlbGxvIEFXUyB3aXRuZXNzZXMnXG4gICAgICAgIH0pXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5ld09yZGVyKGV2ZW50OiBBUElHYXRld2F5RXZlbnQsIGNvbnRleHQ6IENvbnRleHQsIGNhbGxiYWNrOiBDYWxsYmFjayk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnUm90YSAyJ1xuICAgICAgICB9KVxuICAgIH07XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBuZXdPcmRlcihyZXE6IGFueSkge1xuLy8gICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbi8vICAgICAvLyBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBib2R5O1xuXG4vLyAgICAgY29uc3QgbmV3SXRlbSA9IHtcbi8vICAgICAgICAgVGFibGVOYW1lLFxuLy8gICAgICAgICBJdGVtOiB7IC4uLmJvZHkgfVxuLy8gICAgIH07XG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgICBhd2FpdCBkeW5hbW9kYi5wdXQobmV3SXRlbSkucHJvbWlzZSgpO1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIHNhdmVkJ1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogNTAwLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIHNhdmUgZXJyb3InXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9O1xuLy8gICAgIH1cbi8vIH0iXX0=