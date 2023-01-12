import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'services',
	title: 'Services',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'Info List',
			type: 'array',
			of: [
				defineArrayMember({
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
							name: 'description',
							title: 'Description',
							type: 'text',
						})
					]
				}),
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Services'
			}
		},
	}

})
