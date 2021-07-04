import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { addCategoryService } from '../services/addCategory.service';

import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('modal') private modalComponent: AddCategoryModalComponent;

  constructor(
    private addCategoryService: addCategoryService,
    private modalService: NgbModal
  ) {}

  @Input() categoryTitle: string = '';

  OnAddCategory(title: string) {
    this.modalComponent.open();
    this.addCategoryService.AddCategory(title);
  }

  ngOnInit(): void {}
}
