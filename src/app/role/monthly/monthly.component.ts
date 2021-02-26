import { Component, Input, OnInit } from '@angular/core';
import { AppCommonService } from 'src/app/app-services/app.common.service';
import { DateUtils } from 'src/app/app-utilities/app.utilities';
import { TemplateList } from '../role.models';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  @Input() public monthlyTemplateList: TemplateList[];
  public templateName: string;

  constructor(private appCommonService: AppCommonService) { }

  ngOnInit() {
    this.templateName = this.monthlyTemplateList[0].template;
  }

  checkStatus(status) {
    return this.appCommonService.getColorForStatus(status);
  }

  dateConvert(date: string) {
    return DateUtils.getUTCFormatTime(date);
  }

}
