import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() public height: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
