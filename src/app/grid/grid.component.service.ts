import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieVM } from './grid.component.vm';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GridComponentService {

    public baseURL = 'assets/movies.json';
    constructor(private http: HttpClient) {
    }
    public getGridData(): Observable<MovieVM[]> {
        return this.http.get<MovieVM[]>(this.baseURL);
    }
}