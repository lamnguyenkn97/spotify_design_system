# Table Component

## Overview
Generic data table with TypeScript support for displaying structured data in Spotify's interface.

**Common use cases:**
- Music library displays
- User playlists and tracks
- Settings and configuration data
- Analytics and reporting tables

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Generic TypeScript** | Fully typed with `<T>` for type safety | Any data structure support |
| **Column Configuration** | Flexible column definitions with keys/labels | Customizable table structure |
| **Custom Cell Rendering** | `renderCell` functions for complex content | Links, buttons, formatted data |
| **Width Control** | Optional column width specification | Layout optimization |
| **Type Safety** | Full TypeScript inference | Compile-time error checking |
| **Semantic HTML** | Proper table structure | Screen reader compatibility |

## Styling & Tokens

- **Colors**: `colors.table.header/body/border` for table styling
- **Spacing**: `spacing.table.cell/padding` for consistent spacing
- **Typography**: `typography.table.header/body` for text hierarchy
- **Borders**: `borders.table` for structure definition
- **Backgrounds**: Alternating row colors and hover states

## Usage Patterns

```tsx
// Basic data table
<Table 
  data={tracks}
  columns={[
    { key: 'title', label: 'Song' },
    { key: 'artist', label: 'Artist' },
    { key: 'duration', label: 'Duration' }
  ]}
/>

// Custom cell rendering
<Table 
  data={playlists}
  columns={[
    { key: 'name', label: 'Playlist' },
    { 
      key: 'actions', 
      label: 'Actions',
      renderCell: (playlist) => (
        <Button onClick={() => play(playlist)}>Play</Button>
      )
    }
  ]}
/>
```

## Accessibility

- Uses semantic HTML table elements (`<table>`, `<thead>`, `<tbody>`)
- `<th>` elements provide column header context
- Screen readers can navigate by rows and columns
- Standard table keyboard navigation works naturally
- Custom cell content maintains accessibility 