/**
 * @file components/chart/Bar.js
 *  柱状图
 */

import 'echarts/lib/chart/bar';

import ChartBase from './ChartBase';

export default class Bar extends ChartBase {
  static defaultProps = {
    type: 'bar',
  }
}
