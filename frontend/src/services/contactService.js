import axiosInstance from "../api/axiosInstance";

export const sendContactMessage =
  async (formData) => {

    const response =
      await axiosInstance.post(
        "/contact",
        formData
      );

    return response.data;
};