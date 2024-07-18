'use client'

import React from "react";
import { RadarChart, PolarAngleAxis, PolarGrid, Radar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export default function RadarchartChart(props) {
  return (
    (<div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="mx-auto aspect-square max-h-[250px]">
        <RadarChart
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 273 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        </RadarChart>
      </ChartContainer>
    </div>)
  );
}