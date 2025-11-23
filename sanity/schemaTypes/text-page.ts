import { defineField, defineType } from 'sanity'
import { pageSharedFields } from '@/sanity/schemaTypes/shared'

export default defineType({
    name: 'textPage',
    title: 'Yazılı Sayfa',
    type: 'document',
    preview: {
        select: {
            title: 'name.1.value',
            subtitle: 'name.0.value',
        },
    },
    fields: [
        ...pageSharedFields,
        defineField({
            name: 'content',
            type: 'internationalizedArrayBlock',
            title: 'İçerik',
            validation: (rule) => rule.required(),
        }),
    ],
})
