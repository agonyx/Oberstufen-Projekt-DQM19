import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../models/player";

@Component({
  selector: 'app-abilitys',
  templateUrl: './abilitys.component.html',
  styleUrls: ['./abilitys.component.css']
})
export class AbilitysComponent implements OnInit {
  @Input() player?: Player;
  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayer(id);
  }
  async gotoAdvantages(advantegename: string): Promise<void> {
    await this.router.navigate(['advanteges', advantegename], { relativeTo: this.route })
  }
  async gotoDisadvantages(disadvantegename: string): Promise<void> {
    await this.router.navigate(['disadvanteges', disadvantegename], { relativeTo: this.route })
  }

}
