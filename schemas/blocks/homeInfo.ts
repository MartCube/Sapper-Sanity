import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'homeInfo',
	title: 'Home Info',
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
							type: 'string',
						})
					]
				}),
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'homeInfo'
			}
		},
	}
})
