# pint-art

[![Netlify Status](https://api.netlify.com/api/v1/badges/59da70d1-67f6-4000-b3e4-f0649920d169/deploy-status)](https://app.netlify.com/sites/pint-art/deploys)


## TODO
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

- [ ] Implement search
        - [ ] Create search functionality with pexels api
        - [ ] Add debouncing upon typing 
        - [ ] Update url with the search query
        - [ ] Update grid view upon enter
- [ ] Add Error boundaries
- [ ] Provide pending UI for Suspense Fallback