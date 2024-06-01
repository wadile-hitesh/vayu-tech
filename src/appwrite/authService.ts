import conf from "@/conf/config";
import { Account, Appwrite, Client, ID } from "appwrite";

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
}