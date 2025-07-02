# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server  
- `npm run lint` - Run Next.js linting

## Architecture Overview

This is an interactive scrollytelling application built with Next.js 15 and react-scrollama. The core pattern is **progressive content revelation** where users must answer multiple-choice questions to unlock subsequent content sections, with a **scale-based visualization system** showing how choices affect different levels of reality.

### Key Architectural Patterns

**Interactive Scrollytelling Flow:**
1. User scrolls through static content and multiple-choice questions
2. `react-scrollama` detects scroll position and triggers step changes
3. User answers affect both content visibility and scale visualizations
4. `getVisibleSteps()` utility controls progressive revelation logic

**Component Hierarchy:**
- `page.tsx` - Orchestrates state (current step, user answers) and 66%/33% layout
- `ScrollamaContainer` - Wraps react-scrollama, renders visible steps only
- `StepRenderer` - Polymorphic component switches between static content and questions
- `MultipleChoice` - Handles question UI and answer selection
- `ScaleStack` - Shows three-scale visualization (MACRO/MESO/MICRO) with progress tracking

**Data Models:**
- Union types (`Step = StaticStep | MultipleChoiceStep`) enable type-safe content authoring
- Content is declaratively defined in `data/content.ts` with type safety
- Scale content generated dynamically via `utils/scaleGenerator.ts`

### Critical Design Decisions

**Progressive Revelation Logic:**
The `getVisibleSteps()` function stops rendering at the first unanswered multiple-choice question. This creates the interactive dependency chain where users must engage to progress.

**Scale-Based Visualization:**
The right panel shows a three-tier system representing different scales of change:
- **MACRO**: Global/planetary level effects
- **MESO**: Community/regional level effects  
- **MICRO**: Individual/personal level effects

Each scale displays dynamic content based on user choice aggregation patterns in `generateScaleContent()`.

**Choice Aggregation System:**
User choices combine to create emergent narratives rather than direct 1:1 mappings. The `scaleGenerator.ts` uses boolean flags for choice types (hasLoveChoice, hasTriangleChoice, etc.) to drive conditional content trees across all three scales.

**Client-Side Rendering:**
All interactive components use `'use client'` directive since the experience requires rich browser interactions and state management.

## File Organization Rules

**100-Line Rule:** Every file must stay under 100 lines to maintain readability and focused responsibility.

**Separation Patterns:**
- `data/` - Content definitions
- `types/` - TypeScript interfaces  
- `utils/` - Pure functions (visibility logic, scale content generation)
- `components/` - React components with single responsibilities

## Technology Stack

- **Next.js 15.3.4** with App Router and Turbopack
- **React 19** with modern hooks and client components
- **react-scrollama 2.4.2** for scroll-triggered interactions
- **Tailwind CSS v4** for styling
- **TypeScript 5** with strict configuration and path aliases (`@/*` → `./src/*`)

## Current Layout

**Two-Panel Design:**
- **Left (66%)**: Scrolling content centered with 65ch max-width for optimal reading
- **Right (33%)**: Fixed ScaleStack visualization with "WORLD 2074" header

**ScaleStack Features:**
- Three equal-height sections for MACRO/MESO/MICRO scales
- Gray placeholder boxes (16:9 aspect ratio) ready for future image generation
- Dynamic text content based on user choice patterns
- Progress bar showing completion percentage

## Extending the System

**Adding New Step Types:**
1. Add new interface to `types/content.ts` union type
2. Add case to `StepRenderer.tsx` switch statement  
3. Create new component following existing patterns

**Adding Content:**
Modify `data/content.ts` with new steps. Multiple-choice steps automatically create revelation boundaries.

**Scale Content Generation:**
Extend `utils/scaleGenerator.ts` to add new choice-to-content mappings. Each scale should reflect the same choice patterns at different levels of reality.

**Visual Integration:**
The gray placeholder boxes in ScaleStack are designed to accommodate generated images. Replace the placeholder divs with image components when implementing visual generation.