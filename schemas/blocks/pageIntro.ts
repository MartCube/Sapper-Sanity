import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pageIntro',
	title: 'Page Intro',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt',
					type: 'string',
				}),
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Page Intro'
			}
		},
	}

})
