const storageObj = window ? window.localStorage : null

const getValue = (key) => {
  if (storageObj) {
    return JSON.parse(storageObj.getItem(key));
  }

  return null;
}

const setValue = (key, val) => {
  if (storageObj) {
    storageObj.setItem(key, JSON.stringify(val));
  }
}


export {
  getValue,
  setValue
}
