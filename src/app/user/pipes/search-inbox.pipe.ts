import { Pipe, PipeTransform } from '@angular/core';
import { InboxDatainterface } from '../interfaces/inbox-datainterface';

@Pipe({
  name: 'searchInbox'
})
export class SearchInboxPipe implements PipeTransform {

  transform(values: InboxDatainterface[], quary:string ): any {  
    let regex=new RegExp(quary,'i')
    if(quary==''){
     return values;
    }else{
     return values.filter((value)=>{
       return value.name.match(regex)
     })
   }
   }

}
