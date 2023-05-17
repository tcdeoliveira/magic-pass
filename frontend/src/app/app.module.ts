import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/layout/general-components/footer/footer.component';
import { SchrollTopComponent } from './core/layout/general-components/schroll-top/schroll-top.component';
import { ProgressBarComponent } from './core/layout/general-components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './core/layout/general-components/progress-spinner/progress-spinner.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SchrollTopComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
