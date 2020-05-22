import React from "react";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {
  SelectButtonGroupView,
  SettingBoxRadioButtonGroupView,
  SettingSwitchButton,
  DefaultTitle,
  DesTitle,
  SmallTitle,
  SettingContainer,
  SettingDefaultButton,
  SettingLinkButton,
  BorderTitleView,
  SettingDivider,
} from "solidoc-base-component-lib";

/**
 * @param PrivacyAndSecurity 隐私与安全
 * @returns
 */

function PrivacyAndSecurity() {
  return (
    <SettingContainer>
      <DefaultTitle>隐私与安全</DefaultTitle>
      <Box height={20} />
      <DesTitle>安全的私信 </DesTitle>
      <SmallTitle>自动扫描并删除您收到的包含不雅媒体内容的私信.</SmallTitle>
      <Box height={8} />
      <SettingBoxRadioButtonGroupView
        data={[
          {
            text: "保护我的安全",
            des: "扫描每个人的私信",
            color: "rgb(67, 181, 129)",
          },
          {
            text: "我的朋友都很好",
            des: "扫描每个人的私信，除非他们都是朋友。",
            color: "rgb(250, 166, 26)",
          },
          {
            text: "我活在生活的边缘",
            des: " 关闭此功能,不扫描任何东西,直到走向黑暗的一面",
            color: "rgb(240, 71, 71)",
          },
        ]}
        onClick={(item) => console.log(item)}
      ></SettingBoxRadioButtonGroupView>
      <Box height={40} />
      <DesTitle>服务器默认隐私设置</DesTitle>
      <Box height={4} />
      <SelectButtonGroupView
        data={[
          {
            text: "允许服务器成员直接向您发起私聊。",
            des:
              "当您加入一个新的服务器时，将应用此设置。它不适用于您现有的服务器。",
          },
        ]}
      >
        <SettingSwitchButton onChange={() => console.log("ok")} />
      </SelectButtonGroupView>
      <Box height={40} />
      <DesTitle>谁可以把您加为好友</DesTitle>
      <SelectButtonGroupView
        data={[
          {
            text: "所有人",
          },
          {
            text: "好友的好友",
          },
          {
            text: "服务器成员",
          },
        ]}
      >
        <SettingSwitchButton
          onChange={(i) => {
            console.log(i);
          }}
        />
      </SelectButtonGroupView>
      <DesTitle>我们如何使用您的数据</DesTitle>
      <SelectButtonGroupView
        data={[
          {
            text: "使用数据改善 Discord",
            des:
              "该设置可以让我们使用和处理关于您是如何使用 Discord 的相关信息，作分析用。例如，通过它我们可以使您参与新功能的测试。",
          },
          {
            text: "使用数据自定义我的 Discord 体验",
            des:
              "这项设置可以使用信息(如您平时的聊天对象和您玩的游戏)为您量身定制 Discord。",
          },
          {
            text: "服务器成员",
          },
        ]}
      >
        <SettingSwitchButton
          onChange={(i) => {
            console.log(i);
          }}
        />
      </SelectButtonGroupView>
      <Box height={20} />
      <DefaultTitle>使用数据让其正常工作</DefaultTitle>
      <Box height={20} />
      <SmallTitle>
        我们需要保存和处理一些数据来提供基础性的 Discord
        <SettingLinkButton href={"https://www.baidu.com/"}>
          关闭或删除账号
        </SettingLinkButton>
      </SmallTitle>
      <Box height={28} />
      <SettingDivider />
      <Box height={20} />
      <DefaultTitle>请求我的全部数据</DefaultTitle>
      <Box height={20} />
      <SmallTitle>
        <span>
          <SettingLinkButton href={"https://www.baidu.com/"}>
            了解更多
          </SettingLinkButton>
          关于获取数据过程
        </span>
      </SmallTitle>
      <Box height={28} />
      <SettingDefaultButton onClick={(item) => console.log(item)}>
        请求数据
      </SettingDefaultButton>
      <Box height={40} />
      <BorderTitleView
        text={
          <SmallTitle>
            快速阅读我的
            <SettingLinkButton
              type={"link"}
              href={"https://tangzijun.github.io/setting"}
            >
              服务条款
            </SettingLinkButton>
            和
            <SettingLinkButton
              type={"link"}
              href={"https://tangzijun.github.io/setting"}
            >
              隐私权政策
            </SettingLinkButton>
            吧
          </SmallTitle>
        }
      ></BorderTitleView>
    </SettingContainer>
  );
}

export { PrivacyAndSecurity };
