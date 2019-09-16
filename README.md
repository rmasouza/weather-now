# **Weather Now**

## **How to run** 

Before trying to execute this project, firs rename exemple.env file to .env.

After that, to install and run simple execute

```bash
 yarn --production=false
yarn start

#or 
 
npm install
npm start
```

to run the test execute

```bash
yarn test

#or 
 
npm run test
```

This app is also avaliable at [weathernow.romulomessias.dev/](https://weathernow.romulomessias.dev/)

## **What I used**

### React

I use react in my current job (and the last one too), so choose react was natural for me. I feel comfortable building web app with this lib.

### Typescript

With typescript I have better code suggestion and autocomplete. It's easier to know what a function return as result (if any) and the type system help me find bugs before shipping the app for production.

### SASS

Nothing special here, another tool I use um my current job. Here i tried to use [RSCSS](https://willianjusten.com.br/falando-sobre-rscss/) to organize my stylesheet.

### Jest

I Choosed Jest because is the library recommended for facebook to testing React components. I have been studying this library recentely. I also used Enzyme alongside Jest to accesss react props, for example, during test.

## **Folder Scructure**

```bash
project
└─── src
    └─── assets
    └─── components
    └─── models
    └─── pages
    └─── styles
└─── test
```

- src 

    Root folder of all my source code, in this folder there is the entry point of the app as well.

- assets

    Here there is the template html used to hosting the react app. Here there is also the icones used in app manifest and the favico.

- components

    All the ui pieces that compose a page is here, I like to organize all components by domain. Domain free componentes I tend to put in **common** folder. Other costume I have is to keep together compoments and their respective styles and test. So for every component there is also a .scss file with its styles and spec.ts file for testing.

- models

    Definition for objects I use in this project. Usually, this definitions are API responses.

- pages

    All pages that the aplication have. Here a page is basically a container fot a components of a domain I considered.

- styles

    Common styles, mixins and sass variables.

- test 

    Here I put files to configure Jest.