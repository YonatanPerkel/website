/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { WebsiteVerificationResultDetail } from "./websiteVerificationResultDetail"
import type { WebsiteVerificationResultStatusCode } from "./websiteVerificationResultStatusCode"

export interface WebsiteVerificationResult {
  detail?: WebsiteVerificationResultDetail
  status_code?: WebsiteVerificationResultStatusCode
  verified: boolean
}