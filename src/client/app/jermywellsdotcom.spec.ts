import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {JermyWellsDotComApp} from '../app/jermywellsdotcom';

beforeEachProviders(() => [JermyWellsDotComApp]);

describe('App: Jermywellsdotcom', () => {
	it('should have the `defaultMeaning` as 42', inject([JermyWellsDotComApp], (app: JermyWellsDotComApp) => {
    	// expect(app.defaultMeaning).toBe(42);
  	}));

  describe('#meaningOfLife', () => {
  	it('should get the meaning of life', inject([JermyWellsDotComApp], (app: JermyWellsDotComApp) => {
      // expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      // expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

