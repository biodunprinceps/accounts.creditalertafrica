import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { FacialRecognitionComponent } from './facial-recognition/facial-recognition.component';
import { CompletedComponent } from './completed/completed.component';
import { CameratriggerComponent } from './components/cameratrigger/cameratrigger.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    OfferComponent,
    SidenavComponent,
    StepperComponent,
    LoanOfferComponent,
    FacialRecognitionComponent,
    CompletedComponent,
    CameratriggerComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    NgxSkeletonLoaderModule,
    NgxSliderModule,
    WebcamModule
  ]
})
export class OfferModule { }
