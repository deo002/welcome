import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private http: HttpClient, private router: Router) {
  }

  showModal: Boolean = true;
  emailId:string = ''; 
  

  onSubmitButtonClick(){
    console.log(this.emailId);
    const url = "https://stage.sw360.siemens.com/resource/api/users/" + this.emailId
    let auth_token = "";
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  });
    const requestOptions = { headers: headers };
    this.http.get<any>(url, requestOptions).subscribe((response: any) => {
      console.log(response)
      NgIf : response.status == '200'
        this.router.navigate(['home']);
      // homeComponent.onLogIn();
      })
    // NgIf : status == '200'
      
}
}
