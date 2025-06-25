# JEST

## Basic rules

1. Create a `__test__` folder in the same folder and name it `{component}.test.tsx`.
2. Try to reach a minimum 70% coverage.
3. Code structure

```js
import { render } from '@jest/render';

describe('ComponentName', () => {
  // If the file is a react component, render the component
  const tree = render(<Component />);

  // render all UI variants if any
  it('Render variants', () => {
    render(<Component prop1={ ... } />);
    render(<Component prop2={ ... } />);
  });

  it('Did something', ()=> {
    // do something
    // expect something, make sure the expectation is readable
  });
});
```

# Mock

### Mock Store

```js
import { mockStore } from "@jest/mockStore";

const { getState, updateState } = mockStore(myStore);

updateState((s) => s.doSomething(value));
```

### Mock Router

Router is mocked automatically, so just import it directly. If there's an error, update `src/jest/setup.ts`

```js
import { router } from "expo-router";

expect(router.push).toHaveBeenCalledWith(routeName);
```

### Mock Router Params

`// TODO: create jest function`

### Mock API

`// TODO: create jest function`

### Mock 3rd Party Library

`// TODO: create jest function`
