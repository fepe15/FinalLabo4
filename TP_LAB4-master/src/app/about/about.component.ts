import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Leader } from '../shared/leader';
import { LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() Ganancias = '500123915';

  leaders : Leader[];


  constructor( private leaderServices:LeaderService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.leaderServices.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  }

}
 