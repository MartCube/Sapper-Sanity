import { defineField, defineType } from 'sanity'
import { RiArticleLine } from 'react-icons/ri'

export default defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	icon: RiArticleLine,
	i18n: true,
	groups: [
		{
			name: 'article',
			title: 'Article',
			default: true,
		},
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
			group: 'article',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: { source: 'title' },
			group: 'article',
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'article',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			group: 'article',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
			options: {
				dateFormat: 'MMM-DD-YYYY',
			},
			group: 'article',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'articleContent',
			group: 'article',
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
	preview: {
		select: {
			title: 'title',
			subtitle: '__i18n_lang'
		},
		prepare(selection) {
			const { title, subtitle } = selection
			return {
				title: `${title}`,
				subtitle: `${subtitle}`
			}
		},
	}
})
