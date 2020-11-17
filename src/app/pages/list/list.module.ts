import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, NbCardModule, Ng2SmartTableModule],
  providers: [],
})
export class ListModule {}
