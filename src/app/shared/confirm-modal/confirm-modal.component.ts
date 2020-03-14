import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string = "Sistema Predial - Confirmação";
  @Input() msg: string;
  confirmResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

}
