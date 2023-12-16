import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Store a new user resource in db
   *
   * @param {string} email
   * @param {string} password
   * @param {string} username
   */
  store(email: string, password: string, username: string): Observable<User> {
    const user = new User(email, password, username);

    return this.http.post<User>('http://localhost:3000/users', user);
  }

  /**
   * Find a user with provided email
   *
   * @param {string} email
   *
   * @returns {User}
   */
  findByEmail(email: string) {
    return this.http.get(`http://localhost:3000/users?email=${email}`);
  }

  /**
   * Find a user with provided username
   *
   * @param {string} username
   *
   * @returns {User}
   */
  findByUsername(username: string) {
    return this.http.get(`http://localhost:3000/users?username=${username}`);
  }

  /**
   * Find a user with provided credentials
   *
   * @param {string} email
   * @param {string} password
   *
   * @returns {User}
   */
  authenticate(email: string, password: string) {
    return this.http.get(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );
  }

  /**
   * Check wether or not the user is authenticated
   *
   * @returns {boolean}
   */
  isAuthenticated(): boolean {
    let authUser = JSON.parse(localStorage.getItem('auth')!);
    return authUser != null;
  }

  /**
   * Logout current user
   *
   * @returns {boolean}
   */
  logout(): boolean {
    if (this.isAuthenticated()) {
      localStorage.removeItem('auth');
      return true;
    } else {
      return false;
    }
  }
}
