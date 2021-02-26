import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommonService } from 'src/app/app-services/app.common.service';
import { RestatementConstants } from 'src/app/restatement/restatement.constants';
import { CommentsList } from 'src/app/restatement/restatement.models';
import { RestatementService } from '../restatement.service';


@Component({
  selector: 'app-track-and-action',
  templateUrl: './track-and-action.component.html',
  styleUrls: ['./track-and-action.component.css']
})
export class TrackAndActionComponent implements OnInit {
  public dataSource: CommentsList[];
  public displayedColumns: string[] = RestatementConstants.displayedColumns;
  public errorMessage: string;
  public userDataLoaded = false;

  constructor(private restatementService : RestatementService,
    private appCommonService: AppCommonService,
    private router : Router)
  {
    this.showCommentsTable();
  }

  ngOnInit(): void {
  }

  showCommentsTable() {
    this.restatementService.getCommentsList(RestatementConstants.commentsApiURL).subscribe((response: CommentsList[]) =>{
      let sortCommentsArray = response.filter(item => item.id < 21);
      this.dataSource = sortCommentsArray;
      this.appCommonService.setCommentData(this.dataSource);
      this.userDataLoaded = true;
    }, (error) =>{
      this.errorMessage = error.message;
    })
  }

  navigateToTrack(element: CommentsList) {
    this.router.navigate(['restatement/track', element.id ]);
  }

}
