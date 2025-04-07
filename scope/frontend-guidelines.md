# Frontend Guidelines for Chat-to-Code Web App Builder

## Platform Overview

Our platform is an AI-powered "chat-to-code" web app builder with real-time previews, designed to democratize full-stack development through natural-language prompts. Users can create, customize, and deploy web applications through conversation with an AI assistant.

## Brand Persona: Julliete

Our design embodies the persona of Julliete – a sharp, mid-30s software engineer from France who has collaborated with top tech companies globally. With a discerning eye for both technical excellence and aesthetic refinement, Julliete represents:

- **Technical Precision**: Meticulous attention to implementation details
- **European Elegance**: Clean, sophisticated design with French sensibilities
- **Refined Taste**: Appreciation for quality craftsmanship and luxury
- **Practical Expertise**: Solutions that are both beautiful and functional
- **Worldly Perspective**: Influenced by global design standards but with a distinctly European flair

This persona guides every design decision, from typography choices to interaction patterns. Julliete would create software that feels precise, elegant, and thoughtfully crafted – never flashy or unnecessary.

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Backend**: Supabase (auth, DB, storage, functions)
- **Build Tool**: Vite
- **Routing**: React Router
- **Data Fetching**: React Query
- **State Management**: React's built-in hooks (useState, useContext, useReducer)

## Core Features

1. **Chat-driven Development**

   - Component/page creation through natural language
   - Code refactoring via conversation
   - Intelligent suggestions and corrections

2. **Real-time Preview**

   - Live rendering of changes
   - Dev Mode for code inspection
   - Responsive design preview across device sizes

3. **File & Dependency Management**

   - File system operations through chat
   - NPM dependency management
   - Asset handling

4. **Deployment & Integration**
   - One-click deployment
   - GitHub integration and version history
   - Supabase integration (auth, DB, storage, real-time)

## Design Philosophy

Our platform embodies a refined minimalism with distinctly European sensibilities, as if designed by Julliete himself. The design language prioritizes:

1. **Considered Restraint**: Only what is necessary, precisely implemented
2. **Parisian Typography**: Typographic treatments that reflect French design tradition
3. **Elegant Spacing**: Breathing room with mathematical proportions (golden ratio)
4. **Technical Precision**: Clean, exact implementations without excess
5. **Subtle Interactions**: Movements that feel crafted rather than manufactured

## Typography System

Typography forms the cornerstone of our identity, drawing inspiration from French type design:

- **Primary Font**: [Neue Haas Grotesk](https://www.myfonts.com/fonts/linotype/neue-haas-grotesk/) (or Inter as open-source alternative)

  - For all UI elements, with careful attention to weight pairings
  - Key weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Bold)
  - Letter-spacing: Slightly tighter than default (-0.01em)

- **Monospace**: [Söhne Mono](https://klim.co.nz/retail-fonts/sohne-mono/) (or Fira Code as open-source alternative)

  - Reserved for code blocks and technical content
  - Creates a bridge between design aesthetics and technical precision

- **Typographic Scale**: A precise modular scale with refined increments

  - Micro: 0.75rem (12px) - Legal, metadata
  - Small: 0.875rem (14px) - Supporting text
  - Body: 1rem (16px) - Primary reading text
  - Display-S: 1.125rem (18px) - Subheadings
  - Display-M: 1.375rem (22px) - Section headings
  - Display-L: 1.75rem (28px) - Page titles
  - Display-XL: 2.25rem (36px) - Hero headlines

- **Line Heights**:
  - Condensed: 1.1 - Headlines
  - Tight: 1.2 - Headings
  - Normal: 1.5 - Body text
  - Relaxed: 1.7 - Long-form content

## Color Palette

A restrained palette focused on pure black and white aesthetics:

- **Core Palette**:

  - Pure White: #FFFFFF (Light backgrounds, elements)
  - Pure Black: #000000 (Text, dark mode backgrounds)
  - Light Gray: #E0E0E0 (Secondary text, borders)

- **Accent**: A minimal approach with black as primary focus

  - True Black: #000000 (Primary action, emphasis)
  - Used deliberately and sparingly

- **Functional**:

  - Success: #16594B (Success states, forest green)
  - Warning: #B25A00 (Warning states, burnt sienna)
  - Error: #AB1A1A (Error states, burgundy)
  - Info: #14477A (Information states, deep blue)

- **Neutrals**: A refined grayscale from pure white to deep black
  - 10 steps from pure white (#FFFFFF) to deep black (#000000)
  - Each step carefully calibrated for proper contrast

## Spacing & Layout

Precise, proportional spacing creates architectural harmony:

- **Spacing Scale**: Based on 4px increment with golden ratio influence

  - 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

- **Margin Hierarchies**:

  - Component margins: 16px (petit espace)
  - Section margins: 32px - 48px (espace moyen)
  - Page margins: 64px - 96px (grand espace)
  - Side padding: 24px (mobile), 48px (tablet), 64px+ (desktop)

- **Layout Grid**:
  - 12-column grid with 24px gutters
  - Fluid margins that increase with screen width
  - Golden ratio (1:1.618) applied to key layout divisions

## Interface Elements

Components embody the technical precision of an experienced engineer:

### Buttons

- **Limited Variants**: Only three button styles

  - Primary: Filled with pure black, subtle shadow
  - Secondary: Subtle background, high contrast text
  - Tertiary: Text only with subtle hover

- **Consistent Proportions**:
  - Height: 44px (default), 36px (compact)
  - Horizontally centered text with precise padding
  - Subtle hover states with timed transitions (200ms)
  - Borders with 1.5px precision

### Input Fields

- **Refined Styling**:
  - Subtle borders (1px) that intensify on focus
  - Generous padding (16px)
  - Clear distinction between inactive, active, and error states
  - Label text positioned with mathematical precision
  - Seamless transitions between states (200ms)

### Cards & Surfaces

- **Technical Elevation System**:
  - Shadows with precise blur values (8px, 16px, 24px)
  - Maximum of 3 elevation levels (0.05, 0.08, 0.12 opacity)
  - Reserved use of borders (0.5px - 1px)
  - Paper-like textures for premium surfaces (subtle grain)

## Chat Interface Design

The conversational UI embodies the sophistication of a Parisian tech salon:

### Message Bubbles

- **Asymmetrical Balance**:

  - User: Right-aligned with pure black background
  - AI: Left-aligned with light gray background
  - Subtle radius (8px) with one squared corner for precision
  - Light shadow on AI messages (1px, 4% opacity)

- **Typography Hierarchy**:

  - Message: Body text (16px/1.5)
  - Metadata: Micro text (12px/1.3)
  - Code: Monospace (14px/1.5)
  - French quotation marks (« ») for quoted text

- **Content Formatting**:
  - Rich text with refined markdown styling
  - Code blocks with subtle background contrast
  - Image content with considered padding
  - Syntax highlighting in muted, sophisticated tones

### Input Area

- **Focused Interaction**:
  - Prominent, always-visible input
  - Subtle border delineation
  - Placeholder text with reduced opacity (60%)
  - Send button using pure black color
  - Subtle animation on submit (200ms easing)

## Editor Interface

The editor exemplifies the technical craftsmanship of a seasoned engineer:

- **Typography**: Monospace with syntax highlighting in muted, sophisticated tones
- **Layout**: Clean with optimal line-height (1.5) and consistent indentation
- **Controls**: Minimal, text-based control elements with precise spacing
- **Presentation**: Subtle line numbering, refined scrollbars, exact gutter spacing

## Motion Principles

Movement reinforces our technical precision with European flair:

- **Timing**: Swift yet elegant (150ms - 250ms range)
- **Easing**: Custom cubic-bezier for refined acceleration/deceleration (0.19, 1, 0.22, 1)
- **Purpose**: Enhances understanding rather than decoration
- **Restraint**: Used only where it adds meaning
- **Precision**: Elements arrive exactly where they should, without bouncing or excess

## Responsive Behavior

Gracefully adapts while maintaining design integrity:

- **Breakpoints**:

  - Mobile: 375px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px - 1439px
  - Large: 1440px+

- **Treatment Changes**:
  - Typography scales subtly up at larger breakpoints
  - Spacing increases proportionally with screen size
  - Layout shifts from stacked to side-by-side arrangements
  - Elements maintain proportional relationships

## Image & Asset Guidelines

Visual elements follow the same principles of minimalist refinement:

- **Photography**: Monochromatic black and white with strong contrast
- **Illustrations**: Abstract, geometric, minimal with pure black outlines
- **Icons**: Consistent weight (1.5px stroke), geometric precision, 45° angles
- **Empty States**: Thoughtfully designed with minimal illustrations that feel crafted

## Dark Mode Approach

Dark mode embodies pure minimalism:

- **Background**: Pure Black (#000000)
- **Text**: Pure White (#FFFFFF) with reduced brightness for secondary text
- **Contrast**: Calibrated to maintain 4.5:1 minimum ratio with technical precision
- **Accent Colors**: Maintained as pure black/white in dark mode for consistency

## Implementation Notes

Development practices that uphold design integrity:

- Use shadcn/ui as the foundation for components
- Extend with custom styling that maintains proportional relationships
- Maintain typographic rhythm across all screen sizes
- Implement fluid typography and spacing
- Ensure all interactive elements have refined focus states
- Apply technical precision to all implementations

## Brand Voice

The textual voice reflects Julliete's character - technically precise with European sophistication:

- **Clear**: Direct language without unnecessary words
- **Confident**: Assured but never imposing
- **Considered**: Thoughtful, precise terminology with occasional French terms
- **Technical**: Precise without being verbose
- **Sophisticated**: Refined vocabulary that reflects worldliness

## Resources & Inspiration

- [Typographic Scale Calculator](https://type-scale.com/)
- [Golden Ratio Calculator](https://grtcalculator.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Neue Haas Grotesk Font](https://www.myfonts.com/fonts/linotype/neue-haas-grotesk/)
- [Söhne Mono Font](https://klim.co.nz/retail-fonts/sohne-mono/)
- [French Design Principles](https://en.wikipedia.org/wiki/French_design)
- [Parisian Color Palettes](https://www.pinterest.com/search/pins/?q=parisian%20color%20palette)

## Design Principles

1. **Technical Excellence**: Solutions that demonstrate craft and precision
2. **Responsiveness**: Optimal experience across all device sizes
3. **Accessibility**: WCAG 2.1 AA compliance with attention to detail
4. **Performance**: Fast load times and mathematically smooth interactions
5. **Consistency**: Unified design language throughout the application

## Design System

### Typography

- **Font Family**: Using system fonts with graceful fallbacks
  - Primary: Inter (UI elements, general text)
  - Monospace: Fira Code (code editor, snippets)
- **Font Sizes** (following shadcn/ui scales):
  - xs: 0.75rem
  - sm: 0.875rem
  - base: 1rem
  - lg: 1.125rem
  - xl: 1.25rem
  - 2xl: 1.5rem
  - 3xl: 1.875rem
  - 4xl: 2.25rem

### Colors

Using shadcn/ui's color tokens and Tailwind's configuration:

- **Primary**: For key actions, links, and emphasis
- **Secondary**: For less prominent elements
- **Accent**: For highlighting and special UI elements
- **Destructive**: For delete/warning actions
- **Muted**: For background and disabled states
- **Dark/Light Mode**: Full support for both themes

### Spacing

Follow shadcn/ui and Tailwind's spacing scale:

- 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

### Breakpoints

Using Tailwind's default breakpoints:

- sm: 640px (mobiles)
- md: 768px (tablets)
- lg: 1024px (laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (large screens)

## Component Guidelines

All components should use shadcn/ui as the foundation, extended with the refined aesthetic sensibilities outlined above. Here are guidelines for our core UI elements:

### Chat Interface

```jsx
<Card className="h-full flex flex-col shadow-sm border-[0.5px] border-neutral-200">
  <CardHeader className="px-6 py-5">
    <CardTitle className="text-[1.375rem] tracking-tight">Chat</CardTitle>
    <CardDescription className="text-[0.875rem] text-muted-foreground/80">
      Describe what you want to build
    </CardDescription>
  </CardHeader>
  <CardContent className="flex-1 overflow-auto px-6">
    {/* Message bubbles */}
  </CardContent>
  <CardFooter className="border-t border-neutral-100 px-6 py-4">
    <div className="flex w-full gap-3 items-end">
      <Input
        placeholder="Type your message..."
        className="flex-1 focus-visible:ring-offset-1"
      />
      <Button className="h-10 w-10 rounded-full p-0">
        <SendIcon className="h-4 w-4" />
      </Button>
    </div>
  </CardFooter>
</Card>
```

### Code Editor

```jsx
<Card className="h-full flex flex-col shadow-sm border-[0.5px] border-neutral-200">
  <CardHeader className="py-3 px-6">
    <Tabs defaultValue="editor" className="w-full">
      <TabsList className="grid w-52 grid-cols-2">
        <TabsTrigger value="editor" className="text-[0.875rem]">
          Editor
        </TabsTrigger>
        <TabsTrigger value="files" className="text-[0.875rem]">
          Files
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </CardHeader>
  <CardContent className="flex-1 p-0 border-t border-neutral-100">
    {/* Code editor component */}
  </CardContent>
  <CardFooter className="border-t border-neutral-100 py-3 px-6">
    <div className="flex items-center justify-between w-full">
      <Select>
        <SelectTrigger className="w-32 h-9 text-[0.875rem]">
          <SelectValue placeholder="File type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="js">JavaScript</SelectItem>
          <SelectItem value="tsx">React TSX</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" className="h-9 text-[0.875rem]">
        Save
      </Button>
    </div>
  </CardFooter>
</Card>
```

### Preview Window

```jsx
<Card className="h-full flex flex-col shadow-sm border-[0.5px] border-neutral-200">
  <CardHeader className="py-3 px-6">
    <div className="flex items-center justify-between">
      <CardTitle className="text-[0.875rem] tracking-tight">Preview</CardTitle>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" className="h-8 w-8">
          <SmartphoneIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <TabletIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MonitorIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </CardHeader>
  <CardContent className="flex-1 p-0 border-t border-neutral-100 bg-[url('/grid-pattern.svg')]">
    <div className="w-full h-full">{/* iframe or preview component */}</div>
  </CardContent>
  <CardFooter className="border-t border-neutral-100 py-3 px-6">
    <div className="flex items-center justify-between w-full">
      <Toggle aria-label="Toggle dev tools" className="h-8 px-3">
        <CodeIcon className="h-4 w-4 mr-2" />
        <span className="text-[0.875rem]">Developer</span>
      </Toggle>
      <Button className="h-9">Deploy</Button>
    </div>
  </CardFooter>
</Card>
```

## Layout Structure

The application follows a three-panel layout for the main workspace that embodies technical precision:

```
┌───────────────────────────────────────────────────────────┐
│ Header (App Bar)                                          │
├───────────┬───────────────────────────┬───────────────────┤
│           │                           │                   │
│           │                           │                   │
│  Chat     │      Code Editor          │     Preview       │
│  Panel    │                           │     Window        │
│           │                           │                   │
│           │                           │                   │
├───────────┴───────────────────────────┴───────────────────┤
│ Footer (Status Bar)                                       │
└───────────────────────────────────────────────────────────┘
```

## Component Organization

```
/app
  /components
    /ui          # Basic UI components (shadcn)
    /layout      # Layout components
    /editor      # Code editor components
    /chat        # Chat interface components
    /preview     # Preview window components
    /auth        # Authentication components
    /dashboard   # Dashboard specific components
  /lib
    /utils       # Utility functions
    /hooks       # Custom React hooks
    /api         # API integration
    /supabase    # Supabase client and helpers
  /styles        # Global styles
  /pages         # App routes
```

## Accessibility Guidelines

- Use shadcn/ui which has strong accessibility defaults
- Implement keyboard navigation throughout the app
- Ensure sufficient color contrast (4.5:1 for text)
- Add appropriate ARIA labels where needed
- Test with screen readers
- Support reduced motion preferences

## Performance Optimization

- Lazy load components and routes
- Optimize bundle size with code splitting
- Use React memo and useMemo for expensive calculations
- Implement virtualization for long lists
- Optimize images and assets
- Set up performance monitoring

## State Management Guidelines

1. **Local State**: Use `useState` for component-specific state
2. **Shared State**: Use `useContext` with reducers for shared state
3. **Server State**: Use React Query for API data fetching and caching
4. **Form State**: Use controlled components or form libraries
5. **URL State**: Use router for state that should be reflected in URL

## Code Style and Conventions

### TypeScript

- Define interfaces for all props and state
- Use strict type checking
- Avoid `any` type when possible
- Use discriminated unions for complex state

```typescript
// Component props example
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}
```

### React Patterns

- Use functional components with hooks
- Follow the single responsibility principle
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Implement error boundaries for fault tolerance

```typescript
// Custom hook example
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## Documentation

- Add JSDoc comments to all components, hooks, and utility functions
- Use Storybook for component documentation
- Document props with TypeScript interfaces
- Include usage examples
- Document accessibility considerations

## Testing Strategy

- Unit tests for utility functions and hooks
- Component tests with React Testing Library
- End-to-end tests with Playwright
- Visual regression testing (optional)
- Performance testing with Lighthouse CI

## Implementation Workflow

1. Set up project structure with shadcn/ui and Tailwind
2. Implement core layout and UI components
3. Create chat interface with message handling
4. Implement code editor with syntax highlighting
5. Build preview window with responsive design
6. Integrate with Supabase for backend functionality
7. Implement deployment pipeline
8. Add GitHub integration

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.io/docs)
- [React Query Documentation](https://tanstack.com/query)
