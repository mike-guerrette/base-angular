# Angular Base Structure
- - -
## Quick Start
```shell
npm install
bower install
npm run less-compile
```
- - -

##Assets
SCSS ---> CSS

```
npm run less-compile
```

##Tests

#### Unit
```
npm test
```

#### E2E
```
BASE_URL="<application-root-url>" npm run e2e
```

#### Coverage & Complexity
- `coverage/karma/index.html` - unit test coverage report
- `coverage/plato/index.html` -  code complexity report
	- `npm run plato` (Runs automatically after `npm test`)