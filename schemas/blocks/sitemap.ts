import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'sitemap',
	title: 'Sitemap',
	type: 'object',
	fields: [
		defineField({
			name: 'priority',
			title: 'Priority',
			description: "priority is a number between 0.0 and 1.0",
			type: 'number',
			initialValue: 1.0,
			validation: Rule => Rule.precision(1).min(0).max(1).required(),
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Sitemap'
			}
		},
	}

})
