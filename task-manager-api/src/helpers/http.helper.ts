import { HttpResponse } from "../controllers/interfaces/http.interfaces";

const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error.message
})

export {
    ok,
    badRequest
}