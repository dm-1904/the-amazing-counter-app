import { Type } from "./types";

export type RequestType = {
  fetchAllItems: () => Promise<Type[]>;
  postData: (endpoint: string, data: any) => Promise<Type>;
  deleteItem: (id: number) => Promise<void>;
  patchItem: (id: number, updatedItem: Partial<Type>) => Promise<Type | null>;
};

const API_URL = "http://localhost:3000";

export const Requests: RequestType = {
  fetchAllItems: () => {
    return fetch(`${API_URL}/types`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Request failed with status ${res.status}`);
        }
        return res.json() as Promise<Type[]>;
      })
      .catch((error: Error) => {
        console.error("Error fetching items", error);
        throw new Error(
          `Fetching all items failed with error: ${error.message}`
        );
      });
  },
  // postData Usage example:
  // can be obj and can have any number of values
  //const newMovie = {
  // title: "Inception",
  //  director: "Christopher Nolan",
  //  releaseYear: 2010,
  //};

  //Requests.postData("movies", newMovie)
  //  .then((movie) => {
  //   console.log("Movie added:", movie);
  //  })
  //  .catch((error) => {
  //    console.error("Error adding movie:", error);
  //  });
  postData: (endpoint, data) => {
    return fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP POST failed with status ${res.status}`);
        }
        return res.json();
      })
      .catch((error: Error) => {
        console.error(`Error posting to ${endpoint}`, error);
        throw new Error(`Posting to ${endpoint} failed: ${error.message}`);
      });
  },
  deleteItem: (id: number): Promise<void> => {
    return fetch(`${API_URL}/item/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to delete item with status ${res.status}`);
        }
      })
      .catch((error: Error) => {
        console.error("Error deleting item", error);
        throw new Error(`Deleting item failed with error: ${error.message}`);
      });
  },
  patchItem: (id: number, updatedItem: Partial<Type | null>): Promise<Type> => {
    return fetch(`${API_URL}/item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to PATCH item with status ${res.status}`);
        }
        return res.json() as Promise<Type>;
      })
      .catch((error) => {
        console.error("Error patching item", error);
        throw new Error(`Failed to PATCH item with error: ${error.message}`);
      });
  },
};
