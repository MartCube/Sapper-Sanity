import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'cta',
	title: 'CTA',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		})
	],
	preview: {
		prepare() {
			return {
				title: 'CTA',
			}
		},
	}

})
