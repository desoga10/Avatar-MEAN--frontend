import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from 'src/app/service/avatar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.css']
})
export class EditAvatarComponent implements OnInit {
  editAvatarForm!: FormGroup;
  data!: any;
  id!: number
  constructor(
    private formBuilder: FormBuilder,
    private service: AvatarService,
    private http: HttpClient,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.editAvatarForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['',Validators.required],
    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getAvatarById(this.id).subscribe((res: any) => {
        console.log(res);
        this.data = res
        this.editAvatarForm.get('name')?.setValue(this.data.name);
      });
    });
  }

  uploadAvatar(event: any) {
    const file = event.target.files[0]
    this.editAvatarForm.patchValue({
      avatar: file,
    });
  }



  onSubmit() {
    const { value } = this.editAvatarForm;
    console.log('value', value);
    var formData: any = new FormData();
    formData.append('name', this.editAvatarForm.get('name')?.value);
    formData.append('avatar', this.editAvatarForm.get('avatar')?.value);

    this.http
      .put(`${environment.baseURL}/update/${this.id}`, formData)
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
