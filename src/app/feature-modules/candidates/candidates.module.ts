import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ListCandidatesComponent, CandidateCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ListCandidatesComponent]
})
export class CandidatesModule { }
