/**
 * TRANSIT — CyberCrowd
 *
 * Access Surface Worker
 *
 * ONE JOB:
 * Expose the declared TRANSIT access-surface structure.
 *
 * This worker does not:
 * - execute transit operations
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform access surfaces
 * - enrich metadata
 * - create relationships
 * - transfer ownership
 *
 * It only exposes the declared TRANSIT access surface.
 */

export default {
  async fetch() {
    return Response.json({
      transit: {
        movement: "TRANSIT-MOVEMENT",
        identity: "TRANSIT-IDENTITY",
        continuity: "TRANSIT-CONTINUITY",
        evidence: "TRANSIT-EVIDENCE",
      },
    });
  },
};
