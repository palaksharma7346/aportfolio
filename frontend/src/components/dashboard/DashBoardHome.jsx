import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "../../services/dashboardServices";

import AnalyticsCard from "./AnalyticsCard";

const DashboardHome = () => {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const data =
            await getDashboardStats();

          setStats(data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchStats();
  }, []);

  return (
    <div className="w-full max-w-[900px] overflow-hidden">
      {/* TITLE */}
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between overflow-hidden">

        <div>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Dashboard Overview
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Monitor your portfolio statistics
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        <AnalyticsCard
          title="Total Projects"
          value={
            stats?.totalProjects || 0
          }
        />

        <AnalyticsCard
          title="Portfolio Views"
          value="1.2K"
        />

        <AnalyticsCard
          title="Latest Project"
          value={
            stats?.latestProject
              ?.title || "No Projects"
          }
        />

      </div>

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-8">

        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          Recent Activity
        </h2>

        {stats?.latestProject ? (
          <div className="flex flex-col gap-4 rounded-2xl bg-slate-800 p-5 md:flex-row md:items-center md:justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                Added New Project
              </h3>

              <p className="mt-2 text-slate-400 break-words">
                {
                  stats.latestProject
                    .title
                }
              </p>
            </div>

            <p className="text-cyan-400">
              Recently Added
            </p>

          </div>
        ) : (
          <p className="text-slate-400">
            No recent activity
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;