import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: BsModalService) { }

  /*
   * Exibe o modal de info na tela
   * @param message
   * @param type
   * @param dismissTimeout
   */
  private exibirModalInfo(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(InfoModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  /*
   * Abre o modal com a mensagem de sucesso
   * @param message
   */
  modalInfoSucesso(message: string) {
    this.exibirModalInfo(message, AlertTypes.SUCCESS, 2000);
  }

  /*
   * Abre o modal com a mensagem de erro para o usuario
   * @param message
   */
  modalInfoErro(message: string) {
    this.exibirModalInfo(message, AlertTypes.DANGER, 2000);
  }

  /*
   * Exibe um modal de confirmacao
   * @param title
   * @param msg
   * @param okTxt
   * @param cancelTxt
   */
  exibirModalConfirmacao(msg: string, title?: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.msg = msg;

    if (title) {
      bsModalRef.content.title = title;
    }

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
