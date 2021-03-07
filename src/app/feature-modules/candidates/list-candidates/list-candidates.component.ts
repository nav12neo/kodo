import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss']
})
export class ListCandidatesComponent implements OnInit {
  
  candidatesData = null;
  totalRecords: number = 0;
  dataLoading: boolean = false;
  isError: boolean = false;
  queryObj : any = {
    search: "customer",
    sort : "name:desc"
  };
  constructor( private candidateSerice: CandidatesService) { 

  }

  ngOnInit(): void {
    this.getDataFromAPI();  
  }

  getDataFromAPI () : void {
    this.dataLoading = true;
    this.totalRecords = 0;
    this.candidateSerice.getJSON(this.queryObj).subscribe( data => {
      this.candidatesData = data;
      this.totalRecords = data.length;
      this.dataLoading = false;
    },
    error => {
      this.dataLoading = false;
      this.isError = true;
    });
  }

  sortValueChange(data) : void {
    this.queryObj.sort = data.name; 
    this.getDataFromAPI();
  }

  searchValueChange(data): void {
    this.queryObj.search = data;
    this.getDataFromAPI();
  }

}
