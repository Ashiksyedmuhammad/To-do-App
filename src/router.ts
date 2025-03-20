import { Router } from "express";

import { getTask, addTask, deleteTask, updateStatus, updateTask } from "./controllers/taskController";

const router : Router = Router();

router.get('/',getTask);
router.post('/tasks',addTask);
router.delete('/delete',deleteTask);
router.post('/update/:id',updateStatus);
router.put('/update-task/:id',updateTask);




export default router;