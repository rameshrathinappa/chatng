import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat/chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule
    ,FormsModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ ChatDialogComponent ], // <-- export here
  providers: [ChatService]
})
export class ChatModule { }
