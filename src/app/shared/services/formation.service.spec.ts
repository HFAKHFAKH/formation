import { Subscription } from 'rxjs/Subscription';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { FormationService } from './formation.service';



describe('FormationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FormationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should construst', inject([FormationService, MockBackend], (service, mockBackend) => {
    expect(service).toBeDefined();
  }));

  it('should be created', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));

  describe('fetch', () => {
    const mockResponse = [{
      title: 'title1',
      description: 'description'
    }];

    it('should parse response', async(inject(
      [FormationService, MockBackend], (service, mockBackend) => {

        mockBackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
        });

        const result = service.fetch();

        result.subscribe(res => {
          expect(res).toEqual([{
            title: 'title',
            description: 'description'
          }]);
        });
      })));
  });


  it('should be save formation', inject([FormationService], (service: FormationService) => {
    expect(service.fetch()).toBeTruthy();
  }));

  it('should be find formation', inject([FormationService], (service: FormationService) => {
    expect(service.fetch()).toBeTruthy();
  }));

  it('should be remove formation', inject([FormationService], (service: FormationService) => {
    expect(service.fetch()).toBeTruthy();
  }));

  it('should be edit formation', inject([FormationService], (service: FormationService) => {
    expect(service.fetch()).toBeTruthy();
  }));

});
