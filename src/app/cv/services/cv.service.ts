import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API } from 'src/app/config/api.const';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[];
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        '1234',
        40,
        'trainer',
        'rotating_card_profile.png'
      ),
      new Cv(
        2,
        'sellaouti',
        'skander',
        '7777',
        4,
        'student',
        'rotating_card_profile2.png'
      ),
      new Cv(3, 'test', 'tes', '7777', 4, 'student', ''),
      new Cv(4, 'test', 'tes', '7777', 4, 'student', '                    '),
    ];
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }
  deleteCvById(id: number): Observable<any> {
    // const params = new HttpParams().set('access_token', localStorage.getItem('token') ?? '');
      return this.http.delete<any>(API.cv + id);
  }

  addCv(cv: Cv):Observable<Cv> {
    return this.http.post<Cv>(API.cv, cv);
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
