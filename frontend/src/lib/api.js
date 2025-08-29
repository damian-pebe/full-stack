import { API_CONFIG } from "./constants";

export const fetchItemById = async (id) => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ITEM_BY_ID(id)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const fetchItems = async (params = {}) => {
  const url = new URL(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ITEMS}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.append(key, value);
    }
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
