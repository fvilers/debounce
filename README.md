# @fvilers/debounce

A TypeScript friendly function debouncer

## Installation

```
npm install @fvilers/debounce
```

or

```
yarn add @fvilers/debounce
```

## Usage

```ts
import { debounce } from "@fvilers/debounce";

function doWork(id: number) {
  console.log("Working on", id);
}

const debounced = debounce(doWork, 1000);

debounced(1);
debounced(2);
debounced(3);
debounced(4);
```

It will output (after approximately 1000 ms):

```
Working on 4
```
