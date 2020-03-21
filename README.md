# react-learning-repository

for react learning in my company

## install

```
~$ git clone https://github.com/yoshida-san/react-learning-repository.git
~$ cd react-learning-repository
~$ npm i
```

## run (hot module reload)

```
~$ npm run start
```

## build

### normal build

```
~$ npm run build
```

### no source map build

```
~$ npm run build-no-maps
```

## test

```
~$ npm test
```

## pre-commit

The following command is executed at commit.

```
~$ npx prettier --write './src/**/*.js'
~$ npx prettier --write './__tests__/**/*.js'
~$ npx eslint --fix './src/**/*.js'
~$ npx eslint --fix './__tests__/**/*.js'
~$ npm test
```
