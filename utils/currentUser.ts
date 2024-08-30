"use client"

import { baseUrl, currentUser } from "@/providers/constants/constants";

export async function fetchCurrentUser() {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await fetch(baseUrl + currentUser, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const currentUserr = await response.json();
    // const decoded = jwtDecode(token);
    // console.log(decoded, "token");
    console.log('Current User:', currentUserr);
    return currentUserr;
  } catch (error) {
    console.error('Failed to fetch current user:', error);
  }
}
