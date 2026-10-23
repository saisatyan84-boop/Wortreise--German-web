import assert from 'node:assert/strict';
import {inputVelocity,advanceBody,bodyIsMoving,pageEphemera} from '../dist/desk-motion.js';
assert.ok(inputVelocity(20,10)>inputVelocity(20,100),'Faster movement must produce a stronger impulse');
assert.equal(inputVelocity(-99999,1),-2200);
assert.equal(inputVelocity(99999,1),2200);
assert.equal(inputVelocity(0,16),0);
const resting={x:0,y:0,angle:0,vx:0,vy:0,spin:0};
assert.deepEqual(advanceBody(resting,1/60),resting);
assert.equal(bodyIsMoving(resting),false);
let body={...resting,vx:340,vy:-230,spin:170};
for(let n=0;n<600;n++){body=advanceBody(body,1/60);assert.ok(Math.abs(body.x)<=65&&Math.abs(body.y)<=45&&Math.abs(body.angle)<=30);assert.ok(Object.values(body).every(Number.isFinite));}
assert.equal(bodyIsMoving(body),false,'Stationery must settle after the input stops');
const oneStep=advanceBody({...resting,vx:10000,vy:10000,spin:10000},5,{x:19,y:22,angle:20});
assert.ok(Math.abs(oneStep.x)<=19&&Math.abs(oneStep.y)<=22&&Math.abs(oneStep.angle)<=20,'A stalled frame must not fling stationery out of its bounds');
for(const id of ['home','learn','exam','sounds','practice','translate','captions'])assert.ok(pageEphemera(id).includes('page-crumple'));
console.log('PASS: speed-sensitive input, capped impulses, bounded motion, settling to rest, stalled-frame handling and paper decorations in every book.');
