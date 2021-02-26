import { Component, OnInit } from '@angular/core';
import { frenquencyType, RoleConstants } from '../role.constants';
import { TemplateList } from '../role.models';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-definition',
  templateUrl: './role-definition.component.html',
  styleUrls: ['./role-definition.component.css']
})
export class RoleDefinitionComponent implements OnInit {
  public monthlyTemplateList: TemplateList[];
  public errorMessage: string;
  public quartelyTemplateList:TemplateList[];
  public monthlyTemplateListLength: number;
  public quartelyTemplateListLength: number;

constructor(private roleService: RoleService) {
      this.getUserData();
}

  ngOnInit(): void {
  }

  getUserData() {
    this.roleService.getUsersList(RoleConstants.roleMockDataURL).subscribe((response: TemplateList[]) =>{

        console.log('roleMockData is', response);

        this.monthlyTemplateList = response.filter(item => {
          return item.frequency === frenquencyType.monthly
        })
        this.monthlyTemplateListLength = this.monthlyTemplateList.length;
        console.log('this.monthlyTemplateList', this.monthlyTemplateList)

        this.quartelyTemplateList = response.filter(item => {
          return item.frequency === frenquencyType.quartely
        })
        this.quartelyTemplateListLength = this.quartelyTemplateList.length;
        console.log('this.quartelyTemplateList', this.quartelyTemplateList)

    }, (error) =>{
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

}
