import React from "react";
import Box from "@material-ui/core/Box";
import {
  SettingContainer,
  DefaultTitle,
  SelectButtonGroupView,
  SettingPrimaryButton,
  BorderTitleView,
  SettingLinkButton,
} from "@solidoc/setting";

/**
 * @param SchemeAndPayment 方案与付款
 * @returns
 */

function SchemeAndPayment() {
  return (
    <SettingContainer>
      <DefaultTitle>付款方式</DefaultTitle>
      <Box height={20} />
      <SelectButtonGroupView
        data={[
          {
            text: "无保存的付款方式",
            des: "保存您的付款方式以获得更便捷的支付体验",
          },
        ]}
      >
        <SettingPrimaryButton
          onClick={(item) => {
            console.log(item);
          }}
        >
          添加付款方式
        </SettingPrimaryButton>
      </SelectButtonGroupView>
      <Box height={20} />
      <DefaultTitle>交易记录</DefaultTitle>
      <Box height={40} />
      <BorderTitleView
        text={
          <span>
            "喂，喂！想兑换 Discord 秘钥吗？我们已经将其移入了"
            <SettingLinkButton href={"https://www.baidu.com/"}>
              您的游戏库
            </SettingLinkButton>
          </span>
        }
      ></BorderTitleView>
    </SettingContainer>
  );
}

export { SchemeAndPayment };
