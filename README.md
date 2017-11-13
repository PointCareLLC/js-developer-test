# Parking Lot Manifest

There are 25 cars parked in our imaginary parking lot and I want to know what they are. If I give you the manifest, can you create an express API to serve the data? Since we're on topic, a React view to fetch and display the manifest would sure bring a smile to my face, can you do that too?

This purpose of this test is to help PointCare gauge your knowledge around out full-stack JavaScript development. The tasks touch on JavaScript, Node, HTTP, React, HTML, and CSS.

## The Stack

Batteries included full-stack configuration already present; your time is valuable and we'd hate to waste it on scaffolding.

The **front-end** is React running on top of [Next.js](https://github.com/zeit/next.js/). Don't worry about Next.js, you'll only be working with **pure react**.

The **back-end** is Express 4. Nothing special going here.

#### Specs

- Node v8.x
- Express v4.x
- React v16.x
- Next.js v4.x (knowledge not required)

#### Get Started

1. Install [NodeJS](https://nodejs.org) v8.6.x or greater

2. Run `npm install -g npm` to update NPM

3. Run `npm install` to install npm packages

4. Run `npm install -g nodemon` to install [nodemon](https://nodemon.io/)

5. Run `npm run dev` to run app in development mode

## Requirements

- [x] **Get manifest API**

  We need to serve the data to our React client; we'll use Express for that. The `./api` folder should have everything you need to make it work. Use `./api/manifest.json` as your data source.

  method: GET

  path: `/api/manifest`

  payload: JSON Array

- [ ] **Display manifest**

  Now that we have an API, let's do something with it. In React, fetch the manifest from the API and display it in a list or table element. For each car in the parking lot, I want to see the make, model, color, and when they entered.

  Your React entry point is the `./components/Body.js` file. When the app is running, goto `http://localhost:3000` to see it renderd.

- [ ] **Refresh manifest**

  Let's pretend that our manifest is always changing; that being said, we need to be able to pull in a new list on demand. Create a button on the page that will get & load a fresh manifest from your api.

- [ ] **Ford Pinto or Ferrari F60**

  Show us some style! Jazz up this manifest by adding some CSS.

- [ ] **Keep out the bad guys**

  We want to keep our users safe otherwise they will not trust us and our application. See if you can prevent a CSRF attack on your shiny new application. **Hint:** This can be accomplished without touching the client code.
