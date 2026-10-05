import {test} from 'node:test';
import assert from 'node:assert/strict';
import {calculate,assessmentSchema,factorSchema,Factor} from '../lib/model';
const input=assessmentSchema.parse({feedstock:'Municipal waste',tonnes:100,country:'United Kingdom',moisture:20,characteristics:'Test only',pathway:'hydrogen'});
// Synthetic test fixture only. These coefficients are not shipped to the database.
const factor:Factor={name:'TEST ONLY',feedstock:input.feedstock,country:input.country,approved:true,currency:'GBP',source_id:'550e8400-e29b-41d4-a716-446655440000',min_tonnes:1,max_tonnes:1000,min_moisture:0,max_moisture:30,assumptions:'Synthetic test data; not an NZP model.',values:{syngas:10,hydrogen:2,co:3,syngas_price:1,hydrogen_price:4,co_price:5,gate_fee:6,opex_per_tonne:5,capex:10000,carbon_savings:1,uncertainty_percent:20}};
test('missing and unapproved factors never produce numbers',()=>{assert.equal(calculate(input,null).outputs,null);assert.equal(calculate(input,{...factor,approved:false}).outputs,null)});
test('country, feedstock and moisture envelope must match',()=>{for(const f of [{...factor,country:'France'},{...factor,feedstock:'Biomass'},{...factor,max_moisture:10},{...factor,max_tonnes:50}])assert.equal(calculate(input,f).outputs,null)});
test('revenue counts only selected pathway and ROI uses annual surplus',()=>{const r=calculate(input,factor);assert.equal(r.outputs?.revenue,1400);assert.equal(r.outputs?.roi,9);assert.equal(r.outputs?.carbon,100)});
test('invalid coefficients and negative feedstock quantities are rejected',()=>{assert.equal(factorSchema.safeParse({...factor,max_tonnes:-1}).success,false);assert.equal(assessmentSchema.safeParse({...input,tonnes:-1}).success,false)});
