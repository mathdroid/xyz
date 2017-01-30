# XYZ

> Simple, JSON-based blog engine using Next.js

# Usage

```sh
git clone https://github.com/mathdroid/xyz
cd xyz
# Edit xyz.json and posts.json
yarn install # npm install
yarn run dev
```

# Migrating from Ghost

1. Export your Ghost Blog data from `Settings > Labs > Export`
2. Open the exported json, navigate to `posts` array
3. Copy and paste (or cherry pick the content) from `posts` array to `posts.json`
4. Modify `xyz.json`
5. Deploy

# License

MIT
