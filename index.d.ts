/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/** The different HTTP methods  */
export const enum Methods {
  GET = 0,
  POST = 1,
  PUT = 2,
  PATCH = 3,
  DELETE = 4
}
/**
 * Use this to register a new route in the server, the callback function will be called
 * once the endpoint has been hit. The callback includes a RequestBlob which has all the methods
 * needed to get the information from the request
 */
export function newRoute(route: string, method: Methods, callback: (result: RequestBlob) => void): void
/**
 * Adds a handler for the a GET request
 * once the endpoint has been hit. The callback includes a RequestBlob which has all the methods
 * needed to get the information from the request
 */
export function get(route: string, method: Methods, callback: (result: RequestBlob) => void): void
/**
 * Adds a handler for the a POST request
 * once the endpoint has been hit. The callback includes a RequestBlob which has all the methods
 * needed to get the information from the request
 */
export function post(route: string, method: Methods, callback: (result: RequestBlob) => void): void
/**
 * Adds a handler for the a PUT request
 * once the endpoint has been hit. The callback includes a RequestBlob which has all the methods
 * needed to get the information from the request
 */
export function put(route: string, method: Methods, callback: (result: RequestBlob) => void): void
/**
 * Adds a handler for the a PATCH request
 * once the endpoint has been hit. The callback includes a RequestBlob which has all the methods
 * needed to get the information from the request
 */
export function patch(route: string, method: Methods, callback: (result: RequestBlob) => void): void
/**
 * This is called to start the server the address will need to include the IP and port
 * e.g. localhost:8080
 */
export function start(address: string): void
export class RequestBlob {
  /** This needs to be called at the end of every request even if nothing is returned */
  sendText(response: string): void
  /** This needs to be called at the end of every request even if nothing is returned */
  sendBytesText(response: Buffer): void
  /** This needs to be called at the end of every request even if nothing is returned */
  sendObject(response: any): void
  /**
   * Get the url parameters as an object with each key and value
   * this will only be null if an error has occurred
   */
  getParams(): Record<string, string> | null
  /**
   * Get the url parameters as an object with each key and value
   * this will only be null if an error has occurred
   */
  headerLength(): number
  /**
   * Get the url parameters as an object with each key and value
   * this will only be null if an error has occurred
   */
  getHeader(name: string): string | null
  /** Retrieve the raw body bytes in a Uint8Array to be used */
  getBody(): Uint8Array
}
