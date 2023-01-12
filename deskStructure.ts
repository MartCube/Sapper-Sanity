import { StructureBuilder } from 'sanity/desk'
import { RiListSettingsLine } from 'react-icons/ri'



export const structure = (S: StructureBuilder) => S.list()
	.title('Content')
	.items([
		S.listItem()
			.title('App')
			.icon(RiListSettingsLine)
			.child(
				S.document()
					.schemaType('app')
					.documentId('app')
			),
		...S.documentTypeListItems().filter(
			listItem => !['app', 'media.tag'].includes(listItem.getId() ?? '')
		)
	])