import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ivideocreator } from 'src/app/models/ivideocreator';
import { DialogComponent } from '../dialog/dialog.component';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admins-data',
  templateUrl: './admins-data.component.html',
  styleUrls: ['./admins-data.component.scss']
})
export class AdminsDataComponent implements OnInit {

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

}
