// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BarChartComponent } from './bar-chart.component';

export default {
  title: 'Example/BarChart',
  component: BarChartComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
