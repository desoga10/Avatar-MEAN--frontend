import { Component, OnInit } from '@angular/core';
import { GetAvatar } from 'src/app/models/avatar.model';
import { AvatarService } from 'src/app/service/avatar.service';

@Component({
  selector: 'app-list-avatar',
  templateUrl: './list-avatar.component.html',
  styleUrls: ['./list-avatar.component.css']
})
export class ListAvatarComponent implements OnInit {
  avatars: any = [];
  avatarData!: GetAvatar

  constructor(private service: AvatarService) { }

  ngOnInit() {
    this.displayAvatar()
  }

  displayAvatar() {
    this.service.getAvatar().subscribe({
      next: (res: GetAvatar) => {
        this.avatars = res;
        console.log(this.avatars);
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  modalData(avatar: any) {
    this.avatarData = avatar;
    console.log(this.avatarData);
  }

}
