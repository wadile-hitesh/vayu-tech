import conf from "@/conf/config";
import { Account, AppwriteException, Client, ID } from "appwrite";

interface CreateUserAccount {
  email: string;
  password: string;
  name: string;
}

interface LoginUser {
  email: string;
  password: string;
}

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

class AuthService {

  // Create User Account

  async createUserAccount({email ,password, name}: CreateUserAccount){
    try {
      const userAccount = await account.create(ID.unique(), email, password, name);

      if(userAccount){
        return this.loginUser({email,password});
      }
      else{
        return userAccount;
      }
    } catch (error) {
      console.log("Error: Sign Up Error", error);
    }
  } 


  // Login User
  async loginUser({email, password}: LoginUser){
    try {
      return await account.createEmailPasswordSession(email, password);
    }
    catch (error) {
      console.log("Error: Login Error", error);
    }
  }


  // Check if User is Logged In
  async isUserLoggedIn() : Promise<boolean>{
    try {
      const user = await this.getCurrentUser();
      return Boolean(user);
    } catch (error) {
        console.log("Error: User Not Logged In", error);
    }
    return false; 
  }

  // Get Current User
  async getCurrentUser(){
    try {
      const user = await account.get();      
      return user;
    } catch (error : any) {
      if(error instanceof AppwriteException && error.code === 401){
        return false
      }
      
      console.log("Error: Get Current User", error);
    }
    return null;
  }

  // Logout User
  async logoutUser(){
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("Error: Logout User", error);
    }
  }
}

const appwriteService = new AuthService();
export default appwriteService;