import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  displayEmail: any; 
  displayPass: any;
  displayID: any;
  displayName: any;
  displayGender: any;
  

  
  
  
  
  
  getValue(val: any[],val2: any[],val3: any[],val4: any[],val5: any[]){


   
        console.warn(val)
    
      this.displayEmail=val
      this.displayPass=val2
      this.displayID=val3
      this.displayName=val4
      this.displayGender=val5


      


  }
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(v: NgForm){
    console.log(v.value, v.valid);


  }

}
