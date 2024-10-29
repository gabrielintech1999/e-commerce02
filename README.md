 # Amazon Clone
 ## Todos

 Setup the enviroment [x]
 setup the routes [x]
 Make the login page [x]
 Make the navbar components - parei aqui []
 Tidy up build process []
 Actually set up a database (vercel postgres) []
 Attach database to UI []
 Add authentication (w/ clerk) []
 Add image upload []
 "taint" (server-only) []
 Use Next/Image component []
 Error management (w/ Sentry) []
 Routing/image page (parallel route) []
 Update upload button to be less cringe []
 Analytics (posthog) []
 Delete button (w/ Server Actions) []
 Ratelimiting (upstash) []


 # Features
 - cart
 - client side routing
 - authentication


# Tech Stack
- Vite - 
- Framework: React.js - context API and useReducer, components
- React Router DOM  - Routes, Links, client side routing, layout
- Styling: Tailwind CSS - utility classes, customizations
- Material UI: for the icons


- Storage: uploadthing
- Validation: Zod
- Features
 Reusable useFileUpload hook for uploading files with uploadthing
 Drag and drop file upload component with progress bar
 React-hook-form integration with shadnc/ui form components
 File dialog demo with adding and removing files from the scrollable list