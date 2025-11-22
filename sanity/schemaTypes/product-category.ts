import { defineField, defineType } from 'sanity'
import { productsSharedFields } from '@/sanity/schemaTypes/shared'

export default defineType({
    name: 'productCategory',
    title: 'Ürün Kategorisi',
    type: 'document',
    preview: {
        select: {
            title: 'name.1.value',
            subtitle: 'name.0.value',
        },
    },
    fields: [
        ...productsSharedFields,
        defineField({
            name: 'productsOrSubcategories',
            title: 'Ürünler veya Alt Kategoriler',
            type: 'array',
            of: [
                defineField({
                    type: 'reference',
                    name: 'products',
                    to: [{ type: 'product' }, { type: 'productSubcategory' }],
                }),
            ],
        }),
    ],
})
