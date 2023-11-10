import { Pipe, PipeTransform } from '@angular/core';
import { Procedure } from '../interfaces/procedure';
import { Utils } from '../shared/utils';

@Pipe({ name: 'procedureFilter' })
export class ProcedureFilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param procedures list of elements to search in
     * @param categorySelected search string
     * @param textSearch search string
     * @returns list of elements filtered by search text or []
     */
    transform(procedures: Procedure[], categorySelected: string, textSearch: string): Procedure[] {
        if (!procedures)
            return []

        if (!categorySelected && !textSearch)
            return procedures

        return procedures.filter(
                procedure => {                       
                    if (!categorySelected && textSearch)
                        return Utils.replaceSpecialChars(procedure.name.toLowerCase()).includes(Utils.replaceSpecialChars(textSearch.toLowerCase()))

                    if (categorySelected && !textSearch)
                        return procedure.categories.find((category) => category.id == categorySelected)

                    return procedure.categories.find(
                        (category) => category.id == categorySelected)
                        && Utils.replaceSpecialChars(procedure.name.toLowerCase()).includes(Utils.replaceSpecialChars(textSearch.toLowerCase()))
                }
            )
    }
}