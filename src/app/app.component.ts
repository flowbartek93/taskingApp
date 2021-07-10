import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { taskModel } from './tasks/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
