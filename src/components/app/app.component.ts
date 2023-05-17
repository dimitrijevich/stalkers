import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserService } from 'src/services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stalkers';

  constructor(private userService:UserService){

  }

  username: string = '';
  wrong: boolean = false;
  showListFlag: boolean = false;
  loading = false;
  
  user: any;

  proceed(){
    this.wrong = false;
    let validation = this.validate(this.username);

    if(validation){
      this.getUser(this.username)
    }
  }

  validate(username: string){ 
    if(this.username == '' || this.username == null){
      this.wrong = true;
      return false
    }

    return true
  }


  closeCard(){
    this.user = null;
  }

  showList(){
    this.showListFlag = true;
  }

  getUser(username: string){
    this.loading = true;
    this.userService.getUser(username).subscribe({
      next: data => {
        console.log(data)
        this.user = data
        this.loading = false;

        if(data==null){
          this.wrong = true;
        }
        
      },
      error: err => {
        console.log(err)
      }
    })
  }

  

}
