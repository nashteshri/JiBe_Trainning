import { Injectable, OnInit } from '@angular/core';
import { TaskModel } from './task-model.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  TaskList: TaskModel[] = [];
  constructor() { }

  // isLocalStorageAvailable(): boolean {
  //   try {
  //     const testKey = 'test';
  //     localStorage.setItem(testKey, 'test');
  //     localStorage.removeItem(testKey);
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // }
  removeTask(id: any) {
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = sessionStorage.key(i);
    if (id) {
      // window.location.reload()
      localStorage.removeItem(id);
      alert("remove a Task.....");
      // window.location.reload()

      // const item = sessionStorage.getItem(id);
      // if (item !== null) {
      //   try {
      //     if (JSON.parse(item)) {
      //       console.log(`In service remove..${typeof item}`);


      //     }
      //   } catch (error) {
      //     console.error(`Error from ngOnInit do not remove element parsing JSON for key ${id}:`, error);
      // }
    }
  }



  addTaskinSessionStorage(task: TaskModel) {
    window.location.reload()
    localStorage.setItem(task.id, JSON.stringify(task));
    this.TaskList.push(task);
  }
  getAllTasksFromSessionStorage(): any[] {
    // let ListOfTask: any[] = [];
    // window.location.reload();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const item = localStorage.getItem(key);
        // window.location.reload()
        if (item !== null) {
          try {
            this.TaskList.push(JSON.parse(item));
          } catch (error) {
            console.error(`Error from getAllTasksFromLocalStorage method of service parsing JSON for key ${key}:`, error);
          }
        }
      }
    }
    return this.TaskList;
  }
}

