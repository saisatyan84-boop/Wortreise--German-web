import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {sectionIds,sectionForHash} from '../dist/navigation.js';
for(const id of sectionIds){assert.equal(sectionForHash(id),id);assert.equal(sectionForHash('#'+id),id);}
assert.equal(sectionForHash('exam-model'),'exam');assert.equal(sectionForHash('infinite'),'practice');assert.equal(sectionForHash('bad-link'),'home');
const app=readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
assert.ok(!app.includes('appendPractice')&&!app.includes('IntersectionObserver')&&!app.includes('endless-cards')&&!app.includes('href="#infinite"'));
assert.ok(app.includes('section.hidden=section.id!==active'));
assert.ok(app.includes('aria-current'));
assert.ok(!app.includes('history.replaceState'), 'Section links must trigger hash routing and preserve browser history');
console.log('PASS: isolated navigation routes, model-paper deep link, legacy link fallback, hidden inactive sections and removed infinite-feed generation.');
