import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import FilePondPluginImageFilter from 'filepond-plugin-image-filter';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { registerPlugin } from 'filepond';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit,
  FilePondPluginImageFilter,
  FilePondPluginImageTransform
);
@Component({
  selector: 'app-create-brandmanager',
  templateUrl: './create-brandmanager.component.html',
  styleUrls: ['./create-brandmanager.component.css']
})
export class CreateBrandmanagerComponent implements OnInit {
  @ViewChild('myPond') myPond: any;
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowDrop: true,
    allowReplace: true,
    instantUpload: true
  };

  // pondFiles = [
  //   'index.html'
  // ]
  public accountdetails: any;
  toppings = new FormControl();
  toppingList = ['Cricket', 'Soccer', 'Hockey', 'Tennis', 'Volleyball', 'Table Tennis', 'Basketball', 'Golf'];
  public pondFiles: any;
  public title: any = '';
  constructor(private router: Router, private apiService: ApiService ) {

    this.accountdetails = {
      firstName: '',
      lastName: '',
      middleName: '',
      companyName: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      postalCode: '',
      city: '',
      country: '',
      state: '',
      phoneNumber: '',
      email: '',
      sports: [],
      userType: '',
      tenantId: ''
    };
    const url = this.router.url;
    if (url === '/signup/createevangeaccount') {
      this.accountdetails.userType = 'BRAND_EVANGELIST';
      this.title = 'Brand Evangelist';
    } else if (url === '/signup/createmanangeracc') {
      this.accountdetails.userType = 'BRAND_MANAGER';
      this.title = 'Brand Manager';
    }

  }

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('app-auth-user'));
    this.accountdetails.tenantId = loggedInUser.tenantId;
  }
  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  createAccount() {
    this.accountdetails.sports = this.toppings.value;
    this.apiService.post('v1/users', this.accountdetails).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['dashboard']);
    });
  }

}
