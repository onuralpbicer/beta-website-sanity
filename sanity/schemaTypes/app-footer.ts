import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'appFooter',
    title: 'Altbilgi',
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
            name: 'copyright',
            type: 'string',
            title: 'Telif Hakkı Metni',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'footerColumns',
            title: 'Altbilgi Sütunları',
            type: 'array',
            of: [
                defineField({
                    type: 'reference',
                    name: 'links',
                    to: [
                        defineType({
                            name: 'footerColumn',
                            title: 'Altbilgi Sütunu',
                            type: 'document',
                            preview: {
                                select: {
                                    title: 'name.1.value',
                                    subtitle: 'name.0.value',
                                },
                            },
                            fields: [
                                defineField({
                                    name: 'name',
                                    type: 'internationalizedArrayString',
                                    title: 'İsim',
                                    validation: (rule) => rule.required(),
                                }),
                                defineField({
                                    name: 'links',
                                    type: 'array',
                                    title: 'Linkler',
                                    of: [
                                        defineField({
                                            type: 'reference',
                                            name: 'links',
                                            to: [
                                                { type: 'productsPage' },
                                                { type: 'textPage' },
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
})
