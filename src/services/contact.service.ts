import axiosInstance from "../instance/api.js";

export interface CreateContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface CreateContactResponse {
  success: boolean;
  message: string;
}

export const createContact = async (
  payload: CreateContactPayload
): Promise<CreateContactResponse> => {

  const response = await axiosInstance.post<CreateContactResponse>(
    "/contacts/",
    payload
  );

  return response.data;
};