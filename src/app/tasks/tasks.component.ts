import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { taskModel } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //tasks

  taskType: taskModel[];

  @Output() displayTasks = new EventEmitter<taskModel[]>();

  categories: { title: string; tasks: taskModel[] }[] = [
    {
      title: 'training',
      tasks: [
        new taskModel('pushups', new Date()),
        new taskModel('bridge', new Date()),
        new taskModel('breath exercises', new Date()),
      ],
    },

    {
      title: 'work',
      tasks: [
        new taskModel('write raport', new Date()),
        new taskModel('learn coding', new Date()),
        new taskModel('call to employer', new Date()),
      ],
    },

    {
      title: 'relationships',
      tasks: [
        new taskModel('date with Veronica', new Date()),
        new taskModel('date with Marta', new Date()),
        new taskModel('date with Iga', new Date()),
      ],
    },

    {
      title: 'others',
      tasks: [
        new taskModel('watch tv', new Date()),
        new taskModel('play gwemt', new Date()),
        new taskModel('jerk off', new Date()),
      ],
    },
  ];

  constructor() {}

  onDisplayTasks(type: string, index: number) {
    if (type === 'training') {
      this.taskType = this.categories[index].tasks;
    }

    if (type === 'work') {
      this.taskType = this.categories[index].tasks;
    }

    if (type === 'relationships') {
      this.taskType = this.categories[index].tasks;
    }

    if (type === 'others') {
      this.taskType = this.categories[index].tasks;
    }

    this.displayTasks.emit(this.taskType);
  }

  ngOnInit(): void {
    console.log(this.categories);
    // window.localStorage.setItem('tasks', JSON.stringify(this.taskType));
  }
}
