export interface ShowcaseDemo {
  id: string
  title: string
  location?: string
  description?: string
  tags?: string[]
}

export interface ShowcaseRecordItem {
  name: string
  displayName: string
  description?: string
  hash?: string
  tags?: string[]
}

export const SHOWCASE_APPS: ShowcaseRecordItem[] = [
  {
    name: 'dxos:esbook.demos',
    displayName: 'Demos',
    description: 'dxos:esbook.demos',
    tags: []
  },
  {
    name: 'dxos:esbook.react-client',
    displayName: 'React Client',
    description: 'dxos:esbook.react-client',
    tags: []
  },
  {
    name: 'dxos:esbook.react-framework',
    displayName: 'React Framework',
    description: 'dxos:esbook.react-framework',
    tags: []
  },
  {
    name: 'dxos:esbook.devtools',
    displayName: 'Devtools',
    description: 'dxos:esbook.devtools',
    tags: []
  },
  {
    name: 'dxos:app.braneframe',
    displayName: 'Braneframe',
    description: 'dxos:app.braneframe',
    tags: []
  },
  {
    name: 'dxos:app.chess',
    displayName: 'Chess',
    description: 'dxos:app.chess',
    tags: []
  },
  {
    name: 'dxos:esbook.react-appkit',
    displayName: 'React Appkit',
    description: 'dxos:esbook.react-appkit',
    tags: []
  },
  {
    name: 'dxos:esbook.react-framekit',
    displayName: 'React Framekit',
    description: 'dxos:esbook.react-framekit',
    tags: []
  },
  {
    name: 'dxos:esbook.canvas',
    displayName: 'Canvas',
    description: 'dxos:esbook.canvas',
    tags: []
  },
  {
    name: 'dxos:esbook.document',
    displayName: 'Document',
    description: 'dxos:esbook.document',
    tags: []
  },
  {
    name: 'dxos:esbook.kanban',
    displayName: 'Kanban',
    description: 'dxos:esbook.kanban',
    tags: []
  },
  {
    name: 'dxos:esbook.messenger',
    displayName: 'Messenger',
    description: 'dxos:esbook.messenger',
    tags: []
  },
  {
    name: 'dxos:esbook.pinboard',
    displayName: 'Pinboard',
    description: 'dxos:esbook.pinboard',
    tags: []
  },
  {
    name: 'dxos:esbook.table',
    displayName: 'Table',
    description: 'dxos:esbook.table',
    tags: []
  },
  {
    name: 'dxos:esbook.tasks',
    displayName: 'Tasks',
    description: 'dxos:esbook.tasks',
    tags: []
  }
];
