import { defineField, defineType } from 'sanity'
import { RiArticleLine } from 'react-icons/ri'

export default defineType({
	name: 'info',
	title: 'Info',
	type: 'document',
	icon: RiArticleLine,
	i18n: true,
	groups: [
		{
			name: 'info',
			title: 'info',
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
			group: 'info',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: { source: 'title' },
			group: 'info',
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'info',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			group: 'info',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
			options: {
				dateFormat: 'MMM-DD-YYYY',
			},
			group: 'info',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'infoContent',
			group: 'info',
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
