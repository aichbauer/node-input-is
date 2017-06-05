# input-is

[![Build Status](https://travis-ci.org/aichbauer/node-input-is.svg?branch=master)](https://travis-ci.org/aichbauer/node-input-is)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/node-input-is/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/node-input-is?branch=master)

> Simple input validation

## Why?

Almost any project needs a form validation.
This package simplifies your workflow.

## Installation

```sh
npm i -S input-is
```

or

```sh
yarn add input-is
```

## Usage

After installation you can import the package to your project and use a declarative way to validate your form inputs.
The return value is always a `boolean`, e.g. `true` or `false`.

Here is a litte example:

```js
import inputIs from 'input-is'; // const inputIs = require('input-is');

inputIs.email('hello'); // false
inputIs.email('example@mail.com'); // true
```

**Functions:**

- [date](#date)
- [datetime](#datetime)
- [email](#email)
- [exactly](#exactly)
- [filled](#filled)
- [float](#float)
- [integer](#integer)
- [max](#max)
- [min](#min)
- [not](#not)
- [number](#number)
- [partOf](#partOf)
- [phonenumber](#phonenumber)
- [time](#time)
- [url](#url)
- [valid](#valid)

### date

This function validates if a form input is a valid date

**return value:** boolean

```js
// valid formats:
// YYYY-MM-DD, MM-DD-YYYY,
// DD-MM-YYYY, YYYY/MM/DD,
// MM/DD/YYYY, DD/MM/YYYY,

inputIs.date('100/100/1000'); // false
inputIs.date('12/12/2017'); // true
```

### datetime

This function validates if a form input is a valid datetime

**return value:** boolean

```js
// valid formats:
// YYYY-MM-DD hh:mm:ss, YYYY-MM-DD hh:mm,
// MM-DD-YYYY hh:mm:ss, MM-DD-YYYY hh:mm,
// DD-MM-YYYY hh:mm:ss, DD-MM-YYYY hh:mm,
// YYYY/MM/DD hh:mm:ss, YYYY/MM/DD hh:mm,
// MM/DD/YYYY hh:mm:ss, MM/DD/YYYY hh:mm,
// DD/MM/YYYY hh:mm:ss, DD/MM/YYYY hh:mm,

inputIs.datetime('12/12/2017'); // false
inputIs.datetime('12/12/2017 12:12:12'); // true
```

### email

This function validates if a form input is a valid email

**return value:** boolean

```js
inputIs.email('example.mail.com'); // false
inputIs.email('example@mail.com'); // true
```

### exactly

This function validates if a form input is a exactly the same as a target

**return value:** boolean

```js
inputIs.exactly('this should be', 'exactly like this target'); // false
inputIs.exactly('exactly the same', 'exactly the same'); // true
```

### filled

This function validates if a form input is filled, e.g. the value is minimum one character long

**return value:** boolean

```js
inputIs.filled(''); // false
inputIs.filled('1'); // true
```

### float

This function validates if a form input is a valid float (not type number)

**return value:** boolean

```js
inputIs.float('1'); // false
inputIs.float('1.0'); // true
```

### integer

This function validates if a form input is a valid integer (not type number)

**return value:** boolean

```js
inputIs.integer('z'); // false
inputIs.integer('990'); // true
```

### max

This function validates if a form input is maximum the length of target

**return value:** boolean

```js
inputIs.max('value', 3); // false
inputIs.max('value', 5); // true
```

### min

This function validates if a form input is minimum the length of a target

**return value:** boolean

```js
inputIs.min('value', 6); // false
inputIs.('value', 3); // true
```

### not

This function validates if a form input is not like the target

**return value:** boolean

```js
inputIs.not('target', 'target'); // false
inputIs.not('value', 'target'); // true
```

### number

This function validates if a form input is a valid number (not type number)

**return value:** boolean

```js
inputIs.number('number'); // false
inputIs.number('1'); // true
```

### partOf

This function validates if a form input is part of a provided characterset

**return value:** boolean

```js
inputIs.partOf('z', 'part of ABC'); // false
inputIs.partOf('ABC', 'part of ABC'); // true
```

### phonenumber

This function validates if a form input is a valid phonenumber

**return value:** boolean

```js
inputIs.phonenumber('+12'); // false
inputIs.phonenumber('+1234567890'); // true
```

### time

This function validates if a form input is a valid time

**return value:** boolean

```js
inputIs.time('01:'); // false
inputIs.time('01:01'); // true
```

### url

This function validates if a form input is a valid url

**return value:** boolean

```js
inputIs.url('google.'); // false
inputIs.url('https://www.google.com'); // true
```

### valid

This function validates form input to a regular expression

**return value:** boolean

```js
inputIs.valid('google', /.at/); // false
inputIs.valid('hat', /.at/); // true
```

## LICENSE

MIT © Lukas Aichbauer
