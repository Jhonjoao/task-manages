import { badRequest, ok } from "../helpers/http.helper";
import TasksRepository from "../repositories/TasksRepository";
import { expressController } from "./interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "./interfaces/http.interfaces";

export class CreateTask implements expressController {

    private taskRepository: TasksRepository;

    constructor() {
        this.taskRepository = new TasksRepository();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const name = httpRequest.body.name;
        if(!name) {
            return badRequest(new Error('Missing fields: name'));
        }

        const allTasks = await this.taskRepository.createTask({
            name,
            finish: httpRequest.body.finish,
        });

        return ok(allTasks);

    }
}