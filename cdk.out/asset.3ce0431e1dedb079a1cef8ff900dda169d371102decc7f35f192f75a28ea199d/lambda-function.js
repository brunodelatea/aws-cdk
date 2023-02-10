"use strict";
// lib/lambda-function.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(event, context, callback) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello AWS witnesses'
        })
    };
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLWZ1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5QkFBeUI7OztBQUlsQixLQUFLLFVBQVUsT0FBTyxDQUFDLEtBQXNCLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQjtJQUN0RixPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQixPQUFPLEVBQUUscUJBQXFCO1NBQ2pDLENBQUM7S0FDTCxDQUFDO0FBQ04sQ0FBQztBQVBELDBCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2xhbWJkYS1mdW5jdGlvbi50c1xuXG5pbXBvcnQgeyBBUElHYXRld2F5RXZlbnQsIENvbnRleHQsIENhbGxiYWNrLCBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IEFQSUdhdGV3YXlFdmVudCwgY29udGV4dDogQ29udGV4dCwgY2FsbGJhY2s6IENhbGxiYWNrKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIZWxsbyBBV1Mgd2l0bmVzc2VzJ1xuICAgICAgICB9KVxuICAgIH07XG59XG4iXX0=