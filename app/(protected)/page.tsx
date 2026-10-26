'use client';

import {
  ACTIVE_DASHBOARD,
  DASHBOARD_PAGE_BY_ID,
} from '@/config/dashboard.config';
import type { DashboardPageId } from '@/config/dashboard.config';
import { Demo1LightSidebarPage } from './components/demo1';
import { Demo2Page } from './components/demo2';
import { Demo3Page } from './components/demo3';
import { Demo4Page } from './components/demo4';
import { Demo5Page } from './components/demo5';

const PAGES: Record<DashboardPageId, typeof Demo3Page> = {
  demo1: Demo1LightSidebarPage,
  demo2: Demo2Page,
  demo3: Demo3Page,
  demo4: Demo4Page,
  demo5: Demo5Page,
};

export default function Page() {
  const PageComponent = PAGES[DASHBOARD_PAGE_BY_ID[ACTIVE_DASHBOARD]];

  return <PageComponent />;
}
