import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'achivments',
	title: 'Achivments',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'Info List',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'item',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Title',
							type: 'string',
						}),
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
						}),
						defineField({
							name: 'number',
							title: 'Number',
							type: 'number',
						})
					]
				}),
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Achivments'
			}
		},
	}
})
