import {
  AfterViewInit,
  Component,
  ElementRef,
  Injectable,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { addCategoryService } from '../services/addCategory.service';
@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css'],
})
@Injectable()
export class AddCategoryModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal')
  private modalContent: TemplateRef<AddCategoryModalComponent>;

  @Input() inputValue: string;

  modalType: string;

  private modalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private addCategory: addCategoryService
  ) {}

  ngOnInit(): void {}

  open() {
    this.modalRef = this.modalService.open(this.modalContent);
    this.modalRef.result.then();
  }

  close() {
    this.modalRef.close();
  }

  dismiss() {
    this.modalRef.dismiss();
  }

  saveNewValue() {
    if (this.modalType === 'category') {
      this.addCategory.AddCategory(this.inputValue);
    }
  }

  setModalType(type) {
    this.modalType = type;
  }

  ngAfterViewInit() {}
}
