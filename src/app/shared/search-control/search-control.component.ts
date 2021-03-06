import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {

  form : FormGroup;
  @Output() searchValueChange = new EventEmitter<any>();
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(this.value),
    });

    // OnChange    
    // this.form.get('search').valueChanges.pipe(debounceTime(1000)).subscribe(value => this.searchValueChange.emit(value));

  }

  onSubmit() {
    this.searchValueChange.emit(this.form.value.search);
  }
}
