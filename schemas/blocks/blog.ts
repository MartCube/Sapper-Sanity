import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blog',
	title: 'Blog Section',
	type: 'object',
	fields: [
		defineField({
			name: 'pagination',
			title: 'Pagination',
			type: 'boolean',
			validation: Rule => Rule.required(),
			initialValue: true,
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Blog Section'
			}
		},
	}

})
