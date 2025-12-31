import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-component',
  templateUrl: './get-component.component.html',
  styleUrls: ['./get-component.component.scss']
})
export class GetComponentComponent implements OnInit {

  constructor(
    private _matdialog : MatDialogRef<GetComponentComponent>
  ) { }

  ngOnInit(): void {
  }
  onclick(flag:boolean){
    this. _matdialog.close(flag)
  }

}
