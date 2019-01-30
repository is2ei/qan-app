export class QueryParamsModel {
  from: string;
  to: string;
  'var-host': string;
  search: string;
  queryID: string;
  type: string;
  tz: string;
  theme: string;
  first_seen: boolean;
  filters: string;

  constructor(urlParams = {}) {
    this.from = urlParams['from'] || '';
    this.to = urlParams['to'] || '';
    this['var-host'] = urlParams['var-host'] || '';
    this.search = urlParams['search'] || '';
    this.queryID = urlParams['queryID'] || '';
    this.type = urlParams['theme'] || '';
    this.tz = urlParams['tz'] || '';
    this.theme = urlParams['theme'] || '';
    this.first_seen = urlParams['first_seen'] || '';
    this.filters = urlParams['filters'] || '';
  }
}