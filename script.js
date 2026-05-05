// Script to visualize math equations using Plotly library

function plotEquation(equation) {
    // Define the x range
    let xValues = Array.from({length: 100}, (_, i) => i - 50);
    let yValues = xValues.map(x => eval(equation.replace(/x/g, x)));

    // Plotly data and layout
    const data = [{
        x: xValues,
        y: yValues,
        type: 'scatter'
    }];
    const layout = {
        title: 'Math Equation Visualization',
        xaxis: { title: 'X' },
        yaxis: { title: 'Y' }
    };

    // Render the plot
    Plotly.newPlot('plotDiv', data, layout);
}

// Example Usage: plotEquation('x*x');