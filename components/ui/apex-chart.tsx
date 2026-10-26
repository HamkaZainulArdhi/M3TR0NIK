'use client';

import dynamic from 'next/dynamic';

/**
 * ApexCharts touches the browser during module evaluation. Loading it only on
 * the client keeps every chart demo prerender-safe.
 */
const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export type { ApexOptions } from 'apexcharts';
export default ApexChart;
