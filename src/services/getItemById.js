const BASE_URL = 'https://68140b69225ff1af1627c46b.mockapi.io/api/v1/items'; // reemplazá por tu URL real

export async function getItemById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error('Item no encontrado');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
