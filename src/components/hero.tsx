"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { triggerCvViewAndDownload } from "./CvModal";

const WAVE_VARIANTS = [
  {
    path: "M0,45 Q30,10 60,35 T120,20 T180,40 T240,15 T300,28 L320,25",
    fill: "M0,45 Q30,10 60,35 T120,20 T180,40 T240,15 T300,28 L320,25 L320,60 L0,60 Z",
  },
  {
    path: "M0,42 Q30,15 60,30 T120,18 T180,36 T240,12 T300,32 L320,22",
    fill: "M0,42 Q30,15 60,30 T120,18 T180,36 T240,12 T300,32 L320,22 L320,60 L0,60 Z",
  },
  {
    path: "M0,47 Q30,8 60,38 T120,23 T180,42 T240,18 T300,26 L320,28",
    fill: "M0,47 Q30,8 60,38 T120,23 T180,42 T240,18 T300,26 L320,28 L320,60 L0,60 Z",
  },
  {
    path: "M0,44 Q30,12 60,33 T120,16 T180,38 T240,14 T300,29 L320,24",
    fill: "M0,44 Q30,12 60,33 T120,16 T180,38 T240,14 T300,29 L320,24 L320,60 L0,60 Z",
  },
];

function getWaveY(x: number) {
  const norm = (x / 320) * 4 * Math.PI;
  const y = 30 + Math.sin(norm) * 16 + Math.cos(norm * 0.7) * 8;
  return Math.max(12, Math.min(50, y));
}

export default function Hero() {
  const { identity, hero } = portfolioData;
  const { telemetry } = hero;

  const [waveIdx, setWaveIdx] = useState(0);
  const [liveLatency, setLiveLatency] = useState(
    telemetry.baseLatencyMs.toFixed(1)
  );
  const [metricValues, setMetricValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      telemetry.metrics.map((m) => [
        m.id,
        `${m.decimals > 0 ? m.target.toFixed(m.decimals) : m.target}${m.unit}`,
      ])
    )
  );

  // Interactive scrub state
  const chartBoxRef = useRef<HTMLDivElement>(null);
  const [scrubState, setScrubState] = useState<{
    visible: boolean;
    svgX: number;
    svgY: number;
    tooltipX: number;
    tooltipY: number;
    latency: string;
  }>({
    visible: false,
    svgX: 180,
    svgY: 40,
    tooltipX: 140,
    tooltipY: 10,
    latency: "14.1 ms",
  });

  const runAllCounters = useCallback(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setMetricValues(
        Object.fromEntries(
          telemetry.metrics.map((m) => [
            m.id,
            `${m.decimals > 0 ? m.target.toFixed(m.decimals) : m.target}${m.unit}`,
          ])
        )
      );
      setLiveLatency(telemetry.baseLatencyMs.toFixed(1));
      return;
    }

    const startTime = performance.now();
    const duration = 1500;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      const nextMetrics: Record<string, string> = {};
      for (const m of telemetry.metrics) {
        const current = m.startValue + (m.target - m.startValue) * ease;
        const formatted =
          m.decimals > 0 ? current.toFixed(m.decimals) : Math.round(current);
        nextMetrics[m.id] = `${formatted}${m.unit}`;
      }
      setMetricValues(nextMetrics);

      const latCurrent =
        28.5 + (telemetry.baseLatencyMs - 28.5) * Math.min(elapsed / 1200, 1);
      setLiveLatency(latCurrent.toFixed(1));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [telemetry]);

  useEffect(() => {
    runAllCounters();
  }, [runAllCounters]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      const delta = Math.random() * 0.3 - 0.15;
      setLiveLatency((telemetry.baseLatencyMs + delta).toFixed(1));
      setWaveIdx((prev) => (prev + 1) % WAVE_VARIANTS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [telemetry.baseLatencyMs]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = chartBoxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const xPercent = Math.max(0, Math.min(1, clientX / rect.width));
    const svgX = xPercent * 320;
    const svgY = getWaveY(svgX);
    const simulatedLatency = (13.8 + (1 - svgY / 60) * 2.2).toFixed(1);

    const tooltipX = Math.min(rect.width - 75, Math.max(10, clientX - 35));
    const tooltipY = Math.max(6, (svgY / 60) * rect.height - 28);

    setScrubState({
      visible: true,
      svgX,
      svgY,
      tooltipX,
      tooltipY,
      latency: `${simulatedLatency} ms`,
    });
  };

  const handleMouseLeave = () => {
    setScrubState((prev) => ({ ...prev, visible: false }));
  };

  const currentWave = WAVE_VARIANTS[waveIdx];

  return (
    <section className="relative w-full overflow-hidden pb-space-3xl pt-space-xl">
      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-secondary-container/40 via-surface-container-high/30 to-transparent blur-3xl rounded-full -z-10" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-[480px] h-[480px] bg-secondary-fixed/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm mb-space-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-label-md text-label-md text-primary font-medium tracking-wide">
            {identity.availabilityStatus}
          </span>
        </div>

        {/* Hero Main Layout: Split 7 / 5 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="material-symbols-outlined text-secondary text-lg">
                waves
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-display-mobile md:text-display text-primary tracking-tight mb-space-md">
              {identity.name}
            </h1>

            <p className="font-headline-md text-headline-lg-mobile md:text-headline-md text-primary-container leading-tight mb-space-md font-semibold">
              {hero.headline}
            </p>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-xl">
              {hero.description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-space-md">
              <a
                className="inline-flex items-center gap-space-sm px-space-xl py-space-sm rounded-lg bg-primary-container text-on-primary hover:bg-tertiary-container transition-all shadow-[0_8px_20px_rgba(6,59,99,0.22)] font-label-lg text-label-lg group"
                href="#projects"
              >
                <span>Explore My Work</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded-lg bg-surface-container-low/90 backdrop-blur-md text-primary hover:bg-secondary-container hover:text-on-secondary-fixed transition-all font-label-lg text-label-lg shadow-sm"
                href="#contact"
              >
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                <span>Get In Touch</span>
              </a>
              <button
                type="button"
                onClick={triggerCvViewAndDownload}
                className="inline-flex items-center gap-space-xs px-space-md py-space-sm text-primary hover:text-secondary transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined text-base">
                  description
                </span>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Telemetry & Substrate Glass Card */}
          <div className="lg:col-span-5 relative group/card">
            {/* Subtle Outer Ambient Edge Glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary-fixed/40 via-secondary-container/20 to-primary-fixed/30 blur-xl opacity-60 group-hover/card:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Glass Architecture Card */}
            <div className="w-full rounded-xl bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_20px_45px_-12px_rgba(6,59,99,0.12)] p-space-lg flex flex-col gap-space-md border border-white/60">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container/60">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
                  <span className="ml-space-xs font-label-sm text-label-sm text-on-surface-variant font-mono">
                    {telemetry.daemonName}
                  </span>
                </div>

                {/* Dynamic Beacon Stream Live Pill */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed border border-secondary/20 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase">
                    STREAM LIVE
                  </span>
                  <button
                    type="button"
                    aria-label="Replay telemetry stream animation"
                    onClick={runAllCounters}
                    className="text-on-surface-variant hover:text-secondary transition-colors ml-0.5 inline-flex items-center"
                    title="Replay Telemetry Surge"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      refresh
                    </span>
                  </button>
                </div>
              </div>

              {/* Visual Interactive Waveform / Vector Plane */}
              <div
                ref={chartBoxRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-28 rounded-lg bg-surface-container-low p-space-sm flex flex-col justify-between overflow-hidden relative border border-surface-container group/wave cursor-crosshair"
              >
                {/* Top Substrate Status Row with Live Fluctuating Milliseconds */}
                <div className="flex justify-between items-center z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      insights
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      {telemetry.substrateTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur-sm border border-secondary/20 shadow-xs">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-secondary font-bold font-mono tracking-tight transition-all duration-300">
                      {liveLatency}
                    </span>
                    <span className="text-on-surface-variant text-[10px]">
                      ms avg
                    </span>
                  </div>
                </div>

                {/* SVG Dynamic Waveform with animated stroke & gradient */}
                <div className="relative w-full h-14 my-auto">
                  <svg
                    className="w-full h-full text-secondary overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 320 60"
                  >
                    <defs>
                      <linearGradient
                        id="oceanicWaveGrad"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#00696b"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="65%"
                          stopColor="#72f6f9"
                          stopOpacity="0.12"
                        />
                        <stop
                          offset="100%"
                          stopColor="#72f6f9"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                      <filter
                        filterUnits="userSpaceOnUse"
                        height="140%"
                        id="glow"
                        width="140%"
                        x="-20%"
                        y="-20%"
                      >
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="2"
                        />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Area fill */}
                    <path
                      className="transition-all duration-500"
                      d={currentWave.fill}
                      fill="url(#oceanicWaveGrad)"
                    />

                    {/* Base continuous flowing trace line */}
                    <path
                      className="wave-stream-line opacity-40"
                      d={currentWave.path}
                      fill="none"
                      stroke="#72f6f9"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />

                    {/* Main glowing dynamic wave line */}
                    <path
                      className="transition-all duration-300"
                      d={currentWave.path}
                      fill="none"
                      filter="url(#glow)"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />

                    {/* Dynamic Pinging Wave Nodes */}
                    <g className="pointer-events-none">
                      <circle
                        className="animate-ping"
                        cx="120"
                        cy="20"
                        fill="#72f6f9"
                        opacity="0.6"
                        r="4"
                      />
                      <circle
                        cx="120"
                        cy="20"
                        fill="#00696b"
                        r="3"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                      <circle
                        className="animate-ping"
                        cx="240"
                        cy="15"
                        fill="#72f6f9"
                        opacity="0.6"
                        r="4"
                      />
                      <circle
                        cx="240"
                        cy="15"
                        fill="#00696b"
                        r="3"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Interactive Scrub Indicator */}
                    <g
                      className={`transition-opacity duration-200 pointer-events-none ${
                        scrubState.visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <line
                        stroke="#00696b"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1={scrubState.svgX}
                        x2={scrubState.svgX}
                        y1="0"
                        y2="60"
                      />
                      <circle
                        cx={scrubState.svgX}
                        cy={scrubState.svgY}
                        fill="#72f6f9"
                        opacity="0.6"
                        r="6"
                      />
                      <circle
                        cx={scrubState.svgX}
                        cy={scrubState.svgY}
                        fill="#002542"
                        r="3.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>

                  {/* Live Scrub Floating Tooltip */}
                  <div
                    style={{
                      left: `${scrubState.tooltipX}px`,
                      top: `${scrubState.tooltipY}px`,
                    }}
                    className={`pointer-events-none absolute bg-primary text-on-primary text-[10px] font-mono px-2 py-0.5 rounded shadow-lg transition-opacity duration-150 z-20 flex items-center gap-1 border border-secondary-fixed/30 whitespace-nowrap ${
                      scrubState.visible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-secondary-fixed">p95:</span>
                    <span className="font-bold text-white">
                      {scrubState.latency}
                    </span>
                  </div>
                </div>

                {/* Wave Status Footer */}
                <div className="flex justify-between items-center z-10 pt-1 pointer-events-none font-label-sm text-[10px] text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    t-00:00:00
                  </span>
                  <span className="text-secondary">
                    Scrub waveform to sample nodes
                  </span>
                  <span>60 Hz pipeline</span>
                </div>
              </div>

              {/* Key Metric Counters Grid */}
              <div className="grid grid-cols-3 gap-space-sm">
                {telemetry.metrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="metric-card group/metric rounded-lg bg-surface-container-low hover:bg-surface-container-lowest p-space-sm flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-secondary/40 cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="inline-flex items-center text-[10px] text-secondary opacity-0 group-hover/metric:opacity-100 transition-opacity font-mono font-semibold bg-secondary-fixed/30 px-1 rounded">
                        {metric.badge}
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold mt-1 font-mono tracking-tight">
                      {metricValues[metric.id]}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">
                      {metric.sublabel}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live Stack Ticker with pulse signal */}
              <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant border-t border-surface-container/60">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary animate-pulse">
                    memory
                  </span>
                  <span>Active Substrate</span>
                </span>
                <span className="text-primary font-semibold flex items-center gap-1 font-mono text-xs">
                  {telemetry.activeStack.map((item, idx) => (
                    <React.Fragment key={item}>
                      {idx > 0 && <span className="text-secondary">•</span>}
                      <span>{item}</span>
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
