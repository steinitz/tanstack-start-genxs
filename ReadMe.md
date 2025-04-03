# TanStack Start + GenSX Integration

This project demonstrates how to integrate GenSX with TanStack Start.

GenSX is a type-safe, JSX-based framework for building AI agents and workflows.

TanStack Start is a Full-stack React and Solid framework powered by TanStack Router. With SSR, Streaming, Server Functions, API Routes, bundling... Ready to deploy anywhere JavaScript can run.

## Features

- Simple web application built with TanStack Start
- AI-powered joke generation using GenSX workflow
- Integration between server and client components
- OpenAI API integration with configurable prompts

## Tech Stack

- TanStack Start & Router
- React 19
- GenSX Core & OpenAI
- TypeScript
- Vinxi (soon just Vite) for deployment

## Getting Started

### Prerequisites

- Node.js
- npm or other package manager
- OpenAI API key

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your-openai-api-key
   ```

### Development

Run the development server:

```
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

- `/app` - TanStack Start application
  - `/routes` - Application routes
  - `router.tsx` - Router config
- `/gensx` - GenSX components
  - `/workflows` - AI Agent workflows
    - `writeJoke.tsx` - Joke workflow

## GenSX Workflow

The project includes a simple GenSX workflow for joke generation (`gensx/workflows/writeJoke.tsx`). It:

1. Accepts a text input for joke topic
2. Uses the OpenAI API to generate a joke related to that text
3. Extracts the joke from the OpenAI data structure and returns it

## How the App Works

1. The main page (`app/routes/index.tsx`) provides an input for entering a joke topic
2. When the user clicks "Get Joke", the application calls a TanStack Start server function
3. The server functions invokes the GenSX workflow 
4. The workflow reqrests a joke from OpenAI based on the provided topic and returns it
5. The TanStack Start server function returns the joke to the client for display

## Customization

Aside from inputting the joke topic in the UI, you can further customize the joke context by modifying the system prompt in `gensx/workflows/writeJoke.tsx`:

```typescript
{ role: "system", content: "You are a helpful assistant who writes jokes which are fun and friendly." }
```

## Building for Production

```
npm run build
```

## License

[ISC License]
