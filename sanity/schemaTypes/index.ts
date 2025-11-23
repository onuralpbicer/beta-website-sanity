import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import productSubcategory from './product-subcategory'
import productCategory from './product-category'
import textPage from '@/sanity/schemaTypes/text-page'
import productsPage from '@/sanity/schemaTypes/products-page'
import appHeader from '@/sanity/schemaTypes/app-header'
import appFooter from '@/sanity/schemaTypes/app-footer'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        product,
        productSubcategory,
        productCategory,
        textPage,
        productsPage,
        appHeader,
        appFooter,
    ],
}
