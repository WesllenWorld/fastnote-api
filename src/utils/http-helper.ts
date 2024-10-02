import { StatusCode } from "./http-status-code"
import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.OK,
        body: data
    }
}

export const created = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.CREATED,
        body: data
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.NO_CONTENT,
        body: 'no content'
    }
}

export const conflict = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.CONFLICT,
        body: data
    }
}

export const badRequest = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.BAD_REQUEST,
        body: data
    }
}

export const notFound = async (): Promise<HttpResponse> => {
    return {
        statusCode: StatusCode.NOT_FOUND,
        body: 'not found'
    }
}
