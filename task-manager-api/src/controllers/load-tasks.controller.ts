import { ok } from "../helpers/http.helper";
import TasksRepository from "../repositories/TasksRepository";
import { expressController } from "./interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "./interfaces/http.interfaces";

export class LoadTasks implements expressController {

    private taskRepository: TasksRepository;

    constructor() {
        this.taskRepository = new TasksRepository();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const allTasks = await this.taskRepository.getAllTasks();

        return ok(allTasks);

    }
}