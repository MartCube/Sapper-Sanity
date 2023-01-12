import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pageIntro',
	title: 'Page Intro',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Page Title',
			type: 'string',
			validation: Rule => Rule.required(),
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Page Intro'
			}
		},
	}

})
