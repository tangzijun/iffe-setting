import React from "react";
import { DefaultTitle, SettingContainer } from "solidoc-base-component-lib";
import Box from "@material-ui/core/Box";
/**
 * @param ConnectWithUs  联系我们
 * @returns
 */

function ConnectWithUs() {
  return (
    <SettingContainer>
      <DefaultTitle>联系我们</DefaultTitle>
      <Box height={20} />
    </SettingContainer>
  );
}

export { ConnectWithUs };
