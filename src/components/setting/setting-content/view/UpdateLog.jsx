import React from "react";
import {
  SelectButtonGroupView,
  SettingSwitchButton,
  SettingContainer,
  DefaultTitle,
} from "@solidoc/setting";
import Box from "@material-ui/core/Box";

/**
 * @param UpdateLog 更新日志
 * @returns
 */

function UpdateLog() {
  return (
    <SettingContainer>
      <DefaultTitle>更新日志</DefaultTitle>
      <Box height={20} />
      <SelectButtonGroupView
        data={[
          {
            text: "开启桌面通知",
          },
        ]}
      >
        <SettingSwitchButton />
      </SelectButtonGroupView>
      <SelectButtonGroupView
        data={[
          {
            text: "开启桌面通知",
          },
        ]}
      >
        <SettingSwitchButton />
      </SelectButtonGroupView>
    </SettingContainer>
  );
}

export { UpdateLog };
