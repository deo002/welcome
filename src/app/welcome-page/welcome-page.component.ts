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
    let auth_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic3czNjAtUkVTVC1BUEkiXSwidXNlcl9uYW1lIjoiYW1yaXQudmVybWFAc2llbWVucy5jb20iLCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXSwiZXhwIjoxNjgyMzUxOTAwLCJhdXRob3JpdGllcyI6WyJSRUFEIiwiV1JJVEUiXSwianRpIjoicTlwZTN1TU1oUHktdW1qbmNYcU1nYnhSS2k0IiwiY2xpZW50X2lkIjoiYzU1MWExZjViYWU1NDhiMjMxYzIyMDNjYjIwMDJhMzEifQ.I6afctCtGXb5wGNQA_B-W64mIKe8aAveU21c9lHwejAEiJCxD-hime3HN14ON4G43fIN3ykStRs1DR9pUetbgAR9HRmY-SUe681tTcu_23n1NXyr6zzIw7v7TzaDRpFDfz7RkoU4fZTOH77UVHMDxinFXeCB4Yt_GNp2AswxgMKQPjOhMf_Ydn8KvqcgLHj8n6G5yt84DS9vDPaqKszGX_0-en0x7-5j-teGPvuhfV54PlOYuvl5rvUV-uqe1PPUokf-8N2lP9h_FoXTXbBHMC8QgSQHrqrw0pjvx-HTtaZElWuzhWPM_2kpttvo9o2dZita6L6PsDltAYp8vQldeA";
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
