import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'youtubeGallery',
	title: 'Youtube Gallery',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'List',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'youtube',
				}),
			],

		})
	],
	preview: {
		prepare() {
			return {
				title: 'Youtube Video'
			}
		},
	}

})
