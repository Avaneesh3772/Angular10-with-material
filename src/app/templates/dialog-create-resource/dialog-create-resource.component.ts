import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreatePostModel } from '../template.models';

@Component({
  selector: 'app-dialog-create-resource',
  templateUrl: './dialog-create-resource.component.html',
  styleUrls: ['./dialog-create-resource.component.css']
})
export class DialogCreateResourceComponent implements OnInit {
  public title: string = '';
  public body: string = '';
  public userId: number = null;
  public createPost=  new CreatePostModel(this.title, this.body, this.userId);

  constructor(public dialogRef: MatDialogRef<DialogCreateResourceComponent>) { }

  ngOnInit(): void {
  }

  formSubmit(userForm: NgForm) {
      this.dialogRef.close(this.createPost);
  }

}
