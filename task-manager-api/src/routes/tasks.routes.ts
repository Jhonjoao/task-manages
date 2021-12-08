import { Router } from 'express';
import adaptRoute from '../adapters/express-route-adapters';
import { CreateTask } from '../controllers/create-task.controller';
import { DeleteTask } from '../controllers/delete-task.controller';
import { LoadTasks } from '../controllers/load-tasks.controller';
import { SearchTask } from '../controllers/search-task.controller';
import { UpdateTask } from '../controllers/update-task.controller';

const tasksRouter = Router();

tasksRouter.get('/', adaptRoute( new LoadTasks() ));

tasksRouter.get('/:name', adaptRoute( new SearchTask() ));

tasksRouter.post('/', adaptRoute( new CreateTask() ));

tasksRouter.patch('/:id', adaptRoute( new UpdateTask() ));

tasksRouter.delete('/:id', adaptRoute( new DeleteTask() ));

export default tasksRouter;
