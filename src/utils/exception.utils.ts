import { Observable, of } from 'rxjs';

export function throwCatchError<T>(e: unknown, caught: Observable<T>, callback?: () => void): Observable<T> {
    if (callback) {
        callback();
    }
    return of(e as T);
}
