import { defineType } from 'sanity'
import { pageSharedFields } from '@/sanity/schemaTypes/shared'

export default defineType({
    name: 'productsPage',
    title: 'Ürünler Sayfası',
    type: 'document',
    preview: {
        select: {
            title: 'name.1.value',
            subtitle: 'name.0.value',
        },
    },
    fields: [
        ...pageSharedFields,
        // todo add categories and stuff
    ],
})
