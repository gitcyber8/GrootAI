export function generateMetrics() {
  return {
    cpu: Math.floor(Math.random() * 40) + 50,
    memory: Math.floor(Math.random() * 30) + 60,
    network: Math.floor(Math.random() * 50) + 40,
    requests: Math.floor(Math.random() * 5000) + 1000,
    latency: Math.floor(Math.random() * 300) + 50,
  };
}