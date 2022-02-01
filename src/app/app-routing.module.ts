import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './modules/dashboard/change-password/change-password.component';

const routes: Routes = [

  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'offer', loadChildren: () => import('./modules/offer/offer.module').then(m => m.OfferModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  {path:'dashboard/change-password', component:ChangePasswordComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
