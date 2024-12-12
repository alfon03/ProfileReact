const API_URL = "http://localhost:3000/profiles";

export const getProfiles = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al recoger  perfiles");
  return response.json();
};

export const addProfile = async (profile) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  if (!response.ok) throw new Error("Error a anadir un perfil");
  return response.json();
};
