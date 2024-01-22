import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from 'src/config/url.config.json';
import { environment } from 'src/environments/environment';



@Injectable()
export class ContentService {
    
   constructor(private http: HttpClient) { }


  getStoriesList(): Observable<Object> {
    return this.http.get(environment.port +config.URLS.GET_STORIES_URL)
  }

  getWordSentenceList(): Observable<Object> {
    return this.http.get(environment.port +config.URLS.GET_WORD_SENTENCE_LIST)
  }

  addMoreStory(body: any): Observable<any> {
    return this.http.post(environment.port +config.URLS.GET_STORIES_URL,body)
  }

  deleteCollection(body: any): Observable<any> {
    return this.http.delete(environment.port +config.URLS.DELETE_COLLECTION_URL+'/'+body)
  }

  deleteWordAndSentence(body: any): Observable<any> {
    return this.http.delete(environment.port +config.URLS.DELETE_WORD_SENTENCE_URL+'/'+body)
  }

  addMoreWords(body: any): Observable<any> {
    return this.http.post(environment.port +config.URLS.CREAT_WORD_SENTENCE_URL,body)
  }
  editStory(body: any,id): Observable<any> {
    return this.http.put(environment.port +config.URLS.EDIT_STORY_URL+ `/${id}`,body)
  }
  editMoreWords(body: any,id): Observable<any> {
    return this.http.put(environment.port +config.URLS.CREAT_WORD_SENTENCE_URL+ `/${id}`,body)
  }

  getAuthoringConfig(): Observable<any> {
    return this.http.get(environment.configPort +config.URLS.GET_AUTHORING_CONFIG)
  }

  createAuthoringConfig(data) : Observable<any> {
    return this.http.post(environment.configPort +config.URLS.CREATE_AUTHORING_CONFIG,data)
  }
  editAuthoringConfig(data,id) : Observable<any> {
    return this.http.put(environment.configPort +config.URLS.EDIT_AUTHORING_CONFIG+ `/${id}`,data)
  }
  getConfigById(data,id) : Observable <any> {
    return this.http.get(environment.configPort +config.URLS.GET_AUTHORING_CONFIG + `/${id}`,data)
  }
  
}
