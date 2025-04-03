[![Netlify Status](https://api.netlify.com/api/v1/badges/59da70d1-67f6-4000-b3e4-f0649920d169/deploy-status)](https://app.netlify.com/sites/pint-art/deploys)

# Pint-Art
A virtualized masonry grid layout, debounced search, dynamic routing, and error/pending UI - created with **React**/**TypeScript** and styled with **vanilla-extract**.



## Project Structure
```

src/
├── components/              
├── features/                # Feature sliced architecture
│   ├── api/                 # Pexels API client setup
│   └── images/              
│       ├── _api/            # Sub-feature level api method
│       ├── grid/            # Masonry grid sub-feature
│       ├── details/         # Image details sub-feature
│       └── search/          # Search
├── pages/                   
│   ├── _layout.tsx          # Root Layout
│   ├── _error-boundary.tsx  # Root Error boundary
│   ├── image-details-page.tsx
│   ├── images-overview-page.tsx
│   ├── router.tsx           # React Router configuration
│   └── routes.ts            # Route path definitions
├── shared/                  # Constants and types shared across the codebase
├── styles/                  # All `vanilla-extract` styles/theme
│   ├── animations.css.ts
│   ├── theme.css.ts
│   ├── index.css.ts
│   └── types.ts
└── main.tsx                 

```


## Running Locally
### 1. Add your PEXEL API key

Create a `.env.local` file next to the `.env.example`

  ```env
      VITE_IMAGES_API_KEY="your_api_key"
  ```

### 2. Run the dev server

  ```bash
      npm run dev
  ```


## What's missing?
* Missing manual lazy loading for the images in the grid.
* Caching/saving in memory the image after the first load


## TODO

```txt
- [*] Initial Setup
- [*] Configure necessary dependencies
        - [*] Configure react-router
        - [*] Configure pexels api
- [ ] Create grid view
        - [*] Implement masonry grid
                - [*] Get data from the api
                - [*] Make it responsive
                - [*] Add skeleton loaders
        - [*] Add virtualization
        - [ ] Reuse dom nodes 
        - [ ] Add lazy loading
- [*] Create details view
        - [*] Add details route
        - [*] Get data from the api

- [*] Implement search
        - [*] Create search functionality with pexels api
        - [*] Add debouncing upon typing 
        - [*] Update url with the search query
        - [*] Update grid view upon enter
- [*] Add Error boundaries

```