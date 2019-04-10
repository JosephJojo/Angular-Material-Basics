import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

// Material Components
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatMomentDateModule
  ]
})
export class OrdersModule { }
