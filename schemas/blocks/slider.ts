import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'slider',
	title: 'slider',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'List',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'slide',
				}),
			],

		})
	],
	preview: {
		prepare() {
			return {
				title: 'slider'
			}
		},
	}

})
