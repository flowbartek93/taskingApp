import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { taskModel } from './tasks/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() data: taskModel[];

  showTasksDetails(tasks) {
    this.data = tasks;
    console.log(this.data);
  }

  ngOnInit() {
    let data = window.localStorage.getItem('tasks');
  }
}
