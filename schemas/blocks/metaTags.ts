import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'metatags',
	title: 'Meta Tags',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Meta Title',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'Meta Title'
		}),
		defineField({
			name: 'description',
			title: 'Meta Description',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'Meta Description'
		}),
		defineField({
			name: 'image',
			title: 'Meta Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Meta Tags'
			}
		},
	}
})
