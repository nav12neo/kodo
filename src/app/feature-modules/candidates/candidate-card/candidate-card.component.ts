import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {
  
  @Input() candidate : any;

  constructor() { }

  ngOnInit(): void {
  }

}
