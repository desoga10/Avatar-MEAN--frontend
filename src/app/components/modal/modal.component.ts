import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() avatar!: any;
  @ViewChild('closeModal') private closeModal!: ElementRef;

  constructor(private service: AvatarService, private router: Router) {}

  ngOnInit(): void {}

  public hideModal() {
    this.closeModal.nativeElement.click();
  }

  deleteAvatar() {
    this.service.deleteAvatar(this.avatar._id).subscribe({
      next: (response) => {
        if (response) {
          this.hideModal();
          window.location.reload();
        }
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  editAvatar() {
    this.router.navigate([`/edit-avatar/${this.avatar._id}`]);
  }
}
