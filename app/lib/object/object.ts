export default function objectToFormData(obj: {
  [key: string]: any;
}): URLSearchParams {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      params.append(key, obj[key]);
    }
  }
  return params;
}
