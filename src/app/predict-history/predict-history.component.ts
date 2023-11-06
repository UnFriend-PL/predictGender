import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-predict-history',
  templateUrl: './predict-history.component.html',
  styleUrls: ['./predict-history.component.scss'],
})
export class PredictHistoryComponent {
  @Input() nameObject: Object | undefined;
  nameHistoryList: any[] = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['nameObject'] && this.nameObject) {
      this.nameHistoryList.push(this.nameObject);
      console.log('changed:');
      console.log(this.nameHistoryList);
    }
  }
}
