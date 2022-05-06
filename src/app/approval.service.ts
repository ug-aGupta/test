import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  details!: FormGroup;
  constructor() { }
  setDetails(data:FormGroup){
    this.details=data;
  }
  getDetails(){
    return this.details;
  }
}
