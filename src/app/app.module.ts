import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarModule,
    NgxSkeletonLoaderModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
