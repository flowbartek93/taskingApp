import { Component, Input, OnInit, ViewChild } from '@angular/core';

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

  openCategoryModal(type: string) {
    this.modalComponent.open();
    this.modalComponent.setModalType(type);
  }

  openTaskModal(type: string) {
    this.modalComponent.open();
    this.modalComponent.setModalType(type);
  }

  ngOnInit(): void {}
}
