import React from "react";
import Box from "@material-ui/core/Box";
import {
  SelectButtonGroupView,
  SettingSwitchButton,
  SettingContainer,
  DefaultTitle,
  DesTitle,
  SettingBoxRadioButtonGroupView,
  SettingCheckbox,
  SettingSlider,
} from "@solidoc/setting";
/**
 * @param Theme 外观 主题
 * @returns
 */

function Theme() {
  return (
    <SettingContainer>
      <DefaultTitle>外观</DefaultTitle>
      <Box height={20} />
      <SelectButtonGroupView data={[{ text: "开启桌面通知" }]}>
        <SettingSwitchButton />
      </SelectButtonGroupView>
      <Box m={3} />
      <DesTitle>主题</DesTitle>
      <SettingBoxRadioButtonGroupView
        data={[
          {
            text: "黑暗",
          },
          {
            text: "明亮",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <Box m={3} />
      <DesTitle>消息类型</DesTitle>
      <SettingBoxRadioButtonGroupView
        data={[
          {
            text: "舒适型：简单高效的现代化风格。",
          },
          {
            text: "紧凑型：在一个窗口内显示尽可能多的消息，IRC 模式。",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <Box m={3} />
      <DesTitle>聊天字体缩放</DesTitle>
      <SettingSlider />
      <Box m={3} />
      <SettingCheckbox onClick={(item) => console.log(item)}>
        与电脑同
      </SettingCheckbox>
    </SettingContainer>
  );
}

export { Theme };
