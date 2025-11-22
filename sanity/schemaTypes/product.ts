import { defineType } from 'sanity'
import { productsSharedFields } from '@/sanity/schemaTypes/shared'

export default defineType({
    name: 'product',
    title: 'Ürün',
    type: 'document',
    preview: {
        select: {
            title: 'name.1.value',
            subtitle: 'name.0.value',
        },
    },
    fields: [...productsSharedFields],
})
