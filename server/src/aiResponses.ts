export function generateAIReply(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("cpu")
  ) {
    return `
AI Analysis:

High CPU utilization detected across Kubernetes workloads.

Possible Causes:
- Traffic spike
- Resource starvation
- Inefficient queries

Recommended Actions:
- Scale deployments
- Restart affected pods
- Enable autoscaling
    `;
  }

  if (
    text.includes("redis")
  ) {
    return `
AI Analysis:

Redis cache instability identified.

Possible Causes:
- Cache miss surge
- Memory pressure
- Connection saturation

Recommended Actions:
- Flush stale cache
- Increase Redis memory
- Enable persistence
    `;
  }

  if (
    text.includes("latency")
  ) {
    return `
AI Analysis:

API latency anomaly detected.

Potential Root Causes:
- Database contention
- Network bottlenecks
- Overloaded ingress controller

AI Recommendation:
- Enable load balancing
- Optimize DB queries
- Trigger autoscaling
    `;
  }

  if (
    text.includes("kubernetes")
  ) {
    return `
AI Analysis:

Kubernetes infrastructure degradation detected.

Potential Issues:
- Pod crash loops
- Node resource exhaustion
- Deployment instability

Recommended Remediation:
- Restart deployments
- Rebalance workloads
- Scale worker nodes
    `;
  }

  if (
    text.includes("database")
  ) {
    return `
AI Analysis:

Database performance degradation observed.

Possible Causes:
- Slow queries
- Connection pool exhaustion
- High disk latency

AI Suggested Actions:
- Optimize indexing
- Increase DB replicas
- Enable failover routing
    `;
  }

  return `
Groot AI Analysis:

Infrastructure telemetry appears stable.

AI Observations:
- Monitoring systems operational
- No critical anomalies detected
- Autonomous remediation active

Suggested Next Steps:
- Continue infrastructure monitoring
- Review observability metrics
- Validate SLA performance
  `;
}