import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictGenderComponent } from './predict-gender/predict-gender.component';
import { PredictContainerComponent } from './predict-container/predict-container.component';
import { PredictHistoryComponent } from './predict-history/predict-history.component';

@NgModule({
  declarations: [AppComponent, PredictGenderComponent, PredictContainerComponent, PredictHistoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
