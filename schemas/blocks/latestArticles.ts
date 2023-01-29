import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'latestArticles',
	title: 'Latest Articles',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'lastnews',
			title: 'Latest Articles',
			type: 'array',
			description: 'Links that appears in dropdown',
			of: [
				defineArrayMember({
					name: 'link',
					title: 'Page link',
					type: 'reference',
					weak: true,
					to: [{type: 'article'}],
					options: {
						disableNew: true
					},
				}),
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Latest Articles',
			}
		},
	}

})
