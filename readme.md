### How to publish

- Rename the package name in [package.json](./package.json)
- Create a git in the library
- Login npm in CLI
- Run `npm version patch` to increment version number
- Publish to [shawtickets](https://www.npmjs.com/settings/shawtickets/packages)

```bash
npm login
git commit -m ""
npm version patch
npm publish --access public
```

### Set up typescript

We write typescript but publish javasript to NPM after transpire.

```bash
tsc --init
npm install typescript del-cli --save-dev

npm install express \
  express-validator \
  cookie-session \
  jsonwebtoken \
  http-status-codes \
  @types/cookie-session \
  @types/express \
  @types/jsonwebtoken
```

### Patch

The steps can be condensed into "pub" script in [package.json](./package.json).

```bash
git add .
git commit -m "Some message"
npm version patch
npm run build
npm publish
```
