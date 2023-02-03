import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  GetAvatar } from '../models/avatar.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {

  constructor(private http: HttpClient) {}

  getAvatar() {
    return this.http.get<GetAvatar>(`${environment.baseURL}`);
  }

  deleteAvatar(id: number) {
    return this.http.delete(`${environment.baseURL}/delete/${id}`);
  }

  getAvatarById(id: number) {
    return this.http.get(`${environment.baseURL}/${id}`);
  }

}
