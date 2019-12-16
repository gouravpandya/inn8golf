import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openTree(v: boolean): void {
    if (v) {
      var tree = document.getElementsByClassName("side-tree");
      var treeMenu: any = document.getElementsByClassName("treeview-menu")[0];
      if (tree[0].classList.contains('menu-open')) {
        tree[0].classList.remove('menu-open');
        treeMenu.style.display = "none";
      } else {
        tree[0].classList.add('menu-open');
        treeMenu.style.display = "block";
      }
    }

  }

}
