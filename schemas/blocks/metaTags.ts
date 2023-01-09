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
		}),
		defineField({
			name: 'description',
			title: 'Meta Description',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Meta Image',
			type: 'image',
			options: {
				hotspot: true,
			},
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
