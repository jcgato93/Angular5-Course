import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logeedIn = false;

  constructor(private autorizacionService : AuthorizationService){
    this.autorizacionService.isLogged()
    .subscribe((result)=>{
      if (result && result.uid) {
        this.logeedIn = true;
      }
      else{
        this.logeedIn = false;
      }
    },
    (error)=>{
      this.logeedIn = false;
    })
  }

 logout(){
   this.autorizacionService.logout();
 }

}
