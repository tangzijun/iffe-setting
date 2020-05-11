import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
  BorderTitleView,
  SettingLinkButton,
  SettingDivider,
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
      <Box height={20} />
      <BorderTitleView
        text={
          <span>
            "喂，喂！想兑换 Discord 秘钥吗？我们已经将其移入了"
            <SettingLinkButton href={"https://www.baidu.com/"}>
              您的游戏库
            </SettingLinkButton>
          </span>
        }
        desc={"这里是描述标题"}
      ></BorderTitleView>
      <Box height={20} />
      <BorderTitleView
        text={
          <span>
            "喂，喂！想兑换 Discord 秘钥吗？我们已经将其移入了" 您的游戏库
          </span>
        }
        desc={"这里是描述标题"}
      ></BorderTitleView>

      <Box height={40} />
      <SettingDivider />
      <Box height={40} />
      <SettingDivider> 默认 </SettingDivider>
      <Box height={40} />
      <SettingDivider orientation={"center"}>
        adasdasdasdasdasdasd
      </SettingDivider>
      <Box height={40} />
      <SettingDivider orientation={"left"}>leftadasdasdasdasda</SettingDivider>
      <Box height={40} />
      <SettingDivider orientation={"right"}>rightdasdasdasdasda</SettingDivider>
    </SettingContainer>
  );
}

export { ShortcutKey };
