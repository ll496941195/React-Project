/**
 * @file components/chart/Pie.js
 *  饼图
 */

import 'echarts/lib/chart/pie';

import ChartBase from './ChartBase';

export default class pie extends ChartBase {
  static defaultProps = {
    type: 'Pie',
  }
}
