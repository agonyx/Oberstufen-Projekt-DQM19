import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: any;

  constructor(private chat: ChatService) {
  }
  ngOnInit() {
    this.chat.getMessagesObservable().subscribe(items => {
      console.log(items);
      this.feed = items.forEach(i => {this.feed += i});
    });
  }
  ngOnChanges() {
    this.chat.getMessagesObservable().subscribe(items => {
      console.log(items);
      this.feed = items.forEach(i => {this.feed += i});
    });
  }

}
