import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'projectList',
	title: 'List of Projects',
	type: 'object',
	fields: [
		defineField({
			name: 'listOrder',
			title: 'List Order',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "_createdAt",
		})
	],
	preview: {
		prepare() {
			return {
				title: 'List of Projects'
			}
		},
	}

})
