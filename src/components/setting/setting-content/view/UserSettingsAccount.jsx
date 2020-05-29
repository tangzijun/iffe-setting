import React from "react";
import Box from "@material-ui/core/Box";
import {
  SmallTitle,
  SettingPrimaryButton,
  SettingContainer,
  DefaultTitle,
  SettingUserInfoView,
} from "@solidoc/setting";

/** 我的账户
 * @param UserSettingsAccount 我的账户
 * @returns
 */

const handleEditorAccount = (item) => {
  console.log(item);
};
const handleOpenDualAuthentication = (item) => {
  alert(item);
};
function UserSettingsAccount() {
  return (
    <SettingContainer>
      <DefaultTitle>我的账号</DefaultTitle>
      <Box height={20} />
      <SettingUserInfoView
        url={
          "http://img0.imgtn.bdimg.com/it/u=2897236439,4117628495&fm=26&gp=0.jpg"
        }
        text={"码萌"}
        code={"#4753"}
        desc={"guokaigdg@gmail.com"}
        onClick={handleEditorAccount}
      ></SettingUserInfoView>
      <Box height={60} />
      <DefaultTitle>双重认证</DefaultTitle>
      <Box height={20} />
      <SmallTitle>
        使用额外的安全手段保护您的 Discord 帐户。一旦配置完毕，每次登陆时您
        都需要同时输入密码和手机应用上生成的双重认证代码。
      </SmallTitle>
      <Box height={28} />
      <SettingPrimaryButton onClick={handleOpenDualAuthentication}>
        开启双重认证
      </SettingPrimaryButton>
    </SettingContainer>
  );
}

export { UserSettingsAccount };
