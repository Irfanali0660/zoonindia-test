import { Component, Input ,OnChanges,SimpleChanges} from '@angular/core';
import { InboxDatainterface } from '../../interfaces/inbox-datainterface';
import { DataserviceService } from '../../services/dataservice/dataservice.service';

@Component({
  selector: 'app-singleinbox',
  templateUrl: './singleinbox.component.html',
  styleUrls: ['./singleinbox.component.css']
})
export class SingleinboxComponent implements OnChanges{
  constructor(private dataService:DataserviceService){

  }
  @Input('inputDetails') inputData!:InboxDatainterface 
  singleData!:InboxDatainterface 
  
  ngOnChanges(changes:SimpleChanges){
      if(changes['inputData']){
        this.singleData=changes['inputData'].currentValue
      }
  }
  Delete(data:InboxDatainterface){
    if(confirm("Are you sure to delete "+data.name)) {
     const result= this.dataService.deleteItem(data)
     alert(result)
    }
  }

  Addtofav(favData:InboxDatainterface){
   const result= this.dataService.Addtofav(favData)
   alert(result)
  }


}
