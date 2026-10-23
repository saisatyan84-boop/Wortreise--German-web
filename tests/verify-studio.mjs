import assert from 'node:assert/strict';
import {makeReviewDeck,remainingSeconds,searchCommands,homeDashboard} from '../dist/studio.js';

const source=Array.from({length:23},(_,id)=>({id}));
const snapshot=JSON.stringify(source);
const deck=makeReviewDeck(source,()=>0.3);
assert.equal(deck.length,10);
assert.equal(new Set(deck.map(item=>item.id)).size,10);
assert.equal(JSON.stringify(source),snapshot,'Review must not shuffle the course source in place');
assert.deepEqual(makeReviewDeck([]),[]);
assert.equal(makeReviewDeck(source.slice(0,2)).length,2);
assert.equal(makeReviewDeck(source,()=>0.3,1).length,1);

assert.equal(remainingSeconds({running:true,endsAt:1500},0),2);
assert.equal(remainingSeconds({running:true,endsAt:1500},1500),0);
assert.equal(remainingSeconds({running:true,endsAt:1500},2000),0);
assert.equal(remainingSeconds({running:false,remaining:42,endsAt:0},99999),42);
assert.ok(searchCommands('grün').some(item=>item.kind==='word'&&item.title==='grün'));
assert.ok(searchCommands('green').some(item=>item.title==='grün'));
assert.ok(searchCommands('model paper').some(item=>item.id==='exam-model'));
assert.ok(searchCommands('Vorfreude').some(item=>item.kind==='word'));
assert.deepEqual(searchCommands('no-such-german-phrase-xyz'),[]);

const initial=homeDashboard({progress:[],saved:[]});
assert.ok(initial.includes('0 of 12 lessons completed'));
assert.ok(initial.includes('data-lesson="hello"'));
const started=homeDashboard({progress:['hello'],saved:['grün']});
assert.ok(started.includes('1 of 12 lessons completed'));
assert.ok(started.includes('data-lesson="sounds"'));
assert.ok(!started.includes('undefined'));
console.log('PASS: finite and independent review decks, saved-deck boundaries, timer pause/expiry, word/tool search and real course-progress rendering.');
