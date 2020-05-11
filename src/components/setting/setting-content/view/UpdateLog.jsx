import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
} from "solidoc-base-component-lib";
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
        <SwitchButton />
      </SelectButtonGroupView>
      <SelectButtonGroupView
        data={[
          {
            text: "开启桌面通知",
          },
        ]}
      >
        <SwitchButton />
      </SelectButtonGroupView>
    </SettingContainer>
  );
}

export { UpdateLog };
