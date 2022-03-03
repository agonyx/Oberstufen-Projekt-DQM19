import { Component, OnInit, Input } from '@angular/core';
import { ChatService} from "../../services/chat.service";
import { ChatMessage} from "../../models/chat-message.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  chatMessage: ChatMessage = new ChatMessage();
  userName: string | undefined;
  messageContent: string | undefined;

  constructor() {}

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.userName = chatMessage.userName;
  }
}
