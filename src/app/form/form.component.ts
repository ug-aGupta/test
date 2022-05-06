import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig ,SelectItemGroup} from 'primeng/api';
import { FormControl,FormGroup,FormArray,Validator, Validators } from '@angular/forms';
import { ApprovalService } from '../approval.service';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
 
  constructor(private primengConfig: PrimeNGConfig,private ref:ApprovalService) { 
    
    
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    
  }

  cities!: City[];

  selectedCity!: City;

  selectedCategory: any = null;

    categories: any[] = [{name: 'Male', key: 'A'},{name: 'Female', key: 'B'}];
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.selectedCategory = this.categories[1];
  }


  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    gender:new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  })
  onSubmit(){
    console.log(this.loginForm.value);
    this.ref.setDetails(this.loginForm);
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get zip(){
    return this.loginForm.get('zip');
  }
}
