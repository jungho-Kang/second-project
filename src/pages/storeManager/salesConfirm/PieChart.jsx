import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "로드손님", value: 400, colors: "#8d87a0" },
  { name: "예약 주문", value: 300, colors: "#5f2cfb" },
  { name: "앉아서 주문", value: 300, colors: "#8061df" },
];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="font-medium text-xl"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${payload.name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 7}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );
  console.log(data[0].name);

  return (
    <PieChart width={800} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={250}
        cy={150}
        innerRadius={50}
        outerRadius={80}
        fill={
          data[1].name === "로드손님"
            ? "#8d87a0"
            : data[1].name === "예약 주문"
              ? "#5f2cfb"
              : data[1].name === "앉아서 주문"
                ? "#8061df"
                : "#6f4cdb"
        }
        dataKey="value"
        onMouseEnter={onPieEnter}
      ></Pie>
    </PieChart>
  );
};
export default PieChartLayout;
