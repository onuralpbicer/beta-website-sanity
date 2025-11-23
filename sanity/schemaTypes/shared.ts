import { defineField, defineType } from 'sanity'

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

export const pageSharedFields = [
    defineField({
        name: 'name',
        type: 'internationalizedArrayString',
        title: 'İsim',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'url',
        type: 'string',
        title: 'URL',
        validation: (rule) => rule.required(),
    }),
]

export const blockContent = defineType({
    name: 'blockContent',
    type: 'array',
    of: [
        {
            type: 'block',
        },
    ],
})
