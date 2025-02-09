import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskService } from './task-service.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers:[TaskService],
  exports:[TaskListComponent,TaskCreateComponent]
})
export class TaskModule { }
