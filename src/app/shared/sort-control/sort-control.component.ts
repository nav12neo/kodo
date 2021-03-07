import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sort-control',
  templateUrl: './sort-control.component.html',
  styleUrls: ['./sort-control.component.scss']
})
export class SortControlComponent implements OnInit {
  
  form : FormGroup;
  fields : any [];
  defaultValue:any;
  @Input() value : string;
  @Output() sortValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.fields = [
      {label: 'Name ascending', name: 'name:asc'},
      {label: 'Name desending', name: 'name:desc'},
      {label: 'Date Last Edited ascending', name: 'dateLastEdited:asc'},
      {label: 'Date Last Edited desending', name: 'dateLastEdited:desc'}
    ];
    this.defaultValue = this.fields.filter( (item) => {
        return item.name === this.value;
    });
    console.log(this.defaultValue);
    this.form = new FormGroup({
      field: new FormControl(this.defaultValue[0]),
    });

    this.form.get('field').valueChanges.subscribe(value => this.sortValueChange.emit(value));

  }
}
