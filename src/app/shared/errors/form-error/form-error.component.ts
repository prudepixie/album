import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() formName
  @Input() fieldName
  @Input() errorName
  @Input() errorMessage

  constructor() { }

  ngOnInit() {
  }

}
