import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PredictGenderComponent } from '../predict-gender/predict-gender.component';
@Component({
  selector: 'app-predict-container',
  templateUrl: './predict-container.component.html',
  styleUrls: ['./predict-container.component.scss'],
})
export class PredictContainerComponent {
  @ViewChild(PredictGenderComponent) child: any;
  searchedNameObject: Object | undefined;
  constructor() {}

  receiveSearchedNameData(searchedName: Object) {
    this.searchedNameObject = searchedName;
  }
}
