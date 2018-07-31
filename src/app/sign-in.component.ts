import { Component } from "@angular/core";
import { SigninService } from './sign-in.service';

@Component({
    selector: 'app-sign-in',
    template: `
    <form (ngSubmit) = " onSubmit(formSignIn);" #formSignIn = "ngForm">
        <div class="form-group">
            <h1 class = "text-center">Login</h1>
            <input type="email" ngModel #txtEmail = "ngModel" required class="form-control" name="email" id=""  placeholder="Email">
            <small style = "color: red" *ngIf = "txtEmail.touched && txtEmail.errors?.required" >Email is required...</small>
            <br>
            <input 
                type="password" 
                ngModel #txtPass = "ngModel" 
                class="form-control" 
                name="password" id=""  
                placeholder="Password"
                minlength = 6
                maxlength = 25
                pattern = "[a-z0-9]*"
            >
            <br>
            <div  ngModelGroup = "subject">
                <label><input type = "checkbox" [ngModel] = "false" name = "angular">Angular</label>
                <label><input type = "checkbox" [ngModel] = "false" name = "java">Java</label>
                <label><input type = "checkbox" [ngModel] = "false" name = "nodejs">NodeJS</label>
            </div>
            <br>
            <button [disabled] = "formSignIn.invalid"  class="btn btn-outline-success">Submit</button>
            <br>
            
            <p>{{ formSignIn.value | json}}</p>
            <p>{{ txtPass.errors | json}}</p>
        </div>
    </form>
    `,
    providers: [SigninService]
})

export class SignInComponent{
    constructor(private signInService: SigninService){}
    onSubmit(formSignIn){
        this.signInService.sendPost(formSignIn.value)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
}