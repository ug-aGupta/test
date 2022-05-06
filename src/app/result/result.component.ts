import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  rf!:FormGroup;
  constructor(private ref:ApprovalService) { }

  ngOnInit(): void {
    this.rf=this.ref.getDetails();
  }

}
