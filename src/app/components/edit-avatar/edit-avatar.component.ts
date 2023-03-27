import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.css'],
})
export class EditAvatarComponent implements OnInit {
  id!: number;
  data!: any;
  editAvatarForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: AvatarService,
    private actRoute: ActivatedRoute
  ) {
    this.editAvatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];

      console.log(this.id);
      this.service.getAvatarById(this.id).subscribe((res) => {
        console.log(res);
        this.data = res;
        this.editAvatarForm.get('name')?.setValue(this.data.name);
      });
    });
  }

  uploadAvatar(event: any) {
    const file = event.target.files[0];

    this.editAvatarForm.patchValue({
      avatar: file,
    });
  }
  onSubmit() {
    let formData = new FormData();
    formData.append('name', this.editAvatarForm.get('name')?.value);
    formData.append('avatar', this.editAvatarForm.get('avatar')?.value);

    this.http
      .put(`${environment.baseURL}/update/${this.id}`, formData)
      .subscribe({
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
