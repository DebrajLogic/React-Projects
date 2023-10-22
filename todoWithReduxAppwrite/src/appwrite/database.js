import { Client, Databases } from "appwrite";
import conf from "../conf/conf";

export class AppwriteService {
  client = new Client();

  constructor() {
    this.databases = new Databases(this.client);

    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(conf.appwriteProjectId);
  }

  addToDatabase = async (data, id) => {
    return await this.databases
      .createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        data
      )
      .then((response) => console.log(response))
      .catch((error) =>
        console.log("Appwrite Service::addToDatabase:error", error)
      );
  };

  getFromDatabaseAll = async () => {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId
      );
      return response.documents;
    } catch (error) {
      console.log("Appwrite Service::getFromDatabaseAll:error", error);
      return [];
    }
  };

  deleteFromDatabase = async (id) => {
    try {
      const response = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
      console.log(
        `Document with ID ${id} deleted successfully. Response:`,
        response
      );
    } catch (error) {
      console.error(`Error deleting document with ID ${id}:`, error);
    }
  };
}

export const appwriteService = new AppwriteService();
