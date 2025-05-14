type ChartProps = {
    x: number;
};

type GraphController = {
    transform: (x: number, y: number, dx: number, dy: number, scale: number, angle: number) => void;
    setLocation: (x: number, y: number, scale: number) => void;
    update: () => void;
};

export type { ChartProps, GraphController };