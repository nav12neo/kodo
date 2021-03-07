import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private http: HttpClient) {
   }

  public getJSON(params: any): Observable<any> {
    console.log(params);
    const search = params && params.search;
    const sort = params && params.sort;
    return this.http.get("./assets/mydata.json").pipe(
      map (data => {
        if (search) {
          let res = (data as any).filter(function(value, index, arr){
            return value.name.toLowerCase().includes(params.search.toLowerCase());
          });
          return res;
        } else {
          return data;
        }
      }),
      map((data) => {
        const direction = sort.split(":")[1];
        const field = sort.split(":")[0];
        let sortVal = -1;
        const sortedData = data.sort((a, b) => {
          if(direction === "desc") {
            sortVal = 1;
          }
          if (a[field] > b[field]) {
            return sortVal;
          } else {
            if (b[field] > a[field]) {
              return -sortVal;
            }
            return 0;
          }
        })
        return sortedData;
      }),
      delay(1000)
    );
  }
}
