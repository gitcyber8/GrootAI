"use client";

interface Props {
  title: string;
  severity: string;
  service: string;
  status: string;
  confidence: number;
  aiAnalysis?: string;
}

export default function IncidentCard({
  title,
  severity,
  service,
  status,
  confidence,
  aiAnalysis,
}: Props) {
  return (
    <div className="glass rounded-3xl p-5 border border-white/10">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-slate-400 mt-1">
            {service}
          </p>
        </div>

        <div
          className={`px-3 py-1 rounded-full text-sm ${
            severity === "Critical"
              ? "bg-red-500/20 text-red-400"
              : severity === "High"
              ? "bg-orange-500/20 text-orange-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {severity}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <div className="bg-black/30 px-4 py-2 rounded-xl">
          <p className="text-xs text-slate-400">
            STATUS
          </p>

          <p className="text-green-400">
            {status}
          </p>
        </div>

        <div className="bg-black/30 px-4 py-2 rounded-xl">
          <p className="text-xs text-slate-400">
            AI CONFIDENCE
          </p>

          <p className="text-cyan-400">
            {confidence}%
          </p>
        </div>
      </div>

      {aiAnalysis && (
        <div className="mt-5 bg-black/20 rounded-2xl p-4">
          <p className="text-sm text-slate-300 leading-7">
            {aiAnalysis}
          </p>
        </div>
      )}
    </div>
  );
}

