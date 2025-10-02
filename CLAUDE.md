# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 backoffice application using React 19, TypeScript, and TailwindCSS v4. The project uses shadcn/ui components for the UI library and is configured as a pnpm workspace.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Tech Stack & Dependencies

- **Framework**: Next.js 15 with App Router
- **React**: Version 19
- **TypeScript**: Strict mode enabled
- **Styling**: TailwindCSS v4 with PostCSS
- **UI Components**: shadcn/ui (New York style)
- **Package Manager**: pnpm (workspace configuration)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge (cn utility function)

## Architecture

### Directory Structure

```
src/
├── app/          # App Router pages and layouts
├── lib/          # Utilities and shared functions
└── components/   # React components (configured via shadcn/ui)
```

### Key Configuration

- **Path aliases**: `@/*` maps to `src/*`
- **shadcn/ui**: Configured with New York style, CSS variables enabled
- **Component aliases**:
  - `@/components` for general components
  - `@/components/ui` for UI components
  - `@/lib/utils` for utilities
- **TailwindCSS**: v4 with `tw-animate-css` for animations

### Workspace Setup

This project uses pnpm workspaces with specific built dependencies configured in `pnpm-workspace.yaml`.

## Code Conventions

- 함수형 프로그래밍 준수

## Git Conventions

- 한글로 작성
- Conventional Commits 준수
