import { defineField, defineType } from 'sanity'
import { productsSharedFields } from '@/sanity/schemaTypes/shared'

export default defineType({
    name: 'productSubcategory',
    title: 'Ürün Alt Kategorisi',
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
            name: 'products',
            title: 'Ürünler',
            type: 'array',
            of: [
                defineField({
                    type: 'reference',
                    name: 'products',
                    to: [{ type: 'product' }],
                }),
            ],
        }),
    ],
})
