import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { GRID_DATA } from '../models/search-grid-data';

@Injectable({
    providedIn: 'root'
})
export class FetchDataService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getSearchGridData(): Observable<any[]> {
        const searchGridData = of(GRID_DATA);
        return searchGridData;
    }

    // getSearchGridData(): Observable<any[]> {
    //     return this.http.get<any[]>('api.url')
    //         .pipe(
    //             catchError(this.handleError<any[]>('getHeroes', []))
    //         );
    // }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
}
