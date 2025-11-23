import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'appHeader',
    title: 'Uygulama Başlığı',
    type: 'document',
    description: 'Bundan sadece bir tane yaratın',
    fields: [
        defineField({
            name: 'name',
            type: 'internationalizedArrayString',
            title: 'İsim',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            type: 'image',
            title: 'Logo',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'links',
            type: 'array',
            title: 'Başlık Linkleri',
            of: [
                defineField({
                    type: 'reference',
                    name: 'links',
                    to: [{ type: 'productsPage' }, { type: 'textPage' }],
                }),
            ],
        }),
    ],
})
