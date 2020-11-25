import { Component, OnInit, Optional } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  config = {};
  option = {
    // title: {
    //   text: '某站点用户访问来源',
    //   subtext: '纯属虚构',
    //   left: 'center',
    // },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{a} <br/>{b} : {c} ({d}%)',
    // },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };

  ngOnInit(): void {
    this._initChart();
  }

  private _initChart() {
    const chart = echarts.init(document.querySelector('#bar-chart'));
    chart.setOption(this.option);
  }
}
