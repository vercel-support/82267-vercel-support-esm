This is a minimal repository for a problem we have with Vercel deployments.

## Steps to reproduce

```bash
# Clone this repository
git clone https://github.com/MilesCodeIt/vercel-support-esm

# Go into it and install NPM dependencies (using pnpm)
cd vercel-support-esm
pnpm install

# Now, build
pnpm build
```

Then deploy the build output on Vercel.

It will results in an error that looks like...

```console
Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension
```
