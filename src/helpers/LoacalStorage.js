export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);

  if (parsedData) {
    return parsedData;
  } else {
    return [];
  }
}

export function setLocalStorage(key, data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem(key, stringData);
}
