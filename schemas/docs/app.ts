import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'app',
	title: 'App Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'logo',
			title: 'Logo Image',
			type: 'image',
		}),
		defineField({
			name: 'info',
			title: 'Info',
			type: 'object',
			fields: [
				defineField({
					name: 'phone',
					title: 'Phone Number',
					type: 'string',
				}),
				defineField({
					name: 'email',
					title: 'Email Adress',
					type: 'string',
				}),
				defineField({
					name: 'adress',
					title: 'Street Adress',
					type: 'string',
				}),
			]
		}),
		defineField({
			name: 'smedias',
			title: 'Social Medias',
			type: 'object',
			fields: [
				defineField({
					name: 'facebook',
					title: 'Facebook link',
					type: 'url',
				}),
				defineField({
					name: 'instagram',
					title: 'Instagram link',
					type: 'url',
				}),
			]
		}),
		defineField({
			name: 'links',
			title: 'Menu Links',
			type: 'object',
			fields: [
				defineField({
					name: 'ua',
					title: 'Ukrainian',
					type: 'array',
					of: [
						defineArrayMember({
							name: 'link',
							title: 'Link',
							type: 'reference',
							weak: true,
							to: [{ type: 'page' }],
							options: {
								disableNew: true,
								filter: '__i18n_lang == $lang ',
								filterParams: { lang: 'ua' }
							}
						}),
					]
				}),
				defineField({
					name: 'en',
					title: 'English',
					type: 'array',
					of: [
						defineArrayMember({
							name: 'link',
							title: 'Link',
							type: 'reference',
							weak: true,
							to: [{ type: 'page' }],
							options: {
								filter: '__i18n_lang == $lang',
								filterParams: { lang: 'en' }
							}
						}),
					]
				}),
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'App Settings'
			}
		},
	}
})
