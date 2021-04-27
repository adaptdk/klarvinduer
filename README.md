
# Klarvinduer Ecommerce Storefront

This is a frontend written in Next.js and based on the official Vercel commerce boilerplate for Bigcommerce. 


## URL's

[Production](https://kv-prod.vercel.app/)  
[Staging](https://kv-staging.vercel.app/)
[Develop](https://kv-develop.vercel.app/)

  
## Tech Stack

**Client:** Next.js, TypeScript, Redux Toolkit, TailwindCSS

**Tests:** Jest and React Testing Library

**Server:** Node

  
## Installation 

Install Klarvinduer for development

```bash 
  $ git clone git@github.com:christofferberg/klarvinduer.git
  $ cd klarvinduer
  $ npm install
  $ git checkout develop
  $ vercel env pull
```


## Environment Variables

**Requirement:**  You need to be a part of the Adapt Vercel team

To run this project, you will need to add environment variables to your .env file  
This can be done by running `vercel env pull` on the `develop` branch. 

  
## Deployment

This project is automatically deployed to Vercel by pushing to certain git branches, and by making pull requests. 

`main` is automatically pushed to [production](https://kv-prod.vercel.app/)  
`staging` is automatically pushed to [staging](https://kv-staging.vercel.app/)  
`develop` is automatically pushed to [develop](https://kv-develop.vercel.app/)

**pull requests** are automatically deployed to their own isolated environment.   
Please login to the [Vercel Dashboard](https://vercel.com/dashboard) to see the URL's. 


Further documentation:  
[https://vercel.com/docs/platform/deployments](https://vercel.com/docs/platform/deployments)
  

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

  
## Contact

Christoffer Berg (Lead frontend)  
[christoffer.berg@adaptagency.com](https://www.github.com/christofferberg)


Casper Engelmann (Frontend developer)  
[casper.engelmann@adaptagency.com](https://www.github.com/casperengl)
  
