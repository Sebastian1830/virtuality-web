import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() public openItem = true;

  @Input() public link = '';

  @Input() public icon = '';

  constructor() { }

  ngOnInit(): void {
  }

}
