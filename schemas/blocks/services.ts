import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'services',
	title: 'Services',
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
						}),
						defineField({
							name: 'link',
							title: 'Page link',
							type: 'reference',
							weak: true,
							to: [{type: 'page'}],
							options: {
								disableNew: true
							},
						}),
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
							options: { hotspot: true },
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
