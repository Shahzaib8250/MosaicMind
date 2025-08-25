# AutismAlly - Autism Support Platform

## Overview

AutismAlly is a comprehensive web application designed to support families, caregivers, and professionals working with individuals on the autism spectrum. The platform provides a centralized hub for resources, tools, community support, and educational materials to help navigate the autism journey with confidence.

The application features a modern React-based frontend with a clean, accessible design using Tailwind CSS and shadcn/ui components. It includes multiple content-focused pages such as educational resources, support groups, success stories, professional services, and donation capabilities. The platform is built as a full-stack application with Express.js backend infrastructure ready for future database integration and API development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast development experience
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with custom design system
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript for API development
- **In-memory storage** implementation with interfaces designed for easy database migration
- **Modular route structure** with separation of concerns between routes and storage layers
- **Development middleware** for request logging and error handling
- **Hot module replacement** integration with Vite in development mode

### Data Management
- **Drizzle ORM** configured for PostgreSQL with schema definitions in TypeScript
- **Zod schemas** for runtime validation and type inference
- **Shared schema** architecture between frontend and backend for type consistency
- Database migration system ready for PostgreSQL deployment
- **Neon Database** integration configured for serverless PostgreSQL

### UI/UX Design System
- **Custom color palette** optimized for accessibility and autism-friendly design
- **Consistent spacing and typography** using Tailwind's design tokens
- **Mobile-responsive design** with mobile-first approach
- **Dark mode support** built into the component system
- **Focus on accessibility** with proper ARIA attributes and keyboard navigation

### Authentication & Session Management
- **connect-pg-simple** configured for PostgreSQL session storage
- User schema with username/password authentication ready for implementation
- Secure session handling with HTTP-only cookies

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM for frontend framework
- **Express.js**: Web server framework for API development
- **TypeScript**: Type safety across the entire application
- **Vite**: Modern build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe database operations and migrations
- **@neondatabase/serverless**: PostgreSQL driver for Neon Database
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Components & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants

### Form Handling & Validation
- **React Hook Form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolver for various schema libraries
- **Zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

### Development Tools
- **Replit integration**: Development environment optimization for Replit
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Various polyfills**: Browser compatibility and development experience enhancements

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **embla-carousel**: Carousel/slider component functionality
- **cmdk**: Command palette component for search and navigation
- **@tanstack/react-query**: Server state management and caching