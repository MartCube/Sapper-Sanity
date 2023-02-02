import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'articleList',
	title: 'List of articles',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Article list title',
			type: 'string',
			validation: Rule => Rule.required(),
		})
	],
	preview: {
		prepare() {
			return {
				title: 'List of articles'
			}
		},
	}

})
