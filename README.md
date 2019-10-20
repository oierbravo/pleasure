![logo]:https://github.com/oierbravo/pleasure/raw/master/src/assets/images/logo.png "Pleasure"

# Pleasure Static Site Generator
> Twig based Static Site generator powered by gulp.

## Motivation
There are a lot of static site generator out there but we always found ourselves tweaking and adjusting them.
The idea is to use it as a boiler plate for basic static web sites. Tailored to our needs and workflows, its intended to use as it is with no config required.
Heavily inspired on Jekyll.

## Prerequisites
- ### Node.js
  - Basic installation, nothing fancy. https://nodejs.org
## Download
  - From: https://github.com/oierbravo/pleasure/archive/0.3.zip
  - Last `release` recommended.

## Installation
  - Launch `npm` installer
      ```
      npm install
      ```
## Development
- Launch development environment
    ```
  npm start
  ```
## Deploy (production ready)
- Clean previous builds.
    ```
  npm run clean
  ```
- Compile everything for production.
    ```
  npm run build
  ```

## Structure
> Some simples and some advanced.

### Folders

```
|-- build/  (generated production build)
|-- build-dev/  (generated development build)
|-- src/assets/fonts/  (font sources)
|-- src/assets/images/  (image sources)
|-- src/assets/js/  (js sources)
|-- src/assets/scss/  (SMACSS based sass setup)
|-- src/assets/svg/  (svg sources)
|-- src/assets/videos/  (video sources)
|-- gulpfile.js  (configured gulp file)
|-- node_modules/  (modules generated by npm)
|-- package.json  (configured to load dependencies by npm)
|-- config.vendors.js (javascript vendor configuration file example)
|-- README.md (Documentation)
```

### Sass

BEM & Atomic design structure.
```
src/assets/sass/
  |-- 01_tools/
  |-- 02_settings/
  |-- 03_generic/
  |-- 04_elements/
  |-- 05_objects/
  |-- 06_components/
  |-- 07_pages/
  |-- 08_utilities/
  |-- style.scss
```


### Pages

```
src/pages/
  |-- _components/ (reusable twig components)
  |-- _data/ (site data and specific page data)
  |-- _includes/ (common place for include files)
  |-- _layouts/ (html and page layout)
  |-- page1/index.twig (example page)
  |-- page2/index.twig (example page with partials)
  |-- dev-guide.twig (pages, components and svg icons index, for development purposes)
  |-- index.twig

```


### NetlifyCMS

#### Admin Configuration: `src/static/admin/config.yml`
Normal NetlifyCMS config file. Modify as needed. `name` act as machinename. Important for folder naming and final url.

#### Template convention
```
src/pages/content-name
  |-- list.twig (content list page)
  |-- item.twig (content item page)
```
#### Content convention
```
content/content-name
  |-- slug.json (a file per item)
```

### Twig Template System
#### Custom functions


### SVG Spritesheet

## Nuts and bolts
> and how to use them.

- ### Favicon
- ### JS Vendors
- ### SASS Vendors
- ### Critical CSS splitting
- ### Fonts
- ### Image optimization, responsive images and lazyloading
- ### SVG Icon Spritesheet
- ### Defaults
- ### GRDP
- ### NetlifyCMS


## ToDo:
- Critical split - missing string inject into style
- Responsive images
- Documentation
- Default non intrusive html and sass
- Favicon gen