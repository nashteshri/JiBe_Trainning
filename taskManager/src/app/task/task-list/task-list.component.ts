import { Component } from '@angular/core';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  standalone: false,

  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  title:string = 'Remove'
  clear:string = 'clear All'
  taskList:any[]=[];
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    // window.location.reload()
    this.taskList = this.taskService.getAllTasksFromSessionStorage()
   }

  removeTask(id:any){
    this.taskList = this.taskList.filter(item => item.id!== id);
    this.taskService.removeTask(id);
    console.log("In TaskList Component");
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  clearTask(){
    localStorage.clear();
    window.location.reload();
  }
}
