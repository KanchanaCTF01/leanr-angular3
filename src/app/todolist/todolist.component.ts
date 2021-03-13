import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class ToDoListComponent {
  title = 'learn-angular3';
  items = [];
  newTask;

    addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
    deleteTask(index) { 
        this.items.splice(index, 1); 
    } 

} 
