# UnoCSS + Astro + Vue error repro

1. Clone this repo
2. Run `pnpm i`
3. Run `pnpm dev` (will work)
4. Run `pnpm build` (will fail)

## Prerequisites

- Loading vue component with `client:only="vue"` from astro file
- Vue component has a `style` tag

## Error

```plaintext
PS D:\path\to\project> pnpm build

> unocss-error-with-astro-and-vue@1.0.0 build D:\path\to\project
> astro build

17:32:33 [build] output target: static
17:32:33 [build] Collecting build info...
17:32:33 [build] Completed in 418ms.
17:32:33 [build] Building static entrypoints...
17:32:34 [build] Completed in 1.12s.

 building client
rendering chunks (4)...[unocss:global:build:bundle] [unocss] does not found CSS placeholder in the generated chunks
This is likely an internal bug of unocss vite plugin
 error   [unocss] does not found CSS placeholder in the generated chunks
  This is likely an internal bug of unocss vite plugin
  File:
    D:\path\to\project\node_modules\.pnpm\@unocss+vite@0.47.3_vite@3.2.4\node_modules\@unocss\vite\dist\index.cjs:412:22
  Code:
      411 |             msg += "\nThis is likely an internal bug of unocss vite plugin";
    > 412 |           this.error(new Error(msg));
          |                      ^
      413 |         }
      414 |       }
      415 |     }

  Stacktrace:
Error: [unocss] does not found CSS placeholder in the generated chunks
This is likely an internal bug of unocss vite plugin
    at Object.generateBundle (D:\path\to\project\node_modules\.pnpm\@unocss+vite@0.47.3_vite@3.2.4\node_modules\@unocss\vite\dist\index.cjs:412:22)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Bundle.generate (file:///D:/path/to/project/node_modules/.pnpm/rollup@2.79.1/node_modules/rollup/dist/es/shared/rollup.js:15796:9)
    at async file:///D:/path/to/project/node_modules/.pnpm/rollup@2.79.1/node_modules/rollup/dist/es/shared/rollup.js:23795:27
    at async catchUnfinishedHookActions (file:///D:/path/to/project/node_modules/.pnpm/rollup@2.79.1/node_modules/rollup/dist/es/shared/rollup.js:23126:20)
    at async doBuild (file:///D:/path/to/project/node_modules/.pnpm/vite@3.2.4_@types+node@18.11.9/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:45409:22)
    at async Module.build (file:///D:/path/to/project/node_modules/.pnpm/vite@3.2.4_@types+node@18.11.9/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:45237:16)
    at async clientBuild (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/core/build/static-build.js:183:23)
    at async staticBuild (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/core/build/static-build.js:58:3)
    at async AstroBuilder.build (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/core/build/index.js:86:5)
    at async AstroBuilder.run (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/core/build/index.js:127:7)
    at async build (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/core/build/index.js:21:3)
    at async runCommand (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/cli/index.js:150:14)
    at async cli (file:///D:/path/to/project/node_modules/.pnpm/astro@1.6.11_@types+node@18.11.9/node_modules/astro/dist/cli/index.js:168:5)

ELIFECYCLE Command failed with exit code 1.
```

## License

Codes in this repo are licensed under the CC0.

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](https://creativecommons.org/publicdomain/zero/1.0/deed.en)
