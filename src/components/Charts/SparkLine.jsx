import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { currentColor, id, type, height, width, data, color, valueType } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        type={type}
        dataSource={data}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : показатель ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
        xName='x'
        yName='yval'
        valueType={valueType}
        markerSettings={{ visible: ['All'], size: 2.5, fill: color }}
        border={{ color: color, width: 2 }}
        fill={currentColor}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent >
    )
  }
}

export default SparkLine