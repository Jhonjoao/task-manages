import { Request, Response } from "express"
import { expressController } from "../controllers/interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "../controllers/interfaces/http.interfaces";

const adaptRoute = (controller: expressController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params
        }
        const httpResponse: HttpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export default adaptRoute;