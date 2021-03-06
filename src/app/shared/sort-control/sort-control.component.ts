import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sort-control',
  templateUrl: './sort-control.component.html',
  styleUrls: ['./sort-control.component.scss']
})
export class SortControlComponent implements OnInit {
  form : FormGroup;
  fields : any [];

  @Output() sortValueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.fields = [
      {label: 'Name ascending', name: 'name:asc'},
      {label: 'Name desending', name: 'name:desc'},
      {label: 'Description ascending', name: 'description:asc'},
      {label: 'Description desending', name: 'description:desc'}
    ];
    this.form = new FormGroup({
      field: new FormControl(this.fields[0]),
    });

    this.form.get('field').valueChanges.subscribe(value => this.sortValueChange.emit(value));

  }
}
