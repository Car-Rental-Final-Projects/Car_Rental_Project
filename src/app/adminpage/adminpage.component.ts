import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  displayEmail: any; 
  displayPass: any;

  getValue(input: any[],input2: any[]){

        console.warn(input)

      this.displayEmail=input
      this.displayPass=input2

  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(v: NgForm){
    console.log(v.value, v.valid);


  }

}