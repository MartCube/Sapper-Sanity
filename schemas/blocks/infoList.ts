import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'infoList',
	title: 'List of infos',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Info list title',
			type: 'string',
			validation: Rule => Rule.required(),
		})
	],
	preview: {
		prepare() {
			return {
				title: 'List of infos'
			}
		},
	}

})
