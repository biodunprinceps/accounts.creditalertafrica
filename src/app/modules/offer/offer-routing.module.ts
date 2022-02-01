import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { FacialRecognitionComponent } from './facial-recognition/facial-recognition.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { OfferComponent } from './offer.component';

const routes: Routes = [{ path: '', component: OfferComponent, children : [
  {path: 'loan-offer', component:LoanOfferComponent},
  {path: 'facial-recognition', component:FacialRecognitionComponent},
  {path: 'completed', component:CompletedComponent}
] }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
