/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { VerificationStatusDetail } from "./verificationStatusDetail"
import type { VerificationStatusLoginIsOrganization } from "./verificationStatusLoginIsOrganization"
import type { VerificationStatusLoginName } from "./verificationStatusLoginName"
import type { VerificationStatusLoginProvider } from "./verificationStatusLoginProvider"
import type { VerificationStatusMethod } from "./verificationStatusMethod"
import type { VerificationStatusTimestamp } from "./verificationStatusTimestamp"
import type { VerificationStatusWebsite } from "./verificationStatusWebsite"

export interface VerificationStatus {
  detail?: VerificationStatusDetail
  login_is_organization?: VerificationStatusLoginIsOrganization
  login_name?: VerificationStatusLoginName
  login_provider?: VerificationStatusLoginProvider
  method?: VerificationStatusMethod
  timestamp?: VerificationStatusTimestamp
  verified: boolean
  website?: VerificationStatusWebsite
}
