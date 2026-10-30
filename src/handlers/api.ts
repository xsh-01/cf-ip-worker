import { getClientIP, isIPv4, isIPv6 } from "../utils/ip";
import {
  textResponse,
  jsonResponse,
  errorResponse,
} from "../utils/response";

interface CfProperties {
  asn?: number;
  asOrganization?: string;
  colo?: string;
  country?: string | null;
  isEUCountry?: string | null;
  city?: string | null;
  continent?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  postalCode?: string | null;
  region?: string | null;
  regionCode?: string | null;
  timezone?: string;
  httpProtocol?: string;
  tlsVersion?: string;
  tlsCipher?: string;
  clientAcceptEncoding?: string | null;
  requestPriority?: string | null;
}

/**
 * Get all client information
 */
export function getAllClientInfo(request: Request): Record<string, unknown> {
  const ip = getClientIP(request);
  const cf = (request.cf || {}) as CfProperties;

  return {
    ip,
    ipVersion: isIPv4(ip) ? "IPv4" : isIPv6(ip) ? "IPv6" : "unknown",
    country: cf.country || null,
    countryIsEU: cf.isEUCountry === "1",
    city: cf.city || null,
    continent: cf.continent || null,
    latitude: cf.latitude || null,
    longitude: cf.longitude || null,
    postalCode: cf.postalCode || null,
    region: cf.region || null,
    regionCode: cf.regionCode || null,
    timezone: cf.timezone || null,
    asn: cf.asn || null,
    organization: cf.asOrganization || null,
    colo: cf.colo || null,
    httpProtocol: cf.httpProtocol || null,
    tlsVersion: cf.tlsVersion || null,
    tlsCipher: cf.tlsCipher || null,
  };
}

/**
 * Handle /ip endpoint - returns any IP
 */
export function handleIP(request: Request): Response {
  const ip = getClientIP(request);
  return textResponse(ip);
}

/**
 * Handle /ipv4 endpoint
 */
export function handleIPv4(request: Request): Response {
  const ip = getClientIP(request);

  if (!isIPv4(ip)) {
    return errorResponse("IPv4 address not available. You are using IPv6.", 404);
  }

  return textResponse(ip);
}

/**
 * Handle /ipv6 endpoint
 */
export function handleIPv6(request: Request): Response {
  const ip = getClientIP(request);

  if (!isIPv6(ip)) {
    return errorResponse("IPv6 address not available. You are using IPv4.", 404);
  }

  return textResponse(ip);
}

/**
 * Handle /json endpoint
 */
export function handleJSON(request: Request): Response {
  const info = getAllClientInfo(request);
  return jsonResponse(info);
}
