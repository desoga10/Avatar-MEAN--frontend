import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GetAvatar } from 'src/app/models/avatar.model';
import { AvatarService } from 'src/app/service/avatar.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() avatar!: any;
  @ViewChild('closeModal') private closeModal!: ElementRef;
  avatars: any = [];

  constructor(private service: AvatarService, private router: Router) {}

  ngOnInit() {
  }

  public hideModel() {
    this.closeModal.nativeElement.click();
  }

  deleteAvatar() {
    console.log(this.avatar);
    this.service.deleteAvatar(this.avatar._id).subscribe({
      next: (response) => {
        if (response) {
          window.location.reload();
          this.hideModel();
        }
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  editAvatar() {
    this.hideModel();
    this.router.navigate([`/edit-avatar/${this.avatar._id}`]);
  }
}
