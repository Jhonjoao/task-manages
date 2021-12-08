import { Task } from "../entity/Task";
import { badRequest, ok } from "../helpers/http.helper";
import TasksRepository from "../repositories/TasksRepository";
import { expressController } from "./interfaces/controller.interfaces";
import { HttpRequest, HttpResponse } from "./interfaces/http.interfaces";

export class UpdateTask implements expressController {

    private taskRepository: TasksRepository;

    constructor() {
        this.taskRepository = new TasksRepository();
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        const {name, finish} = httpRequest.body;
        const id = httpRequest.params.id;

        if(!id) {
            return badRequest(new Error('Missing number task for update.'));
        }

        if(!name && !finish) {
            return badRequest(new Error('Missing fields for update: you need change name or finish!'));
        }

        const task: Task = await this.taskRepository.getById(id);

        if(!task){
            return badRequest(new Error('Task not found'));
        }

        await this.taskRepository.updateTask({ id, name, finish, oldTask: task });

        return ok('Success');

    }
}