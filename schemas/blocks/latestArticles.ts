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
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Latest Articles',
			}
		},
	}

})
