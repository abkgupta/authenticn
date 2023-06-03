import { Component } from '@angular/core';
import { LoadserviceService } from '../loadservice.service';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent {
  result: any
 constructor(private loadservice: LoadserviceService) {}
 
 ngOnInit() {
   this.loadservice.getPosts().subscribe(res =>{
    this.result = res
   })
 }
}
