import React from "react";
import {
  DesTitle,
  SettingRoundRadioButtonGroupView,
  SettingContainer,
  DefaultTitle,
} from "@solidoc/setting";
import Box from "@material-ui/core/Box";

/**
 * @param Language 语言
 * @returns
 */

function Language() {
  return (
    <SettingContainer>
      <DefaultTitle>语言</DefaultTitle>
      <Box height={20} />
      <DesTitle>选择一种语言</DesTitle>
      <SettingRoundRadioButtonGroupView
        data={[
          {
            language: "English",
            country: "英语(英国)",
            icon:
              "https://discordapp.com/assets/6bf3cf5d375d7561cb3b9bf74212ed45.png",
          },
          {
            language: "中文",
            country: "简体中文(中国)",
            icon:
              "https://discordapp.com/assets/b2da62f020089ccee92860e4defafdb4.png",
          },
          {
            language: "日本語",
            country: "日语",
            icon:
              "https://discordapp.com/assets/f23c5c28c4429691f7c54af93876d661.png",
          },
        ]}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </SettingContainer>
  );
}

export { Language };
