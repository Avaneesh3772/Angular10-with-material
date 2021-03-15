import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsList } from 'src/app/restatement/restatement.models';
import { AppCommonService } from 'src/app/app-services/app.common.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public getCommentID: number;
  public getSelectedComment: CommentsList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appCommonService : AppCommonService){
      console.log('this.activatedRoute.snapshot', this.activatedRoute.snapshot);
      this.getCommentID = this.activatedRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.appCommonService.getCommentData().subscribe((response: CommentsList[]) =>{
      console.log('response', response)
      const filteredData = response.filter(item =>{
          return item.id === +(this.getCommentID);
      });
      this.getSelectedComment = filteredData[0];
    })
  }

}
