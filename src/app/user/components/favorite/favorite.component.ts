import { Component,OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice/dataservice.service';
import { InboxDatainterface } from '../../interfaces/inbox-datainterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{

  constructor(private dataService:DataserviceService){}
    favorateDatas:InboxDatainterface[]=[]
  ngOnInit(): void {
    this.dataService.getfavdata().subscribe((data)=>{
      this.favorateDatas=data
    })
  }

remove(singleData:InboxDatainterface){
  if(confirm("Are you sure to delete "+singleData.name)) {
    this.dataService.removeFav(singleData.id)
  } 
}
}
