import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "월",
    price: 150,
  },
  {
    name: "화",
    price: 98,
  },
  {
    name: "수",
    price: 203,
  },
  {
    name: "목",
    price: 170,
  },
  {
    name: "금",
    price: 104,
  },
  {
    name: "토",
    price: 360,
  },
  {
    name: "일",
    price: 430,
  },
];

const BarChartLayout = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="price"
          fill="#484482"
          activeBar={<Rectangle fill="#484482" stroke="#ffffff" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartLayout;
