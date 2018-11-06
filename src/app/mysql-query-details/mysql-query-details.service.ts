import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MySQLQueryDetailsService {

    constructor(private httpClient: HttpClient) { }

    updateTables(queryID: string, dbTables: Array<{}>) {
        const url = `/qan-api/queries/${queryID}/tables`;
        return this.httpClient
            .put(url, dbTables)
            .toPromise()
            .then(resp => console.log(resp));
    }
}
