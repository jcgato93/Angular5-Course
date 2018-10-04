import { Injectable } from '@angular/core';
import { AngularFireAuth } from'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router){
		this.isLogged();
	}

  /**
   * login
   */
  public login(email:any,password:any) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
    .then((response)=>{
      alert('Usuario loggeado');
      console.log(response)
      this.router.navigate(['lugares']);
    })
    .catch((error)=>{
      alert('Ocurrio un error!')
      console.log(error);
    })
  }

  /**
   * registro
   */
  public registro(email,password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((response)=>{
        alert('Usuario Registrado con éxito');
        console.log(response)
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        alert('Ocurrio un error!')
        console.log(error);
      })
  }

  /**
   * isLogged
   */
  public isLogged() {
    return this.angularFireAuth.authState;    
  }

  /**
   * logout
   */
  public logout() {
    this.angularFireAuth.auth.signOut();
    alert('Session closed')
    this.router.navigate(['login'])
  }

  /**
   * facebookLogin
   */
  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result)=>{
        console.log(result)
        alert('User login with facebook')
        this.router.navigate(['lugares']);
      })
      .catch((error)=>{
        console.log(error);
      });
  }

}
