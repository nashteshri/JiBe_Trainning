import { Component, Input, Output,EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-shared',
  standalone: false,
  
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {
 @Input() title:string = '';
 @Output() dataSend = new EventEmitter<void>();

 sendData(){
  this.dataSend.emit(); 
 }

}
