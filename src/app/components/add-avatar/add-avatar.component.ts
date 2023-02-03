import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/service/avatar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.css'],
})
export class AddAvatarComponent implements OnInit {
  avatarForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AvatarService, private http: HttpClient, private router: Router) {
    this.avatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['',Validators.required],
    });
  }

  ngOnInit() {}

  uploadAvatar(event: any) {
    const file = event.target.files[0]
    this.avatarForm.patchValue({
      avatar: file,
    });
  }

  onSubmit() {
    var formData: any = new FormData();
    formData.append('name', this.avatarForm.get('name')?.value);
    formData.append('avatar', this.avatarForm.get('avatar')?.value);

    this.http
      .post(`${environment.baseURL}/add`, formData)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['/']);
        },
        error: (error) => {
          alert("error while trying to upload avatar")
          console.log(error)
        },
      });
  }
}
