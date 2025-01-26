# Spotify Design System

Spotify Design System is a robust, reusable component library built with React and TypeScript. It is designed to provide a consistent and scalable foundation for building Spotify-themed user interfaces, while also demonstrating advanced frontend development skills.

---

## Key Features

- **Spotify Theme**: Tailored for Spotify-inspired applications, with reusable and themeable components.
- **Atomic Design Structure**: Organized into Atoms, Molecules, and Organisms for easy scalability.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Storybook Integration**: All components are documented and showcased in an interactive Storybook environment.
- **Customizable**: Components are built with flexibility in mind, allowing them to adapt to various use cases.
- **Accessible**: Adheres to accessibility best practices (WCAG standards).

---

## Installation

Install the Spotify Design System into your project using npm or yarn:

```bash
npm install spotify-design-system
```

or

```bash
yarn add spotify-design-system
```

---

## Getting Started

### Importing a Component

Here’s how to use a Button component from the Spotify Design System:

```tsx
import { Button } from 'spotify-design-system';

const App = () => (
  <Button variant="primary">Click Me</Button>
);
```

### Explore Components in Storybook

Run the following command to launch the Storybook and explore available components:

```bash
npm run storybook
```

---

## Component Architecture

Spotify Design System follows an **Atomic Design** methodology:

1. **Atoms**: Basic building blocks such as buttons, icons, and inputs.
2. **Molecules**: Combinations of Atoms, like input fields with labels.
3. **Organisms**: More complex UI components like search bars or player controls.

---

## Theming and Customization

The Spotify Design System is designed to be easily themeable. Customize components by passing a theme object via the `ThemeProvider`:

```tsx
import { ThemeProvider } from 'spotify-design-system';

const theme = {
  colors: {
    primary: '#1DB954',
    secondary: '#191414',
    accent: '#535353',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary">Themed Button</Button>
  </ThemeProvider>
);
```

---

## Scripts

The project provides the following npm scripts:

- `npm run start`: Launches Storybook for development.
- `npm run build`: Builds the design system for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run test`: Runs unit tests with Jest.
- `npm run build-storybook`: Exports Storybook as a static site for deployment.

---

## Folder Structure

```
src/
├── components/       # All reusable components
│   ├── atoms/        # Atoms (e.g., Button, Icon)
│   ├── molecules/    # Molecules (e.g., InputField)
│   ├── organisms/    # Organisms (e.g., Navbar, Player)
├── theme/            # Theming files
├── utils/            # Utility functions
├── index.ts          # Entry point
```

---

## Development

### Adding a New Component

1. Create a new folder for your component under the appropriate level (Atom, Molecule, or Organism):

   ```bash
   mkdir src/components/atoms/MyComponent
   ```

2. Add the following files:

   - `MyComponent.tsx`: Component logic.
   - `MyComponent.stories.tsx`: Storybook stories.
   - `MyComponent.test.tsx`: Unit tests.
   - `MyComponent.styles.ts`: Component styles (if applicable).

3. Export your component in the `index.ts` file.

### Writing Stories

Document your component in Storybook with variations and props using `argTypes`. Example:

```tsx
export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    onClick: { action: 'clicked' },
  },
};
```

### Running Tests

Use Jest to run unit tests:

```bash
npm run test
```

---

## Deployment

### Build the Design System

To build the library for production:

```bash
npm run build
```

### Deploy Storybook

Generate a static build of Storybook:

```bash
npm run build-storybook
```

Host the static files on GitHub Pages, Netlify, or any static hosting platform.

---

## Contribution

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Add your changes and write tests.
4. Submit a pull request.

---

## License

The Spotify Design System is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

This project is inspired by Spotify’s design principles and aims to provide a reusable foundation for similar applications.

