[![wakatime](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/cad5f67a-c3e3-4ea6-9a8e-91079e894ce9.svg)](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/cad5f67a-c3e3-4ea6-9a8e-91079e894ce9) [![E2E](https://github.com/ragaeeb/shrajhi-api-sdk/actions/workflows/e2e.yml/badge.svg)](https://github.com/ragaeeb/shrajhi-api-sdk/actions/workflows/e2e.yml) [![Node.js CI](https://github.com/ragaeeb/shrajhi-api-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/ragaeeb/shrajhi-api-sdk/actions/workflows/build.yml) ![GitHub License](https://img.shields.io/github/license/ragaeeb/shrajhi-api-sdk) ![GitHub Release](https://img.shields.io/github/v/release/ragaeeb/shrajhi-api-sdk) [![codecov](https://codecov.io/gh/ragaeeb/shrajhi-api-sdk/graph/badge.svg?token=Q9DN96MIXF)](https://codecov.io/gh/ragaeeb/shrajhi-api-sdk) [![Size](https://deno.bundlejs.com/badge?q=shrajhi-api-sdk@1.0.0)](https://bundlejs.com/?q=shrajhi-api-sdk%401.0.0) ![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=blue) ![npm](https://img.shields.io/npm/v/shrajhi-api-sdk) ![npm](https://img.shields.io/npm/dm/shrajhi-api-sdk) ![GitHub issues](https://img.shields.io/github/issues/ragaeeb/shrajhi-api-sdk) ![GitHub stars](https://img.shields.io/github/stars/ragaeeb/shrajhi-api-sdk?style=social)

# shrajhi-api-sdk

SDK to access `shrajhi.com.sa` APIs.

## Installation

To install shrajhi-api-sdk, use npm or yarn:

```bash
npm install shrajhi-api-sdk
# or
yarn add shrajhi-api-sdk
# or
pnpm i shrajhi-api-sdk
```

## Usage

### Importing the SDK

```javascript
import { getLessons } from 'shrajhi-api-sdk';
```

### Get Lessons Information

Retrieve metadata about a specific book.

```javascript
(async () => {
    try {
        const lessons = await getLessons({ limit: 2, page: 1 });
        console.log(lessons); // [{id: 1, body: 'B', title: 'Title', updatedAt: 1234566}]
    } catch (error) {
        console.error(error.message);
    }
})();
```
