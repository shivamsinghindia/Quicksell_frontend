const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Response Data...",data);
    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return null;
  }
};