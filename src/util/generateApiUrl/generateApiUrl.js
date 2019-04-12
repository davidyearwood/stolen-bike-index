export default function generateApiUrl(queryParams) {
  const apiUrl = new URL("https://bikewise.org:443/api/v2/incidents");
  const paramsKeys = Object.keys(queryParams);

  paramsKeys.forEach((key) => {
    apiUrl.searchParams.set(key, queryParams[key]);
  });

  return apiUrl;
}
