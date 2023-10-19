import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Procedure } from 'src/app/interfaces/procedure';
import { ProcedureService } from 'src/app/services/procedure.service';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css']
})
export class ProcedureDetailsComponent implements OnInit {

  procedure: Procedure | undefined;

  constructor(
    private route: ActivatedRoute,
    private procedureService: ProcedureService
  ) { }

  ngOnInit(): void {
    this.getProcedure();
  }
  
  getProcedure(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    
    this.procedureService.getBySlug(slug)
      .subscribe(procedures => this.procedure = procedures[0]);
  }

}