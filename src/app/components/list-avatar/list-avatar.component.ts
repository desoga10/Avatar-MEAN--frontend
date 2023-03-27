import { Component, OnInit } from '@angular/core';
import { GetAvatar } from 'src/app/avatar.model';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-list-avatar',
  templateUrl: './list-avatar.component.html',
  styleUrls: ['./list-avatar.component.css'],
})
export class ListAvatarComponent implements OnInit {
  avatars: any = [];
  avatarData!: any;

  constructor(private service: AvatarService) {}

  ngOnInit() {
    this.displayAvatar();
  }

  displayAvatar() {
    this.service.getAvatar().subscribe({
      next: (res: GetAvatar) => {
        console.log(res);
        this.avatars = res;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  modalData(avatar: any) {
    console.log(avatar);
    this.avatarData = avatar;
  }
}
