import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'testimonials',
	title: 'Testimonials',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
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
							name: 'icon',
							title: 'Icon Name',
							type: 'string',
							description: 'https://icones.js.org/collection/ri',
						}),
						defineField({
							name: 'description',
							title: 'Decription',
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
				title: "Testimonials"
			}
		},
	}

})

