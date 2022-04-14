import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
wuerfelwunsch = false;
  constructor() { }

  ngOnInit(): void {
  }
switchWuerfelwunschState(){
    if(this.wuerfelwunsch) {
      this.wuerfelwunsch = false;
    }else if (!this.wuerfelwunsch){
      this.wuerfelwunsch = true;
    }
}

  randomBetween(min: number, max: number):number {
  return Math.round(Math.random() * (max - min)+ min);
}

}
