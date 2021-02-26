import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms';
import { AgeCustomValidator } from 'src/app/app-validators/age.validator';
import { PasswordValidator } from 'src/app/app-validators/password.validator';
import { AdminConstants } from '../admin.constants';
import * as moment from 'moment';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-le-calculation',
  templateUrl: './le-calculation.component.html',
  styleUrls: ['./le-calculation.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    }
  ],
})
export class LeCalculationComponent implements OnInit {

  public employeeForm: FormGroup;
  public charLength: number = 0;
  public char: string;
  public forbiddenName: string;
  public proficiencyList:  string[] = AdminConstants.proficiencyOptions;
  public mindate = moment().subtract(10, 'years');
  public maxdate = moment();


  constructor(private fb: FormBuilder) {    }

  get EmpName():FormControl  { return this.employeeForm.get('userName') as FormControl }
  get EmpAge():FormControl  { return this.employeeForm.get('userAge') as FormControl }
  get EmpPassword():FormControl  { return this.employeeForm.get('password') as FormControl}
  get EmpConfirmPassword():FormControl  { return this.employeeForm.get('confirmPassword') as FormControl}
  get EmpJoiningDate():FormControl  { return this.employeeForm.get('joiningDate') as FormControl}
  get EmpOffers():FormControl  { return this.employeeForm.get('promotionalOffer') as FormControl}
  get EmpEmail():FormControl  { return this.employeeForm.get('userEmail') as FormControl}
  get EmpSkills():FormControl  { return this.employeeForm.get('skills.userSkills') as FormControl}
  get EmpExperience():FormControl  { return this.employeeForm.get('skills.userExperience') as FormControl}
  get EmpProficiency():FormControl { return this.employeeForm.get('skills.userProficiency') as FormControl}
  get Qualification():FormArray { return this.employeeForm.get('qualification') as FormArray}


  ngOnInit() {
    /* this.employeeForm = new FormGroup({
      userName : new FormControl('Avaneesh'),
      userEmail : new FormControl(''),
      skills: new FormGroup({
        userSkills : new FormControl(''),
        userExperience : new FormControl(''),
        userProficiency : new FormControl('')
      })
     }) */


     this.employeeForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      userAge: ['',[Validators.required, AgeCustomValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      joiningDate: [this.maxdate, [Validators.required]],
      userEmail: [null, []],
      promotionalOffer: [false],
      skills: this.fb.group({
        userSkills: ['', [Validators.required]],
        userExperience: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        userProficiency: ['', [Validators.required]]
      }),
      qualification: this.fb.array([this.createQualification()])
     }, { validator: PasswordValidator });


     this.employeeForm.get('userEmail').disable();

     this.employeeForm.get('userName').valueChanges.subscribe(value => {
       this.char = value;
       if(this.char) {
        this.charLength = this.char.length;
       }
     })


      this.employeeForm.get("promotionalOffer").valueChanges.subscribe( newValue => {
        const email = this.employeeForm.get("userEmail");
        if(newValue) {
          this.employeeForm.get('userEmail').enable();
          email.setValidators(Validators.required);
          email.setValidators(Validators.email);
          email.setValidators(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
        } else {
          this.employeeForm.get('userEmail').disable();
          email.clearValidators();
        }
        email.updateValueAndValidity();
     })
  }

    createQualification(): FormGroup {
      console.log('createQualification')
      return this.fb.group({
        userQualification: ['',[Validators.required, Validators.minLength(3)]],
        userUniversity: ['', [Validators.required, Validators.minLength(5)]]
      })
    }

    addNewQualification() {
      this.Qualification.push(this.createQualification());
    }

    deleteQualification(i){
      this.Qualification.removeAt(i);
    }

    updateProficiency(event) {
      console.log(event.target.value)
      this.EmpProficiency.setValue(event.target.value, {
        onlySelf: true
      })
    }

    onSubmit() {
      console.log("this.employeeForm", this.employeeForm);
      console.log("this.employeeForm", this.employeeForm.value);
    }

}
