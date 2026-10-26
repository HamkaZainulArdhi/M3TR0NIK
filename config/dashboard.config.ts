export type DashboardId =
  | 'demo1'
  | 'demo2'
  | 'demo3'
  | 'demo4'
  | 'demo5'
  | 'demo6'
  | 'demo7'
  | 'demo8'
  | 'demo9'
  | 'demo10';

export type DashboardPageId = 'demo1' | 'demo2' | 'demo3' | 'demo4' | 'demo5';

export const DASHBOARD_IDS: DashboardId[] = [
  'demo1',
  'demo2',
  'demo3',
  'demo4',
  'demo5',
  'demo6',
  'demo7',
  'demo8',
  'demo9',
  'demo10',
];

export const DEFAULT_DASHBOARD: DashboardId = 'demo3';

/**
 * Select the active dashboard with NEXT_PUBLIC_DASHBOARD (for example demo3),
 * or change DEFAULT_DASHBOARD above. No other files need to be edited.
 */
export const ACTIVE_DASHBOARD: DashboardId = DASHBOARD_IDS.includes(
  process.env.NEXT_PUBLIC_DASHBOARD as DashboardId,
)
  ? (process.env.NEXT_PUBLIC_DASHBOARD as DashboardId)
  : DEFAULT_DASHBOARD;

/**
 * Demo6-10 reuse the dashboard content from Demo2/3/4 while keeping their own
 * layout chrome. The mapping mirrors the original Metronic demo switcher.
 */
export const DASHBOARD_PAGE_BY_ID: Record<DashboardId, DashboardPageId> = {
  demo1: 'demo1',
  demo2: 'demo2',
  demo3: 'demo3',
  demo4: 'demo4',
  demo5: 'demo5',
  demo6: 'demo4',
  demo7: 'demo2',
  demo8: 'demo4',
  demo9: 'demo2',
  demo10: 'demo3',
};
