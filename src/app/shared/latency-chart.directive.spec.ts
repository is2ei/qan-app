/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { LatencyChartDirective } from './latency-chart.directive';

describe('LatencyChartDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef('<div></div>');
    const directive = new LatencyChartDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('should create an instance', () => {
    const elementRef = new ElementRef('<div></div>');
    const directive = new LatencyChartDirective(elementRef);
    const spy = spyOn(directive, 'drawChart');
    directive.appLatencyChart = null;
    expect(spy).not.toHaveBeenCalled();
  });
});
