import { badRequest, ok } from "../helpers/http.helper";
import TasksRepository from "../repositories/TasksRepository";
import { expressController } from "./interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "./interfaces/http.interfaces";

export class SearchTask implements expressController {

    private taskRepository: TasksRepository;

    constructor() {
        this.taskRepository = new TasksRepository();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const name = httpRequest.params.name;
        if(!name) {
            return badRequest(new Error('Missing param: name'));
        }

        const task = await this.taskRepository.getOneTask(name);

        return ok(task);

    }
}