import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {
  @Input() title: string = '';

  @Input() icon: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
