import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() categoryTitle: string = '';
  isModalOpen: boolean = false;

  showModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  OnAddCategory(title: string) {
    console.log(title);
  }

  ngOnInit(): void {}
}
