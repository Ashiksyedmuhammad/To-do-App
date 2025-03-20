import {Task, TaskInterface} from './models/taskModel';

export class TaskManager {
    public async createTask(title : string,description:String) : Promise<TaskInterface>{
        const task = new Task ({title,description,isCompleted:false});
        return await task.save()
    };
    public async getTask():Promise<TaskInterface[]>{
        return Task.find()
    };
    public async deleteTask(id: string):Promise<TaskInterface | null>{
        return Task.findByIdAndDelete(id)
    }
    public async markCompleted(id: String): Promise<TaskInterface | null>{
        return Task.findByIdAndUpdate(id,
            {isCompleted:true},
            {new:true}
        );
    };
    public async updateTask(id:string,title: string, description: string):Promise<TaskInterface | null>{
        const updateTask = await Task.findByIdAndUpdate(id,
            {title, description},{new: true}
        );
        return updateTask
    }
}