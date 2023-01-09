import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	groups: [
		{
			name: 'metaTags',
			title: 'Meta Tags',
		},
		{
			name: 'sitemap',
			title: 'Sitemap',
		}
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
			options: {
				dateFormat: 'MMM-DD-YYYY',
			},
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'articleContent',
		}),
		defineField({
			name: 'metaTags',
			type: 'metatags',
			group: 'metaTags'
		}),
		defineField({
			name: 'sitemap',
			title: "Sitemap",
			type: 'sitemap',
			group: 'sitemap',
		}),
	],
})
