import test from 'ava';

import inputIs from './index';

const inputIs2 = require('./index');

test('check if require works w/o default', (t) => {
  t.is(inputIs2.email('lukas'), false);
});

test('check if the input is a valid date format', (t) => {
  t.is(inputIs.date('date'), false);
  t.is(inputIs.date('2017', 'YYYY'), false);
  t.is(inputIs.date('2017-12', 'YYYY-MM'), false);
  t.is(inputIs.date('2017-12-100', 'YYYY-MM-DD'), false);
  t.is(inputIs.date('2017-02-30', 'YYYY-MM-DD'), false);
  t.is(inputIs.date('2017-12-10', 'YYYY-MM-DD'), true);
  t.is(inputIs.date('2017-12-12', 'YYYY-DD-MM'), true);
  t.is(inputIs.date('12-13-2017', 'MM-DD-YYYY'), true);
  t.is(inputIs.date('13-12-2017', 'DD-MM-YYYY'), true);
  t.is(inputIs.date('2017/12/10', 'YYYY/MM/DD'), true);
  t.is(inputIs.date('2017/12/12', 'YYYY/DD/MM'), true);
  t.is(inputIs.date('12/13/2017', 'MM/DD/YYYY'), true);
  t.is(inputIs.date('13/12/2017', 'DD/MM/YYYY'), true);
});

test('check if the input is a valid datetime format', (t) => {
  t.is(inputIs.datetime('date'), false);
  t.is(inputIs.datetime('2017-12-12 12', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12 12:', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12 12:100', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12 12:12', 'YYYY-MM-DD'), true);
  t.is(inputIs.datetime('2017-12-12 12:12:12', 'YYYY-MM-DD'), true);
  t.is(inputIs.datetime('12-13-2017 12:12', 'MM-DD-YYYY'), true);
  t.is(inputIs.datetime('12-13-2017 12:12:12', 'MM-DD-YYYY'), true);
  t.is(inputIs.datetime('13-12-2017 12:12', 'DD-MM-YYYY'), true);
  t.is(inputIs.datetime('13-12-2017 12:12:12', 'DD-MM-YYYY'), true);
  t.is(inputIs.datetime('2017/12/12 12:12', 'YYYY/MM/DD'), true);
  t.is(inputIs.datetime('2017/12/12 12:12:12', 'YYYY/MM/DD'), true);
  t.is(inputIs.datetime('12/13/2017 12:12', 'MM/DD/YYYY'), true);
  t.is(inputIs.datetime('12/13/2017 12:12:12', 'MM/DD/YYYY'), true);
  t.is(inputIs.datetime('13/12/2017 12:12', 'DD/MM/YYYY'), true);
  t.is(inputIs.datetime('13/12/2017 12:12:12', 'DD/MM/YYYY'), true);
  t.is(inputIs.datetime('2017-12-12T12', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12T12:', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12T12:100', 'YYYY-MM-DD'), false);
  t.is(inputIs.datetime('2017-12-12T12:12', 'YYYY-MM-DD'), true);
  t.is(inputIs.datetime('2017-12-12T12:12:12', 'YYYY-MM-DD'), true);
  t.is(inputIs.datetime('12-13-2017T12:12', 'MM-DD-YYYY'), true);
  t.is(inputIs.datetime('12-13-2017T12:12:12', 'MM-DD-YYYY'), true);
  t.is(inputIs.datetime('13-12-2017T12:12', 'DD-MM-YYYY'), true);
  t.is(inputIs.datetime('13-12-2017T12:12:12', 'DD-MM-YYYY'), true);
  t.is(inputIs.datetime('2017/12/12T12:12', 'YYYY/MM/DD'), true);
  t.is(inputIs.datetime('2017/12/12T12:12:12', 'YYYY/MM/DD'), true);
  t.is(inputIs.datetime('12/13/2017T12:12', 'MM/DD/YYYY'), true);
  t.is(inputIs.datetime('12/13/2017T12:12:12', 'MM/DD/YYYY'), true);
  t.is(inputIs.datetime('13/12/2017T12:12', 'DD/MM/YYYY'), true);
  t.is(inputIs.datetime('13/12/2017T12:12:12', 'DD/MM/YYYY'), true);
});

test('check if the input is a valid email', (t) => {
  t.is(inputIs.email('email.at'), false);
  t.is(inputIs.email('example@email.at'), true);
});

test('check if the input is exactly the target', (t) => {
  t.is(inputIs.exactly('input', 'target'), false);
  t.is(inputIs.exactly('target', 'target'), true);
});

test('check if the input is filled', (t) => {
  t.is(inputIs.filled(''), false);
  t.is(inputIs.filled('1'), true);
});

test('check if the input is a valid float format (not type number)', (t) => {
  t.is(inputIs.float('1'), false);
  t.is(inputIs.float('1.0'), true);
});

test('check if the input is a valid integer format (not type number)', (t) => {
  t.is(inputIs.integer('1.1'), false);
  t.is(inputIs.integer('1'), true);
});

test('check if the input is maximum the length of the target', (t) => {
  t.is(inputIs.max('value', 3), false);
  t.is(inputIs.max('value', 5), true);
});

test('check if the input is at least the length of the target', (t) => {
  t.is(inputIs.min('value', 6), false);
  t.is(inputIs.min('value', 5), true);
});

test('check if the input is NOT the target', (t) => {
  t.is(inputIs.not('value', 'value'), false);
  t.is(inputIs.not('value', 'target'), true);
});

test('check if the input is a number', (t) => {
  t.is(inputIs.number('value'), false);
  t.is(inputIs.number('1'), true);
});

test('check if the input is part of a provided character set', (t) => {
  t.is(inputIs.partOf('z', 'part of ABC'), false);
  t.is(inputIs.partOf('ABC', 'part of ABC'), true);
});

test('check if the input is a valid phonenumber format', (t) => {
  t.is(inputIs.phonenumber('phonenumber'), false);
  t.is(inputIs.phonenumber('+1234567890'), true);
});

test('check if the input is a valid time format', (t) => {
  t.is(inputIs.time('time'), false);
  t.is(inputIs.time('12:12'), true);
});

test('check if the input is a valid url format', (t) => {
  t.is(inputIs.url('url.at'), false);
  t.is(inputIs.url('https://www.google.com'), true);
});

test('check if the input fits a regular expression', (t) => {
  t.is(inputIs.valid('google', /.at/), false);
  t.is(inputIs.valid('hat', /.at/), true);
});
