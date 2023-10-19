import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { Procedure } from 'src/app/interfaces/procedure';
import { ProcedureService } from 'src/app/services/procedure.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css'],
})
export class ProcedureComponent {

  categories: Array<Category> = [];
  procedures: Array<Procedure> = [];
  categorySelected: string = '';
  textSearch: string = '';

  formControl = new FormControl('');

  constructor(
    private procedureService: ProcedureService
  ) { }

  ngOnInit(): void {
    this.getProcedures();
  }

  clearInput(): void {
    this.textSearch = ''
  }

  getProcedures(): void {
    this.procedureService.getAll()
      .subscribe(procedures => this.procedures = procedures);

    this.procedures.forEach(
      procedure => procedure.categories.forEach(
        category => {
          if (!this.alreadyExists(category))
            this.categories.push(category)
        })
    )
  }

  private alreadyExists(categoryParameter: Category): boolean {
    let exists = false

    this.categories.forEach(
      category => exists = category.id == categoryParameter.id
    )

    return exists;
  }

}
