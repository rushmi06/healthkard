/* App.js */
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import withTheme from '../../theme/Theme'
import './style.css'
import { dataPoints as defaultDataPoints } from './constants';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph({ title = 'User data', yLabel = 'Value', dataPoints, loading, theme }) {
    const options = {
        animationEnabled: true,
        theme: theme.text !== '#000' ? 'dark2' : 'light2',
        title: {
            text: title
        },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: yLabel,
            valueFormatString: "0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function (e) {
                    return CanvasJS.formatNumber(e.value, "0");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "0",
            dataPoints: dataPoints || defaultDataPoints
        }]
    }

    return (
        <div>
            { loading ? <div>Loading...</div> :
                <CanvasJSChart options={ options }
                /* onRef={ref => this.chart = ref} */
                />
            }
        </div>
    );
}

export default withTheme(Graph)
