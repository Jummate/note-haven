import apiClient from "./apiClient";
import { convertToSnakeCase } from "../utils/conversion";

export const createUser = async (
  data: Record<string, string>
): Promise<Record<string, any>> => {
  try {
    const response = await apiClient.post<Record<string, string>>(
      "/api/auth/signup/",
      convertToSnakeCase(data)
    );
    console.log("got here");
    return { success: true, data: response.data };
    // if (response.statusText == "ok") {
    //   console.log("success");
    // }
  } catch (error: any) {
    console.log("error => ", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to create user.",
    };
  }
  //   return response.data;
};

export const login = async (
  data: Record<string, string>
): Promise<Record<string, any>> => {
  try {
    const response = await apiClient.post<Record<string, string>>(
      "/api/auth/login/",
      convertToSnakeCase(data)
    );
    console.log("got here");
    console.log(response);
    console.log(response.data);
    return { success: true, data: response.data };
    // if (response.statusText == "ok") {
    //   console.log("success");
    // }
  } catch (error: any) {
    console.log("error => ", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to login user.",
    };
  }
  //   return response.data;
};
