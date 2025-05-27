type StarChartProps = {
    x: number;
};

type ChartController = {
    transform: (x: number, y: number, dx: number, dy: number, scale: number, angle: number) => void;
    setLocation: (phi: number, theta: number, scale: number) => void;
    update: () => void;
};

export type { StarChartProps, ChartController };