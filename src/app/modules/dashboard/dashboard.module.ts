import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule
  ]
})
export class DashboardModule { }
