import { StructureBuilder } from 'sanity/desk'

export const structure = (S: StructureBuilder) => S.list()
	.title('Content')
	.items([
		S.listItem()
			.title('Home Page')
			.child(
				S.document()
					.schemaType('homePage')
					.documentId('homePage')
			),
		...S.documentTypeListItems().filter(
			listItem => !['homePage', 'media.tag'].includes(listItem.getId() ?? '')
		)
	])