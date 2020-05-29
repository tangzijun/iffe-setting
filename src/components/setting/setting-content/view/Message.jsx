import React from "react";
import {
  SelectButtonGroupView,
  SettingSwitchButton,
  SettingContainer,
  DefaultTitle,
} from "@solidoc/setting";
import Box from "@material-ui/core/Box";

/**
 * @param Theme 通知
 * @returns
 */

function Message() {
  return (
    <SettingContainer>
      <DefaultTitle>通知</DefaultTitle>
      <Box height={20} />
      <SelectButtonGroupView
        data={[
          {
            text: "通知栏目",
          },
        ]}
      >
        <SettingSwitchButton />
      </SelectButtonGroupView>
    </SettingContainer>
  );
}

export { Message };
