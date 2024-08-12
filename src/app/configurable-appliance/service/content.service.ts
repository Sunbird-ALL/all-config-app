import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from 'src/config/url.config.json';
import { environment } from 'src/environments/environment';



@Injectable()
export class ContentService {
    port = environment.devPort;
   constructor(private http: HttpClient) { }
  
   getApiHost(env: string) {

    if(env === 'dev'){
       this.port = environment.devPort;
    }else if(env === 'prod'){
       this.port = environment.prodPort;
    }
    return true;
  }
  getStoriesList(): Observable<Object> {
    return this.http.get(this.port +config.URLS.GET_STORIES_URL)
  }

  getWordSentenceList(page,limit): Observable<Object> {
    return this.http.get(this.port +`${config.URLS.GET_WORD_SENTENCE_LIST}?page=${page}&limit=${limit}`)
  }

  addMoreStory(body: any): Observable<any> {
    return this.http.post(this.port +config.URLS.GET_STORIES_URL,body)
  }

  deleteCollection(body: any): Observable<any> {
    return this.http.delete(this.port +config.URLS.DELETE_COLLECTION_URL+'/'+body)
  }

  deleteWordAndSentence(body: any): Observable<any> {
    return this.http.delete(this.port +config.URLS.DELETE_WORD_SENTENCE_URL+'/'+body)
  }

  addMoreWords(body: any): Observable<any> {
    return this.http.post(this.port +config.URLS.CREAT_WORD_SENTENCE_URL,body)
  }
  editStory(body: any,id): Observable<any> {
    return this.http.put(this.port +config.URLS.EDIT_STORY_URL+ `/${id}`,body)
  }
  editMoreWords(body: any,id): Observable<any> {
    return this.http.put(this.port +config.URLS.CREAT_WORD_SENTENCE_URL+ `/${id}`,body)
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
  getVirtualID(userName,password) : Observable <any> {
    return this.http.post(environment.ANGULAR_APP_LEARNER_AI_APP_HOST +config.URLS.GET_VIRTUAL_ID + `?username=${userName}`,null)
  }
  searchTarget(userId,language) : Observable <any> {
    return this.http.get(this.port +config.URLS.GET_TARGETS + `/${userId}`+`?language=${language}`)
  }
  searchFamiliarty(userId,language) : Observable <any> {
    return this.http.get(this.port +config.URLS.GET_FAMILIARITY + `/${userId}`+`?language=${language}`)
  }
}
