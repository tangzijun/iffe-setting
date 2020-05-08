import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
} from "solidoc-base-component-lib";
import Box from "@material-ui/core/Box";

/**
 * @param ShortcutKey 快捷键
 * @returns
 */

function ShortcutKey() {
  return (
    <SettingContainer>
      <DefaultTitle>快捷键</DefaultTitle>
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
    </SettingContainer>
  );
}

export { ShortcutKey };
