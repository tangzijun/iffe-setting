import React from "react";
import {
  SelectButtonGroupView,
  SwitchButton,
  SettingContainer,
  DefaultTitle,
} from "solidoc-base-component-lib";
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
        <SwitchButton />
      </SelectButtonGroupView>
    </SettingContainer>
  );
}

export { Message };
