# pets-n-pats

A web application that hosts an infinite 'would you rather' game with cute pets to pat.

To run the application for the first time:

```sh
git clone git@github.com:whai-2022/pets-n-pats.git
cd pets-n-pats

npm install

npm run dev
```

To build the optimised production build:

```sh
npm run build
# this creates a dist folder at the root of the project which is used to
# serve the client from the server's catch-all route

npm start
```

When making a pull request, BEFORE you push, ensure that tests pass and your linter is happy.

```sh
# ensure this passes
npm run lint

# ensure this passes
npm run test
```

Happy patting! 🐶😺

Happy patting!
