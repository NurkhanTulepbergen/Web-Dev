import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IAlbum } from './album';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
  private URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<IAlbum[]> {
    return from(fetch(this.URL_ALBUMS).then((response) => response.json()));
    // return this.a
  }

  getAlbumById(albumId: number): Observable<IAlbum> {
    return from(
      fetch(`${this.URL_ALBUMS}/${albumId}`).then((response) => response.json())
    );
  }

  getPhotos(albumId: number) {
    return this.http.get(this.URL_PHOTOS + `?albumId=${albumId}`);
  }

  deleteAlbum(id: number) {
    return fetch(`${this.URL_ALBUMS}/${id}`, {
      method: 'DELETE',
    });
  }

  updateAlbum(album: IAlbum): Observable<IAlbum> {
    return from(
      fetch(`${this.URL_ALBUMS}/${album.id}`, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
    );
  }
}
