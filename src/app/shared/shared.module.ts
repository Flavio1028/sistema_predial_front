import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoModalComponent } from './info-modal/info-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoModalComponent, ConfirmModalComponent],
  entryComponents: [InfoModalComponent, ConfirmModalComponent],
  exports: [InfoModalComponent, ConfirmModalComponent]
})
export class SharedModule { }
