import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss']
})
export class ListCandidatesComponent implements OnInit {
  
  candidatesData = null;
  search: string;

  constructor( private candidateSerice: CandidatesService) { 

  }

  ngOnInit(): void {
    this.candidateSerice.getJSON().subscribe( data => {
      this.candidatesData = data;
    })
  }

  sortValueChange(data) : void {
    console.log(data);
  }

  searchValueChange(data): void {
    console.log(data);
  }

}
