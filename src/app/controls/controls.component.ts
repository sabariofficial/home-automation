import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  name: string="sabari";
  

  public selectedValue: any;

  products = [
    { id: 1, name: "TV" },
    { id: 2, name: "Fridge"}
  ];

  constructor(
    public cookieService: CookieService
  ) { }

  ngOnInit(): void {

  }

  onAddControls() {
    if(this.selectedValue == 'TV'){
      var tvObj = {
        Product : this.selectedValue,
        Display : 'True'
      } 
      this.cookieService.set( 'tvVisible', JSON.stringify(tvObj));
      this.selectedValue =  ''; 
      alert('TV Added')
    }
    if(this.selectedValue == 'Fridge'){
      var fridgeObj = {
        Product : this.selectedValue,
        Display : 'True'
      }
      this.cookieService.set( 'fridgeVisible', JSON.stringify(fridgeObj));
      this.selectedValue =  ''; 
      alert('Fridge Added')
      
    }
    
    
  }

}

