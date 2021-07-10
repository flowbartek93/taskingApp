import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { addCategoryService } from '../services/addCategory.service';
import { taskModel } from '../tasks/task.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private tasksService: addCategoryService,
    private route: ActivatedRoute
  ) {}

  tasks;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const tasksList = this.tasksService.categories.find(
        (category) => category.title === params.name
      );

      console.log(tasksList);
      this.tasks = tasksList.tasks;
      console.log(this.tasks);
    });
  }
}
