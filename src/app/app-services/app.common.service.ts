import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { statusType } from '../app-constants/app.constants';
import { CommentsList } from '../restatement/restatement.models';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class AppCommonService {

  constructor(private dialog: MatDialog) { }

  public commentResponse: CommentsList[]=[];
  private commentData = new BehaviorSubject(this.commentResponse);

  getCommentData(): Observable<CommentsList[]> {
    return this.commentData.asObservable();
  }

  setCommentData(commentsArray: CommentsList[]) {
    this.commentData.next(commentsArray);
  }

  getColorForStatus(status: string): string {
      let color = 'orange'
      if(status === statusType.uploaded) {
        return color = 'orange';

      } else if (status === statusType.success) {
        return color = 'green';

      } else if (status === statusType.failed) {
        return color = 'red';
      }
    return color;
  }

  openNotAuthorizedDialogBox(dialogComponentName) {
    const dialogRef = this.dialog.open(dialogComponentName, {
      height: '400px',
      width: '400px',
      data: { }
    })

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
  }

}
