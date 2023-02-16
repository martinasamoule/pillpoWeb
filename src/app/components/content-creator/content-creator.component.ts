import { Component, OnInit } from '@angular/core';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Ivideocreator } from './../../models/ivideocreator';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss']
})
export class ContentCreatorComponent implements OnInit {
  searchText:string = "" ;
  faTrash = faTrash ;
  faSearch = faSearch;
  videoCreatorsList : Ivideocreator[]=[] ;
  videoCreatorsListApi : Ivideocreator[]=[] ;
  selected:string = '' ;


  constructor(public dialog :MatDialog) {
    this.videoCreatorsListApi = [
      {name:"martina",photo_path:"assets/videoCreator.png",account_state:"active" ,email:"martinasamoule542@gmail.com",phone_number:"01276333291"},
      {name:"martina",photo_path:"assets/videoCreator.png",account_state:"suspended" ,email:"martinasamoule542@gmail.com",phone_number:"01276333291"},
      {name:"martina",photo_path:"assets/videoCreator.png",account_state:"active" ,email:"martinasamoule542@gmail.com",phone_number:"01276333291"},
      {name:"martina",photo_path:"assets/videoCreator.png",account_state:"active" ,email:"martinasamoule542@gmail.com",phone_number:"01276333291"},
      {name:"martina",photo_path:"assets/videoCreator.png",account_state:"active" ,email:"martinasamoule542@gmail.com",phone_number:"01276333291"}
    ]
    this.videoCreatorsList = this.videoCreatorsListApi ;
   }

  ngOnInit(): void {
  }
  openDialog(dialogMessage:string)
  {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { dialogMessage: dialogMessage },
    });
  }
  filterContactCreators(state:string)
  {
    if(state=='active')
    {
      this.videoCreatorsList = this.videoCreatorsListApi.filter(creator=>creator.account_state=='active');
    }
    else if(state=='suspended')
    {
      this.videoCreatorsList = this.videoCreatorsListApi.filter(creator=>creator.account_state=='suspended');
    }
    else {
      this.videoCreatorsList = this.videoCreatorsListApi ;
    }
  }
}
