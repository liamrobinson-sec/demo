// Test script using vulnerable dependencies for Dependabot testing

const lodash = require('lodash');
const moment = require('moment');
const serialize = require('serialize-javascript');

console.log('=== Dependabot Vulnerability Test ===\n');

// Example 1: Using lodash (CVE-2021-23337 - Prototype Pollution)
console.log('Testing lodash v4.17.20 (has prototype pollution vulnerability)...');
const obj = {};
const result = lodash.merge(obj, { '__proto__': { 'isAdmin': true } });
console.log('Lodash version:', lodash.VERSION);

// Example 2: Using moment (CVE-2022-24999 - ReDoS)
console.log('\nTesting moment v2.29.0 (has ReDoS vulnerability)...');
const now = moment();
console.log('Current time:', now.format('YYYY-MM-DD HH:mm:ss'));

// Example 3: Using serialize-javascript (CVE-2021-24291 - RCE)
console.log('\nTesting serialize-javascript v3.0.0 (has RCE vulnerability)...');
const data = { name: 'Test', value: 123 };
const serialized = serialize(data);
console.log('Serialized data:', serialized);

console.log('\n=== Test Complete ===');
console.log('If Dependabot is working correctly, it should flag these vulnerabilities.');
