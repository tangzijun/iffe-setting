import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
  BorderTitleView,
  SettingLinkButton,
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
            text: "Markdown 开启桌面通知",
          },
        ]}
      >
        <SwitchButton />
      </SelectButtonGroupView>
      <Box height={40} />
      <BorderTitleView
        desc={"这里是描述标题"}
        text={
          <>
            <div>使用您常用的推流工具dashudasufasf</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              查看
              <SettingLinkButton href={"https://www.baidu.com/"}>
                Discord StreamKit
              </SettingLinkButton>
            </div>
          </>
        }
        url={"https://discord.com/assets/616e078b351d0df460971441949c53a3.svg"}
      ></BorderTitleView>
    </SettingContainer>
  );
}

export { MarkdownShortcutkey };
