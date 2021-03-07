import { Component, OnInit } from '@angular/core';
import { RestatementConstants } from '../restatement.constants';

@Component({
  selector: 'app-restated-reports',
  templateUrl: './restated-reports.component.html',
  styleUrls: ['./restated-reports.component.css']
})
export class RestatedReportsComponent implements OnInit {
  public ageTotal: number = 0;
  public employeeInfo: any[] = RestatementConstants.employeeInfo;

  constructor() { }

  ngOnInit(): void {
  }

  getTotalAge() {
    this.employeeInfo.forEach((item) => {
      this.ageTotal+=  item.age;
    })
    return this.ageTotal;
  }

}
