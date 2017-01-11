'use strict';

var test = require('tape');
var validator = require('./validator.js');

test('validator accepts valid email, a scale of 15 and positive feedback', function (t) {
  t.equal(validator('ineffable mirthful outstanding', 15, 'alma@alma.hu'), true);
  t.end();
});

test('validator rejects unfilled email, a scale of 15 and positive feedback', function (t) {
  t.equal(validator('ineffable mirthful outstanding', 15, ''), false);
  t.end();
});

test('validator rejects valid email, a scale of 9 and positive feedback', function (t) {
  t.equal(validator('ineffable mirthful outstanding', 9, 'alma@alma.hu'), false);
  t.end();
});

test('validator rejects valid email, a scale of -10 and positive feedback', function (t) {
  t.equal(validator('ineffable mirthful outstanding', -10, 'alma@alma.hu'), false);
  t.end();
});

test('validator accepts valid email, a scale of string "15" and positive feedback', function (t) {
  t.equal(validator('ineffable mirthful outstanding', '15', 'alma@alma.hu'), true);
  t.end();
});

test('validator accepts valid email, a scale of 10 and positive feedback with commas', function (t) {
  t.equal(validator('ineffable, mirthful, outstanding', 10, 'alma@alma.hu'), true);
  t.end();
});

test('validator rejects valid email, a scale of 10 and 2 positive feedbacks', function (t) {
  t.equal(validator('ineffable, mirthful, ou-----ng', 10, 'alma@alma.hu'), false);
  t.end();
});
