# @indlekofer/once

## Usage

```js
import once from '@indlekofer/once';

var doOnce = once(() => {
  console.log('yes');
});

doOnce() //-> 'yes'
doOnce() //-> nothing
```
