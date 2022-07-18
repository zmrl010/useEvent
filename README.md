<h1 align="center">@zmrl/use-event</h1>

<p align="center">
  A tiny package for creating referentially stable event handlers.
</p>

# Get Started

Install with your package manager of choice:

```shell
# npm
npm i @zmrl/use-event

# yarn
yarn add @zmrl/use-event

# pnpm
pnpm add @zmrl/use-event
```

Use it in your function components

```tsx
import useEvent from "@zmrl/use-event";

function App() {
  const stableFunction = useEvent(() => console.log("I am stable 🙂"));

  return <SomeMemoizedComponent doThing={stableFunction} />;
}
```

# Notes

This function is based on the upcoming react
[RFC](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md).
It isn't quite there yet but I need it right away.
