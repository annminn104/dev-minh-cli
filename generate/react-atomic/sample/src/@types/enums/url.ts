export enum URL_ENDPOINT {
  SERVER,
  CLIENT,
  STORAGE_IMAGE
}

const endpointMapping = {
  [URL_ENDPOINT.SERVER]: import.meta.env.VITE_SERVER_DOMAIN,
  [URL_ENDPOINT.CLIENT]: import.meta.env.VITE_CLIENT_DOMAIN,
  [URL_ENDPOINT.STORAGE_IMAGE]: import.meta.env.VITE_STORAGE_IMAGE
} as const;

export function getEndPoint(endpoint: URL_ENDPOINT): string {
  return endpointMapping[endpoint];
}
