# BURGERS

## Getting Started

Author: Victor Corrêa Pereira

Needed minimum Node Version: v18.16.0

First of all install de dependencies:

```bash
npm install
```

---

Now run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

To run the production optimized version, first run:

```bash
npm run build
```

---

After that, you can run the production like server version:

```bash
npm run start
```

### Considerations

The choice of using Next.js for this project was made to optimize the Restaurant SEO and initial page loading. From the server side we get all the Restaurant main information and get ready to show this content in the user's browser(for better performance we could save this info in timed cache do prevent database unnecessary requests).

For now we are getting the menu data throw a request from the client side but of course this can be optimized too... save in a server cache to load faster. In this specific case I only did that way to have an example of the different approaches that we can strategically load data from Next.

### Test

2 test examples are available (one for a component and other to a function):

- generateUniqueId (/utils)
- Cart (/components/Cart)

To run the test:

```bash
npm run test
```
