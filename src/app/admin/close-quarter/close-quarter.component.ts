import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminConstants } from '../admin.constants';
import { UserDetails } from '../admin.models';

@Component({
  selector: 'app-close-quarter',
  templateUrl: './close-quarter.component.html',
  styleUrls: ['./close-quarter.component.css']
})
export class CloseQuarterComponent implements OnInit {
  public formSubmitted = false;
  public topics: string[] = AdminConstants.topics;
  public timePreferences: string[] = AdminConstants.timeOptions;
  public userName: string = '';
  public userEmail: string = '';
  public userPhone: number = null;
  public userTopic: string = '';
  public userTimePreference: string = AdminConstants.timeOptions[0];
  public userSubscription: boolean = false;
  public userDetails = new UserDetails(this.userName, this.userEmail, this.userPhone, this.userTopic, this.userTimePreference, this.userSubscription)
  @ViewChild('userForm', {static: false}) userForm: NgForm;
  constructor() { }

  ngOnInit(): void {
    console.log('userDetails', this.userDetails);
  }

  getFormStatus() {
    console.log('userForm', this.userForm)
  }

  updateTopic(value) {
    console.log('value', value);
    this.userTopic = value;
  }

  updateTimePreference(time) {
    this.userTimePreference = time;
  }

  formSubmit() {
    this.formSubmitted = true;
    console.log("After Submit userForm", this.userForm);
    console.log("After Submit userDetails", this.userDetails);

  }



}
