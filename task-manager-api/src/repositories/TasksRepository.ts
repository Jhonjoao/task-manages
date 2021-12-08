import { DeleteResult, getRepository, Like, Repository, UpdateResult } from "typeorm";
import { Task } from "../entity/Task";

interface dtoCreateTask {
    name: string,
    finish?: boolean
}

interface dtoUpdateTask {
    id: number,
    name?: string,
    finish?: boolean
    oldTask: Task
}


class TasksRepository {

    private tasksRepository: Repository<Task>

    public async getAllTasks(): Promise<Task[]> {

        this.tasksRepository = getRepository(Task);

        return await this.tasksRepository.find();
    
    }

    public async getOneTask(searchName: String): Promise<Task> {

        this.tasksRepository = getRepository(Task);

        const tasks = await this.tasksRepository.find({ name: Like(`%${searchName}%`) });

        return tasks[0];

    }

    public async getById(id: number): Promise<Task> {
        this.tasksRepository = getRepository(Task);

        return await this.tasksRepository.findOne({ id });
    }

    public async createTask({name, finish }: dtoCreateTask): Promise<Task> {

        this.tasksRepository = getRepository(Task);

        const task = this.tasksRepository.create({
            name,
            finish: finish || false,
        });

        await this.tasksRepository.save(task);

        return task;

    }

    public async updateTask({id, name, finish, oldTask}: dtoUpdateTask): Promise<UpdateResult> {

        this.tasksRepository = getRepository(Task);

        return await this.tasksRepository.update({ 
            id
        }, {
            name: name || oldTask.name,
            finish: finish || oldTask.finish
        });

    }

    public async deleteTask(id: number): Promise<DeleteResult> {

        this.tasksRepository = getRepository(Task);

        return await this.tasksRepository.delete({ id });
    }

}

export default TasksRepository;