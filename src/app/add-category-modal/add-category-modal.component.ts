import {
  AfterViewInit,
  Component,
  ElementRef,
  Injectable,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css'],
})
@Injectable()
export class AddCategoryModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal')
  private modalContent: TemplateRef<AddCategoryModalComponent>;

  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

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

  ngAfterViewInit() {}
}
