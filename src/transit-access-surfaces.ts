/**
 * TRANSIT — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by TRANSIT.
 *
 * Ownership boundary:
 *
 *   TRANSIT
 *    │
 *    ├── TRANSIT-MOVEMENT
 *    ├── TRANSIT-IDENTITY
 *    ├── TRANSIT-CONTINUITY
 *    └── TRANSIT-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform transit definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the TRANSIT access-surface structure.
 */

export default {
  transit: {
    movement: "TRANSIT-MOVEMENT",
    identity: "TRANSIT-IDENTITY",
    continuity: "TRANSIT-CONTINUITY",
    evidence: "TRANSIT-EVIDENCE",
  },
};
