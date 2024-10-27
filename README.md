## Introduction
This is a Pokemon list application built with Next.js and TypeScript.

## Features

### Pokemon List
- **Default View**: All Pokemon are displayed on the page by default.
- **Search by Name**: You can search for Pokemon by name, and the application will display all Pokemon that match the search string.
- **Power Threshold**: When you enter a value in the power threshold field, the application will update the count.
- **Count**: The current count of Pokemon returned by the search input and/or power threshold is displayed.
- **Min Power**: The minimum Pokemon power of the list is displayed, and it works with the search functionality.
- **Max Power**: The maximum Pokemon power of the list is displayed, and it works with the search functionality.

### Pokemon View
- **Details Page**: When you click on a row (Pokemon in the table), the application will navigate to a new page (e.g., `/pokemon/2`) displaying all properties of the Pokemon and its image (available in the `public/images` folder).
- **Navigation**: A "Next" button and a "Previous" button are displayed to access the previous or next Pokemon (based on ID logic).

### Unit Tests
- Unit tests are implemented for components, helpers, and endpoints with React Testing Library

## Page Access

#### Local Access
- **Pokémon List Page**: [http://localhost:3000/](http://localhost:3000/)
- **Pokémon Details Page**: [http://localhost:3000/pokemon/2](http://localhost:3000/pokemon/2)

#### Published Access
- **Pokémon List Page**: [https://pokemon-nextjs-14.netlify.app/](https://pokemon-nextjs-14.netlify.app/)
- **Pokémon Details Page**: [https://pokemon-nextjs-14.netlify.app/pokemon/2](https://pokemon-nextjs-14.netlify.app/pokemon/2)

## Installation

To install the dependencies and run localhost, run:

```bash
npm install
npm run dev
```
## API Reference

#### Get all pokemons

```http
  http://localhost:3000/api/pokemons
  https://pokemon-nextjs-14.netlify.app/api/pokemons
```

#### Get one pokemon by Id

```http
  http://localhost:3000/api/pokemon/{id}
  https://pokemon-nextjs-14.netlify.app/api/pokemon/{id}
```

| Parameter | Type     | Description       |
|:----------|:---------|:------------------|
| `id`       | `string` | Id of the pokemon |

## Tech Stack

- Next.js
- React
- React DOM
- Ant Design
- Recharts
- Styled Components
- Jest
- TypeScript
- Testing Library (Jest DOM, React, User Event)