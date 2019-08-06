import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path : '', component: DashboardComponent, children:
    [
      {
        path: 'users', component: UsersListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
