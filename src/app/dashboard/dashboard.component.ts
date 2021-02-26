import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardConstants } from './dashboard.constants';
import { UserList } from './dashboard.models';
import { DashboardService } from './dashboard.service';
import { DialogUserinfoComponent } from './dialog-userinfo/dialog-userinfo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dataSource: UserList[];
  public displayedColumns: string[] = DashboardConstants.displayedColumns;
  public errorMessage: string;
  public userDataLoaded = false;

  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
  ) {
    this.showUserTable();
  }

  ngOnInit(): void {

  }

  showUserTable() {
    this.dashboardService.getUsersList(DashboardConstants.userApiURL).subscribe((response: UserList[]) =>{
      this.dataSource = response;
      this.userDataLoaded = true;
    }, (error) =>{
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  showDialogBox(item: UserList) {
    const dialogRef = this.dialog.open(DialogUserinfoComponent, {
      height: '400px',
      width: '600px',
      data: { userInfo: item}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
