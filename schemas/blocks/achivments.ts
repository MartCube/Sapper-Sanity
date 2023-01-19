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
					title: 'Achivment',
					name: 'achivment',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Title',
							type: 'string',
						}),
						defineField({
							name: 'icon',
							title: 'Icon Name',
							type: 'string',
							description: 'https://icones.js.org/collection/ri',
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
				title: 'Achivments',
			}
		},
	}
})
