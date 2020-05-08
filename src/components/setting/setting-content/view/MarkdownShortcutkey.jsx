import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
} from "solidoc-base-component-lib";
import Box from "@material-ui/core/Box";
/**
 * @param MarkdownShortcutkey Markdown快捷键
 * @returns
 */

function MarkdownShortcutkey() {
  return (
    <SettingContainer>
      <DefaultTitle>Markdown快捷键</DefaultTitle>
      <Box height={20} />
      <SelectButtonGroupView
        data={[
          {
            text: "Markdown ------开启桌面通知",
          },
        ]}
      >
        <SwitchButton />
      </SelectButtonGroupView>
    </SettingContainer>
  );
}

export { MarkdownShortcutkey };