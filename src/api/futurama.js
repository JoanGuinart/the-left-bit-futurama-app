const BASE_URL = "https://api.sampleapis.com/futurama";

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`);
  if (!response.ok) throw new Error("Failed to fetch characters");
  return response.json();
}

export async function getCharacterById(id) {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  if (!response.ok) throw new Error("Failed to fetch character");
  return response.json();
}
