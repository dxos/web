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
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.react-client',
    displayName: 'React Client',
    description: 'dxos:esbook.react-client',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.react-framework',
    displayName: 'React Framework',
    description: 'dxos:esbook.react-framework',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.devtools',
    displayName: 'Devtools',
    description: 'dxos:esbook.devtools',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:app.braneframe',
    displayName: 'Braneframe',
    description: 'dxos:app.braneframe',
    tags: ['DXOS', 'App']
  },
  {
    name: 'dxos:app.chess',
    displayName: 'Chess',
    description: 'dxos:app.chess',
    tags: ['DXOS', 'App']
  },
  {
    name: 'dxos:esbook.react-appkit',
    displayName: 'React Appkit',
    description: 'dxos:esbook.react-appkit',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.react-framekit',
    displayName: 'React Framekit',
    description: 'dxos:esbook.react-framekit',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.canvas',
    displayName: 'Canvas',
    description: 'dxos:esbook.canvas',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.document',
    displayName: 'Document',
    description: 'dxos:esbook.document',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.kanban',
    displayName: 'Kanban',
    description: 'dxos:esbook.kanban',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.messenger',
    displayName: 'Messenger',
    description: 'dxos:esbook.messenger',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.pinboard',
    displayName: 'Pinboard',
    description: 'dxos:esbook.pinboard',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.table',
    displayName: 'Table',
    description: 'dxos:esbook.table',
    tags: ['DXOS', 'Demos']
  },
  {
    name: 'dxos:esbook.tasks',
    displayName: 'Tasks',
    description: 'dxos:esbook.tasks',
    tags: ['DXOS', 'Demos']
  }
];
