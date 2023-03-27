import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.css'],
})
export class AddAvatarComponent implements OnInit {
  avatarForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.avatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  uploadAvatar(event: any) {
    const file = event.target.files[0];

    this.avatarForm.patchValue({
      avatar: file,
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.avatarForm.get('name')?.value);
    console.log(this.avatarForm.get('avatar')?.value);

    let formData = new FormData();
    formData.append('name', this.avatarForm.get('name')?.value);
    formData.append('avatar', this.avatarForm.get('avatar')?.value);

    this.http.post(`${environment.baseURL}/add`, formData).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Error occurred while uploading avatar');
      },
    });
  }
}
