import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [DashboardComponent, UsersListComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
