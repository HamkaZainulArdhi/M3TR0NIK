'use client';

import dynamic from 'next/dynamic';
import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { Dribbble, Mail } from 'lucide-react';
import { Connections } from '@/app/(protected)/public-profile/profiles/default/components/connections';
import { Contributions } from '@/app/(protected)/public-profile/profiles/default/components/contributions';
import { Projects } from '@/app/(protected)/public-profile/profiles/default/components/projects';
import { Tags } from '@/app/(protected)/public-profile/profiles/default/components/tags';
import { Highlights } from './components/highlights';
import { Locations } from './components/locations';
import { Network } from './components/network';
import type { INetworkItems } from './components/network';
import { OpenJobs } from './components/open-jobs';
import { Statistics } from './components/statistics';
import type { IStatisticsItems } from './components/statistics';

const CompanyProfile = dynamic(
  () => import('./components/company-profile').then((module) => module.CompanyProfile),
  { ssr: false },
);

export function ProfileCompanyContent() {
  const items: IStatisticsItems = [
    { number: '624', label: 'Employees' },
    { number: '60.7M', label: 'Users' },
    { number: '369M', label: 'Revenue' },
    { number: '27', label: 'Company Rank' },
  ];

  const data: INetworkItems = [
    { icon: Dribbble, link: 'https://duolingo.com' },
    { icon: Mail, link: 'info@duolingo.com' },
    { icon: RiFacebookCircleLine, link: 'duolingo' },
    { icon: RiTwitterXLine, link: 'duolingo-news' },
    { icon: RiYoutubeLine, link: 'duolingo-tuts' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1 lg:col-span-3">
        <Statistics items={items} />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Highlights />
          <OpenJobs />
          <Network title="Network" data={data} />
          <Tags title="Tags" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CompanyProfile />
          <Locations />
          <Projects />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <Connections title="Members" />
            <Contributions title="Investments" />
          </div>
        </div>
      </div>
    </div>
  );
}
