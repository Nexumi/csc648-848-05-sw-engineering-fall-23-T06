/* API Paths */

export function apiTest() {
  return `/api/test`;
}

export function apiTracking() {
  return `/api/tracking`;
}

export function apiRegistration() {
  return `/api/v1/auth/register`;
}

export function apiLogin() {
  return `/api/v1/auth/authenticate`;
}

export function apiAuth() {
  return `/api/v1/auth`;
}

export function apiPin() {
  return '/api/registration/update/pin';
}

export function apiCheckPin(){
  return '/api/tracking/hidden';
}

export function apiGeocode() {
  return 'https://maps.googleapis.com/maps/api/geocode/json';
}

/* URI Paths */
export function uriHome() {
  return `/`;
}

export function uriAbout(id?: string) {
  return id ? `/about/${id}` : `/about`;
}

export function uriLogin() {
  return `/login`;
}

export function uriRegistration() {
  return `/registration`;
}

export function uriForget() {
  return `/forget`;
}

export function uriSearch() {
  return `/search`;
}

export function uriDashboard(guest?: boolean) {
  return guest ? `/dashboard/?guest=true` : `/dashboard`;
}

export function uriUpload() {
  return `/upload`;
}

export function uriBusinessUpload() {
  return `/business-upload`;
}

export function uriTOSPage() {
  return `/tos`;
}

export function uriTracking(id?: string | number) {
  return id !== undefined ? `/tracking/${id}` : `/tracking`;
}

export function uriBusinessTracking(id?: string | number) {
  return id !== undefined ? `/business-tracking/${id}` : `/business-tracking`;
}

export function uriHiddenTracking(id?: string | number) {
  return id !== undefined ? `/hidden-tracking/${id}` : `/hidden-tracking`;
}

export function uriShipmentsTracking(id?: string | number) {
  return id !== undefined ? `/shipment-stracking/${id}` : `/shipment-stracking`;
}

export function uriSupport() {
  return `/support`;
}

export function uriSettings(id?: string) {
  return id ? `/settings/${id}` : `/settings`;
}

export function uriApiTest() {
  return `/api_test`;
}