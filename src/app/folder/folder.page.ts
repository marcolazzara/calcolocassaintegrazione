import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  public folder: string;
  todo = {
    title: '',
    description: ''
  };

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  logForm(form) {
    console.log(form.value);
  }

}
