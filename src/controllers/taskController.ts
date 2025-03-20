import { Request, Response } from 'express';
import {TaskManager} from '../taskManager';

const taskManager = new TaskManager();

export const getTask = async (req : Request, res : Response): Promise<void>=>{
    try{
        const task = await taskManager.getTask();
        res.status(200).render('todo',{
            task
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : 'An error Occured while Fetching tasks',
        });  
    }
};

export const addTask = async (req : Request , res: Response): Promise <void>=>{
    try {
        const {title,description} = req.body;
        await taskManager.createTask(title,description);
        res.json({success: true,message: 'Task Added'});
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'An Error Occured While Adding The  Tasks',
        });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void>=>{
    try {
        const {taskId} = req.body;
        await taskManager.deleteTask(taskId);
        res.json({success: true, message : 'Task Deleted'})
    } catch (error) {
        res.status(500).json({
        success : false,
        message : 'An Error Occured While Fetching Tasks',    
        });
    }
};

export const updateStatus = async (req: Request, res: Response):Promise<void>=>{
    try {
        const id = req.params.id;
        await taskManager.markCompleted(id);
        res.redirect('/')
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'An Error Occured While Deleting Tasks',
        });
    }
};

export const updateTask = async (req: Request, res: Response):Promise<void>=>{
    try {
        const id = req.params.id;
        const {title, description} = req.body
        await taskManager.updateTask(id,title, description);
        res.json({success: true, message : 'Task Updated',id})
        
    } catch (error) {
        res.status(500).json({
            success : true,
            message : 'An Error Occuring While Updating The Tasks...'
            
        });
    }
}