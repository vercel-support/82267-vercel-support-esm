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

Even when adding `"type": "module"` in `package.json` and deploy, it doesn't change anything.

Deployment: <https://vercel-support-kkj37w5uc-milescode.vercel.app/>

## Log

```console

[GET] /api
09:05:11:10
2022-05-25T07:05:11.371Z	undefined	ERROR	(node:10) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
2022-05-25T07:05:11.372Z	undefined	ERROR	/var/task/index.js:1
import http from 'http';
^^^^^^
SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1032:15)
    at Module._compile (node:internal/modules/cjs/loader:1067:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:161:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
RequestId: 805e1f25-7b5c-4b17-b667-7b32c4c4cf3f Error: Runtime exited with error: exit status 1
Runtime.ExitError

```