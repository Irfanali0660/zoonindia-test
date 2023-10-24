import { Injectable } from '@angular/core';
import { InboxDatainterface } from '../../interfaces/inbox-datainterface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }


  Datas:InboxDatainterface[]=[
    {
      id:1,
      name:"Amazon",
      about:'1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time:'2023-07-08T08:28:03.090+00:00',
      status:false
    },
    {
      id:2,
      name:"Flipkart",
      about:'2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time:'2023-05-28T08:28:03.090+00:00',
      status:false
    },
    {
      id:3,
      name:"Microsoft",
      about:'3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time:'2023-09-08T08:28:03.090+00:00',
      status:false
    },
    {
      id:4,
      name:"Apple",
      about:'4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time:'2023-10-08T08:28:03.090+00:00',
      status:false
    },
    {
      id:5,
      name:"Facebook",
      about:'5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      time:'2023-10-18T08:28:03.090+00:00',
      status:false
    }
  ]

  favoriteData:InboxDatainterface[]=[  ]

  private dataArraySubject = new BehaviorSubject<InboxDatainterface[]>(this.Datas);
  private favoriteDataSubject = new BehaviorSubject<InboxDatainterface[]>(this.favoriteData);


  getDatas():Observable<InboxDatainterface[]>{
    return this.dataArraySubject.asObservable()
  }

  Updatestatus(id:number):void{
    this.Datas.map((item)=>{
      if(item.id==id){
       item.status=true
      }
    })
  }
  deleteItem(data:InboxDatainterface):string{
    this.Datas=this.Datas.filter((item)=>item.id!=data.id)
    this.dataArraySubject.next(this.Datas)
    return `${data.name} deleted successfully`
  }

  getfavdata(){
    return this.favoriteDataSubject.asObservable()
  }

  Addtofav(favData:InboxDatainterface):string{
    this.favoriteData.push(favData)
    return `${favData.name} added to favorites`
  }

  removeFav(id:number){
    this.favoriteData=this.favoriteData.filter((item)=>item.id!=id)
    this.favoriteDataSubject.next(this.favoriteData)
  }
}
