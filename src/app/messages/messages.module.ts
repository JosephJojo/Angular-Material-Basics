import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Components
import { MatAutocompleteModule } from '@angular/material';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Components
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule
  ]
})
export class MessagesModule {}
