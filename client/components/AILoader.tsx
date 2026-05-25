"use client";

import { motion } from "framer-motion";

export default function AILoader() {
  return (
    <div className="glass rounded-3xl p-6 overflow-hidden relative border border-cyan-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-indigo-500/10 to-transparent animate-pulse" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-cyan-400 text-sm tracking-widest">
              AI ENGINE STATUS
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Autonomous Infrastructure Monitoring
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-green-400 text-sm">
              ACTIVE
            </span>
          </div>
        </div>

        {/* AI Progress Bars */}
        <div className="space-y-5">
          {[
            "Analyzing Infrastructure Signals",
            "Correlating System Anomalies",
            "Generating Root Cause Analysis",
          ].map((task, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-300 text-sm">
                  {task}
                </p>

                <span className="text-cyan-300 text-xs">
                  {95 + i}%
                </span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${95 + i}%`,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-full bg-linear-to-r from-cyan-400 to-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
            <p className="text-slate-400 text-xs">
              INCIDENTS ANALYZED
            </p>

            <h3 className="text-2xl font-bold mt-2">
              142
            </h3>
          </div>

          <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
            <p className="text-slate-400 text-xs">
              AI SUCCESS RATE
            </p>

            <h3 className="text-2xl font-bold mt-2 text-green-400">
              98%
            </h3>
          </div>

          <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
            <p className="text-slate-400 text-xs">
              AUTO REMEDIATIONS
            </p>

            <h3 className="text-2xl font-bold mt-2 text-cyan-400">
              64
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}