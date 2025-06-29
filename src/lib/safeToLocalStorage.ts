export const saveToLocalStorage = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Ошибка при сохранении в localStorage:", e);
  }
};
