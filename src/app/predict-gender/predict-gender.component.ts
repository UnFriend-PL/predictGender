import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Chart,
  PieController,
  ArcElement,
  ChartOptions,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(PieController, ArcElement, ChartDataLabels, Legend);

@Component({
  selector: 'app-predict-gender',
  templateUrl: './predict-gender.component.html',
  styleUrls: ['./predict-gender.component.scss'],
})
export class PredictGenderComponent implements OnInit {
  name = 'Camile';
  genderResult: any;
  malePercentage: number = 0;
  femalePercentage: number = 0;
  chart: Chart | undefined;
  constructor(private http: HttpClient) {}

  @Output() searchedData = new EventEmitter<Object>();

  ngOnInit() {
    this.getGender().then(() => {
      this.chart = new Chart('myChart', {
        type: 'pie',
        data: {
          labels: ['Male', 'Female'],
          datasets: [
            {
              data: [this.malePercentage, this.femalePercentage],
              backgroundColor: ['#007bff', '#dc3545'],
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              color: '#fff',
              formatter: (value, ctx) => {
                const sum = this.malePercentage + this.femalePercentage;
                const percentage = ((value / sum) * 100).toFixed(2) + '%';
                return percentage;
              },
            },
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        } as ChartOptions,
      } as any);
    });
  }

  updateChartData() {
    if (this.chart) {
      this.chart.data.datasets[0].data = [
        this.malePercentage,
        this.femalePercentage,
      ];
      this.chart.update();
    }
    this.searchedData.emit({
      name: this.name,
      gender: this.genderResult.gender,
      malePercentage: this.malePercentage,
      femalePercentage: this.femalePercentage,
    });
    console.log(this.genderResult);
  }

  getGender(): Promise<void> {
    const apiUrl = `https://api.genderize.io?name=${this.name}`;

    return new Promise<void>((resolve, reject) => {
      this.http.get(apiUrl).subscribe((data: any) => {
        this.genderResult = data;
        this.malePercentage =
          this.genderResult.gender === 'male'
            ? this.genderResult.probability * 100
            : 100 - this.genderResult.probability * 100;
        this.femalePercentage =
          this.genderResult.gender === 'female'
            ? this.genderResult.probability * 100
            : 100 - this.genderResult.probability * 100;
        this.updateChartData();
        resolve();
      }, reject);
    });
  }
}
