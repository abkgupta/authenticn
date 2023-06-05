import { Component, OnInit } from '@angular/core';
import { LoadserviceService } from '../loadservice.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
 loaderb = false ;
//  result: any
 constructor(private loadservice: LoadserviceService) {}
 
 ngOnInit() {
   this.loadservice.loaderb.subscribe((res:any) =>{
    console.log(res)
    this.loaderb = res
   })
 }

}
