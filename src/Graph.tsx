/** 
 * Simple component for plotting graphs and curves.
 */

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@mui/material/styles';

function defaultFontColorFunction(k: number) {
    const hue = k * 37.123987567;
    return `hsl(${hue},50%,50%)`;
}

function getDomain(coordCenter: [number, number], coordRange: [number, number] | number, aspectRatio: number) {
    if (Array.isArray(coordRange))
        return [
            [coordCenter[0]-coordRange[0], coordCenter[0]+coordRange[0]],
            [coordCenter[1]-coordRange[1], coordCenter[1]+coordRange[1]]
        ];
    return [
        [coordCenter[0]-aspectRatio*coordRange, coordCenter[0]+aspectRatio*coordRange],
        [coordCenter[1]-coordRange, coordCenter[1]+coordRange]
    ];
}

/**
 * Creates a filter to make text better visible against its background.
 */
function createTextFilter(defs: d3.Selection<SVGDefsElement, unknown, null, undefined>, bgColor: string) {
    const filter = defs.append("filter")
        .attr("id", "textFilter")
        .attr("x", "-10%")
        .attr("y", "-10%")
        .attr("width", "120%")
        .attr("height", "120%")
        .attr("color-interpolation-filters", "sRGB");
    
    // Dilate the text to create a thicker outline
    filter.append("feMorphology")
        .attr("operator", "dilate")
        .attr("radius", 1)
        .attr("in", "SourceAlpha")
        .attr("result", "dilated");
    
    // Flood the box with the background color
    filter.append("feFlood")
        // .attr("flood-color", "red")     // good for testing
        .attr("flood-color", bgColor)
        .attr("flood-opacity", "1")
        .attr("result", "bgColorFill");
    
    // Composite the flood color box with the blurred outline
    filter.append("feComposite")
        .attr("in", "bgColorFill")
        .attr("in2", "dilated")
        .attr("operator", "in") // Clip the flood color to the blurred outline
        .attr("result", "outline");
    
    // Merge the outline with the original text
    filter.append("feMerge")
        .selectAll("feMergeNode")
        .data(["outline", "SourceGraphic"])
        .enter()
        .append("feMergeNode")
        .attr("in", (d) => d);
}

// Helper function to draw axes
function drawAxes(
    overlayGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
    xAxis: d3.Axis<d3.NumberValue>,
    yAxis: d3.Axis<d3.NumberValue>,
    width: number,
    height: number,
    axisLabelStyle: { xText: string, yText: string, fill: string, fontSize: string, fontFamily: string, fontWeight: string }
) {
    overlayGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis)
        .call(g => g.select(".domain").attr("display", "none"));

    overlayGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis)
        .call(g => g.select(".domain").attr("display", "none"));

    // x-axis label
    overlayGroup.append('text')
        .attr('class', 'axis-label')
        .attr('x', width - 10)
        .attr('y', height - 20)
        .attr('text-anchor', 'end')
        .style('fill', axisLabelStyle.fill)
        .style('font-family', axisLabelStyle.fontFamily)
        .style('font-size', axisLabelStyle.fontSize)
        .style('font-weight', axisLabelStyle.fontWeight)
        .style("filter", "url(#textFilter)")
        .text(axisLabelStyle.xText);

    // y-axis label
    overlayGroup.append('text')
        .attr('class', 'axis-label')
        .attr('x', 0)
        .attr('y', 30)
        .attr('text-anchor', 'start')
        .style('fill', axisLabelStyle.fill)
        .style('font-family', axisLabelStyle.fontFamily)
        .style('font-size', axisLabelStyle.fontSize)
        .style('font-weight', axisLabelStyle.fontWeight)
        .style("filter", "url(#textFilter)")
        .text(axisLabelStyle.yText);
}

// Helper function to draw the legend
function drawLegend(
    overlayGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
    data: DataSet[],
    width: number,
    functionLegendStyle: { fontSize: string, fontFamily: string, fontWeight: string, fontColorBase: string }
) {
    const legend = overlayGroup.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 25}, 20)`);

    data.forEach((dataset, k) => {
        if (!dataset.legendText) return;

        legend.append('line')
            .attr('x1', 0)
            .attr('y1', 20 + k * 20)
            .attr('x2', 25)
            .attr('y2', 20 + k * 20)
            .attr('stroke', dataset.color ?? defaultFontColorFunction(k))
            .attr('stroke-width', 2 * (dataset.strokeScale ?? 1));

        legend.append('text')
            .attr('x', 0)
            .attr('y', 20 + k * 20)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'end')
            .style('fill', functionLegendStyle.fontColorBase)
            .style("filter", "url(#textFilter)")
            .text(dataset.legendText);
    });
}

// Helper function to draw the title
function drawTitle(
    overlayGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
    titleText: string,
    width: number,
    titleStyle: { fill: string, fontSize: string, fontWeight: string }
) {
    overlayGroup.append('text')
        .attr('class', 'graph-title')
        .attr('x', width / 2)
        .attr('y', 0)
        .attr('dominant-baseline', 'hanging')
        .attr('text-anchor', 'middle')
        .style('fill', titleStyle.fill)
        .style('font-size', titleStyle.fontSize)
        .style('font-weight', titleStyle.fontWeight)
        .style("filter", "url(#textFilter)")
        .text(titleText);
}

// Helper function to draw points of interest
function drawPointsOfInterest(
    poiGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
    pointsOfInterest: PointOfInterest[],
    xScale: d3.ScaleLinear<number, number>,
    yScale: d3.ScaleLinear<number, number>,
    pointOfInterestStyle: { pointSize: number; defaultPointColor: string; fontSize: string; fontFamily: string; fontWeight: string; fontColor: string; },
) {
    poiGroup.selectAll('.poi-point')
        .data(pointsOfInterest)
        .join('circle')
        .attr('class', 'poi-point')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', pointOfInterestStyle.pointSize ?? 5)
        .attr('fill', d => (d.color ?? pointOfInterestStyle.defaultPointColor));

    poiGroup.selectAll('.poi-text')
        .data(pointsOfInterest)
        .join('text')
        .attr('class', 'poi-text')
        .attr('x', d => xScale(d.x))
        .attr('y', d => yScale(d.y))
        .attr('dy', -5 - (pointOfInterestStyle.pointSize ?? 5))
        .attr('dominant-baseline', 'baseline')
        .attr('text-anchor', 'middle')
        .style('fill', pointOfInterestStyle.fontColor)
        .style('font-size', pointOfInterestStyle.fontSize)
        .style('font-family', pointOfInterestStyle.fontFamily)
        .style('font-weight', pointOfInterestStyle.fontWeight)
        .style('filter', 'url(#textFilter)')
        .text(d => d.text);
}

// Utility function to create grid lines
function createGrid(
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    x: d3.ScaleLinear<number, number>,
    y: d3.ScaleLinear<number, number>,
    width: number,
    height: number,
    axisLabelStyle: { fill: string }
) {
    g.attr('stroke', axisLabelStyle.fill)
        .attr('stroke-opacity', 0.2)
        .call(g => g
            .selectAll('.y')
            .data(y.ticks(6))
            .join(
                enter => enter.append('line').attr('class', 'y').attr('x2', width),
                update => update,
                exit => exit.remove()
            )
            .attr('y1', d => 0.5 + y(d))
            .attr('y2', d => 0.5 + y(d)))
        .call(g => g
            .selectAll('.x')
            .data(x.ticks(6))
            .join(
                enter => enter.append('line').attr('class', 'x').attr('y2', height),
                update => update,
                exit => exit.remove()
            )
            .attr('x1', d => 0.5 + x(d))
            .attr('x2', d => 0.5 + x(d)));
}

// Helper function to draw lines and points
function drawLinesAndPoints(
    graphGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
    data: DataSet[],
    lines: d3.Line<DataPoint>[],
    xScale: d3.ScaleLinear<number, number>,
    yScale: d3.ScaleLinear<number, number>
) {
    data.forEach((dataset, k) => {
        const color = dataset.color ?? defaultFontColorFunction(k);
        graphGroup.append('path')
            .datum(dataset.points)
            .attr('class', `dataset-${k}`)
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', 2 * (dataset.strokeScale ?? 1))
            .attr('d', lines[k]);

        if (dataset.showPoints) {
            graphGroup.selectAll(`circle.dataset-${k}`)
                .data(dataset.points)
                .enter()
                .append('circle')
                .attr('class', `dataset-${k}`)
                .attr('cx', d => xScale(d.x))
                .attr('cy', d => yScale(d.y))
                .attr('r', 4 * (dataset.strokeScale ?? 1))
                .attr('fill', color);
        }
    });
}

// A point of interest is a point with text
type PointOfInterest = {
    x: number;
    y: number;
    text: string;
    color?: string;
};

// One point of a graph
type DataPoint = {
    x: number;
    y: number;
};

// One graph
type DataSet = {
    points: DataPoint[];
    color?: string;
    legendText?: string;
    showPoints?: boolean;
    smoothenCurve?: boolean;
    strokeScale?: number;
};

type GraphProps = {
    data: DataSet[];
    pointsOfInterest?: PointOfInterest[];
    width?: number;
    height?: number;
    coordCenter?: [number, number];
    coordRange?: [number, number] | number;
    pointOfInterestStyle?: { pointSize: number, defaultPointColor: string, fontSize: string, fontFamily: string, fontWeight: string, fontColor: string };
    axisLabelStyle?: { xText: string, yText: string, fill: string, fontSize: string, fontFamily: string, fontWeight: string };
    functionLegendStyle?: { fontSize: string, fontFamily: string, fontWeight: string, fontColorBase: string };
    titleStyle?: { fill: string, fontSize: string, fontWeight: string };
    titleText?: string;
};

const Graph: React.FC<GraphProps> = ({ 
    data,
    pointsOfInterest = [],
    width = 600,
    height = 400,
    coordCenter = [0, 0],
    coordRange = 1,
    axisLabelStyle = { xText: 'x-Axis', yText: 'y-Axis', fill: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' },
    functionLegendStyle = { fontSize: '16px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontColorBase: 'white' },
    pointOfInterestStyle = { pointSize: 5, defaultPointColor: 'white', fontSize: '14px', fontFamily: 'Arial, sans-serif', fontWeight: 'normal', fontColor: 'white' },
    titleStyle = { fill: 'white', fontSize: '20px', fontWeight: 'bold' },
    titleText = '',
}) => {
    const theme = useTheme();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const backgroundColor = theme.palette.background.default;

    useEffect(() => {
        if (!svgRef.current) 
            return;

        const svg = d3.select(svgRef.current);

        // Clear previous content
        svg.selectAll('*').remove();

        // Define the clip path for the graph (not affecting the axes)
        const defs = svg.append('defs');
        createTextFilter(defs, backgroundColor);

        // NOTE! Order of the groups here determines draw order.
        const gridGroup = svg.append('g');
        // Graph content group
        const graphGroup = svg.append('g');
        // Group for points of interest
        const poiGroup = svg.append('g');
        const overlayGroup = svg.append('g');

        // Set up scales
        const [xDomain, yDomain] = getDomain(coordCenter, coordRange, width / height);
        const xScale = d3.scaleLinear()
            .domain(xDomain)
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain(yDomain)
            .range([height, 0]);

        // Add axes
        const xAxis = d3.axisTop(xScale).ticks(6);
        const yAxis = d3.axisRight(yScale).ticks(6);

        drawAxes(overlayGroup, xAxis, yAxis, width, height, axisLabelStyle);
        drawLegend(overlayGroup, data, width, functionLegendStyle);

        // Add a title for the graph
        if (titleText) 
            drawTitle(overlayGroup, titleText, width, titleStyle);

        drawPointsOfInterest(poiGroup, pointsOfInterest, xScale, yScale, pointOfInterestStyle);

        createGrid(gridGroup, xScale, yScale, width, height, axisLabelStyle);

        // Create the line generator
        const lines: d3.Line<DataPoint>[] = [];
        data.forEach((dataset, _) => {
            const line = d3.line<DataPoint>()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y))
                .curve(dataset.smoothenCurve ? d3.curveNatural : d3.curveLinear);
            lines.push(line);
        });
        drawLinesAndPoints(graphGroup, data, lines, xScale, yScale);
        
        // Add zoom and pan behavior
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
                const { transform } = event;

                const newXScale = transform.rescaleX(xScale);
                const newYScale = transform.rescaleY(yScale);
        
                // Update all lines
                data.forEach((_, k) => {
                    graphGroup.selectAll<SVGPathElement, DataPoint[]>(`path.dataset-${k}`)
                        .attr('d', lines[k].x(d => newXScale(d.x)).y(d => newYScale(d.y)));
                });
                
                // Update all points
                data.forEach((dataset, k) => {
                    if (dataset.showPoints) {
                        graphGroup.selectAll<SVGPathElement, DataPoint>(`circle.dataset-${k}`)
                            .attr('cx', d => newXScale(d.x))
                            .attr('cy', d => newYScale(d.y));
                    }
                });

                poiGroup.selectAll<SVGCircleElement, PointOfInterest>('.poi-point')
                    .attr('cx', d => newXScale(d.x))
                    .attr('cy', d => newYScale(d.y));
                poiGroup.selectAll<SVGTextElement, PointOfInterest>('.poi-text')
                    .attr('x', d => newXScale(d.x))
                    .attr('y', d => newYScale(d.y));
        
                // Update the axes
                overlayGroup.select<SVGGElement>('.x-axis').call(xAxis.scale(newXScale));
                overlayGroup.select<SVGGElement>('.y-axis').call(yAxis.scale(newYScale));

                // Update the grid lines
                createGrid(gridGroup, newXScale, newYScale, width, height, axisLabelStyle);
            });
        
        svg.call(zoom);
    }, [data, width, height]);

    return (
        <svg
            ref={svgRef}
            width={width}
            height={height}
            aria-label="Line Graph"
            role="img"
            style={{ margin: '40px', border: 'none' }} //'1px solid white' }}
        />
    );
};

export { Graph };