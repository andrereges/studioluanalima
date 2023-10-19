import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param products list of elements to search in
     * @param categorySelected search string
     * @param textSearch search string
     * @returns list of elements filtered by search text or []
     */
    transform(products: Product[], categorySelected: string, textSearch: string): Product[] {
        if (!products)
            return [];

        if (!categorySelected && !textSearch)
            return products;

        return products.filter(
                product => {                       
                    if (!categorySelected && textSearch)
                        return product.name.toLowerCase().includes(textSearch.toLowerCase())

                    if (categorySelected && !textSearch)
                        return product.categories.find((category) => category.id == categorySelected)

                    return product.categories.find((category) => category.id == categorySelected) && product.name.toLowerCase().includes(textSearch.toLowerCase())
                }
            )
    }
}