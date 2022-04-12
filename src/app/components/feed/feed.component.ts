import {Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {ChatMessage} from "../../models/chat-message.model";
import {AppComponent} from "../../app.component";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: ChatMessage[] = [];
  data: any[] = [];
  observable: Observable<any> = this.chat.getMessagesObservable();
  public static subscription: Subscription | undefined;

  //@ViewChild('feeddiv',{static: false, read: ElementRef}) feeddiv: ElementRef;
  constructor(private chat: ChatService){
  }
  ngOnInit() {
    console.log("Appcomp Boolean: " + AppComponent.initialload)
    console.log("OnInit triggered")

    this.methode1();
  }
  ngOnChanges() {
  console.log("changes triggered")
    console.log("Appcomp Boolean: " + AppComponent.initialload)
  }
  private methode1() {
    if (AppComponent.initialload) {
      AppComponent.initialload = false;
      FeedComponent.subscription = this.observable.subscribe(items => {
        if(AppComponent.index <= 24) {
          AppComponent.index++;
          console.log("erste");
          console.log("Appcomp Boolean: " + AppComponent.initialload)
          for (let key in items) {
            if (items.hasOwnProperty(key)) {
              this.data.push(items[key]);
            }
          }
          console.log("data" + this.data.length)

          for (let messageItem of this.data) {
            let message = messageItem[0];
            this.feed.push(new ChatMessage(message.userName, message.message));
          }

        }else {
          this.data = [];
          FeedComponent.subscription?.unsubscribe();

        }
      });



    } if (!AppComponent.initialload) {
      FeedComponent.subscription = this.chat.getLastMessage().subscribe(items => {
        console.log("zweite");
        for (let key in items) {
          if (items.hasOwnProperty(key)) {
            this.data.push(items[key]);
          }
        }
        console.log("data" + this.data.length)

        for (let messageItem of this.data) {
          let message = messageItem[0];
          this.feed.push(new ChatMessage(message.userName, message.message));
        }
      });
    }
  }




}
