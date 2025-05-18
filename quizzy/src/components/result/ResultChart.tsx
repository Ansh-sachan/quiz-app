import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface ResultChartProps {
  data: { label: string; value: number }[];
}

export const ResultChart = ({ data }: ResultChartProps) => (
  <div className='h-60'>
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data}>
        <XAxis dataKey='label' stroke='#555' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar
          dataKey='value'
          fill='#3B82F6'
          barSize={40}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
