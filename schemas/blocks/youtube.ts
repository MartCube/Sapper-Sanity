import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'youtube',
	title: 'Youtube',
	type: 'object',
	fields: [
		defineField({
			name: 'id',
			title: 'Video ID',
			type: 'string',
			validation: Rule => Rule.required()
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Youtube Video'
			}
		},
	}

})
