import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { InfoModalComponent } from './info-modal/info-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private service: BsModalService) { }

  /*
   * Modal de confirmacao
   * @param msg
   * @param title
   */
  modalConfirmacao(msg: string, title?: string) {
    const bsModalRef: BsModalRef = this.service.show(ConfirmModalComponent, {
      backdrop: true,
      ignoreBackdropClick: true
    });
    bsModalRef.content.msg = msg;
    // Altera o tituo se necessario
    if (title) {
      bsModalRef.content.title = title;
    }
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

  /*
   * Abre os modais padroes do sistema
   * @param msg
   * @param type
   * @param dismissTimeout
   */
  private modalMensagens(msg: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.service.show(InfoModalComponent, {
      backdrop: false,
      ignoreBackdropClick: false,
      animated: false,
      class: 'fixed-bottom'
    });
    // Mensagem do modal
    bsModalRef.content.message = msg;
    // Altera o tipo do modal
    if (type) {
      bsModalRef.content.type = type;
    }
    // Fecha o modal sozino
    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  /*
   * Exibe um modal de sucesso
   * @param mensagem
   */
  modalSucesso(mensagem: string) {
    this.modalMensagens(mensagem, AlertTypes.SUCCESS, 3000);
  }

  /*
   * Exibe um modal de erro
   * @param mensagem
   */
  modalErro(mensagem: string) {
    this.modalMensagens(mensagem, AlertTypes.DANGER, 3000);
  }

  /*
   * Exibe um modal se alerta
   * @param mensagem
   */
  modalAlerta(mensagem: string) {
    this.modalMensagens(mensagem, AlertTypes.WARNING, 3000);
  }

  /*
   * Exibe um modal se informacao
   * @param mensagem
   */
  modalInfo(mensagem: string) {
    this.modalMensagens(mensagem, AlertTypes.INFO, 3000);
  }

}
