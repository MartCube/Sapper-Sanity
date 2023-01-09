import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'homePage',
	title: 'Home Page',
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
			name: 'content',
			title: 'Content',
			type: 'pageContent',
		}),
		defineField({
			name: 'metaTags',
			type: 'metatags',
			group: 'metaTags',
		}),
		defineField({
			name: 'sitemap',
			title: "Sitemap",
			type: 'sitemap',
			group: 'sitemap',
		})
	],
})
