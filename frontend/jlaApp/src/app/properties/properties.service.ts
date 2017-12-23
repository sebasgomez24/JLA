import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'https://api.simplyrets.com/properties' //'assets/json/properties.json'
// const headers = new HttpHeaders().set('Authorization', token);

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable()
export class PropertyService {

  constructor(private http:Http) { }

  list(){
      return this.http.get(endpoint)
              .map(response=>response.json())
              .catch(this.handleError)
  }
  get(slug){
      return this.http.get(endpoint)
              .map(response=>{
                     let data = response.json().filter(item=>{
                                      if (item.slug == slug) {
                                          return item
                                      }
                                  })
                     if (data.length == 1){
                         return data[0]
                     }
                     return {}
               })
              .catch(this.handleError)
  }

  search(query){
    return this.http.get(endpoint)
              .map(response=>{
                     let data = []
                     let req = response.json().filter(item=>{
                                    if (item.name.indexOf(query) >=0) {
                                         data.push(item)
                                    }
                                })
                     
                     return data
               })
              .catch(this.handleError)

  }

  private handleError(error:any, caught:any): any{
      console.log(error, caught)
  }

}
