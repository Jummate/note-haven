import {
  NavigateFunction,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { toast } from "react-toastify";

import apiClient from "./apiClient";
import { convertToSnakeCase } from "../utils/conversion";
import { notify } from "./toastService";

export const createUser = async (
  data: Record<string, string>,
  navigate: NavigateFunction
): Promise<Record<string, any>> => {
  try {
    const response = await apiClient.post<Record<string, string>>(
      "/api/auth/signup/",
      convertToSnakeCase(data)
    );
    notify({
      message: "Account successfully created",
      action: () => navigate("/dashboard", { replace: true }),
    });

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("error => ", error);
    notify({ type: "error", message: "Error: Failed to create account" });
    return {
      success: false,
      error: error.response?.data?.message || "Failed to create user.",
    };
  }
  //   return response.data;
};

export const login = async (
  data: Record<string, string>,
  navigate: NavigateFunction
): Promise<Record<string, any>> => {
  try {
    const response = await apiClient.post<Record<string, string>>(
      "/api/auth/login/",
      convertToSnakeCase(data)
    );
    if (response?.status !== 200) {
      notify({
        type: "error",
        message: response.data.detail,
      });
      return {
        success: false,
        error: response.data.detail || "Failed to log in.",
      };
    }
    notify({
      message: "You are now logged in",
      action: () => navigate("/dashboard", { replace: true }),
    });
    return { success: true, data: response.data };
    // if (response.statusText == "ok") {
    //   console.log("success");
    // }
  } catch (error: any) {
    console.error("Login error => ", error);
    const errorMessage =
      error?.response?.data?.detail ||
      "An unexpected error occurred during login.";
    notify({ type: "error", message: errorMessage });
    return {
      success: false,
      error: errorMessage || "Failed to login user.",
    };
  }
  //   return response.data;
};

export const logout = async (navigate: NavigateFunction) => {
  try {
    await apiClient.post("/api/auth/logout/", {}, { withCredentials: true });
    navigate("/login", { replace: true });
  } catch (error: any) {
    console.error("Error during logout:", error);
    const errorMessage =
      error?.response?.data?.detail ||
      "An unexpected error occurred during logout.";
    notify({ type: "error", message: errorMessage });
  }
};

export const forgotPassword = async (
  data: Record<string, string>,
  callback: () => void
) => {
  try {
    const response = await apiClient.post(
      "/api/auth/forgot-password/",
      convertToSnakeCase(data)
    );
    callback();
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Error generating a reset link:", error);
    const errorMessage =
      error?.response?.data?.detail ||
      "An unexpected error occurred generating a reset link.";
    notify({ type: "error", message: errorMessage });

    return {
      success: false,
      error: errorMessage || "Failed to generate a reset link",
    };
  }
};
export const resetPassword = async (
  data: Record<string, string>,
  navigate: NavigateFunction
) => {
  try {
    // const { token } = useParams();

    const { token } = data;
    if (!token) return notify({ type: "error", message: "Missing token" });
    const response = await apiClient.post(
      `/api/auth/reset-password/`,
      convertToSnakeCase(data)
    );
    notify({
      message:
        "Your password has been successfully reset. You can now log in with your new credentials",
      action: () => navigate("/login", { replace: true }),
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Error resetting password:", error);
    const errorMessage =
      error?.response?.data?.detail ||
      "An unexpected error occurred resetting password.";
    notify({ type: "error", message: errorMessage });

    return {
      success: false,
      error: errorMessage || "Failed to reset password",
    };
  }
};
