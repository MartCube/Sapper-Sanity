import { defineField, defineType, SlugInput } from 'sanity'
import { RiPagesLine } from 'react-icons/ri'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: RiPagesLine,
	i18n: true,
	groups: [
		{
			name: 'page',
			title: 'Page',
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
			group: 'page',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: { source: 'title' },
			group: 'page',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'pageContent',
			group: 'page',
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
