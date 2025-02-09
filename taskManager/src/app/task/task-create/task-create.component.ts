import { Component,NgModule } from '@angular/core';
import { TaskService } from '../task-service.service';
import { TaskModel } from '../task-model.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  standalone: false,
  
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {

  title:string = 'Add Task';

  newTaskTitle: string = '';
  newTaskDescription: string = '';
  newTaskTime:string = '';

  constructor(private taskService: TaskService){}

  addTask(){
    if (this.newTaskTitle.trim() && this.newTaskDescription.trim() && this.newTaskTime.trim() ){
      const newTask: TaskModel = {
        id: Date.now(),
        title: this.newTaskTitle,
        task: this.newTaskDescription,
        Completed: false,
        time: new Date(`1970-01-01T${this.newTaskTime}:00`)
      };
      this.taskService.addTaskinSessionStorage(newTask)
      alert("Added a Task Successfully in your List.....")
    }
    
  }
}
