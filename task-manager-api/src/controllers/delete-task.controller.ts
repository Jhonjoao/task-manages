import { badRequest, ok } from "../helpers/http.helper";
import TasksRepository from "../repositories/TasksRepository";
import { expressController } from "./interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "./interfaces/http.interfaces";

export class DeleteTask implements expressController {

    private taskRepository: TasksRepository;

    constructor() {
        this.taskRepository = new TasksRepository();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const id = httpRequest.params.id;

        if(!id) {
            return badRequest(new Error('Missing number task for update.'));
        }

        await this.taskRepository.deleteTask( id );

        return ok('Success');

    }
}