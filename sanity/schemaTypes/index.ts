import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import productSubcategory from './product-subcategory'
import productCategory from './product-category'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [product, productSubcategory, productCategory],
}
