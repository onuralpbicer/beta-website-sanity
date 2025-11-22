import { defineField } from 'sanity'

export const productsSharedFields = [
    defineField({
        name: 'name',
        type: 'internationalizedArrayString',
        title: 'İsim',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'image',
        type: 'image',
        title: 'Görsel',
        validation: (rule) => rule.required(),
    }),
]
