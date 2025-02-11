"use server";

import axios from "./config/axios";
import { SERVER_URL } from "./lib";
import { cookies } from "next/headers";
import { Contact } from "./types";

export const fetchUserContacts = async () => {
  try {
    const token = cookies().get("session_token")?.value;

    const res = await axios.get(`${SERVER_URL}/users/contacts`, {
      headers: {
        Cookie: `session_token=${token}`,
      },
      withCredentials: true,
    });

    return res.data as Contact[];
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

export const fetchUserContact = async (contactId: string) => {
  try {
    const token = cookies().get("session_token")?.value;

    const res = await axios.get(
      `${SERVER_URL}/users/contacts/${contactId}?_=${new Date().getTime()}`,
      {
        headers: {
          Cookie: `session_token=${token}`,
        },
        withCredentials: true,
      }
    );

    return res.data as Contact;
  } catch (error) {
    console.error("Error fetching contact:", error);
    return null;
  }
};
