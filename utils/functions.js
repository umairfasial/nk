export function getThumbnail(url) {
  try {
    const baseUrl = url.split('?')[0];
    const currentExtension = baseUrl.split('.').pop();
    let newUrl = baseUrl.replace(`.${currentExtension}`, `.jpg`);
    if (!newUrl.includes('https://')) {
      newUrl = newUrl.replace('http://', 'https://');
    }
    return {uri: newUrl};
  } catch (error) {
    return {uri: ''};
  }
}

export function getHTTPSURL(url) {
  try {
    let newUrl = url;
    if (!newUrl.includes('https://')) {
      newUrl = newUrl.replace('http://', 'https://');
    }
    return newUrl;
  } catch (error) {
    return {uri: ''};
  }
}
