import { HttpRequest, HttpResponse } from "./http.interfaces";

export interface expressController {
    handle( httpRequest: HttpRequest ): Promise<HttpResponse>
}