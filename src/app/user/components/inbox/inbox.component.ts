import { Component,OnInit ,OnChanges} from '@angular/core';
import { DataserviceService } from '../../services/dataservice/dataservice.service';
import { InboxDatainterface } from '../../interfaces/inbox-datainterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit{

  constructor(private dataService:DataserviceService){
    this.dataService.getDatas().subscribe((data)=>{
      this.inboxDatas=data
    })
    // console.log(this.inboxDatas);
    // this.singleData=this.inboxDatas[0]
  }
  inboxDatas:InboxDatainterface[] = []
  singleData!:InboxDatainterface
  searchData:string=''
  unreadCount:number=0
  ngOnInit(): void {
    this.inboxDatas.forEach((item)=>{
      if(!item.status){
        this.unreadCount++
      }
    }) 
  }

  sendData(data:InboxDatainterface){
    this.singleData=data 
    if(!data.status && this.unreadCount>0){
      this.unreadCount--
    }
    this.dataService.Updatestatus(data.id)
  }
}
